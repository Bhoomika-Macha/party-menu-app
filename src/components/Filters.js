function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange,
  selectedCounts
}) {
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search dish for your party..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar"
      />

      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
            <span className="tab-count">{selectedCounts[cat] || 0}</span>
          </button>
        ))}
      </div>

      <div className="veg-toggle">
        <label>
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={() => onVegOnlyChange(!vegOnly)}
          />
          Veg Only
        </label>
      </div>
    </div>
  );
}

export default Filters;
