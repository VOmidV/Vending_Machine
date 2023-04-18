import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='main'>
      <div className='links'>
        <Link to='/custard' className='options'>Custard  <img src='https://em-content.zobj.net/thumbs/120/apple/354/custard_1f36e.png'/></Link>
        <Link to='/soda'  className='options'>Soda <img src='https://em-content.zobj.net/thumbs/120/apple/354/cup-with-straw_1f964.png'/></Link>
        <Link to='/gum'  className='options'>Gum <img src='https://em-content.zobj.net/thumbs/120/apple/354/candy_1f36c.png'/></Link>
        
      </div>
    </div>
  );
}

export default Home;