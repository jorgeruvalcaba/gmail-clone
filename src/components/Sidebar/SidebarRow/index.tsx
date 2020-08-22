import React from 'react';

import './styles.scss';

interface SidebarRowProps {
  Icon: any;
  title: string;
  customClass?: string;
  iconColor?: string;
  isActive?: boolean;
}

const COLORS: any = {
  red: '#d93025',
  default: 'inherit',
};

const SidebarRow: React.FunctionComponent<SidebarRowProps> = ({
  Icon,
  title,
  customClass = '',
  iconColor = 'default',
}) => {
  return (
    <div className="sidebarRow">
      <a className={`${customClass}`}>
        <Icon
          className="sidebarRow__icon"
          style={{ color: COLORS[iconColor] }}
        />
        <span className="sidebarRow__title">{title}</span>
      </a>
    </div>
  );
};

export default SidebarRow;
