function ExpenseItem({expense,onDelete}){
    return(
        <li className="expense-item">
            <span className="title">{expense.title}</span>
            <span className="amount">{expense.amount}</span>
            <span className="category">{expense.category}</span>
            <span className="date">{expense.date}</span>
            <button className="delete-btn" onClick={() => onDelete(expense.id)}>
        ✕
      </button>
        </li>
    )
};
export default ExpenseItem;