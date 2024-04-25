import "./Home.scss"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to PUNK API</h1>
        <main>
            <h2>A cool database that contains everything BEER!</h2>
            <p>This webpage allows you to search for your favourite beer or maybe you're just curious to know what's out there! Find out all the important information such as the Alcohol level of each beer, or more interesting facts such as which food pairing goes best with it! </p>
            <Link to="/cards">see beer cards</Link>
        </main>
      </header>
    </div>
  )
}

export default Home
