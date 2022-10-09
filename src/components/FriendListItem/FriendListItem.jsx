import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <li className={s.container}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;