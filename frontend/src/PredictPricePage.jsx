import { useState } from "react"


function PredictPricePage({username})
{
    const [errorMessage, setErrorMessage]=useState('')
    const [numberOfBedrooms, setNumberOfBedrooms]=useState('')
    const [numberOfBathrooms, setNumberOfBathrooms]=useState('')
    const [livingAreaSize, setLivingAreaSize]=useState('')
    const [totalLotSize, setTotalLotSize]=useState('')
    const [numberOfFloors, setNumberOfFloors]=useState('')
    const [hasWaterfrontView, setHasWaterFrontView]=useState('')
    const [qualityLevelOfPropertyView, setQualityLevelOfPropertyView]=useState('')
    const [overallConditionRating, setOverallConditionRating]=useState('')
    const [yearPropertyWasBuilt, setYearPropertyWasBuilt]=useState('')
    const [yearPropertyWasLastRenovated, setYearPropertyWasLastRenovated]=useState('')

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

    function handleOverallConditionRating(e){
        setOverallConditionRating(e.target.value);
    }

    function handleYearPropertyWasBuilt(e){
        setYearPropertyWasBuilt(e.target.value);
    }

    function handleYearPropertyWasLastRenovated(e){
        setYearPropertyWasLastRenovated(e.target.value);
    }
    function sendAllDataFunction(){
        if(!numberOfBedrooms || !numberOfBathrooms || !livingAreaSize || !totalLotSize
            || !numberOfFloors || !hasWaterfrontView || !qualityLevelOfPropertyView || !overallConditionRating
            || !yearPropertyWasBuilt || !yearPropertyWasLastRenovated){
            return setErrorMessage("All fields must be completed")
        }

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
        
        Overall condition rating: <input type="number" onChange={(e)=>handleOverallConditionRating(e)} placeholder="A number between 0 and 5" required/> <br/>
        Year property was built: <input type="number" onChange={(e)=>handleYearPropertyWasBuilt(e)} placeholder="A number between 0 and 5" required/> <br/>
        Year property was last renovated: <input type="number" onChange={(e)=>handleYearPropertyWasLastRenovated(e)} placeholder="A number between 0 and 5" required/> <br/>

        <button onClick={sendAllDataFunction}>Send data</button> <br/>
        {errorMessage && <p>{errorMessage}</p>}
        </>
    )
}

export default PredictPricePage