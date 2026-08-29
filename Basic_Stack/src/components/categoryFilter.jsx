const CATEGORIES = ['All', 'Food', 'Travel', 'Shopping', 'Bills', 'Other'];
 
function CategoryFilter({ selected, onChange }) {
  return (
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
  );
}
 
export default CategoryFilter;