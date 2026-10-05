import { useRef, useState, useMemo, useCallback } from "react";

import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import RestaurantList from "./RestaurantList";
import RestaurantDetail from "./RestaurantDetail";
import TableSelection from "./TableSelection";
import ReservationSummary from "./ReservationSummary";
import Confirmation from "./Confirmation";

import useRestaurants from "./hooks/useRestaurants";
import { useReservationContext } from "./context/ReservationContext";

function Home({ addReservation }) {

  const {
    filteredRestaurants,
    search,
    setSearch,
    location,
    setLocation,
    cuisine,
    setCuisine
  } = useRestaurants();

  const {
    selectedRestaurant,
    date,
    time,
    guests,
    selectedTable,
    specialRequests,
    dietaryPreferences,
    availableTables,
    seatingCapacity,
    selectRestaurant,
    selectTable,
    updateGuests,
    updateDate,
    updateTime,
    setSpecialRequests,
    setDietaryPreferences,
    clearReservation
  } = useReservationContext();

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [reservationPage, setReservationPage] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const inputRef = useRef(null);

  const handleSelectRestaurant = useCallback(
    (restaurant) => {
      selectRestaurant(restaurant);
      setReservationPage(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    [selectRestaurant]
  );

  const details = useMemo(() => {
    return {
      restaurant:
        selectedRestaurant?.name || "Not selected",

      date:
        date || "Not selected",

      time:
        time || "Not selected",

      guests,

      table:
        selectedTable?.name || "Not selected",

      seatingCapacity,

      customerName:
        customerName || "Not provided",

      phone:
        phone || "Not provided",

      dietary:
        dietaryPreferences || "None",

      request:
        specialRequests || "None"
    };
  }, [
    selectedRestaurant,
    date,
    time,
    guests,
    selectedTable,
    seatingCapacity,
    customerName,
    phone,
    dietaryPreferences,
    specialRequests
  ]);

  const confirmReservation = useCallback(() => {

    if (!date || !time || !selectedTable) {
      alert("Please select date, time and table.");
      return;
    }

    if (!customerName || !phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    addReservation();

    setConfirmed(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, [
    date,
    time,
    selectedTable,
    customerName,
    phone,
    addReservation
  ]);

  if (confirmed) {

    return (
      <main className="confirmation-page">

        <Confirmation details={details} />

        <button
          className="home-button"
          onClick={() => {

            setConfirmed(false);
            setReservationPage(false);

            clearReservation();

            setCustomerName("");
            setPhone("");

          }}
        >
          Back to Restaurants
        </button>

      </main>
    );
  }

  if (reservationPage) {

    return (
      <main
        id="reservation"
        className="reservation-page"
      >

        <button
          className="back-top"
          onClick={() => {

            setReservationPage(false);
            clearReservation();

          }}
        >
          ← Back to Restaurants
        </button>

        <div className="reservation-title">

          <p className="small-title">
            BOOK A TABLE
          </p>

          <h1>
            Make Your Reservation
          </h1>

        </div>

        <RestaurantDetail
          restaurant={selectedRestaurant}
        />

        <div className="booking-form">

          {/* Date */}
          <div className="input-group">

            <label>
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                updateDate(e.target.value)
              }
            />

          </div>

          {/* Time */}
          <div className="input-group">

            <label>
              Time
            </label>

            <input
              type="time"
              value={time}
              onChange={(e) =>
                updateTime(e.target.value)
              }
            />

          </div>

          {/* Guests */}
          <div className="input-group">

            <label>
              Guests
            </label>

            <input
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) =>
                updateGuests(e.target.value)
              }
            />

          </div>

        </div>

        {/* Table Selection */}
        <TableSelection
          tables={availableTables}
          table={selectedTable}
          setTable={selectTable}
          guests={guests}
        />

        {/* Customer Information */}
        <div className="customer-box">

          <h2>
            Customer Information
          </h2>

          <div className="booking-form">

            <div className="input-group">

              <label>
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(e.target.value)
                }
              />

            </div>

            <div className="input-group">

              <label>
                Phone
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

            </div>

          </div>

          {/* Dietary Preference */}
          <div className="input-group">

            <label>
              Dietary Preference
            </label>

            <select
              value={dietaryPreferences}
              onChange={(e) =>
                setDietaryPreferences(e.target.value)
              }
            >

              <option value="None">
                None
              </option>

              <option value="Vegetarian">
                Vegetarian
              </option>

              <option value="Vegan">
                Vegan
              </option>

              <option value="Gluten Free">
                Gluten Free
              </option>

            </select>

          </div>

          {/* Special Requests */}
          <div className="input-group">

            <label>
              Special Requests
            </label>

            <textarea
              placeholder="Birthday, window seat, etc."
              value={specialRequests}
              onChange={(e) =>
                setSpecialRequests(e.target.value)
              }
            />

          </div>

        </div>

        {/* Reservation Summary */}
        <ReservationSummary
          details={details}
        />

        <div className="confirmation-area">

          <button
            className="confirm-button"
            onClick={confirmReservation}
          >
            Confirm Reservation
          </button>

        </div>

      </main>
    );
  }

  return (

    <main id="home">

      <section className="hero">

        <p className="hero-small">
          DISCOVER • RESERVE • ENJOY
        </p>

        <h1>
          Find Your Perfect Table
        </h1>

        <p>
          Reserve your table at the best
          restaurants around you.
        </p>

        <SearchBar
          search={search}
          setSearch={setSearch}
          inputRef={inputRef}
        />

      </section>

      <section
        id="restaurants"
        className="restaurant-section"
      >

        <div className="section-heading">

          <div>

            <p className="small-title">
              EXPLORE
            </p>

            <h2>
              Popular Restaurants
            </h2>

          </div>

          <FilterPanel
            cuisine={cuisine}
            setCuisine={setCuisine}
            location={location}
            setLocation={setLocation}
          />

        </div>

        <RestaurantList
          restaurants={filteredRestaurants}
          onSelect={handleSelectRestaurant}
        />

      </section>

    </main>
  );
}

export default Home;