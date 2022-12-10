import user from "../library/user.json"
import Profile from "./Profile/Profile";


export const App = (props) => {
  return (
    <div>
      < Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};
