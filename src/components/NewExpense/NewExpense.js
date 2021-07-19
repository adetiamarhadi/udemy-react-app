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
    };

    const [toggle, setToggle] = useState('hide');

    const changeToggle = () => {
        if (toggle === 'hide') {
            setToggle('show');
        } else {
            setToggle('hide');
        }
    };

    let content = <button onClick={changeToggle} >Add New Expense</button>;

    if (toggle === 'show') {
        content = <ExpenseForm onChangeToggle={changeToggle} onSaveExpenseData={saveExpenseDataHandler} />
    }

    return (
        <div className="new-expense">
            {content}
        </div>
    );
}

export default NewExpense