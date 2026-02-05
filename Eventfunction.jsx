function Eventfunction() {

    function myfunction() {
        alert("This is my function");
    }
    const city=(cityName)=>{
       alert(cityName);
    }

    return (
        <>
            <h2>My React Program</h2>
            <button onClick={()=>city("Islamabad")}>Islamabad</button>
            <button onClick={()=>city("Lahore")}>Lahore</button>
        </>
    );
}

export default Eventfunction;
 