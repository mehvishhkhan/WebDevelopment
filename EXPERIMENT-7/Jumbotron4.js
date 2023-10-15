import React from 'react';

function FourthJumbotron() {
  return (
    <div className="jumbotron4">
      <div className="container">
        <h2>Pastries</h2>
        <a href="#" className="btn btn-primary view-all-button custom-button">View All</a>
        <div className="row">
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src="/images/p1.jpg" alt="Choux" className="rounded-circle" />
              </div>
              <h4>Choux</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src="/images/p2.jpg" alt="Puff" className="rounded-circle" />
              </div>
              <h4>Puff</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src="/images/p3.jpg" alt="Flaky" className="rounded-circle" />
              </div>
              <h4>Flaky</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src="/images/p4.jpg" alt="Shortcrust" className="rounded-circle" />
              </div>
              <h4>Short Crust</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthJumbotron;
