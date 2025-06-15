import { useState } from 'react'
import Header from './components/Header';
import JobList from './components/JobList';

function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Header />
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-3x1 font-bold text-gray-800 mb-6">Find Your Next Hidden Opening</h2>
        <JobList />
      </main>
    </div>
  );
};

export default App
