import NumberRange from "./NumberInput"
import { Button, Text } from "@chakra-ui/react"
import Link from "next/link"
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from "react";


export default function ProductCard({ product }) {
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h5 style={{ color: 'white', fontSize: "2rem", fontWeight: 700 }}>{product.name}</h5>
                <img width={500} height={300} src={`https://golf-groovy.pockethost.io/api/files/${product.collectionId}/${product.id}/${product.image[0]}`} />
                <NumberRange />
                <a style={{ color: 'white', fontSize: "2rem", fontWeight: 700 }}>£{product.price}</a>
                <a href='/addtocart'><Button style={{ color: 'white', }} colorScheme='whatsapp'>
                    <b>
                        Add to cart
                    </b>
                </Button>
                </a>
                <form action={`/api/checkout_sessions?price_id=${product.price_id}`} method="POST">
                    <section>
                        <Button colorScheme='blue' type="submit" role="link">Buy now</Button>
                    </section>
                </form>
            </div>
        </>
    )
}