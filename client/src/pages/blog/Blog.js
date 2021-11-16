import React from "react";
import blog1 from '../../img/blog1.jpg'
import blog2 from '../../img/blog2.jpg'
import blog3 from '../../img/blog3.jpg'

const blog = () => {
  return (
    <>
      <section id="blog" className="blog-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="wow zoomIn col-xs-12 text-center p-padding">
              <h1 className="section-title">BLOG</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                accumsan venenatis lectus sed sollicitudin. Duis in odio ex. Sed
                elementum varius enim. In vel tincidunt lorem. Donec gravida
                felis vitae ipsum pharetra maximus.
              </p>
            </div>
            {/* col-xs-12 */}
            <div className="wow zoomIn col-xs-12 col-md-4">
              <img className="img-responsive" src={blog1} alt="" />
              <div className="blog-date-wrapper">
                <span className="floatleft">
                  <i className="fa fa-calendar" /> 01th june 2015
                </span>
                <span className="floatright">
                  <i className="fa fa-thumbs-o-up" /> 30
                </span>
                <span className="floatright">
                  <i className="fa fa-comments" /> 25{" "}
                </span>
                <span className="clearboth"> &nbsp; </span>
              </div>
              <div className="blog-container">
                <h2>
                  <a href="blog-sidebar.html" target="_blank">
                    The Green Fields of Spring
                  </a>
                </h2>
                <p>
                  Tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam
                </p>
                <a className="custom-button" href="blog-sidebar.html">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="wow zoomIn col-xs-12 col-md-4">
              <img className="img-responsive" src={blog2} alt="" />
              <div className="blog-date-wrapper">
                <span className="floatleft">
                  <i className="fa fa-calendar" /> 01th june 2015
                </span>
                <span className="floatright">
                  <i className="fa fa-thumbs-o-up" /> 30
                </span>
                <span className="floatright">
                  <i className="fa fa-comments" /> 25{" "}
                </span>
                <span className="clearboth"> &nbsp; </span>
              </div>
              <div className="blog-container">
                <h2>
                  <a href="blog-sidebar.html" target="_blank">
                    {" "}
                    10 Things you Need to Know
                  </a>
                </h2>
                <p>
                  Tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam
                </p>
                <a className="custom-button" href="blog-sidebar.html">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="wow zoomIn col-xs-12 col-md-4">
              <img className="img-responsive" src={blog3} alt="" />
              <div className="blog-date-wrapper">
                <span className="floatleft">
                  <i className="fa fa-calendar" /> 01th june 2015
                </span>
                <span className="floatright">
                  <i className="fa fa-thumbs-o-up" /> 30
                </span>
                <span className="floatright">
                  <i className="fa fa-comments" /> 25{" "}
                </span>
                <span className="clearboth"> &nbsp; </span>
              </div>
              <div className="blog-container">
                <h2>
                  <a href="blog-sidebar.html" target="_blank">
                    The Secret Trick to Achieve
                  </a>
                </h2>
                <p>
                  Tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam
                </p>
                <a className="custom-button" href="blog-sidebar.html">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="more-area">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="pull-left">
                  techgut- Premium One Page corporate layout
                </h2>
                <button type="button" className="btn btn-success pull-right">
                  see More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default blog;
