import React from "react";

const ContactUs = () => {
  return (
      <section id="contact" className="contact-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="wow zoomIn col-xs-12 text-center p-padding">
              <h1 className="section-title">get in touch</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                accumsan venenatis lectus sed sollicitudin. Duis in odio ex. Sed
                elementum varius enim. In vel tincidunt lorem. Donec gravida
                felis vitae ipsum pharetra maximus.
              </p>
            </div>
            <div className="wow zoomIn col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
              <form name="contactForm" id="contact_form" method="post" action="php/email.php">
                <div className="form-inline">
                  <div className="form-group col-sm-6">
                    <input type="text" className="form-control" name="name" id="exampleInputName" placeholder="name"/>
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="exampleInputEmail"
                      placeholder="email address"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="exampleInputSubject"
                      placeholder="subject"
                    />
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      name="company"
                      id="exampleInputCompany"
                      placeholder="company"
                    />
                  </div>
                  <div className="form-group col-sm-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={3}
                      id="exampleInputMessage"
                      placeholder="message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-group col-xs-12">
                  <div
                    id="mail_success"
                    className="success"
                    style={{ display: "none" }}
                  >
                    Your message has been sent successfully.
                  </div>
                  {/* success message */}
                  <div id="mail_fail" className="error" style={{ display: "none" }}>
                    Sorry, error occured this time sending your message.
                  </div>
                </div>
                <div className="form-group col-sm-12" id="submit">
                  <input
                    type="submit"
                    id="send_message"
                    className="btn  btn-lg costom-btn"
                    defaultValue="send"
                  />
                </div>
              </form>
            </div>
        
            <div className="col-xs-12">
              <div className="contact-or">
                <p>or</p>
              </div>
              <div className="icon-text">
                <span>find us on</span>
              </div>
              <div className="icon-holder">
                <ul>
                  <li>
                    <a href="#0" target="_blank">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" target="_blank">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" target="_blank">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" target="_blank">
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" target="_blank">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactUs;
