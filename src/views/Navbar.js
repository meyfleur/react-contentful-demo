import React from "react";
import { Link } from "react-router-dom";

import "./../styles/navbar.scss";

export default () => {
  return (
    <React.Fragment>
      <header className="mobile-header">
        <nav className="mobile-menu">
          <figure className="mobile-menu-logo">
            <img
              src="https://images.ctfassets.net/pntshaoi0gaf/5A5oxIWjluIcga8QQUiCuc/fd8489b85b84bbfc822b93e1d99ffb2d/VWLogo.png"
              alt="VW Logo"
              width="32px"
              height="32px"
            />
          </figure>
          <div className="mobile-menu-text">
            <h1>VW Contentful App</h1>
          </div>
          <div className="mobile-menu-home">
            <Link to="/">
              <i className="fas fa-bars fa-2x" />
            </Link>
          </div>
        </nav>
      </header>

      <aside className="sidebar">
        <nav>
          <ul className="navigation">
            <li>
              <img
                src="https://images.ctfassets.net/pntshaoi0gaf/5A5oxIWjluIcga8QQUiCuc/fd8489b85b84bbfc822b93e1d99ffb2d/VWLogo.png"
                alt="VW Logo"
                width="60px"
                height="60px"
              />
            </li>

            <li>
              <Link to="/">
                <i className="fas fa-home fa-2x" />
                <br />
                Start
              </Link>
            </li>

            <li>
              <Link to="/faq/de-DE">
                <i className="fas fa-question-circle fa-2x" />
                <br />
                FAQ
              </Link>
            </li>


            <li>
              <Link to="/services/WVWZZZAUZJW000001/de-DE">
                <i className="fas fa-car fa-2x" />
                <br />
                Dienste
              </Link>
            </li>

            <li>
              <Link to="/imprint/de-DE">
                <i className="fas fa-info-circle fa-2x" />
                <br />
                Impressum
              </Link>
            </li>

            <li>
              <Link to="/agb/de-DE">
                <i className="fas fa-file-signature fa-2x" />
                <br />
                AGB
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </React.Fragment>
  );
};
