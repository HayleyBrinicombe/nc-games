export default function SortBy({ setSortBy, setOrder }) {
  const handleSortby = (e) => {
    e.preventDefault();
    setSortBy(e.target.value);
  };
  const handleOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };

  return (
    <div className="sortBy">
      <div className="sort">
        <h5>Sort by</h5>
        <select
          onChange={(event) => {
            handleSortby(event);
          }}
        >
          <option value="created_at">Date posted</option>
          <option value="comment_count">Number of comments</option>
          <option value="votes">Number of votes </option>
        </select>
      </div>
      <h5>Asc/Desc order</h5>
      <select
        onChange={(event) => {
          handleOrder(event);
        }}
      >
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
    </div>
  )
}
