import React from "react";

const Counting = () => {
  return (
    <>
      {/* COUNTING */}
      <section className="counting section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 text-center">
              <span className="count1 counter">24</span>
              <p>project completed</p>
            </div>{" "}
            {/* /.col-sm-3 */}
            <div className="col-xs-12 col-sm-6 col-md-3 text-center">
              <span className="count2 counter">43</span>
              <p>student taught</p>
            </div>
            {/* /.col-sm-3 */}
            <div className="col-xs-12 col-sm-6 col-md-3 text-center">
              <span className="counter count3">50</span>
              <p>businesses helped</p>
            </div>
            {/* /.col-sm-3 */}
            <div className="col-xs-12 col-sm-6 col-md-3 text-center">
              <span className="counter count4">65</span>
              <p>mentorship</p>
            </div>
            {/* /.col-sm-3 */}
          </div>{" "}
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* counting */}
    </>
  );
};

export default Counting;
