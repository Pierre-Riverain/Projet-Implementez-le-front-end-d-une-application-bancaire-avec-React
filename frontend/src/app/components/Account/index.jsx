import { Button } from "../Button";
import PropTypes from "prop-types";
import "./index.css";

export function Account({ title, amount, description, onclick }) {

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Button className="button-transaction" onClick={onclick}>View transactions</Button>
            </div>
        </section>
    )
}

Account.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func
}