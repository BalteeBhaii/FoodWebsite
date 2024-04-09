import React, { useState } from 'react'

const Header = ({handleSearch}) => {
  const [searchTerm , setSearchTerm] = useState("")
  const handleClick = () => {
    handleSearch(searchTerm)
    setSearchTerm("")
  }
  return (
    <header className="main_header">
    <div className="text-container">
      <h1 className="header-title">
        Look for <span>Banger</span> Food
      </h1>
      <p className="header-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, fugit dignissimos quasi sint enim unde numquam deserunt quibusdam quod magnam.
      </p>
      <div className="header-input-container">
        <input type="text" placeholder='Enter a recipe...' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} />
        <button onClick={handleClick}>Search </button>
      </div>
    </div>
    <div>
      <img src="https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=1060&t=st=1712161194~exp=1712161794~hmac=533ac22b6972df5fc55c4c355b2ab81b0c7796e715d22ad46b07f400293c32e3" alt="" className='main_img' />
    </div>
  </header>
  )
}

export default Header