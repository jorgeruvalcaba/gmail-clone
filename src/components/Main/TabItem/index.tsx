import React from 'react';

import './styles.scss';

interface TabItemProps {
  Icon: any;
  title: string;
  className?: string;
}

const TabItem: React.FunctionComponent<TabItemProps> = ({
  Icon,
  title,
  className = '',
}) => {
  return (
    <div className={`tabItem ${className}`}>
      <Icon className="tabItem__icon" />
      <div className="tabItem__content">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default TabItem;
