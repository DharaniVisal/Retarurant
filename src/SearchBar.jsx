function SearchBar({
  search,
  setSearch,
  inputRef
}) {

  return (
    <div className="search-box">

      <span className="search-icon">
        🔍
      </span>

      <input
        ref={inputRef}
        className="search-bar"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search restaurant or cuisine..."
      />

    </div>
  );
}

export default SearchBar;