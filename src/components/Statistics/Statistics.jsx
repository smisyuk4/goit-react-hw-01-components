import data from "library/data.json"
import "./Statistics.css"
import PropTypes from "prop-types";

const Statistics = () => {
    return <section className="statistics">
                <h2 className="title">Upload stats</h2>
        
                <ul className="stat-list">
                    {data.map(item => <Stat stat={item} key={ item.id } />)}
                </ul>
            </section>
}

const Stat = (props) => {
    return  <li className="item" data-id={props.stat.id}>
                <span className="label">{ props.stat.label } </span>
                <span className="percentage">{ props.stat.percentage}%</span>
            </li>
}

Stat.propTypes = {
    stat: PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
}

export default Statistics