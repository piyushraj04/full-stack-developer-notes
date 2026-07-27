const Home = ({ filterCategory, handleCateChange }) => {
  const categories = ["All", "Milk", "Bread", "Eggs", "Cereals"];

  return (
    <nav className="navbar">
      <div className="logo">🛒 Grocery Store</div>

      <div className="category-box">
        <label>Category</label>

        <select value={filterCategory} onChange={handleCateChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
};

export default Home;
