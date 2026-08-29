import ExpenseItem from './ExpenseItem';

function ExpenseList({expense,onDelete}){
if(expense.length===0){
    return <p className="empty-message">No Expense Added yet .</p>

}
    return(
      <ul className="expense-List">
        {expense.map((expense)=>
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete}/>
        )}
      </ul>  
    )
};
export default ExpenseList;