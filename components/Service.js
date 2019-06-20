import React from "react"

export default function Service() {
  return (
    <section className="mh-service">
      <div className="container">
        <div className="row section-separator">
          <div
            className="col-sm-12 text-center section-title wow fadeInUp"
            data-aos="fade-up"
          >
            <h2>What I do</h2>
          </div>
          <div className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-aos="fade-up"
            >
              <i className="fa fa-bullseye purple-color" />
              <h3>UI Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-aos="fade-up"
            >
              <i className="fa fa-code iron-color" />
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="mh-service-item shadow-1 dark-bg wow fadeInUp"
              data-aos="fade-up"
            >
              <i className="fa fa-object-ungroup sky-color" />
              <h3>App Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
