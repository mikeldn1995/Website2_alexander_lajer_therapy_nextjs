'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)

    // Web3Forms endpoint
    const formDataToSend = new FormData()
    formDataToSend.append('access_key', 'ca7a61ad-b455-4b79-a573-1fbcdd19c6e4')
    formDataToSend.append('subject', 'New Contact Form Submission - Alexander Lajer Therapy')
    formDataToSend.append('name', `${formData.name}`)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('phone', formData.phone || 'Not provided')
    formDataToSend.append('message', formData.message)
    formDataToSend.append('from_name', 'Alexander Lajer Therapy Website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        setShowSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        setShowError(true)
        setTimeout(() => setShowError(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setShowError(true)
      setTimeout(() => setShowError(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Layout>
      <div className="site-section">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <form onSubmit={handleSubmit} id="myForm">
                <h2 className="title is-2 heading mb-4">Contact Form</h2>

                <div className="field">
                  <label className="label" htmlFor="name">
                    Name <em>*</em>
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="email">
                    Email <em>*</em>
                  </label>
                  <div className="control">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="phone">Phone Number</label>
                  <div className="control">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input"
                      placeholder="Phone Number (optional)"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="message">
                    Message <em>*</em>
                  </label>
                  <div className="control">
                    <textarea
                      id="message"
                      name="message"
                      className="textarea"
                      placeholder="Your Message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className={`button is-primary ${isSubmitting ? 'is-loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                  </div>
                </div>

                {showSuccess && (
                  <div className="notification is-success mt-3" style={{ 
                    backgroundColor: 'rgba(52, 199, 89, 0.1)', 
                    border: '1px solid rgba(52, 199, 89, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    color: 'rgb(52, 199, 89)',
                    padding: '1rem'
                  }}>
                    ✓ Your message has been sent successfully. I'll get back to you soon!
                  </div>
                )}

                {showError && (
                  <div className="notification is-danger mt-3" style={{ 
                    backgroundColor: 'rgba(255, 59, 48, 0.1)', 
                    border: '1px solid rgba(255, 59, 48, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    color: 'rgb(255, 59, 48)',
                    padding: '1rem'
                  }}>
                    ✗ There was an error sending your message. Please try again or contact me directly at alex@alexanderlajertherapy.com
                  </div>
                )}

                <p className="mt-4" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <em>* Required fields</em>
                </p>
              </form>
            </div>

            <div className="column is-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4959.932757220836!2d-0.18725012353450438!3d51.568849871827446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b81c5713cab%3A0x4e697e6e497893e9!2sAlexander%20Lajer%20Therapy!5e0!3m2!1sen!2suk!4v1752734221820!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
