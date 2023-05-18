import React, { useState } from 'react'
import SliderComp from './SliderComp'
import Title from '../components/Title'
function SliderApp() {
    const [slideValue, setSlideValue] = useState(0)
    const handleSliderValueChange = e => {
        setSlideValue(e.target.value)
    }

    let bgColor
    let textColor

    if (slideValue < 25) {
        bgColor = 'black'
        textColor = 'white'
    }
    if (slideValue >= 25 && slideValue <= 50) {
        bgColor = 'purple'
        textColor = 'white'
    }
    if (slideValue >= 51 && slideValue <= 75) {
        bgColor = 'green'
        textColor = 'lightgray'
    }
    if (slideValue > 75) {
        bgColor = 'orange'
        textColor = 'white'
    }
    if (slideValue === 100) {
        bgColor = 'red'
        textColor = 'white'
    }
    return (
        <div className="container text-center">
            <Title text={'Slide to Grow'} />
            <SliderComp
                setValue={slideValue}
                handleInput={handleSliderValueChange}
                bgColor={bgColor}
                textColor={textColor}
            />
        </div>
    )
}

export default SliderApp
