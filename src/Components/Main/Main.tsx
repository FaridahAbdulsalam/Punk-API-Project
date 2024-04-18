import React from 'react'
import "./Main.scss";
import beers from '../../Data/beers';
import Card from '../Card/Card';


const Main = () => {
  return (
    <div className='main'>
      <h1>Main Page</h1>
      <section>
        <Card image={beers[0].image_url} name={beers[0].name} tagline={beers[0].tagline}/>
      </section>
    </div>
  )
}

export default Main
