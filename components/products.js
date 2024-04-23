import NumberRange from "./NumberInput"
import { Button, Text } from "@chakra-ui/react"
import Link from "next/link"


export default function ProductCard({ product }) {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h5 style={{ fontSize: "2rem", fontWeight: 700 }}>{product.name}</h5>
                <img width={400} height={400} src={`http://localhost:8090/api/files/${product.collectionId}/${product.id}/${product.image[0]}`} />
                <NumberRange />
                <h5>£{product.price}</h5>
                <a href='/addtocart'><Button style={{ color: "black", }} colorScheme='whatsapp'>
                    <b>
                        Add to cart
                    </b>
                </Button>
                    </a>
                <Link href='https://buy.stripe.com/test_eVaaHg4G52vcdhK5kk'>
                    <Button colorScheme='blue'>Buy now</Button></Link>
            </div>
        </>
    )
}