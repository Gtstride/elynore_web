import React from "react";
import portfolio01 from "../../img/portfolio01.jpg";
import portfolio02 from "../../img/portfolio02.jpg";
import portfolio03 from "../../img/portfolio03.jpg";
import portfolio04 from "../../img/portfolio04.jpg";
import portfolio05 from "../../img/portfolio05.jpg";
import portfolio06 from "../../img/portfolio05.jpg";
import portfolio07 from "../../img/portfolio07.jpg";
import portfolio08 from "../../img/portfolio08.jpg";

const LatestWork = () => {
  return (
    <>
      <section className="protfolio section-padding" id="product">
        <div className="container">
          <div className="row">
            <div
              className="wow zoomIn col-xs-12 text-center p-padding animated"
              style={{ visibility: "visible", animationName: "zoomIn" }}
            >
              <h1 className="section-title">our latest works</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                accumsan venenatis lectus sed sollicitudin. Duis in odio ex. Sed
                elementum varius enim. In vel tincidunt lorem. Donec gravida
                felis vitae ipsum pharetra maximus.
              </p>
            </div>
          </div>
        </div>
        {/* container */}
        <div className="portfolio-menu">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <ul
                  className="wow zoomIn animated"
                  id="filter"
                  style={{ visibility: "visible", animationName: "zoomIn" }}
                >
                  <li>
                    <a data-group="all" href="#0" className="active">
                      all
                    </a>
                  </li>
                  <li>
                    <a data-group="wordpress" href="#0">
                      wordpress
                    </a>
                  </li>
                  <li>
                    <a data-group="video" href="#0">
                      video
                    </a>
                  </li>
                  <li>
                    <a data-group="image" href="#0">
                      image
                    </a>
                  </li>
                  <li>
                    <a data-group="branding" href="#0">
                      branding
                    </a>
                  </li>
                </ul>
                {/* /#filter */}
              </div>
              {/* /.col-xs-12 */}
            </div>
          </div>
        </div>

        <div className="row">
          <div
            id="grid"
            className="shuffle"
            style={{ position: "relative", height: 600 }}
          >
            {/* portfolio-item */}
            <div
              data-groups='["all", "image", "video"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered animated"
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio01} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal1" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /.portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal1"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className=" btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio01} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
            {/* portfolio-item */}
            <div
              data-groups='["all", "image","wordpress","branding"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered "
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio02} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal2" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal2"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className=" btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio02} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
            {/* portfolio-item */}
            <div
              data-groups='["all", "image","wordpress", "circle", "video"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered "
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio03} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal3" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal3"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className=" btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio03} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
            {/* portfolio-item */}
            <div
              data-groups='["image", "all","wordpress", "branding"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered "
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio04} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal4" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal4"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className=" btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio04} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
            {/* portfolio-item */}
            <div
              data-groups='["all","wordpress", "video", "branding"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered "
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio05} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal5" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal5"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className=" btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio05} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
            {/* portfolio-item */}
            <div
              data-groups='["image", "all","wprdpress", "branding", "video"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered "
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio06} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal6" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal6"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className=" btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio06} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
            {/* portfolio-item */}
            <div
              data-groups='["all", "branding", "video"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered "
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio07} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal7" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal7"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className=" btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio07} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
            {/* portfolio-item */}
            <div
              data-groups='["image", "all", "wordpress", "video"]'
              className=" portfolio-item col-xs-12 col-sm-6 col-md-3 shuffle-item filtered "
              style={{ margin: 0, padding: 0 }}
            >
              <div className="portfolio">
                <figure className="effect-julia">
                  <img alt="img21" src={portfolio08} />
                  <figcaption>
                    <div className="socials">
                      <a data-toggle="modal" data-target="#myModal8" href>
                        <i className="fa fa-expand" />
                      </a>
                      <a href>
                        <i className="fa fa-share animated" />
                      </a>
                    </div>
                    <div className="scoial-heading">
                      <p>Mornign Dew</p>
                      <strong>Icons, Illustrations</strong>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* /.portfolio */}
            </div>
            {/* /portfolio-item */}
            {/* MODAL/POPUP */}
            <div
              className="modal fade"
              id="myModal8"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn btn-default pull-right"
                      data-dismiss="modal"
                    >
                      X
                    </button>
                    <span className="modal-title" id="myModalLabel">
                      Our recent work
                    </span>
                  </div>
                  <div className="modal-body">
                    <img src={portfolio08} alt="img21" />
                  </div>
                </div>
              </div>
            </div>
            {/* MODAL/POPUP */}
          </div>{" "}
          {/* /grid */}
        </div>
      </section>

      <div className="more-area">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h2 className="pull-left">
                Want To Work With Us Then Feel Free To Contact Us
              </h2>
              <button type="button" id="load" className="btn btn-success pull-right">load More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestWork;
