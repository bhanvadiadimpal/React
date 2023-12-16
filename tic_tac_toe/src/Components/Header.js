import React from 'react';
import logo from '../Images/gamelogo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="tic-tac-board"/>
      <h1>Tic-Toc-Toe</h1>
    </header>
  );
}

export default Header;