import React from 'react';

function ThirdJumbotron() {
  return (
    <div className="jumbotron3">
      <div className="container">
        <h2>Cupcakes</h2>
        <a href="#" className="btn btn-primary view-all-button custom-button">View All</a>
        <div className="row">
          <div className="col-md-3">
            <div className="product-boxx text-center">
              <div className="circle-image">
                <img src="/images/cc1.jpg" alt="Mint Chocolate" className="rounded-circle" />
              </div>
              <h4 class="mc">Mint Chocolate</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-boxx text-center">
              <div className="circle-image">
                <img src="/images/cc2.jpg" alt="Raspberry & Vanilla" className="rounded-circle" />
              </div>
              <h4 class="rv">Raspberry & Vanilla</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-boxx text-center">
              <div className="circle-image">
                <img src="/images/cc3.jpg" alt="Peanut Butter & Jelly" className="rounded-circle" />
              </div>
              <h4 class="pbj">Peanut Butter & Jelly</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-boxx text-center">
              <div className="circle-image">
                <img src="/images/cc4.jpg" alt="Chocolate" className="rounded-circle" />
              </div>
              <h4 class="c">Chocolate</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdJumbotron;
