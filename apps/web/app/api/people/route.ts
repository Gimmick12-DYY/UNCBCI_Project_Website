import { NextResponse } from 'next/server';
import people from '../../../data/people.json';

export function GET() {
  return NextResponse.json(people);
}


