// import "components/Profile/Profile.css"
import "./Profile.css"

import PropTypes from "prop-types";

const Profile = (props) => {
    return <div className="profile">      
                <div className="description">
                    <img
                    src={props.avatar}
                    alt="User avatar"
                    className="avatar"
                    width={300}
                    />
                    <p className="name">{props.username}</p>
                    <p className="tag">{props.tag}</p>
                    <p className="location">{props.location}</p>
                </div>

                <ul className="stats">
                    <li>
                        <span className="label">Followers </span>
                        <span className="quantity">{props.followers}</span>
                    </li>
                    <li>
                        <span className="label">Views </span>
                        <span className="quantity">{props.views}</span>
                    </li>
                    <li>
                        <span className="label">Likes </span>
                        <span className="quantity">{props.likes}</span>
                    </li>
                </ul>
            </div>
}

Profile.propTypes = {
    avatar:  PropTypes.string.isRequired, 
    username:  PropTypes.string.isRequired,
    tag:  PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired, 
    views: PropTypes.number.isRequired, 
    likes: PropTypes.number.isRequired,
}

export default Profile