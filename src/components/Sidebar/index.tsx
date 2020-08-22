import React from 'react';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';

import composeImg from '../../assets/compose.png';
import SidebarRow from './SidebarRow';

import './styles.scss';

const Sidebar: React.FunctionComponent<{}> = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__compose">
        <div className="sidebar__compose__button">
          <a href="#">
            <img src={composeImg} alt="Plus sign img" />
            <p>Compose</p>
          </a>
        </div>
      </div>
      <div className="sidebar__tags">
        <SidebarRow
          Icon={InboxRoundedIcon}
          iconColor="red"
          title="Inbox"
          customClass="active"
        />
        <SidebarRow Icon={StarRoundedIcon} title="Starred" />
        <SidebarRow Icon={WatchLaterRoundedIcon} title="Snoozed" />
        <SidebarRow Icon={PlayArrowIcon} title="Sent" />
        <SidebarRow Icon={InsertDriveFileIcon} title="Drafts" />
        <SidebarRow Icon={LabelIcon} title="Home" />
        <SidebarRow Icon={LabelIcon} title="Receipts" />
        <SidebarRow Icon={LabelIcon} title="To Do" />
      </div>
    </div>
  );
};

export default Sidebar;
