import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'

function Custard() {
  return (
    <div className='custard'>
      <div className='comeback'>
        <button><Link to='/'>Home page</Link></button>
      </div>
    </div>
  );
}

export default Custard;