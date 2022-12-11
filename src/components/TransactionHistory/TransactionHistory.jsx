import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./TransactionHistory.module.css"

const TransactionList = ({items}) => {
    return <section className={styles.transaction}>
                <h2 className={styles.title}>transaction</h2>
        
                <table className={styles.history}>
                    <thead className={styles.head}>
                        <tr className={styles.thead}>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                    </thead>

                    <tbody>                       
                    {
                        items.map(item =>
                        <TransactionItem transaction={item} key={item.id} />
                    )}
                    </tbody>                    
                </table>
        </section>
}

const TransactionItem = ({ transaction }) => {
    const { type, amount, currency } = transaction
    
    let option
    switch(type){
        case "invoice": option = "invoice";
            break;
        case "payment": option = "payment";
            break;
        case "withdrawal": option = "withdrawal";
            break;
        case "deposit": option = "deposit";
            break;
        default: option = "def"
    }

    return  <tr className={styles.trow}>
                <td className={clsx(styles.type, styles[option])}>{type}</td>
                <td className={clsx(styles.type, styles[option])}>{amount}</td>
                <td className={clsx(styles.type, styles[option])}>{currency}</td>
            </tr>
}

TransactionItem.propTypes = {
    transaction: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
}

export default TransactionList