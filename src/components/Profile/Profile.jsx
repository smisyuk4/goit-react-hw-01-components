import "./Profile.css"

import PropTypes from "prop-types";

const Profile = (props) => {
    return <div className="profile" data-id={props.profile.id}>      
                <div className="description">
                    <img
                    src={props.profile.avatar}
                    alt="User avatar"
                    className="avatar"
                    width={300}
                    />
                    <p className="name">{props.profile.username}</p>
                    <p className="tag">#{props.profile.tag}</p>
                    <p className="location">{props.profile.location}</p>
                </div>

                <ul className="stats">
                    <li>
                        <span className="label">Followers </span>
                        <span className="quantity">{props.profile.stats.followers}</span>
                    </li>
                    <li>
                        <span className="label">Views </span>
                        <span className="quantity">{props.profile.stats.views}</span>
                    </li>
                    <li>
                        <span className="label">Likes </span>
                        <span className="quantity">{props.profile.stats.likes}</span>
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

export default Profile