import { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        changeToggle();
    };

    const [isVisible, setVisible] = useState(false);

    const changeToggle = () => {
        if (isVisible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };

    let content = <button onClick={changeToggle} >Add New Expense</button>;

    if (isVisible) {
        content = <ExpenseForm onChangeToggle={changeToggle} onSaveExpenseData={saveExpenseDataHandler} />
    }

    return (
        <div className="new-expense">
            {content}
        </div>
    );
}

export default NewExpense