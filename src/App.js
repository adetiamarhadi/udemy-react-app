import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: '1', title: 'Kopi Kenangan - Kopi Kenangan Mantan', amount: 18000, date: new Date(2021, 6, 2) },
    { id: '2', title: 'Family Mart - Hot KSK', amount: 13000, date: new Date(2021, 6, 3) },
    { id: '3', title: 'Bensin - Pertamax', amount: 20000, date: new Date(2021, 6, 3) },
    { id: '4', title: 'Parkir - Motor', amount: 8000, date: new Date(2021, 6, 3) },
    { id: '5', title: 'Tol - Mandiri', amount: 50000, date: new Date(2021, 6, 4) },
    { id: '6', title: 'Parkir - Mobil', amount: 33000, date: new Date(2021, 6, 4) },
    { id: '7', title: 'Ayam Geprek Bensu', amount: 27000, date: new Date(2021, 6, 4) }
  ];
  
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date} />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date} />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date} />

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date} />

      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date} />

      <ExpenseItem
        title={expenses[5].title}
        amount={expenses[5].amount}
        date={expenses[5].date} />

      <ExpenseItem
        title={expenses[6].title}
        amount={expenses[6].amount}
        date={expenses[6].date} />
    </div>
  );
}

export default App;
