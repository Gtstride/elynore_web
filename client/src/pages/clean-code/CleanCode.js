import React from "react";

const CleanCode = () => {
  return (
    <div>
        <section id="clean" className="clean-idea section-padding">
          <div className="container">
            <div className="row">
              <div className="wow zoomIn col-xs-12 text-center p-padding">
                <h1 className="section-title">clean idea and unique design</h1>
                <p>
                  A designer knows he has achieved perfection not when there is
                  nothingleft to add, but when there is nothing left to take
                  away.
                </p>
                <div className="button-set">
                  <button type="button" className="btn btn-danger">
                    <i className="fa fa-link" />
                    Read More
                  </button>
                  <a href="#contact" className="page-scroll contact-us">
                    <i className="fa fa-phone" />
                    Contact Us
                  </a>
                </div>
                {/* /.button-set */}
              </div>
              {/* col-xs-12 */}
            </div>
            {/* row*/}
          </div>
          {/* container */}
        </section>
    </div>
  );
};

export default CleanCode;
