import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function Soda() {
  return (
    <div className='soda'>
      <div className='comeback'>
        <button><Link to='/'>Home page</Link></button>
      </div>
    </div>
  );
}

export default Soda;