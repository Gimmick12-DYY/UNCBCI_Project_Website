'use client';
import React, { useEffect, useState } from 'react';

type Person = { id: string; name: string; role: string };
type NewsItem = {
  id: string;
  title: string;
  date: string;
  summary?: string;
  peopleIds?: string[];
  status: 'draft' | 'published';
};
type Toast = { message: string; type: 'success' | 'error' };

export default function AdminPage() {
  const [people, setPeople] = useState<Person[]>([]);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('published');
  const [selectedPeopleIds, setSelectedPeopleIds] = useState<string[]>([]);

  useEffect(() => {
    Promise.all([
      fetch('/api/news?all=true').then(r => r.json()),
      fetch('/api/people').then(r => r.json()),
    ])
      .then(([newsData, peopleData]) => {
        setNewsItems(newsData);
        setPeople(peopleData);
        setLoading(false);
      })
      .catch(() => {
        setToast({ message: 'Failed to load data', type: 'error' });
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  const resetForm = () => {
    setEditingId(null);
    setTitle('');
    setSummary('');
    setStatus('published');
    setSelectedPeopleIds([]);
  };

  const handleEdit = (item: NewsItem) => {
    setEditingId(item.id);
    setTitle(item.title);
    setSummary(item.summary || '');
    setStatus(item.status);
    setSelectedPeopleIds(item.peopleIds || []);
    document.getElementById('editor-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this update?')) return;
    try {
      const res = await fetch(`/api/news/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        throw new Error(errBody.error || `Delete failed (${res.status})`);
      }
      setNewsItems(prev => prev.filter(item => item.id !== id));
      if (editingId === id) resetForm();
      setToast({ message: 'Update deleted successfully', type: 'success' });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to delete update';
      setToast({ message: msg, type: 'error' });
    }
  };

  const handleSubmit = async () => {
    if (!title.trim()) return;
    setSaving(true);
    try {
      if (editingId) {
        const res = await fetch(`/api/news/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, summary, peopleIds: selectedPeopleIds, status }),
        });
        if (!res.ok) {
          const errBody = await res.json().catch(() => ({}));
          throw new Error(errBody.error || `Update failed (${res.status})`);
        }
        const updated = await res.json();
        setNewsItems(prev => prev.map(item => (item.id === editingId ? updated : item)));
        setToast({ message: 'Update saved successfully', type: 'success' });
      } else {
        const res = await fetch('/api/news', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, summary, peopleIds: selectedPeopleIds, status }),
        });
        if (!res.ok) {
          const errBody = await res.json().catch(() => ({}));
          throw new Error(errBody.error || `Create failed (${res.status})`);
        }
        const created = await res.json();
        setNewsItems(prev => [created, ...prev]);
        setToast({
          message: status === 'published' ? 'Update published!' : 'Draft saved!',
          type: 'success',
        });
      }
      resetForm();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setToast({ message: msg, type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleTogglePerson = (id: string) => {
    setSelectedPeopleIds(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id],
    );
  };

  const selectedPeople = people.filter(p => selectedPeopleIds.includes(p.id));
  const sortedNews = [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto flex items-center justify-center py-32">
        <div className="animate-spin w-8 h-8 border-2 border-unc/30 border-t-unc rounded-full" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-lg border font-mono text-sm transition-all ${
            toast.type === 'success'
              ? 'bg-green-500/10 border-green-500/30 text-green-400'
              : 'bg-red-500/10 border-red-500/30 text-red-400'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs opacity-60">{toast.type === 'success' ? '[OK]' : '[ERR]'}</span>
            {toast.message}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="border-b border-white/5 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-unc/60 animate-pulse"></div>
          <p className="font-mono text-xs text-unc/50 tracking-widest uppercase">// admin</p>
        </div>
        <h1 className="text-3xl font-bold text-gray-100">Admin Dashboard</h1>
        <p className="text-gray-500 mt-2 text-sm">Manage project updates and content.</p>
      </div>

      {/* Existing Updates */}
      <section>
        <h2 className="font-mono text-sm font-semibold text-gray-300 mb-4 flex items-center gap-2 uppercase tracking-wider">
          <svg className="w-4 h-4 text-unc/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          all_updates ({newsItems.length})
        </h2>

        {sortedNews.length === 0 ? (
          <div className="card-dark p-8 text-center text-gray-500 font-mono text-sm">
            No updates yet. Create your first one below.
          </div>
        ) : (
          <div className="card-dark overflow-hidden divide-y divide-white/5">
            {sortedNews.map(item => (
              <div
                key={item.id}
                className={`p-4 md:p-5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors ${
                  editingId === item.id ? 'bg-unc/5 border-l-2 border-l-unc/50' : ''
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-200 truncate text-sm">{item.title}</h3>
                    <span
                      className={`flex-shrink-0 px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider ${
                        item.status === 'published'
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-gray-600 flex items-center gap-3">
                    <span>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    {item.peopleIds && item.peopleIds.length > 0 && (
                      <span className="flex items-center gap-1 text-gray-600">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {item.peopleIds.length}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 text-gray-600 hover:text-unc hover:bg-unc/5 rounded-md transition-colors"
                    title="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-gray-600 hover:text-red-400 hover:bg-red-500/5 rounded-md transition-colors"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Editor + Preview */}
      <div id="editor-section" className="grid gap-8 lg:grid-cols-2">
        {/* Editor Column */}
        <div className="space-y-6 card-dark p-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-unc/10 border border-unc/20 flex items-center justify-center text-unc/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-gray-200">
                {editingId ? 'Edit Update' : 'Create New Update'}
              </h2>
            </div>
            {editingId && (
              <button
                onClick={resetForm}
                className="font-mono text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                [cancel]
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block font-mono text-xs font-medium text-gray-400 uppercase tracking-wider">title</label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-1 focus:ring-unc/30 focus:border-unc/30 transition-all outline-none text-gray-200 placeholder:text-gray-600 text-sm"
                placeholder="e.g. Breakthrough in neural signal decoding"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs font-medium text-gray-400 uppercase tracking-wider">summary</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-1 focus:ring-unc/30 focus:border-unc/30 transition-all outline-none text-gray-200 placeholder:text-gray-600 min-h-[120px] resize-y text-sm"
                placeholder="Provide a brief summary of the update..."
                value={summary}
                onChange={e => setSummary(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs font-medium text-gray-400 uppercase tracking-wider">status</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStatus('published')}
                  className={`px-4 py-2 rounded-md font-mono text-xs font-medium transition-all ${
                    status === 'published'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                      : 'bg-white/5 text-gray-500 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  published
                </button>
                <button
                  type="button"
                  onClick={() => setStatus('draft')}
                  className={`px-4 py-2 rounded-md font-mono text-xs font-medium transition-all ${
                    status === 'draft'
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                      : 'bg-white/5 text-gray-500 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  draft
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-mono text-xs font-medium text-gray-400 uppercase tracking-wider">
                team_members
              </label>
              <div className="max-h-64 overflow-y-auto border border-white/10 rounded-lg bg-white/[0.02] p-2 space-y-1">
                {people.map(p => (
                  <label
                    key={p.id}
                    className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all hover:bg-white/5 border border-transparent ${
                      selectedPeopleIds.includes(p.id)
                        ? 'bg-unc/5 border-unc/20'
                        : ''
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors border ${
                        selectedPeopleIds.includes(p.id)
                          ? 'bg-unc border-unc text-white'
                          : 'bg-transparent border-gray-600 text-transparent'
                      }`}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedPeopleIds.includes(p.id)}
                      onChange={() => handleTogglePerson(p.id)}
                    />
                    <div className="flex-1">
                      <div className="text-sm text-gray-300">{p.name}</div>
                      <div className="font-mono text-[10px] text-gray-600">{p.role}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Preview Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-gray-200">Live Preview</h2>
          </div>

          <div className="card-dark overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="tag-mono bg-unc/10 px-2.5 py-1 rounded border border-unc/20">
                  news_update
                </span>
                <span className="font-mono text-xs text-gray-600">{new Date().toLocaleDateString()}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-100 mb-4 leading-tight">
                {title || <span className="text-gray-700 italic font-normal">Title will appear here...</span>}
              </h3>

              <div className="text-sm text-gray-400 mb-6 leading-relaxed">
                {summary || (
                  <span className="text-gray-700 italic">Summary details will appear here...</span>
                )}
              </div>

              {selectedPeople.length > 0 && (
                <div className="border-t border-white/5 pt-6">
                  <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-3">
                    // associated researchers
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedPeople.map(p => (
                      <div
                        key={p.id}
                        className="flex items-center gap-2 pr-3 py-1 pl-1.5 rounded-md bg-white/5 border border-white/10"
                      >
                        <div className="w-5 h-5 rounded bg-white/10 flex-shrink-0" />
                        <span className="text-xs text-gray-400">{p.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white/[0.02] px-8 py-4 border-t border-white/5 flex justify-between items-center">
              <span className="font-mono text-[10px] text-gray-600">
                status:{' '}
                <span className={status === 'published' ? 'text-green-400' : 'text-orange-400'}>
                  {status}
                </span>
              </span>
              <button
                className="bg-unc/10 text-unc border border-unc/20 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-unc/20 hover:border-unc/40 hover:shadow-glow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed transform active:scale-95"
                disabled={!title.trim() || saving}
                onClick={handleSubmit}
              >
                {saving
                  ? 'Saving...'
                  : editingId
                    ? 'Save Changes'
                    : status === 'published'
                      ? 'Publish Update'
                      : 'Save Draft'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
