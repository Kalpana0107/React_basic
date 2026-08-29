function Total({expenses}){
const total=expenses.reduce((sum,expenses)=> sum+expenses.amount,0);
 return (
    <div className="total">
      <strong>Total: ₹{total.toFixed(2)}</strong>
    </div>
  );
}
export default Total;