import React from 'react';

function SecondJumbotron() {
  return (
    <div className="jumbotron2">
      <div className="container">
        <h2>Regular Cakes</h2>
        <a href="#" className="btn btn-primary view-all-button custom-button">View All</a>
        <div className="row">
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src='/images/c1.png' alt="Vanilla Cake" className="rounded-circle" />
              </div>
              <h4 class="vc">Vanilla Cakes</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src='/images/c2.png' alt="Chocolate Cake" className="rounded-circle" />
              </div>
              <h4 class="cc">Chocolate Cakes</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src='/images/c3.png' alt="Pineapple Cake" className="rounded-circle" />
              </div>
              <h4 class="pc">Pineapple Cakes</h4>
            </div>
          </div>
          <div className="col-md-3">
            <div className="product-box text-center">
              <div className="circle-image">
                <img src='/images/c4.png' alt="Red Velvet Cake" className="rounded-circle" />
              </div>
              <h4 class="rv">Red Velvet</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondJumbotron;
