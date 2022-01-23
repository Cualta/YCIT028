const carProfiles = [
    {
        key: "B1bHxSI9mI",
        car: "2018 Mercedes-Benz C-Class",
        transmission: "Automatic",
        mileage: "62,589 km",
        price: "$56,790",
        imgUrl: "https://s3.amazonaws.com/products-images-01/104599240.jpg",
    },
    {
        key: "39446aUIIn",
        car: "2018 BMW 4 Series",
        transmission: "Automatic",
        mileage: "42,635 km",
        price: "$35,600",
        imgUrl: "https://s3.amazonaws.com/products-images-01/105252401.jpg",
    },
    {
        key: "JUkqCGKMNK",
        car: "2014 Volkswagen Golf",
        transmission: "Automatic",
        mileage: "133,900 km",
        price: "$13,600",
        imgUrl: "https://s3.amazonaws.com/products-images-01/103828487.jpg",
    },
    {
        key: "t0iv9IokI4",
        car: "2017 Subaru WRX",
        transmission: "Manual",
        mileage: "104,000 km",
        price: "$23,590",
        imgUrl: "https://s3.amazonaws.com/products-images-01/104388503.jpg",
    },
    {
        key: "gdW9uwOzPb",
        car: "2021 Porsche 911",
        transmission: "Automatic",
        mileage: "2,300 km",
        price: "$183,900",
        imgUrl: "https://s3.amazonaws.com/products-images-01/104143533.jpg",
    },
    {
        key: "CODsLGvJ25",
        car: "2019 Buick Enclave",
        transmission: "Automatic",
        mileage: "49,012 km",
        price: "$49,995",
        imgUrl: "https://s3.amazonaws.com/products-images-01/104804893.jpg",
    },
]

function MyCar(props) {
    return (
        (<div>source</div>),
        (
            <div className="carCard">
                <img className="car" src={props.imgUrl}></img>
                <h2 className="carName">{props.car}</h2>
                <img className="icon" src="images/gear.png"></img>
                <h3 className="transmission">{props.transmission}</h3>
                <img className="icon" src="images/mileage.png"></img>
                <h3 className="mileage">{props.mileage}</h3>
                <h1 className="price">{props.price}</h1>
            </div>
        )
    )
}

ReactDOM.render(
    <div className="container">
        {carProfiles.map((carProfiles) => {
            return <MyCar {...carProfiles} />
        })}
    </div>,
    document.getElementById("root")
)
