import users from "../library/users.json"
import Profile from "./Profile/Profile";
import "../index.css"


export const App = (props) => {
  return (
    <div className="profile-container">
      {users.map(user =>
        < Profile profile={user} key={ user.id } />
      )}      
    </div>
  );
};
