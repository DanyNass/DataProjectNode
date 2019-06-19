import React, { Component } from 'react'
import { faFacebook, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AppFooter.css'

export class AppFooter extends Component {
  render() {
    return (
      <footer className="bg-light pt-5">
        <div className="container-fluid">
          <div id="energyway" className="row my-4">
            <div className="mx-auto col">
              <a href="https://www.energyway.it" target="_blank" rel="noopener noreferrer" className="d-block mx-auto energy-way-bg">
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-auto mx-auto">
              <ul id="menu-social" className="d-block p-0">
                <li className="p-2">
                  <a href="https://www.facebook.com/energywaysrl" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                  </a>
                </li>
                <li className="p-2">
                  <a href="https://www.instagram.com/energywaysrl" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                  </a>
                </li>
                <li className="p-2">
                  <a href="https://it.linkedin.com/company/energywaysrl" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                  </a>
                </li>
                <li className="p-2">
                  <a href="https://www.youtube.com/channel/UCKKDULGWkMi7VH5qz-kNPNQ" target="_blank" rel="noopener noreferrer" className="text-dark">
                    <FontAwesomeIcon className="social-icon" icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center mt-auto p-2" id="copyright-text">
              <span className="align-bottom text-dark">
                Copyright© {new Date().getFullYear()} Energy Way s.r.l, All rights are reserved.
          </span>
            </div>
          </div>

        </div>
      </footer >
    )
  }
}

export default AppFooter