import PropTypes from "prop-types";
import styles from "./Statistics.module.css"

const Statistics = ({title, items}) => {
    return <section className={styles.statistics}>
                {title && <h2 className={styles.title}>{title}</h2>}        
        
                <ul className={styles.list}>
                    {items.map(item => <Stat stat={item} key={ item.id } />)}
                </ul>
            </section>
}

const Stat = ({ stat }) => {
    const {label, percentage} = stat
    return  <li className={styles.item}>
                <span className={styles.label}>{label} </span>
                <span className={styles.percentage}>{percentage}%</span>
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