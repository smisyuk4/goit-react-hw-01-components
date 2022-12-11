import ClientList from "./Profile/Profile"
import users from "library/users.json"
import Statistics from "./Statistics/Statistics"
import data from "library/data.json"
import FriendList from "./FriendList/FriendList"
import friends from "library/friends.json"
import TransactionList from "./TransactionHistory/TransactionHistory"
import transactions from "library/transactions.json"
import "../index.css"

export const App = (props) => {
  return (
    <div>
      <ClientList items={users}/>
      <Statistics title={"Upload stats"} items={data}/> 
      <FriendList items={friends}/>
      <TransactionList items={transactions}/>
    </div>
  );
};
