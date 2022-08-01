import React, { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    <div className="newsletter section-p">
      <div className="container">
        <div className="newsletter-content">
          <div className="section-title">
            <h3 className="text-brown">
              Sprawozdanie <span className="text-white">z&nbsp;raju</span>
            </h3>
          </div>
          {/* <form className="newsletter-form mx-auto" onSubmit={handleSubmit}>
            <div className="form-elem">
              <input
                type="text"
                value={formData.name}
                className="form-control"
                placeholder="Imię i nazwisko"
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
            <button
              type="submit"
              className="bg-brown text-white submit-btn fw-3 fs-22"
            >
              Wyślij
            </button>
          </form> */}
          <div className="par">
            <p>Boga oglądają nieliczni</p>
            <p>jest tylko dla tych z&nbsp;czystej pneumy</p>
            <p>reszta słucha komunikatów o&nbsp;cudach i&nbsp;potopach</p>
            <p>z&nbsp;czasem wszyscy będą oglądali Boga</p>
            <p>kiedy to nastąpi nikt nie wie</p>
            <p>Na razie w&nbsp;sobotę o&nbsp;dwunastej w&nbsp;południe</p>
            <p>syreny ryczą słodko</p>
            <p>i&nbsp;z&nbsp;fabryk wychodzą niebiescy proletariusze</p>
            <p>pod pachą niosą niezgrabnie swe skrzydła jak skrzypce</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
