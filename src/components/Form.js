import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./Form.css";
import Librarian from '../assets/images/Librarian.png';
import Address from '../assets/images/Address.png';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleReadMore = () => {
    setShowMessage(true);
  };

  return (
    <div className='form'>
      <div className='form__container'>
        {!showMessage && (
          <>
            <div className='formContainer'>
              <div className='formContainerTitle'>
                <h1>Ask Librarian</h1>
              </div>
              <p>Send us your inquiry and librarian will get back to you via email as soon as possible.</p>
              <form onSubmit={handleSubmit}>
                <div className='field'>
                  <label>Name:</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className='field'>
                  <label>Email:</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className='field'>
                  <label>Subject:</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className='field'>
                  <label>Message:</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button className='formButton' type="submit">Send</button>
              </form>
            </div>
            <div className='inform'><img src={Address} alt="address logo" /></div>
          </>
        )}
        <div className={`messageContainer ${showMessage ? 'expanded' : ''}`}>
          <img src={Librarian} alt="Library Renovation" />
          {!showMessage ? (
            <div className='paramessage'>
              <p className="roboto-black">It gives me great pleasure to welcome you to Garissa University Library. The University Library is your gateway to information resources that will inspire and facilitate your research and study across all disciplines...</p>
              <button type="button" className="btn btn-primary" onClick={handleReadMore}>Read More</button>
            </div>
          ) : (
            <div className='librarianMessage'>
              <h2>Message from the Librarian</h2>
              <p><strong>Dr Iddi Juma (PhD), University Librarian</strong></p>
              <p>
                It gives me great pleasure to welcome you to Garissa University Library. The University Library is your gateway to information resources that will inspire and facilitate your research and study across all disciplines.
              </p>
              <p>
                The Library’s services and collections are entirely dedicated to support the University community of faculty, researchers, students, and staff. We provide the opportunity for students and researchers to request the use of its extensive catalog of both physical and digital books and journals.
              </p>
              <p>
                Our Library offers excellent internet connectivity and efficient online access to its rich e-resources and digital content through an advanced set of information and communication technology-based facilities.
              </p>
              <p>
                The Library’s patrons have a wide variety of access routes to conduct expert research and retrieve relevant resources. Our library contains a hybrid collection of printed course-related book materials, and other e-resources such as e-journals, e-books, electronic theses & dissertations and technical reports of research organizations. The Library stays committed to obtaining unavailable requested materials from the book suppliers and inter-library exchanges.
              </p>
              <p>
                Our library staff are pleased to offer their expertise in answering your inquiries about any library-related issues. The Library website also provides informative guidelines and answers to most of your frequently asked questions (FAQs).
              </p>
              <p>
                We look forward to serving you and welcome your comments and suggestions.
              </p>
              <p>Best wishes,</p>
              <p><strong>Dr Iddi Juma (PhD)</strong><br />University Librarian</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Form;
