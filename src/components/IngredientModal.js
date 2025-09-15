function IngredientModal({ dish, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <img src={dish.image} alt={dish.name} className="modal-img" />
        <div className="modal-content">
          <h2>
            {dish.name}{" "}
            {dish.type === "VEG" ? (
              <span className="veg-icon"><span className="veg-dot"></span></span>
            ) : (
              <span className="nonveg-icon"><span className="nonveg-dot"></span></span>
            )}
          </h2>
          <p>
            <b>{dish.category.name}</b> {dish.description}
          </p>
          <h4>Ingredients</h4>
          <ul>
            {dish.ingredients.map((ing, index) => (
              <li key={index}>
                {ing.name} - {ing.quantity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IngredientModal;
