import React from 'react';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';

import './styles.scss';

interface MailProps {
  id: string;
  sender: string;
  subject: string;
  body: string;
  date: string;
  onRemove: (event: any) => void;
}

const Mail: React.FunctionComponent<MailProps> = ({
  id,
  sender,
  subject,
  body,
  date,
  onRemove,
}) => {
  const regex = /(<([^>]+)>)/gi;
  const newBody = body.replace(regex, '');
  return (
    <div className="mail" key={id}>
      <div className="mail__sender">
        <input type="checkbox" />
        <StarBorderOutlinedIcon style={{ fontSize: 20 }} />
        <LabelImportantOutlinedIcon style={{ fontSize: 20 }} />
        <h4 className="title">{sender}</h4>
      </div>
      <div className="mail__content">
        <p className="mail__content__subject">
          {subject}{' '}
          <span className="mail__content__subject__subtext">- {newBody}</span>{' '}
        </p>
      </div>
      <div className="mail__actions">
        <ArchiveIcon onClick={() => onRemove(id)} />
        <DeleteIcon onClick={() => onRemove(id)} />
        <DraftsIcon />
        <WatchLaterRoundedIcon />
      </div>
      <div className="mail__date">{date}</div>
    </div>
  );
};

export default Mail;
