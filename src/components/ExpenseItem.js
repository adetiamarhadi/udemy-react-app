import './ExpenseItem.css';

function ExpenseItem() {

    const expenseDate = new Date(2021, 6, 7);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 2100000

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">Rp{expenseAmount},00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;