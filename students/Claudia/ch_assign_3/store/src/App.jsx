import { Header } from "./components/Header"
import { ProductCard } from "./components/ProductCard"
import { ProductsList } from "./components/ProductsList"
import { products } from "./products"
import { useState } from "react"

export function App() {
    const [productId, setProductId] = useState("")
    const [cartIds, setCartIds] = useState([])

    function addToCart(id) {
        setCartIds((currCartIds) => [...currCartIds, id])
    }

    let content
    if (!productId) {
        content = (
            <ProductsList>
                {products.map((product) => {
                    return (
                        <ProductCard
                            setProductId={() => setProductId(product.id)}
                            addToCart={() => addToCart(product.id)}
                            id={product.id}
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            imgSrc={product.imgSrc}
                            imgAlt={product.imgAlt}
                            price={product.price}
                        />
                    )
                })}
            </ProductsList>
        )
    } else {
        const product = products.find((elem) => elem.id === productId)

        content = (
            <ProductCard
                setProductId={() => setProductId("")}
                id={product.id}
                key={product.id}
                name={product.name}
                description={product.description}
                imgSrc={product.imgSrc}
                imgAlt={product.imgAlt}
                price={product.price}
            />
        )
    }

    return (
        <>
            <Header />
            {cartIds.map((id) => {
                return <div>{id}</div>
            })}
            {content}
        </>
    )
}
