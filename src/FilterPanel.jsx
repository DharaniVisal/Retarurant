function FilterPanel({
  cuisine,
  setCuisine,
  location,
  setLocation
}) {

  return (
    <div className="filters">

      <select
        value={cuisine}
        onChange={(e) =>
          setCuisine(e.target.value)
        }
      >

        <option value="All">
          All Cuisines
        </option>

        <option value="Indian">
          Indian
        </option>

        <option value="Italian">
          Italian
        </option>

        <option value="American">
          American
        </option>

      </select>


      <select
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      >

        <option value="All">
          All Locations
        </option>

        <option value="Downtown">
          Downtown
        </option>

        <option value="RS Puram">
          RS Puram
        </option>

        <option value="Gandhipuram">
          Gandhipuram
        </option>

      </select>

    </div>
  );
}

export default FilterPanel;