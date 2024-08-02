import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./BorrowForm.css";

function BorrowForm({ selectedBook, handleCloseForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateTaken: '',
    dateReturn: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      author: selectedBook.author,
      BookTitle: selectedBook.title,
      name: formData.name,
      email: formData.email,
      dateTaken: formData.dateTaken,
      returnDate: formData.dateReturn,
      pages: selectedBook.pages
    };

    fetch('http://localhost:3000/details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSubmit)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      handleCloseForm(); // Close the form😃😃😃😃😃
      navigate('/quickreads'); // Redirect to Quick Reads page😆😆😆😆😆😆😆😆
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='borrowFormContainer'>
      <form className='borrowForm' onSubmit={handleSubmit}>
        <h2>Borrow Book</h2>
        <div className='formGroup'>
          <label htmlFor='title'>Book Title:</label>
          <input type='text' id='title' value={selectedBook.title} readOnly />
        </div>
        <div className='formGroup'>
          <label htmlFor='author'>Author:</label>
          <input type='text' id='author' value={selectedBook.author} readOnly />
        </div>
        <div className='formGroup'>
          <label htmlFor='pages'>Pages:</label>
          <input type='text' id='pages' value={selectedBook.pages} readOnly />
        </div>
        <div className='formGroup'>
          <label htmlFor='name'>Your Name:</label>
          <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required />
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Your Email:</label>
          <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className='formGroup'>
          <label htmlFor='dateTaken'>Date Taken:</label>
          <input type='date' id='dateTaken' name='dateTaken' value={formData.dateTaken} onChange={handleChange} required />
        </div>
        <div className='formGroup'>
          <label htmlFor='dateReturn'>Date to be Returned:</label>
          <input type='date' id='dateReturn' name='dateReturn' value={formData.dateReturn} onChange={handleChange} required />
        </div>
        <button className='formButton' type='submit'>Submit</button>
        <button className='formButton' type='button' onClick={handleCloseForm}>Cancel</button>
      </form>
    </div>
  );
}

export default BorrowForm;
