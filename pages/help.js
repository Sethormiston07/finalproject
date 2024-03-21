import Navbar from "@/components/Navbar";
import NumberRange from "@/components/NumberInput";
import { Button } from "@chakra-ui/react";

export default function HelpPage() {
    return (
        <>
        <Navbar />
        <NumberRange />
        <Button style={{
            color:"black"
        }} colorScheme='whatsapp'><b>
            Add to cart
            </b>
            </Button>
            
    



        </>
    )
}
