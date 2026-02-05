function Jscode() {
    const Fullname = "Awais Azam";
    let age = 23;
    let x = 88;
    let y = 84;

    function city() {
        alert("Lahore");
    }

    function calc(a, b) {
        return a + b;
    }

    const emp= {
        empName: "Awais",
        empSalery: 45000,
        empEmail: "awais3343@gmail"
    };
     let Colours=["red","blue","Green","Black"]
    return (
        <>
            <h1>JS code run</h1>
            <h2>{Fullname} is {age} year old</h2>
            <h2>{x + y}</h2>
            <h2>{calc(40, 33)}</h2>
            <h2>{emp.empEmail}</h2>
            <h2>Clour:{Colours[3]}</h2>
            <input type="text" name="" value={Fullname}i />
            <button>Press me</button>

            {/* Button is the correct way to call a function */}
            {/* <button onClick={city}>Show City</button> */}
        </>
    );
}

export default Jscode;
