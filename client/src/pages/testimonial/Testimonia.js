import React from "react";
import testty from '../../img/testimonial.jpg'
import testty2 from '../../img/testimonial2.jpg'

const Testimonia = () => {
  return (
    <>
      {/* TESTIMONIAL*/}
      <section className="wow zoomIn testimmonial section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="testimonial-feed">
                <div
                  id="carousel-example-generic"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {/* Wrapper for slides */}
                  <div className="carousel-inner" role="listbox">
                    <div className="item active text-center">
                      <div className="image-bar">
                        <img src={testty} alt="" />
                      </div>
                      <p>
                        “Perfection is achieved, not when there’s nothing more
                        to add, but when theres is nothing left to take
                        away.Laboriosam quae qui dolorem quasi molestias illo
                        tempore optio amet, tempora deleniti. Magnam,
                        distinctio!”
                      </p>
                      <span className="pull-right"> Mark Robert</span>
                    </div>
                    <div className="item text-center">
                      <div className="image-bar">
                        <img src={testty2} alt="" />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Saepe hic deserunt, fugit animi doloribus.
                        Tempore, laboriosam. Laboriosam quae qui dolorem quasi
                        molestias illo tempore optio amet, tempora deleniti.
                        Magnam, distinctio!
                      </p>
                      <span className="pull-right"> Matt Route</span>
                    </div>
                    {/* item text-center */}
                  </div>
                  {/* carousel-inner */}
                </div>
                {/* carousel */}
              </div>
              {/* testimonial-feed */}
              <div className="control-arrow">
                <a
                  className="right carousel-control"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="next"
                >
                  <i className="flaticon-previous11" />
                </a>
                <a
                  className="left carousel-control"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
                >
                  <i className="flaticon-next15" />
                </a>
              </div>
              {/* /.control-arrow */}
            </div>
            {/* /.col-xs-12 */}
          </div>
          {/* row */}
        </div>
        {/* container */}
      </section>
      {/* testimonial */}
    </>
  );
};

export default Testimonia;
