import ClientList from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import "../index.css"


export const App = (props) => {
  return (
    <div>
      <ClientList/>
      <Statistics/>
    </div>
  );
};
