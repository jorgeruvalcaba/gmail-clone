import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import HelpSharpIcon from '@material-ui/icons/HelpSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import Avatar from '@material-ui/core/Avatar';

import './styles.scss';

import gmailLogo from '../../assets/gmail_logo.png';

const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className="header">
      <div className="header__left">
        <MenuIcon className="header__menu" />
        <img className="header__logo" src={gmailLogo} alt="Gmail Logo" />
      </div>

      <div className="header__input">
        <SearchIcon />
        <input type="text" placeholder="Search email" aria-label="search" />
        <ArrowDropDownSharpIcon />
      </div>

      <div className="header__icons">
        <HelpSharpIcon />
        <SettingsSharpIcon />
        <AppsSharpIcon />
        <Avatar
          alt="Jorge Ruvalcaba"
          src="https://yt3.ggpht.com/-m6hWfK9T3s0/AAAAAAAAAAI/AAAAAAAAAAA/QrOE0RdSbCo/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg"
        />
      </div>
    </header>
  );
};

export default Header;
