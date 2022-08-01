import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact section-p" id="przesłanie">
      <div className="container">
        <div className="contact-section">
          <div className="section-title">
            <h3 className="text-brown">
              przesłanie
              <span className="text-dark"> Pana Cogito</span>
            </h3>
            <p className="text">Bądź wierny idź</p>
          </div>
        </div>
        {/* <form className="contact-form mx-auto" onSubmit={handleSubmit}>
          <div className="form-elem">
            <input
              type="text"
              value={formData.name}
              className="form-control"
              placeholder="Name"
              onChange={handleChange}
              id="name"
            />
          </div>
          <div className="form-elem">
            <input
              type="text"
              value={formData.email}
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="form-elem">
            <textarea
              rows="2"
              value={formData.message}
              className="form-control"
              placeholder="Message"
              onChange={handleChange}
              id="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-brown text-white submit-btn fw-3 fs-22"
          >
            Wyślij
          </button>
        </form> */}
        <div className="par">
          <p>Idź dokąd poszli tamci do&nbsp;ciemnego kresu</p>
          <p>po złote runo nicości twoją ostatnią nagrodę</p> <br />
          <p>idź wyprostowany wśród tych co na kolanach</p>
          <p>wśród odwróconych plecami i&nbsp;obalonych w&nbsp;proch</p> <br />
          <p>ocalałeś nie po to aby żyć</p>
          <p>masz mało czasu trzeba dać świadectwo</p> <br />
          <p>bądź odważny gdy rozum zawodzi bądź odważny</p>
          <p>w&nbsp;ostatecznym rachunku jedynie to się liczy</p> <br />
          <p>a Gniew twój bezsilny niech będzie jak morze</p>
          <p>ilekroć usłyszysz głos poniżonych i&nbsp;bitych</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
