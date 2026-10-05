import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants, onSelect }) {

  if (restaurants.length === 0) {
    return (
      <p className="no-results">
        No restaurants found
      </p>
    );
  }

  return (
    <div className="restaurant-list">

      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onSelect={onSelect}
        />
      ))}

    </div>
  );
}

export default RestaurantList;