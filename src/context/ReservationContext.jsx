import { createContext, useContext } from "react";
import useReservation from "../hooks/useReservation";

const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const reservation = useReservation();

  return (
    <ReservationContext.Provider value={reservation}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservationContext() {
  return useContext(ReservationContext);
}