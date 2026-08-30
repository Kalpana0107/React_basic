const CATEGORIES = ['All', 'Food', 'Travel', 'Shopping', 'Bills', 'Other'];
 
function CategoryFilter({ selected, onChange }) {
  return (
    <div>
 <label htmlFor="category-filter">Filter by category:</label>
   
    <select
      className="category-filter"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {CATEGORIES.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
     </div>
  );
}
 
export default CategoryFilter;