import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import InfoIcon from '@material-ui/icons/Info';

import TabItem from './TabItem';
import Mail from './Mail';
import data from '../../data/emails.json';

import './styles.scss';

const formatDate = (date: Date) => {
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const [{ value: month }, , { value: day }, ,] = dateTimeFormat.formatToParts(
    date,
  );
  const formatedDate = `${month} ${day}`;
  return formatedDate;
};

const Main: React.FunctionComponent<{}> = () => {
  const [messages, setMessages] = useState(data.messages);
  const totalMessages = messages.length;

  const onRemoveMail = (id: any) => {
    const newMessageList = messages.filter((message) => message.id !== id);
    setMessages(newMessageList);
  };

  return (
    <div className="main">
      <div className="main__contentNav">
        <div className="main__contentNav__leftIcons">
          <div className="select">
            <input type="checkbox" />
            <ArrowDropDownIcon />
          </div>
          <RefreshIcon />
          <MoreVertIcon />
        </div>
        <div className="main__contentNav__rightIcons">
          <span className="order">1-50 of {totalMessages}</span>
          <ChevronLeftIcon />
          <ChevronRightIcon />
        </div>
      </div>
      <div className="main__mailbox">
        <div className="main__mailbox__tabs">
          <TabItem className="active" Icon={InboxRoundedIcon} title="Primary" />
          <TabItem Icon={PeopleIcon} title="Social" />
          <TabItem Icon={LocalOfferIcon} title="Promotions" />
          <TabItem Icon={InfoIcon} title="Updates" />
        </div>
        {messages.map((message: any, key: any) => {
          const { id, subject, sender, body, date } = message;
          const formatedDate = formatDate(new Date(date));
          return (
            <React.Fragment key={key}>
              <Mail
                id={id}
                subject={subject}
                sender={sender}
                body={body}
                date={formatedDate}
                onRemove={onRemoveMail}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
