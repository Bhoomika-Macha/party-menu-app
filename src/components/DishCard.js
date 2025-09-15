import React, { useState } from "react";

function DishCard({ dish, onAddDish, onRemoveDish, isSelected, onViewIngredients }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="dish-card">
      <div className="dish-info">
        <h4>
          {dish.name}{" "}
          {dish.type === "VEG" ? (
            <span className="veg-icon">
              <span className="veg-dot"></span>
            </span>
          ) : (
            <span className="nonveg-icon">
              <span className="nonveg-dot"></span>
            </span>
          )}
        </h4>

        <p>
          {expanded ? dish.description : dish.description.slice(0, 50)}
          {dish.description.length > 50 && (
            <span
              className="read-more"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? " Read less" : " ...Read more"}
            </span>
          )}
        </p>

        <button className="ingredient-btn" onClick={() => onViewIngredients(dish)}>
          🍲 Ingredient
        </button>
      </div>

      <div className="dish-actions">
        <img src={dish.image} alt={dish.name} className="dish-img" />
        {isSelected ? (
          <button className="remove-btn" onClick={() => onRemoveDish(dish.id)}>
            Remove
          </button>
        ) : (
          <button className="add-btn" onClick={() => onAddDish(dish.id)}>
            Add +
          </button>
        )}
      </div>
    </div>
  );
}

export default DishCard;
