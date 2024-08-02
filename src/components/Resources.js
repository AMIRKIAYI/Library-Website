import React from 'react';
import './Resources.css';

function Resources({ books }) {
  return (
    <div className='eresources'>
      <table className='booksTable'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Country</th>
            <th>Language</th>
            <th>Year</th>
            <th>Pages</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.country}</td>
              <td>{book.language}</td>
              <td>{book.year}</td>
              <td>{book.pages}</td>
              <td><a href={book.link} target='_blank' rel='noopener noreferrer'>Read</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Resources;
