import { useState, useEffect, useMemo } from "react";

function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const [search, setSearch] = useState("");

  const [cuisine, setCuisine] = useState("All");

  const [location, setLocation] = useState("All");

  const [rating, setRating] = useState("");

  const [date, setDate] = useState("");

  const [time, setTime] = useState("");



  useEffect(() => {

    const data = [

      {
        id: 1,
        name: "Spice Garden",
        cuisine: "Indian",
        location: "Downtown",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80"
      },

      {
        id: 2,
        name: "Bella Italia",
        cuisine: "Italian",
        location: "RS Puram",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
      },

      {
        id: 3,
        name: "Urban Grill",
        cuisine: "American",
        location: "Gandhipuram",
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
      },

      {
        id: 4,
        name: "Royal Kitchen",
        cuisine: "Indian",
        location: "RS Puram",
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
      },

      {
        id: 5,
        name: "Pasta Street",
        cuisine: "Italian",
        location: "Downtown",
        rating: 4.4,
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
      },

      {
        id: 6,
        name: "Classic Diner",
        cuisine: "American",
        location: "Gandhipuram",
        rating: 4.3,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
      }

    ];
    setRestaurants(data);
  }, []);

  const filteredRestaurants = useMemo(() => {

    return restaurants.filter((restaurant) => {

      const searchMatch =
        restaurant.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        restaurant.cuisine
          .toLowerCase()
          .includes(search.toLowerCase());


      const cuisineMatch =
        cuisine === "All" ||
        restaurant.cuisine === cuisine;


      const locationMatch =
        location === "All" ||
        restaurant.location === location;


      const ratingMatch =
        rating === "" ||
        restaurant.rating >= Number(rating);


      return (
        searchMatch &&
        cuisineMatch &&
        locationMatch &&
        ratingMatch
      );

    });

  }, [
    restaurants,
    search,
    cuisine,
    location,
    rating
  ]);

  const timeSlots = useMemo(() => {

    if (!date) {
      return [];
    }

    return [
      "12:00 PM",
      "01:00 PM",
      "07:00 PM",
      "08:00 PM",
      "09:00 PM"
    ];

  }, [date]);


  return {

    restaurants,

    filteredRestaurants,

    search,
    setSearch,

    cuisine,
    setCuisine,

    location,
    setLocation,

    rating,
    setRating,

    date,
    setDate,

    time,
    setTime,

    timeSlots

  };
}

export default useRestaurants;