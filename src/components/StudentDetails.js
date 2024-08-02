import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDetails.css'; 

function StudentDetails() {
  const [details, setDetails] = useState([]);
  const [returnedBooks, setReturnedBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: '',
    imageLink: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/details')
      .then(response => response.json())
      .then(data => {
        const storedReturnedBooks = JSON.parse(localStorage.getItem('returnedBooks')) || [];
        setReturnedBooks(storedReturnedBooks);

        const processedRows = JSON.parse(localStorage.getItem('processedRows')) || [];
        const updatedDetails = data.map((item) => ({
          ...item,
          isProcessed: processedRows.includes(item.BookTitle)
        }));
        setDetails(updatedDetails);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleRowClick = (index) => {
    if (details[index].isProcessed) return;

    const updatedDetails = [...details];
    const clickedBook = updatedDetails[index];

    updatedDetails[index] = { ...clickedBook, isProcessed: true };
    setDetails(updatedDetails);

    const processedRows = updatedDetails
      .filter(detail => detail.isProcessed)
      .map(detail => detail.BookTitle);
    localStorage.setItem('processedRows', JSON.stringify(processedRows));

    const newReturnedBooks = [...returnedBooks, {
      BookTitle: clickedBook.BookTitle,
      returnDate: clickedBook.returnDate
    }];
    setReturnedBooks(newReturnedBooks);
    localStorage.setItem('returnedBooks', JSON.stringify(newReturnedBooks));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        navigate('/quickreads');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className='tabl'>
      <h1>Student Details</h1>
      {details.length > 0 ? (
        <>
          <table className="detailsTable">
            <thead>
              <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date Taken</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {details.map((detail, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(index)}
                  style={{ textDecoration: detail.isProcessed ? 'line-through' : 'none' }}
                >
                  <td>{detail.BookTitle}</td>
                  <td>{detail.author}</td>
                  <td>{detail.pages}</td>
                  <td>{detail.name}</td>
                  <td>{detail.email}</td>
                  <td>{detail.dateTaken}</td>
                  <td>{detail.returnDate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {returnedBooks.length > 0 && (
            <>
              <h2>Returned Books</h2>
              <table className="detailsTable2">
                <thead>
                  <tr>
                    <th>Book Title</th>
                    <th>Return Date</th>
                  </tr>
                </thead>
                <tbody>
                  {returnedBooks.map((book, index) => (
                    <tr key={index}>
                      <td>{book.BookTitle}</td>
                      <td>{book.returnDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </>
      ) : (
        <p>No borrowed books found.</p>
      )}
      <div className='quickform'>
      <h2>Add Book to Quick Reads</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pages">Pages:</label>
          <input
            type="number"
            id="pages"
            name="pages"
            value={formData.pages}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="imageLink">Image Link:</label>
          <input
            type="text"
            id="imageLink"
            name="imageLink"
            value={formData.imageLink}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add to Quick Reads</button>
      </form>
      </div>
    </div>
  );
}

export default StudentDetails;
