export default function Navbar() {
    return (
        <>
            <nav style={{
                display: "flex",
                flexDirection: "row",
                minWidth: "full",
                gap: "2rem",
                justifyItems: "center"
            }}>

                <a href="/">
                    <p>Home</p>
                </a>
                <a href="/help">
                    <p>Help</p>
                </a>
            </nav>
        </>
    )
}