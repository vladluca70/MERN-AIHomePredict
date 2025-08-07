import { useState } from "react"


function PredictPricePage({username})
{
    const [numberOfBedrooms, setNumberOfBedrooms]=useState('')
    const [numberOfBathrooms, setNumberOfBathrooms]=useState('')
    const [livingAreaSize, setLivingAreaSize]=useState('')
    const [totalLotSize, setTotalLotSize]=useState('')
    const [numberOfFloors, setNumberOfFloors]=useState('')
    const [hasWaterfrontView, setHasWaterFrontView]=useState('')
    const [qualityLevelOfPropertyView, setQualityLevelOfPropertyView]=useState('')

    function handleNumberOfBedrooms(e){
        setNumberOfBedrooms(e.target.value);
    }

    function handleNumberOfBathrooms(e){
        setNumberOfBathrooms(e.target.value);
    }

    function handleLivingAreaSize(e){
        setLivingAreaSize(e.target.value);
    }

    function handleTotalLotSize(e){
        setTotalLotSize(e.target.value);
    }

    function handleNumberOfFloors(e){
        setNumberOfFloors(e.target.value);
    }

    function handleHasWaterFrontView(e){
        setHasWaterFrontView(e.target.value);
    }

    function handleQualityLevelOfPropertyView(e){
        setQualityLevelOfPropertyView(e.target.value);
    }

    return(
        <>
        <p>Hello {username}</p> <br/>

        Number of bedrooms: <input type="number" onChange={(e)=>handleNumberOfBedrooms(e)} placeholder="A number between 0 and 10" required/><br/>
        Number of bathrooms: <input type="number" onChange={(e)=>handleNumberOfBathrooms(e)} placeholder="A number between 0 and 10" required/><br/>
        Living area size in square feet: <input type="number" onChange={(e)=>handleLivingAreaSize(e)} placeholder="A number between 100 and 5000" required/><br/>
        Total lot size in square feet: <input type="number" onChange={(e)=>handleTotalLotSize(e)} placeholder="A number between 100 and 40k" required/><br/>
        Number of floors: <input type="number" onChange={(e)=>handleNumberOfFloors(e)} placeholder="A number between 1 and 5" required/><br/>
        Indicates if property has waterfront view: <input type="number" onChange={(e)=>handleHasWaterFrontView(e)} placeholder="0 for no, 1 for yes" required/><br/>
        Quality level of property view: <input type="number" onChange={(e)=>handleQualityLevelOfPropertyView(e)} placeholder="A number between 0 and 5" required/> <br/>
        <button>Send data</button>
        </>
    )
}

export default PredictPricePage