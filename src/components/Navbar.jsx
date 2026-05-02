function Navbar() {
  return (
    <header className="navbar">
        <div className="logo">KINDLE LINK</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Resources</a>
          <a href="#">Mock Exams</a>
          <a href="#">Courses</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
        <div className="auth-links">
          <a href="#">Student Login</a>
          <a href="#">Teacher Login</a>
        </div>
      </header>
  );
}

export default Navbar;