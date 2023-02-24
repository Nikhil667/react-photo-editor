import { useState } from 'react'
import './App.css'
import Slider from './CustomComponent/Slider'
import SidebarItem from './CustomComponent/SidebarItem'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'GrayScale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
]

function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  function handleSliderChange({ target }){
    setOptions(prev => {
      return prev.map((a, index) => {
        if(index !== selectedOptionIndex) return a
        return { ...a, value: target.value }
      })
    })
  }

  function getImageStyle(){
    const filters = options.map(opt => {
      return `${opt.property}(${opt.value}${opt.unit})`
    })

    return { filter: filters.join(' ') }
  }

  return (
    <div className="container">
      <div className="main-image" style={getImageStyle()}></div>
      <div className="sidebar">
        {options.map((ele, index) => {
          return (
            <SidebarItem
            key={index}
            name={ele.name}
            active={index === selectedOptionIndex}
            handleClick={(() => setSelectedOptionIndex(index))}
            />
          )
        })}
      </div>
      <Slider
        min={selectedOption.range.min}
        max={selectedOption.range.max}
        value={selectedOption.value}
        handleChange={handleSliderChange}
      />
    </div>
  );
}

export default App;
