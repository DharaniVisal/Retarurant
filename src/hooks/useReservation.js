import {
  useState,
  useMemo,
  useCallback,
  useEffect
} from "react";

function useReservation() {

  const [selectedRestaurant, setSelectedRestaurant] =
    useState(null);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [selectedTable, setSelectedTable] =
    useState(null);

  const [specialRequests, setSpecialRequests] =
    useState("");

  const [dietaryPreferences, setDietaryPreferences] =
    useState("");

  useEffect(() => {

    const saved =
      localStorage.getItem("reservation");

    if (saved) {

      const data = JSON.parse(saved);

      setSelectedRestaurant(data.selectedRestaurant);
      setDate(data.date);
      setTime(data.time);
      setGuests(data.guests);
      setSelectedTable(data.selectedTable);
      setSpecialRequests(data.specialRequests);
      setDietaryPreferences(data.dietaryPreferences);

    }

  }, []);

  useEffect(() => {

    const reservation = {
      selectedRestaurant,
      date,
      time,
      guests,
      selectedTable,
      specialRequests,
      dietaryPreferences
    };

    localStorage.setItem(
      "reservation",
      JSON.stringify(reservation)
    );

  }, [
    selectedRestaurant,
    date,
    time,
    guests,
    selectedTable,
    specialRequests,
    dietaryPreferences
  ]);

  const tables = [
    { id: 1, name: "Table 1", capacity: 2 },
    { id: 2, name: "Table 2", capacity: 4 },
    { id: 3, name: "Table 3", capacity: 6 },
    { id: 4, name: "Table 4", capacity: 8 }
  ];

  const availableTables = useMemo(() => {

    return tables.filter(
      (table) => table.capacity >= guests
    );

  }, [guests]);

  const seatingCapacity = useMemo(() => {

    return selectedTable
      ? selectedTable.capacity
      : 0;

  }, [selectedTable]);

  const numberOfGuests = useMemo(() => {

    return guests;

  }, [guests]);

  const reservationDetails = useMemo(() => {

    return {
      restaurant: selectedRestaurant,
      date,
      time,
      guests,
      table: selectedTable,
      specialRequests,
      dietaryPreferences
    };

  }, [
    selectedRestaurant,
    date,
    time,
    guests,
    selectedTable,
    specialRequests,
    dietaryPreferences
  ]);

  const tableAvailable = useMemo(() => {

    return availableTables.length > 0;

  }, [availableTables]);

  const selectRestaurant = useCallback(
    (restaurant) => {

      setSelectedRestaurant(restaurant);
      setSelectedTable(null);

    },
    []
  );

  const selectTable = useCallback(
    (table) => {

      setSelectedTable(table);

    },
    []
  );

  const updateGuests = useCallback(
    (value) => {

      setGuests(Number(value));
      setSelectedTable(null);

    },
    []
  );

  const updateDate = useCallback(
    (value) => {

      setDate(value);
      setTime("");

    },
    []
  );

  const updateTime = useCallback(
    (value) => {

      setTime(value);

    },
    []
  );

  const clearReservation = useCallback(
    () => {

      setSelectedRestaurant(null);
      setDate("");
      setTime("");
      setGuests(2);
      setSelectedTable(null);
      setSpecialRequests("");
      setDietaryPreferences("");

      localStorage.removeItem("reservation");

    },
    []
  );

  return {
    selectedRestaurant,
    date,
    time,
    guests,
    selectedTable,
    specialRequests,
    dietaryPreferences,

    setSpecialRequests,
    setDietaryPreferences,

    availableTables,
    seatingCapacity,
    numberOfGuests,
    reservationDetails,
    tableAvailable,

    selectRestaurant,
    selectTable,
    updateGuests,
    updateDate,
    updateTime,
    clearReservation
  };
}

export default useReservation;