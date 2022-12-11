import PropTypes from "prop-types"
import styles from "./Profile.module.css"

const ClientList = ({items}) => {
    return <section className={ styles.container}>
        {items.map(user =>
            < Profile profile={user} key={ user.id } />
        )}
    </section>
}

const Profile = ({ profile }) => {
    const {avatar, username, tag, location, stats:{followers, views, likes}} = profile 

    return <div className={styles.profile}>      
                <div className={styles.description}>
                    <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                    width={300}
                    />
                    <p className={styles.name}>{username}</p>
                    <p className={styles.tag}>#{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>

                <ul className={styles.stats}>
                    <li>
                        <span className={styles.label}>Followers </span>
                        <span className={styles.quantity}>{followers}</span>
                    </li>
                    <li>
                        <span className={styles.label}>Views </span>
                        <span className={styles.quantity}>{views}</span>
                    </li>
                    <li>
                        <span className={styles.label}>Likes </span>
                        <span className={styles.quantity}>{likes}</span>
                    </li>
                </ul>
            </div>
}

Profile.propTypes = {
    profile: PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar:  PropTypes.string.isRequired, 
        username:  PropTypes.string.isRequired,
        tag:  PropTypes.string.isRequired, 
        location: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired, 
            views: PropTypes.number.isRequired, 
            likes: PropTypes.number.isRequired,
        }).isRequired
    }).isRequired
}

export default ClientList