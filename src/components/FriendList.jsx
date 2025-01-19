import PropTypes from 'prop-types';
import clsx from 'clsx';
import FriendListItem from './FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
        <ul className={clsx("friend-list")}>
          {friends.map(friend => (
              <FriendListItem key={friend.id} avatar={friend.avatar}
                  name={friend.name} isOnline={friend.isOnline} />))}
        </ul >
  );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired
}

export default FriendList;