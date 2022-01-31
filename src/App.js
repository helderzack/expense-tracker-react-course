import './App.css';
import ExpenseChart from './components/ExpenseChart/ExpenseChart';
import ExpenseHeader from './components/ExpenseHeader/ExpenseHeader';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import Filter from './components/Filter/Filter';

function App() {
  return(
    <div className="app">
      <header>
        <h1>Expense Tracker</h1>
        <ExpenseHeader/>
      </header>
      <main className='expense-area'>
        <Filter/>
        <ExpenseChart/>
        <ExpenseItem/>
      </main>
    </div>
  );
}

export default App;
