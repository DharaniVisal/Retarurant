function Header({ reservations }) {
  return (
    <header className="header">
      <div className="logo">
        FOODIE SPOT
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#restaurants">Restaurants</a>
        <a href="#reservation">
          🛒 Reservations ({reservations})
        </a>
      </nav>
      <div className="profile">
        👤
      </div>
    </header>
  );
}
export default Header;