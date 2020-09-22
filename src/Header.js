import React from 'react';
import './Header.css';
import { SearchTwoTone, LanguageTwoTone, ExpandMoreTwoTone } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header() {
  return (
    <div className="header">
      <img className="header_icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="airbnb" />

      <div className="header_center">
        <input type="text" />
        <SearchTwoTone />
      </div>

      <div className="header_right">
        <p>Become a host</p>
        <LanguageTwoTone />
        <ExpandMoreTwoTone />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
