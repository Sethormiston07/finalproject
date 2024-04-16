import NumberRange from "./NumberInput"
import { Button,Text } from "@chakra-ui/react"

export default function ProductCard({ product }) {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h5 style={{ fontSize: "2rem", fontWeight: 700 }}>{product.name}</h5>
                <img width={400} height={400} src={`https://golf-groovy.pockethost.io/api/files/${product.collectionId}/${product.id}/${product.image[0]}`} />
                <NumberRange />
                <h5>£{product.price}</h5>
                <Button style={{
                    color: "black"
                }} colorScheme='whatsapp'><b>
                        Add to cart
                    </b>
                </Button>
                <Button colorScheme='blue'>Buy with shop pay</Button>
                <Text as='a' target='_blank' style={{ textDecoration: "underline" }} href='/payment'>More payment options</Text>
            </div>
        </>
    )
}