import { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Total from './components/Total';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App(){
  const [expenses,setExpenses]=useState(()=>
 { const saved=localStorage.getItem('expense')
  return saved?JSON.parse(saved):[];
 })
const [categoryFilter,setCategoryFilter]=useState('ALL');
useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);
 
  const handleAddExpense = (newExpense) => {
    setExpenses((prev) => [...prev, newExpense]);
  };
 
  const handleDeleteExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };
 
  // Derived value — not stored in state, recalculated every render from `expenses` + `categoryFilter`
  const visibleExpenses =
    categoryFilter === 'All'
      ? expenses
      : expenses.filter((expense) => expense.category === categoryFilter);
 
  return (
    <div className="app">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAdd={handleAddExpense} />
 
      <CategoryFilter selected={categoryFilter} onChange={setCategoryFilter} />
      <Total expenses={visibleExpenses} />
      <ExpenseList expenses={visibleExpenses} onDelete={handleDeleteExpense} />
    </div>
  );
}

export default App;
