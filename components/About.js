import React from "react"

export default function About() {
  return (
    <section className="mh-about" id="mh-about">
      <div className="container">
        <div className="row section-separator">
          <div className="col-sm-12 col-md-6">
            <div
              className="mh-about-img shadow-2 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.4s"
            >
              <img src="/static/images/ab-img.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
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
                Reprehenderit voluptate irure cillum incididunt reprehenderit aliquip adipisicing elit Lorem. Ad laboris adipisicing in ad culpa adipisicing labore minim sunt. Cupidatat officia qui quis reprehenderit qui tempor enim minim reprehenderit quis quis pariatur. Veniam consectetur exercitation dolor excepteur aute esse laboris ad amet. Officia id irure cillum deserunt sint veniam deserunt.
              </p>
              <div
                className="mh-about-tag wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <ul>
                  <li>
                    <span>c#</span>
                  </li>
                  <li>
                    <span>Javascript</span>
                  </li>
                  <li>
                    <span>html</span>
                  </li>
                  <li>
                    <span>css</span>
                  </li>
                  <li>
                    <span>NodeJS</span>
                  </li>
                  <li>
                    <span>React</span>
                  </li>
                  <li>
                    <span>Redux</span>
                  </li>
                  <li>
                    <span>SQL/NoSQL</span>
                  </li>
                </ul>
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
