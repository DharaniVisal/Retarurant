function Confirmation({ details }) {

  if (!details) {
    return (
      <div className="confirmation-card">
        <h2>Reservation details are incomplete</h2>
      </div>
    );
  }

  return (
    <div className="confirmation-card">

      <p className="small-title">
        RESERVATION CONFIRMED
      </p>

      <h1>
        🎉 Table Reserved Successfully!
      </h1>

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
        <strong>Customer:</strong>{" "}
        {details.customerName}
      </p>

      <p>
        <strong>Phone:</strong>{" "}
        {details.phone}
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

export default Confirmation;