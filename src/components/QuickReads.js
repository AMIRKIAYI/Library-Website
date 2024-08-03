import React, { useEffect, useState } from 'react';
import BorrowForm from './BorrowForm';
import './QuickReads.css';

function QuickReads() {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/items') /////GET data
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleBorrowClick = (item) => {
    setSelectedBook(item);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedBook(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data.bookTitle = selectedBook.title;
    data.bookAuthor = selectedBook.author;
    data.bookPages = selectedBook.pages;

    // Handle form submission logic here, e.g., sending data to a server
    console.log("Form submitted:", data);
    handleCloseForm();
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='containerCard'>
      <div className='mainCard'>
        <h1>Quick Reads</h1> 
        <div className='searchContainer1'>
          <p className='searchParagraph1'>Search the book here:</p>
          <input 
            type="text" 
            placeholder="Search by title or author..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
            className="searchInput1" 
          />
        </div>
        <div className='cardContainer'>
          {filteredItems.map((item, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={item.imageLink} alt={item.title} className='cardImage' />
                </div>
                <div className="flip-card-back arbutus-regular">
                  <h1>{item.title}</h1>
                  <p>{item.author}</p>
                  <p>{item.pages} pages</p>
                  <button className='cardButton' onClick={() => handleBorrowClick(item)}>Borrow</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <BorrowForm 
          selectedBook={selectedBook} 
          handleCloseForm={handleCloseForm} 
          handleSubmit={handleSubmit} 
        />
      )}
    </div>
  );
}

export default QuickReads;
