import { useState } from 'react';
import { sendContact } from '../api';

export default function Contact() {
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', subject: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await sendContact(form);
    setStatus(resp.status);
  };

  return (
    <main>
      <div className="contact-flex">
        <div className="wide-text">
          <h2>Contact Us</h2>
          <p>
            We welcome any questions you may have about our group, the audition process, or any other related inquiries. Don’t
            hesitate to reach out! For the quickest response, we recommend contacting us through Instagram. We look forward to
            hearing from you!
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" value={form.firstname} onChange={handleChange} />
              </li>
              <li>
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" value={form.lastname} onChange={handleChange} />
              </li>
              <li>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" value={form.email} onChange={handleChange} />
              </li>
              <li>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" value={form.subject} onChange={handleChange}></textarea>
              </li>
              <li className="button">
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
          {status && <p>Sent!</p>}
        </div>
      </div>
    </main>
  );
}
