import React from 'react';

export default function Header() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Dicoding Forum App
        </a>

        <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            Home
          </div>

          <div className="navbar-item">
            Leaderboards
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <div className="button is-primary">
                <strong>Sign up</strong>
              </div>
              <div className="button is-light">
                Log in
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
