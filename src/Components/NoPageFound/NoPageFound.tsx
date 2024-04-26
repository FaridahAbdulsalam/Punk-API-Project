import { Link } from 'react-router-dom'

const NoPageFound = () => {
  return (
    <div>
      <h1>
        404 Page does not exist
      </h1>
      <Link to="/">
      <h2>
        Hop along back to home
      </h2>
      </Link>
    </div>
  )
}

export default NoPageFound
