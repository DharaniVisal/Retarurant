function RestaurantCard({ restaurant, onSelect }) {
  return (
    <div className="restaurant-card">

      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="restaurant-image"
      />

      <div className="restaurant-info">

        <h3>{restaurant.name}</h3>

        <p className="cuisine">
          {restaurant.cuisine} • {restaurant.location}
        </p>

        <p className="rating">
          ⭐ {restaurant.rating}
        </p>

        <button onClick={() => onSelect(restaurant)}>
          Reserve Table
        </button>

      </div>

    </div>
  );
}

export default RestaurantCard;