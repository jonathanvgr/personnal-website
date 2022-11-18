import Note from "../components/Note"
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("http://localhost:8080/api/note/")
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default function Home({ data }) {
    return (
        <Grid2 container spacing={2} columns={6} >
            {data.data.map((note) => (
                <Grid2 xs={6} sm={3} md={2} lg={1} key={note.ID} >
                    <Note data={note} />
                </Grid2>
            ))}
        </Grid2>
    )
}