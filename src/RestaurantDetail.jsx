import { useReservationContext } from "./context/ReservationContext";

function RestaurantDetail({ restaurant }) {

  const {
    selectedRestaurant,
    selectRestaurant
  } = useReservationContext();

  const currentRestaurant =
    restaurant || selectedRestaurant;

  if (!currentRestaurant) {
    return (
      <p>
        Please select a restaurant
      </p>
    );
  }

  return (
    <div className="restaurant-detail">

      <img
        src={currentRestaurant.image}
        alt={currentRestaurant.name}
        className="detail-image"
      />

      <div>

        <p className="small-title">
          SELECTED RESTAURANT
        </p>

        <h2>
          {currentRestaurant.name}
        </h2>

        <p>
          {currentRestaurant.cuisine}
          {" • "}
          {currentRestaurant.location}
        </p>

        <p>
          ⭐ {currentRestaurant.rating}
        </p>

      </div>

    </div>
  );
}

export default RestaurantDetail;