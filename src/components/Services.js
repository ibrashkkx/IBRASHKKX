import React from 'react';

function Services() {
  return (
    <section className="services common-section common-section--dark">
      <div className="container">
        <div className="title-wrapper">
          <h3 className="title">services</h3>
          <p className="subtitle">This is some text inside of a div block.</p>
        </div>
        <div className="cards-wrapper">
          <div className="card">
            <img src="img/services1.jpg" alt="img" />
            <h4>SERVICES one</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            <a href="#!" className="link">Learn more</a>
          </div>
          <div className="card">
            <img src="img/services2.jpg" alt="img" />
            <h4>SERVICES two</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            <a href="#!" className="link">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
