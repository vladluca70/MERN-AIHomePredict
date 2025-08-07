

function PredictPricePage({username})
{
    return(
        <>
        <p>Hello {username}</p> <br/>

        Number of bedrooms: <input placeholder="A number between 0 and 10"/><br/>
        Number of bathrooms: <input placeholder="A number between 0 and 10"/><br/>
        Living area size in square feet: <input placeholder="A number between 100 and 5000"/><br/>
        Total lot size in square feet: <input placeholder="A number between 100 and 40k"/><br/>
        Number of floors: <input placeholder="A number between 1 and 5"/><br/>
        Indicates if property has waterfront view: <input placeholder="0 for no, 1 for yes"/><br/>
        Quality level of property view: <input placeholder="A number between 0 and 5"/>
        </>
    )
}

export default PredictPricePage