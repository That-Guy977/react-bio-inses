import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="/react-bio-inses">
        <img src="/react-bio-inses/logo.png" alt="Bio-INSES" height="100" />
      </Link>
      <div>
        <h1 className="title">Bio-INSES</h1>
        <h2 className="subtitle">Biological Control</h2>
      </div>
    </header>
  )
}

export default Header;
