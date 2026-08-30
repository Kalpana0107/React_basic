import { useState } from "react";

function Expenseform({onAdd}){

    const [title,setTitle] =useState('');
    const [category,setCategory] =useState('Food');
    const [amount,setAmount] =useState('');

const handleSubmit = (e)=>{
    e.preventDefault();
    if(!title.trim()|| !amount) return;

    const newExpense = {
        id:Date.now(),
        title :title.trim(),
        amount :parseFloat(amount),
        category,
        date: new Date().toISOString().split('T')[0],
    };
    onAdd(newExpense);
    setTitle('');
    setCategory('Food');
    setAmount('');
}
    return(
        <form onSubmit={handleSubmit} className="expense-form">
            <input type="text" placeholder="Expense-spent-title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="number" placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Shopping">Shopping</option>
                <option value="Bills">Bills</option>
                <option value="Others">Others</option>
            </select>
            <button type="submit">Add Expense</button>
        </form>
    )
};
export default Expenseform;