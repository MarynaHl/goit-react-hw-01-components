import React from 'react';
import s from './Container.module.css'

const Container = ({children, styles}) => {
  return (
    // children: PropTypes.node
    <div className={s.container} style={styles}>
      {children}
      {/* children: React.ReactNode[] */}
    </div>
  );
};

export default Container;