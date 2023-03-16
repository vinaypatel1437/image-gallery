import React, { useState } from 'react'
import '../CSS/Header.css';


export default function Header() {
  const [ searchText, setSearchText ] = useState('');
  function func(e) {
    console.log(e.target.value);
  }
  return (
    <div className='header'>
        <h1>Image Gallery</h1>
        <input className='search-bar' type="search" onChange={func} placeholder='search a image...'/>
    </div>
  )
}
