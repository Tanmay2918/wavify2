
import React, { useState } from 'react';

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));

    setSuccess('');
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your feedback';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must contain at least 10 characters';
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSuccess('');
      return;
    }

    setSuccess('Thank you! Your feedback has been submitted.');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setErrors({});
  }

  // Reusable input fields inside the same component
  function renderInput(label, name, type = 'text', placeholder = '') {
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>

        <input
          id={name}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
        />

        {errors[name] && (
          <p id={`${name}-error`} className="form-error">
            {errors[name]}
          </p>
        )}
      </div>
    );
  }

  return (
    <section className="view-section active feedback-page">
      <div className="feedback-container">
        <div className="feedback-heading">
          <span className="feedback-eyebrow">
            WE VALUE YOUR VOICE
          </span>

          <h1>Let's talk music.</h1>

          <p>
            Share your thoughts, report an issue, or suggest
            what you'd love to see on Wavify.
          </p>
        </div>

        <form
          className="feedback-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {renderInput(
            'Full Name',
            'name',
            'text',
            'Enter your name'
          )}

          {renderInput(
            'Email Address',
            'email',
            'email',
            'you@example.com'
          )}

          {renderInput(
            'Subject',
            'subject',
            'text',
            'What is this about?'
          )}

          <div className="form-group">
            <label htmlFor="message">Your Message</label>

            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you think..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? 'message-error' : undefined
              }
            />

            {errors.message && (
              <p id="message-error" className="form-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="feedback-submit">
            Send Feedback →
          </button>

          {success && (
            <p className="form-success" role="status">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default FeedbackPage;
