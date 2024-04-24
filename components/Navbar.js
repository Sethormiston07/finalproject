import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <>
            <nav style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                gap: "2rem",
                justifyContent: "space-between",
                padding: "2rem"
            }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "2rem", fontWeight:700,fontSize:25 }}>

                    <a style={{color:'white'}} href="/">
                        Home
                    </a>
                    <a style={{color:'white'}} href="/cleaner">
                        Golf groovy cleaner
                    </a>
                    <a style={{color:'white'}} href="/bundle">
                        Golf Groovy Club Cleaner & Towel Bundle
                    </a>
                    <a style={{color:'white'}}href="/towel">
                        Golf Groovy Towel
                    </a>
                    <a style={{color:'white'}} href="/Contact">
                        Contact Us
                    </a>
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                    {router.pathname !== "/addtocart" && (
                        <Link href="#">
                            <Button leftIcon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                            }>
                                Cart
                            </Button>
                        </Link>
                    )}
                </div>
            </nav>
        </>
    )
}