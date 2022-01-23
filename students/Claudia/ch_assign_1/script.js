const artworks = [
    {
        key: "ld1",
        image: "./images/mona-lisa.jpeg",
        name: "Mona Lisa",
        size: "77 cm × 53 cm (30 in × 21 in)",
        location: "Louvre, Paris",
        description:
            "Lisa del Giocondo was an Italian noblewoman and member of the Gherardini family of Florence and Tuscany. Her name was given to the Mona Lisa, her portrait commissioned by her husband and painted by Leonardo da Vinci during the Italian Renaissance.",
    },
    {
        key: "ld2",
        image: "./images/last-supper.jpeg",
        name: "The Last Supper",
        size: "700 cm (280 in) × 880 cm (350 in)",
        location: "Convent of Santa Maria delle Grazie in Milan",
        description:
            "The Last Supper portrays the reaction given by each apostle when Jesus said one of them would betray him. All twelve apostles have different reactions to the news, with various degrees of anger and shock. The apostles were identified by their names, using an unsigned, mid-sixteenth-century fresco copy of Leonardo's Cenacolo.[12] Before this, only Judas, Peter, John and Jesus had been positively identified.",
    },
    {
        key: "ld4",
        image: "./images/ave-maria.jpeg",
        name: "Annunciations",
        size: "	98 cm × 217 cm (39 in × 85 in)",
        location: "	Uffizi, Florence",
        description:
            "The Annunciation, also referred to as the Annunciation to the Blessed Virgin Mary, the Annunciation of Our Lady, or the Annunciation of the Lord, is the Christian celebration of the announcement by the angel Gabriel to Mary that she would conceive and bear a son through a virgin birth and become the mother of Jesus Christ, the Christian Messiah and Son of God, marking the Incarnation. Gabriel told Mary to name her son Jesus, meaning 'is salvation'.",
    },
    {
        key: "ld3",
        image: "./images/vitruvian.jpeg",
        name: "Vitruvian Man",
        size: "34.6 cm × 25.5 cm (13.6 in × 10.0 in)",
        location: "Gallerie dell'Accademia, Venice, Italy",
        description:
            "The drawing represents Leonardo's concept of the ideal human body proportions. Its inscription in a square and a circle comes from a description by the ancient Roman architect Vitruvius in Book III of his treatise De architectura.",
    },

    {
        key: "ld5",
        image: "./images/lady-ermine.jpeg",
        name: "Lady with an Ermine",
        size: "54 cm × 39 cm (21 in × 15 in)",
        location: "Czartoryski Museum, Kraków, Poland",
        description:
            "Cecilia Gallerani, born in Siena, Republic of Siena, was the favourite and most celebrated of the many mistresses of Ludovico Sforza, known as Lodovico il Moro, Duke of Milan. She is best known as the subject of Leonardo da Vinci's painting The Lady with an Ermine. ",
    },
]

function Header() {
    return (
        <div className="header">
            <h1>Leonardo da Vinci</h1>
            <p>
                Leonardo da Vinci was a Renaissance painter, sculptor,
                architect, inventor, military engineer and draftsman — the
                epitome of a true Renaissance man. Gifted with a curious mind
                and a brilliant intellect, da Vinci studied the laws of science
                and nature, which greatly informed his work. His drawings,
                paintings and other works have influenced countless artists and
                engineers over the centuries.
            </p>
            <blockquote>
                “Nothing is hidden beneath the sun.”
                <small>—Leonardo da Vinci</small>
            </blockquote>
        </div>
    )
}

function MyCard(props) {
    const isDisabled = props.isDisabled
    const className = isDisabled ? "card disabled" : "card"

    return (
        <div className={className}>
            <img src={props.image} className="img" alt={props.name}></img>
            <div className="description">
                <h2>{props.name}</h2>
                <h5>{"Dimensions: " + props.size}</h5>
                <h5>{"Location: " + props.location}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

ReactDOM.render(
    <div>
        <Header />
        <div className="container">
            {artworks.map((artworksElem) => {
                return <MyCard {...artworksElem} />
            })}
        </div>
        <cite>Design: Claudia Hernandez | References: Wikipedia</cite>
    </div>,
    document.getElementById("root")
)
