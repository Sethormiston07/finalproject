import NumberRange from "./NumberInput"
import { Button, Text } from "@chakra-ui/react"
import Link from "next/link"


export default function ProductCard({ product }) {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h5 style={{color:'white', fontSize: "2rem", fontWeight: 700 }}>{product.name}</h5>
                <img width={500} height={300} src={`http://localhost:8090/api/files/${product.collectionId}/${product.id}/${product.image[0]}`} />
                <NumberRange />
                <a style={{color:'white',fontSize: "2rem", fontWeight: 700 }}>£{product.price}</a>
                <a href='/addtocart'><Button style={{ color: 'white', }} colorScheme='whatsapp'>
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