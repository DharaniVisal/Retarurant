function ReservationSummary({ details }) {

  const incomplete =
    !details.restaurant ||
    !details.date ||
    !details.time ||
    !details.table;

  if (incomplete) {
    return (
      <div className="reservation-summary">
        <h2>Reservation Summary</h2>
        <p>Reservation details are incomplete</p>
      </div>
    );
  }

  return (
    <div className="reservation-summary">

      <h2>Reservation Summary</h2>

      <p>
        <strong>Restaurant:</strong>{" "}
        {details.restaurant}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {details.date}
      </p>

      <p>
        <strong>Time:</strong>{" "}
        {details.time}
      </p>

      <p>
        <strong>Guests:</strong>{" "}
        {details.guests}
      </p>

      <p>
        <strong>Table:</strong>{" "}
        {details.table}
      </p>

      <p>
        <strong>Seating Capacity:</strong>{" "}
        {details.seatingCapacity}
      </p>

      <p>
        <strong>Dietary Preference:</strong>{" "}
        {details.dietary}
      </p>

      <p>
        <strong>Special Request:</strong>{" "}
        {details.request}
      </p>

    </div>
  );
}

export default ReservationSummary;