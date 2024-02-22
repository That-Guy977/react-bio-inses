import NavButton from './NavButton'

function Navigation() {
  return (
    <nav>
      <NavButton route="detect" text="Detect Insects" />
      <NavButton route="simulation" text="Simulation" />
    </nav>
  )
}

export default Navigation
