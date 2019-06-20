import React from "react"

export default function Home() {
  return (
    <section className="mh-home image-bg home-2-img" id="mh-home">
      <div className="img-foverlay img-color-overlay">
        <div className="container">
          <div className="row section-separator xs-column-reverse vertical-middle-content home-padding" style={{paddingTop: '6rem'}}>
            <div className="col-sm-6">
              <div className="mh-header-info" >
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  Waraphon Roonnapai
                </h2>
                <h4
                  className="typewrite"
                  data-period="2000"
                  data-type='[ "Hi, I am Full-Stack Developer.", "I am Software Engineer.", "I Love to Code.", "I Love to Develop." ]'
                />
                  <span class="wrap"></span>
                <ul>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s"
                  >
                    <i className="fa fa-envelope" />
                    <a href="mailto:">mydev@email.com</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.5s"
                  >
                    <i className="fa fa-phone" />
                    <a href="callto:">+66 080 000 0000</a>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.6s"
                  >
                    <i className="fa fa-map-marker" />
                    <address>26/19, Saimai, Bangkok, Thailand</address>
                  </li>
                </ul>

                <ul
                  className="social-icon wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.7s"
                >
                  <li style={{marginLeft: '4rem'}}>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="hero-img wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.6s"
              >
                <div className="img-border">
                  <img src='/static/images/boy.jpg' alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
