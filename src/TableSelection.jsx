function TableSelection({
  tables,
  table,
  setTable,
  guests
}) {

  if (tables.length === 0) {
    return (
      <div className="table-selection">
        <h2>Select a Table</h2>
        <p>No tables available</p>
      </div>
    );
  }

  return (
    <div className="table-selection">

      <h2>Select a Table</h2>

      <div className="table-grid">

        {tables.map((item) => (
          <button
            key={item.id}
            className={
              table?.id === item.id
                ? "table-card selected"
                : "table-card"
            }
            onClick={() => setTable(item)}
          >
            <strong>{item.name}</strong>
            <span>
              Seats {item.capacity}
            </span>
          </button>
        ))}

      </div>

      {!table && (
        <p>
          Please select a table
        </p>
      )}

    </div>
  );
}

export default TableSelection;