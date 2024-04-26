import "./NavigationBar.scss"

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <button className="nav-bar__home">Home</button>
      <h1 className="nav-bar__heading">Beer-Necessities</h1>
      <button className="nav-bar__cards">All Cards</button>
    </nav>
  )
}

export default NavigationBar
