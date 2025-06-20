import { useState } from 'react'
import Header from './components/Header';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(0);
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Header />
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Your Next Hidden Opening</h2>
        <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
        <JobList searchQuery={searchQuery} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
};

export default App
