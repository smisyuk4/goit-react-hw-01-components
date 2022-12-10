import ClientList from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList"
import "../index.css"


export const App = (props) => {
  return (
    <div>
      <ClientList/>
      <Statistics/>
      <FriendList/>
    </div>
  );
};
