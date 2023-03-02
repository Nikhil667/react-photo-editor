import React from 'react'

export default function Slider({ min, max, value, handleChange, handleImage, downloadImage }) {
  
  return (
    <div className='slider-container'>
      <div className='menu-btn'>
        <input 
          type="file" 
          className='upload-btn' 
          onChange={handleImage}
          />
        <button 
          type="button"
          onClick={downloadImage}
          className="btn"
          >
            Download Image
        </button>
      </div>
      <input 
        type="range" 
        className='slider'
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
