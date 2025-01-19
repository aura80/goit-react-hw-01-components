import PropTypes from 'prop-types';
import './Profile.css';
import clsx from 'clsx';

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <div className="profile">
        <div className="description">
                <img src={avatar} alt="User avatar" className={clsx("avatar")} />
                <p className={clsx("name")}>{username}</p>
                <p className={clsx("tag")}>@{tag}</p>
                <p className={clsx("location")}>{location}</p>
        </div>
            <ul className={clsx("stats")}>
          <li key={stats.followers}>
                    <span className={clsx("label")}>Followers</span>
                    <span className={clsx("quantity")}>{stats.followers}</span>
          </li>
          <li key={stats.views}>
                    <span className={clsx("label")}>Views</span>
                    <span className={clsx("quantity")}>{stats.views}</span>
          </li>
          <li key={stats.likes}>
                    <span className={clsx("label")}>Likes</span>
                    <span className={clsx("quantity")}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;