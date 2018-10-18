import React from 'react';

const Header = () => {
  return (
    <header className="App-header">
      <div className="wrapper">
        <div className="logo"></div>
        <h1 className="App-title">
          <a href="/">Terrific Tree Frogs</a>
        </h1>
        <p className="App-subtitle">
          Message Board
        </p>
        <p className="App-description">
          This web app demonstrates message board UI, React, Redux, NodeJS, connecting with a REST API, deploying to AWS, and a CI/CD development process.
          <br /><br />
          Posts, comments, and categories are stored on a backend server and accessed by calls to the ReadableAPI. The source code is on <a href="https://github.com/wicker/Terrific-Tree-Frogs-Message-Board">Github</a>.
          <br /><br />
          This app allows pseudonymous posting and commenting.
          <br /><br />
          To combat inappropriate posts, the board resets every fifteen minutes.
        </p>
      </div>
    </header>
  )
}

export default Header;
