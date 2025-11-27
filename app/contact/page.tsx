'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'

export default function Contact() {
  const [formData, setFormData] = useState({
    Name_First: '',
    Name_Last: '',
    Email: '',
    PhoneNumber: '',
    MultiLine: '',
    Radio: '',
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, Radio: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value)
    })

    try {
      const response = await fetch('https://usebasin.com/f/a854e413b64f', {
        method: 'POST',
        body: form,
      })

      if (response.ok) {
        setShowSuccess(true)
        setFormData({
          Name_First: '',
          Name_Last: '',
          Email: '',
          PhoneNumber: '',
          MultiLine: '',
          Radio: '',
        })
        setTimeout(() => setShowSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
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
                  <label className="label" htmlFor="firstName">First Name</label>
                  <div className="control">
                    <input
                      type="text"
                      id="firstName"
                      name="Name_First"
                      className="input"
                      placeholder="First Name"
                      value={formData.Name_First}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="lastName">Last Name</label>
                  <div className="control">
                    <input
                      type="text"
                      id="lastName"
                      name="Name_Last"
                      className="input"
                      placeholder="Last Name"
                      value={formData.Name_Last}
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
                      name="Email"
                      className="input"
                      placeholder="Your Email"
                      required
                      value={formData.Email}
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
                      name="PhoneNumber"
                      className="input"
                      placeholder="Phone Number"
                      value={formData.PhoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor="message">Message</label>
                  <div className="control">
                    <textarea
                      id="message"
                      name="MultiLine"
                      className="textarea"
                      placeholder="Message"
                      rows={6}
                      value={formData.MultiLine}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">
                    Consent <em>*</em>
                  </label>
                  <div className="control">
                    <label className="radio">
                      <input
                        type="radio"
                        id="Radio_1"
                        name="Radio"
                        value="By submitting this form, I agree to be contacted and accept the Terms & Conditions."
                        required
                        checked={formData.Radio === 'By submitting this form, I agree to be contacted and accept the Terms & Conditions.'}
                        onChange={handleRadioChange}
                      />
                      {' '}
                      By submitting this form, I agree to be contacted and accept the Terms & Conditions.
                    </label>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button
                      type="submit"
                      className={`button is-primary ${isSubmitting ? 'is-loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </div>
                </div>

                {showSuccess && (
                  <div className="notification is-success mt-3" style={{ 
                    backgroundColor: 'rgba(52, 199, 89, 0.1)', 
                    border: '1px solid rgba(52, 199, 89, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    color: 'rgb(52, 199, 89)'
                  }}>
                    Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            <div className="column is-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4959.932757220836!2d-0.18725012353450438!3d51.568849871827446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b81c5713cab%3A0x4e697e6e497893e9!2sAlexander%20Lajer%20Therapy!5e0!3m2!1sen!2suk!4v1752734221820!5m2!1sen!2suk"
                width="100%"
                height="400"
                style={{ border: 0 }}
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

