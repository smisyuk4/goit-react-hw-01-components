import users from "library/users.json"
import css from "./Profile.module.css"
import PropTypes from "prop-types";


const ClientList = () => {
    return <section className={ css.container}>
        {users.map(user =>
            < Profile profile={user} key={ user.id } />
        )}
    </section>
}

const Profile = (props) => {
    return <div className={css.profile} data-id={props.profile.id}>      
                <div className={css.description}>
                    <img
                    src={props.profile.avatar}
                    alt="User avatar"
                    className={css.avatar}
                    width={300}
                    />
                    <p className={css.name}>{props.profile.username}</p>
                    <p className={css.tag}>#{props.profile.tag}</p>
                    <p className={css.location}>{props.profile.location}</p>
                </div>

                <ul className={css.stats}>
                    <li>
                        <span className={css.label}>Followers </span>
                        <span className={css.quantity}>{props.profile.stats.followers}</span>
                    </li>
                    <li>
                        <span className={css.label}>Views </span>
                        <span className={css.quantity}>{props.profile.stats.views}</span>
                    </li>
                    <li>
                        <span className={css.label}>Likes </span>
                        <span className={css.quantity}>{props.profile.stats.likes}</span>
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