export default function Navbar() {
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
<div style={{ display: "flex", flexDirection: "row", gap:"2rem"}}>

                <a href="/">
                    <p>Home</p>
                </a>
                <a href="/cleaner">
                    <p>Golf groovy cleaner</p>
                </a>
                <a href="/bundle">
                    <p>Golf Groovy Club Cleaner & Towel Bundle</p>
                </a>
                <a href="/towel">
                    <p>Golf Groovy Towel</p>
                </a>
                <a href="/help">
                    <p>Help</p>
                </a>
</div>
<div style={{ display: "flex", flexDirection: "row", gap:"2rem"}}>

                <p style={{}}>cart</p>
</div>
            </nav>
        </>
    )
}