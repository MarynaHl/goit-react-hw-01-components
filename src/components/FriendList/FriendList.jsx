import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({friends}) => {
  return (
    <ul className={s.container}>
      {friends.map(({name, isOnline, avatar, id}) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(PropTypes.shape({
    ...FriendListItem.propTypes,
    id: PropTypes.number.isRequired,
  }))
};

export default FriendList;