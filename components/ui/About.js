import React from "react"

export default function About(props) {
  const {techs, desc} = props

  const renderTech = () => {
    return (
      <ul>
       <li>{techs.map(tech => <li><span>{tech}</span></li>)}</li>
      </ul>
    )
  }

  return (
    <section className="mh-about" id="mh-about">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6" data-aos="slide-right">
            <div
              className="mh-about-img shadow-2 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              <img src="/static/images/ab-img.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6" data-aos="slide-left">
            <div className="mh-about-inner">
              <h2
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                About Me
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s"
              >
                {desc}
              </p>
              <div
                className="mh-about-tag wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                {renderTech()}
              </div>
              <a
                href="#"
                className="btn btn-fill wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                Downlaod Resume <i className="fa fa-download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
