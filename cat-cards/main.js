const profiles = [
    {
        key: "ksdjgaskjhfiwuehnckjvksdb",
        name: "Ned",
        subheader: "Posted on 9th September, by disneylandcats in Cat Profiles",
        text: "It’s been ages since I last took to my blog, but here is another of our famous Cat Profiles. This post focuses on Ned—a well-known staple around the Disneyland Hotel and Trader Sam’s. Thanks to @chasingwhiterabbitsforfun and @chriskenner for the pictures in this post.",
    },
    {
        key: "sfnowebvoweincoiwengvl",
        name: "Lucian",
        subheader: "Posted on 3rd April, by disneylandcats in Cat Profiles",
        text: "We’ve had several pretty serious posts from the human recently, so I thought I’d pep up this blog with another one of my lovely Cat Profiles! Today we are going to learn about Lucian. Thanks to Instagram users @youreakitty and @jennifersothy for the lovely photos. ",
    },
    {
        key: "kajsfhiuaghfiuahfisudghkey",
        name: "Buford",
        subheader: "Posted on 21st November, by disneylandcats in Cat Profiles",
        text: "We’ve had a pretty crazy November in terms of media attention. You might have seen the article about our Instagram that was featured on the LAist blog.",
    },
    {
        key: "apsfmaosijgosihgi",
        name: "Buford",
        subheader: "Posted on 21st November, by disneylandcats in Cat Profiles",
        text: "We’ve had a pretty crazy November in terms of media attention. You might have seen the article about our Instagram that was featured on the LAist blog.",
    },
]

function MyCatCard(props) {
    const isDisabled = props.isDisabled
    const className = isDisabled ? "card disabled" : "card"

    return (
        <div className={className}>
            <h1>{"Cat Profile: " + props.name}</h1>
            <h6>{props.subheader}</h6>
            <p>{props.text}</p>
        </div>
    )
}

ReactDOM.render(
    <div className="container">
        {profiles.map((profileElem) => {
            return <MyCatCard {...profileElem} />
        })}
    </div>,
    document.getElementById("root")
)

// ReactDOM.render(
//     <div className="container">
//         <MyCatCard {...profiles[0]} />
//         <MyCatCard {...profiles[1]} />
//         <MyCatCard {...profiles[2]} />
//     </div>,
//     document.getElementById("root")
// )
// ReactDOM.render(
//     <MyCatCard
//         name={profiles[0].name}
//         subheader={profiles[0].subheader}
//         text={profiles[0].text}
//     />,
//     document.getElementById("container")
// )
