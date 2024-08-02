import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './EResources.css';
import Resources from './Resources';
import { useNavigate } from "react-router-dom";

function EResources() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.year.toString().includes(searchQuery) ||
    book.pages.toString().includes(searchQuery)
  );
  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path);
  };

  return (
    <div className='mainContainer'>
      <div className='searchBooks'>
        <h1>E-Books</h1>
        <div className='searchHeader'>
          <p>Search Books here</p>
          <button className='toButton'onClick={() => handleNavigation('/myloft')}>MyLoft<i class="bi bi-arrow-right-short"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg></i></button>
        </div>
        <div className='searchContainer'>
          <input 
            type='text' 
            placeholder='Search...' 
            className='searchInput' 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <FontAwesomeIcon icon={faSearch} className='searchIcon' />
        </div>
        <Resources books={filteredBooks} />
      </div>
    </div>
  );
}

export default EResources;
