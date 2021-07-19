import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const DUMMY_EXPENSES = [
    { id: '1', title: 'Kopi Kenangan - Kopi Kenangan Mantan', amount: 18000, date: new Date(2021, 6, 2) },
    { id: '2', title: 'Family Mart - Hot KSK', amount: 13000, date: new Date(2021, 6, 3) },
    { id: '3', title: 'Bensin - Pertamax', amount: 20000, date: new Date(2021, 6, 3) },
    { id: '4', title: 'Parkir - Motor', amount: 8000, date: new Date(2021, 6, 3) },
    { id: '5', title: 'Tol - Mandiri', amount: 50000, date: new Date(2021, 6, 4) },
    { id: '6', title: 'Parkir - Mobil', amount: 33000, date: new Date(2021, 6, 4) },
    { id: '7', title: 'Ayam Geprek Bensu', amount: 27000, date: new Date(2021, 6, 4) }
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (

    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
