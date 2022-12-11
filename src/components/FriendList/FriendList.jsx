import PropTypes from "prop-types"
import styles from "./FriendList.module.css"

const FriendList = ({items}) => {
    return <section className={styles.friends}>
                <h2 className={styles.title}>friends</h2>
        
                <ul className={styles.list}>
                    {items.map(item => <FriendListItem friend={item} key={ item.id} />)}
                </ul>
            </section>
}

const FriendListItem = ({friend}) => {
    const { isOnline, avatar, name } = friend

    let option
    if (isOnline) {
        option = 'status-isOnLine'
    } else {
        option = 'status-isOffLine'
    }

    return <li className={styles.item}>
                <span className={styles[option]}></span>
                <div className={styles.wrp}>
                    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                </div>                
                <p className={styles.name}>{name}</p>
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