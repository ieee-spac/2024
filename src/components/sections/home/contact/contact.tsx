'use client';

import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      if (result.error) {
        alert('Error sending message. Please try again.');
      } else {
        alert('Message sent successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <div className="overflow-none mx-auto my-20 max-w-3xl space-y-10 px-3 md:px-8">
      <h3 className="text-primary text-5xl font-bold sm:text-6xl">Contact</h3>

      {/* Browser Container */}
      <div className="mockup-browser border-base-300 border transition-all duration-700 hover:shadow-[0_0px_15px_rgba(0,202,255,0.5)]">
        {/* Browser Toolbar */}
        <div className="mockup-browser-toolbar">
          <p className="input border-base-300 border">Get in touch :)</p>
        </div>

        {/* Form Container */}
        <form
          action=""
          onSubmit={handleSubmit}
          className="border-base-300 flex w-full flex-col items-center justify-center space-y-5 border-t px-4 py-16"
        >
          {/* Full Name */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">Full Name</span>
            </div>
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className="input input-bordered focus:input-secondary"
              onChange={handleChange}
              value={formData.fullName}
            />
          </label>

          {/* E-Mail Address */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">E-Mail Address</span>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your E-mail Address"
              className="input input-bordered focus:input-secondary"
              onChange={handleChange}
              value={formData.email}
            />
          </label>

          {/* Subject */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">Subject</span>
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input input-bordered focus:input-secondary"
              onChange={handleChange}
              value={formData.subject}
            />
          </label>

          {/* Message */}
          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text text-base">Message</span>
            </div>
            <textarea
              name="message"
              className="textarea textarea-bordered focus:input-secondary min-h-56 text-base"
              placeholder="Your Message"
              onChange={handleChange}
              value={formData.message}
            />
          </label>

          {/* Submit Button */}
          <button className="btn btn-outline btn-accent btn-wide text-base uppercase md:text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
