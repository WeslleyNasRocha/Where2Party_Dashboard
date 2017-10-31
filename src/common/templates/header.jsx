import React from 'react';

export default props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <i>W</i>
        <b>2</b>
        <i>P</i>
      </span>
      <span className="logo-lg">
        <i className="fa fa-beer" />
        <i> Where</i> <b>2</b> <i>Party</i>
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href className="sidebar-toggle" data-toggle="offcanvas" />
    </nav>
  </header>
);
