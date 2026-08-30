import ExpenseItem from './ExpenseItem';

function ExpenseList({expenses, onDelete}){
if(expenses.length===0){
    return <p className="empty-message">No Expense Added yet .</p>

}
    return(
      <ul className="expense-List">
        
        {expenses.map((expense)=>
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete}/>
        )}
      </ul>  
    )
};
export default ExpenseList; 