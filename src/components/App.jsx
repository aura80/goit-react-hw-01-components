import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from './FriendList';
import friends from './friends.json';
import user from './user.json';
import data from './data.json';

export const App = () => {
  const bgColorChange = (event) => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    event.currentTarget.style.backgroundColor = randomColor;
  }

  return (
    <div
      style={{
        gap: '50px',
        paddingTop: '100px',
        paddingBottom: '100px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} colorFunc={bgColorChange} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

    </div>
  );
};

export default App;
