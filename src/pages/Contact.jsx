import React, { useState } from 'react';
import '../styles/pages/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Company: ${formData.company || 'Not provided'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:info@innosecure.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
    
    alert('Thank you for contacting us! Your email client should open shortly.');
  };

  const getCountryImage = (country) => {
    const imageMap = {
      'UK': 'uk.jpg',
      'USA': 'us.jpg',
      'India': 'india.jpg',
      'UAE': 'uae.jpg',
      'Singapore': 'singapore.jpg',
      'Canada': 'canada.jpg'
    };
    return `/img/${imageMap[country] || 'us.jpg'}`;
  };

  const locations = [
    { country: 'USA', city: 'Wyoming' },
    { country: 'UK', city: 'London' },
    { country: 'India', city: 'Indore' },
    { country: 'UAE', city: 'Dubai' },
    { country: 'Singapore', city: 'Singapore' },
    { country: 'Canada', city: 'Toronto' }
  ];

  return (
    <div className="contact">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Innosecure</h1>
          <p className="page-subtitle">
            Your tech transformation is just a message away — connect with us, India's trusted innovation partner!
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Transformation never plays solo. Team up with a full-stack technology partner.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <h3>USA Phone</h3>
                    <a href="tel:+17732318084">(773) 231-8084</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">📞</span>
                  <div>
                    <h3>India Phone</h3>
                    <a href="tel:+918223083773">+91 8223083773</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">📧</span>
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:info@innosecure.com">info@innosecure.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">🏢</span>
                  <div>
                    <h3>USA Address</h3>
                    <p>
                      1021 E Lincolnway, Suite #6810
                      <br />
                      Cheyenne, Wyoming 82001
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <span className="icon">🏢</span>
                  <div>
                    <h3>India Address</h3>
                    <p>
                      1121, 1st Floor, Indore
                      <br />
                      Indore 452010
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Query *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-presence">
        <div className="container">
          <h2 className="section-title">Global Presence</h2>
          <p className="section-subtitle">We're here to serve you around the world</p>
          
          <div className="locations-grid">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="location-card"
                style={{
                  '--country-image': `url(${getCountryImage(location.country)})`
                }}
              >
                <h3>{location.country}</h3>
                <p>{location.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

