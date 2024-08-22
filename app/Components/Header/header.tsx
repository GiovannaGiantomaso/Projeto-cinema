import React from 'react';
import '../../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="https://th.bing.com/th/id/R.7534a39f4ee178794a31ba9e28e279a8?rik=6cTCxSb3opPaAg&pid=ImgRaw&r=0" alt="Logo" className="logo" />
        <h1 className="title">Os melhores filmes estão aqui</h1>
      </div>
    </header>
  );
};

export default Header;