import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">UNC BCI Project</h3>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Exploring the frontiers of Brain-Computer Interfaces at the University of North Carolina.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/research" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="/product" className="text-gray-300 hover:text-white transition-colors">Product</a></li>
              <li><a href="/people" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Professor Raghav</li>
              <li>University of North Carolina</li>
              <li><a href="mailto:contact@uncbci.edu" className="text-unc hover:text-unc-light transition-colors">contact@uncbci.edu</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} UNC BCI Project. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
