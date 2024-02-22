import { Link } from 'react-router-dom'

function NavButton({ route, text }: NavButtonProps) {
  return (
    <div className="navbutton">
      <Link to={route}>{text}</Link>
    </div>
  )
}

interface NavButtonProps {
  route: string;
  text: string;
}

export default NavButton
