import { useState } from "react";
import { dishes } from "./data/mockDishes";
import DishList from "./components/DishList";
import Filters from "./components/Filters";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [currentDish, setCurrentDish] = useState(null);

  const handleAddDish = (id) => {
    if (!selectedDishes.includes(id)) {
      setSelectedDishes([...selectedDishes, id]);
    }
  };

  const handleRemoveDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
  };

  const handleViewIngredients = (dish) => {
    setCurrentDish(dish);
  };

  const handleCloseModal = () => {
    setCurrentDish(null);
  };

  const filteredDishes = dishes.filter((dish) => {
    return (
      dish.mealType === selectedCategory &&
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!vegOnly || dish.type === "VEG")
    );
  });

  // ✅ Count how many dishes user has SELECTED in each category
  const selectedCounts = {
    STARTER: selectedDishes.filter(
      (id) => dishes.find((d) => d.id === id)?.mealType === "STARTER"
    ).length,
    "MAIN COURSE": selectedDishes.filter(
      (id) => dishes.find((d) => d.id === id)?.mealType === "MAIN COURSE"
    ).length,
    DESSERT: selectedDishes.filter(
      (id) => dishes.find((d) => d.id === id)?.mealType === "DESSERT"
    ).length,
    SIDES: selectedDishes.filter(
      (id) => dishes.find((d) => d.id === id)?.mealType === "SIDES"
    ).length,
  };

  return (
    <div className="app-container">
      <Filters
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        vegOnly={vegOnly}
        onVegOnlyChange={setVegOnly}
        selectedCounts={selectedCounts}  // ✅ pass selected counts
      />

      <h3 className="section-heading">
        {selectedCategory} ({filteredDishes.length})
      </h3>

      <DishList
        dishes={filteredDishes}
        onAddDish={handleAddDish}
        onRemoveDish={handleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={handleViewIngredients}
      />

      {currentDish && (
        <IngredientModal dish={currentDish} onClose={handleCloseModal} />
      )}

      <footer className="footer">
        <span>Total Dish Selected {selectedDishes.length}</span>
        <button className="continue-btn">Continue</button>
      </footer>
    </div>
  );
}

export default App;
