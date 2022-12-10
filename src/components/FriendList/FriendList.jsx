import friends from "library/friends.json"
import css from "./FriendList.module.css"
import PropTypes from "prop-types";


const FriendList = () => {
    return <section className={css.friends}>
                <h2 className={css.title}>friends</h2>
        
                <ul className={css.list}>
                    {friends.map(friend => <FriendListItem friend={friend} key={ friend.id} />)}
                </ul>
            </section>
}

const FriendListItem = (props) => {
    let style
    if (props.friend.isOnline) {
        style = 'status-isOnLine'
    } else {
        style = 'status-isOffLine'
    }

    return <li className={css.item}>
                <span className={css[style]}></span>
                <div className={css.wrp}>
                    <img className={css.avatar} src={ props.friend.avatar } alt="User avatar" width="48" />
                </div>                
                <p className={css.name}>{ props.friend.name }</p>
            </li>
}

FriendListItem.propsType = {
    friend: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired
}

export default FriendList