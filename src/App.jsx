import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { ReservationProvider } from "./context/ReservationContext";
import "./App.css";

function App() {
  const [reservations, setReservations] = useState(0);

  const addReservation = () => {
    setReservations((count) => count + 1);
  };

  return (
    <ReservationProvider>
      <div className="app">

        <Header reservations={reservations} />

        <Home addReservation={addReservation} />

        <Footer />

      </div>
    </ReservationProvider>
  );
}

export default App;