import transactions from "library/transactions.json"
import css from "./TransactionHistory.module.css"
import PropTypes from "prop-types";
import clsx from "clsx";


const TransactionList = () => {
    return <section className={css.transaction}>
                <h2 className={css.title}>transaction</h2>
        
                <table className={css.history}>
                    <thead className={css.head}>
                        <tr className={css.thead}>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                        </tr>
                    </thead>

                    <tbody>                       
                    {
                        transactions.map(transaction =>
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    )}
                    </tbody>                    
                </table>
        </section>
}

const TransactionItem = (props) => {
    let style
    switch(props.transaction.type){
        case "invoice": style = "invoice";
            break;
        case "payment": style = "payment";
            break;
        case "withdrawal": style = "withdrawal";
            break;
        case "deposit": style = "deposit";
            break;
    }

    return  <tr className={css.trow}>
                <td className={clsx(css.type, css[style])}>{ props.transaction.type}</td>
                <td className={clsx(css.type, css[style])}>{ props.transaction.amount}</td>
                <td className={clsx(css.type, css[style])}>{ props.transaction.currency}</td>
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