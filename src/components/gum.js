import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function Gum() {
  return (
    <div className='gum'>
      <div className='comeback'>
        <button><Link to='/'>Home page</Link></button>
      </div>
    </div>
  );
}

export default Gum;