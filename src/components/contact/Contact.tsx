import axios from 'axios';
import React ,{ useState} from 'react';
import { FaRegAddressCard, FaRegEnvelope,  FaRegMap } from "react-icons/fa";
import './contact.css';



const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const  name = e.target.name;
      const  value  = e.target.value;
      setForm({...form, [name]: value});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      axios.post('https://sheet.best/api/sheets/e5f79eff-5b5b-4b9d-af7b-f73a31423fed', form).then((response) => {console.log(response)
      setForm({ name: '', email: '', subject: '', message: ''})});
    }
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Me</h2>
        <p className="section__subtitle">
            Reach <span> me out!</span>
        </p>

        <div className="contact__container container grid">
          <div className="contact__content">
            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegMap />
              </span>

              <h3 className="contact__card-title">Address</h3>
              <p className="contact__card-data">Bangkok, Thailand</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegEnvelope />
              </span>

              <h3 className="contact__card-title">Email</h3>
              <p className="contact__card-data">singhsuwan3.1@gmail.com</p>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">
                <FaRegAddressCard />
              </span>

              <h3 className="contact__card-title">Phone</h3>
              <p className="contact__card-data">087-771-7817</p>
            </div>

            

          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group grid">

              <div className="contact__form-div">
                <label className="contact__form-tag text-cs"> Your Name <b>*</b></label>
                <input type="text" name='name' onChange={handleChange} value={form.name} className="contact__form-input" />
              </div>
              
              <div className="contact__form-div">
                <label className="contact__form-tag text-cs"> Your Email <b>*</b></label>
                <input type="email" name='email' onChange={handleChange} value={form.email}className="contact__form-input" />
              </div>

            </div>
            <div className="contact__form-div">
                <label className="contact__form-tag text-cs"> Your Subject <b>*</b></label>
                <input type="text" name='subject' onChange={handleChange} value={form.subject} className="contact__form-input" />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag text-cs"> Your Message <b>*</b></label>
                <input type='textarea' name='message' onChange={handleChange} value={form.message}className='contact__form-input'></input>
              </div>
              <div className="contact__submit">
                <p> *Accept the terms and conditions.</p>
                <button type='submit' className='btn text-cs'> Send Message</button>
              </div>
          </form>
        </div>
    </section>
  )
}

export default Contact