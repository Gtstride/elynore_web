import React from "react";
import p1 from "../../img/partner1.jpg";
import p2 from "../../img/partner2.jpg";
import p3 from "../../img/partner3.jpg";
import p4 from "../../img/partner4.jpg";
import p5 from "../../img/partner5.jpg";

const Partners = () => {
  return (
      <section className="partner-wrapper">
        <div className="container">
          <div className="row">
            <div className="wow zoomIn col-sm-12">
              <div className="owl-wrap">
                <div id="owl-example" className="owl-carousel">
                  <div className="feature-image"><img className="img-responsive" src={p1} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p2} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p3} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p4} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p5} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p1} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p2} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p3} alt="" /></div>
                  <div className="feature-image"><img className="img-responsive" src={p4} alt="" /></div>
                </div>
                {/* /.owl-carousel */}
              </div>
              {/* /.owl-wrap */}
            </div>
            {/* /.col-sm-12 */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </section>
  );
};

export default Partners;
