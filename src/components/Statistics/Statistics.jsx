import data from "library/data.json"
import css from "./Statistics.module.css"
import PropTypes from "prop-types";

const Statistics = () => {
    return <section className={css.statistics}>
                <h2 className={css.title}>Upload stats</h2>
        
                <ul className={css.list}>
                    {data.map(item => <Stat stat={item} key={ item.id } />)}
                </ul>
            </section>
}

const Stat = (props) => {
    return  <li className={css.item} data-id={props.stat.id}>
                <span className={css.label}>{ props.stat.label } </span>
                <span className={css.percentage}>{ props.stat.percentage}%</span>
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