// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("http://localhost:8080/api/note/")
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default function Home({ data }) {
    return <h1>{data}</h1>
}