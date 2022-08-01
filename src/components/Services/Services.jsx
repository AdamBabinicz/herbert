import React from "react";
import "./Services.css";
import { services } from "../../constants/data";

const Services = () => {
  return (
    <div className="services section-p" id="piosenki">
      <div className="container">
        <div className="services-content">
          <div className="section-title">
            <h3 className="text-brown">
              HERBERT <span className="text-dark">w&nbsp;piosenkach</span>
            </h3>
            <p className="text">Zaśpiewać Herberta nie jest łatwo.</p>
          </div>

          <div className="services-list grid">
            {services.map((service, index) => {
              return (
                <div className="services-item text-center" key={index}>
                  <div className="services-item-img">
                    <img src={service.image} className="mx-auto" alt="..." />
                  </div>
                  <div className="services-item-text">
                    <h4 className="fs-16 fw-5 op-08">
                      <b>{service.title}</b>
                    </h4>
                    <p className="text mx-auto">{service.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
