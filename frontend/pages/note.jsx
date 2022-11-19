import Note from "../components/Note"
import { useRouter } from "next/router"
import API from "../API";

// MUI
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box, Card, CardContent, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export async function getServerSideProps() {
    const res = await API.get("/note")
    const data = await res.json()

    return { props: { data } }
}

function NewNote(props) {
    return (
        <Card sx={{ width: "100%", minHeight: "150px", height: "100%" }}>
            <CardContent sx={{ height: "100%" }}>
                <Button
                    color="note"
                    variant="outlined"
                    startIcon={<AddIcon />}
                    fullWidth
                    sx={{
                        height: "100%",
                        borderStyle: "dashed",
                    }}
                    onClick={props.addNote}
                >
                    Ajouter
                </Button>
            </CardContent>
        </Card>
    )
}

export default function Home({ data }) {
    const router = useRouter();

    const addNote = async () => {
        await API.post("/note", JSON.stringify({ Name: "Note" }))
            .then(() => router.replace(router.asPath)); // Refresh page
    }

    return (
        <Box sx={{ overflow: "scroll", px: 2, pb: "50vh" }}>
            <Grid2 container spacing={2} columns={6} >
                {data["data"].map((note) => (
                    <Grid2 xs={6} sm={3} md={2} lg={1} key={note.ID} >
                        <Note data={note} />
                    </Grid2>
                ))}
                <Grid2 xs={6} sm={3} md={2} lg={1} >
                    <NewNote addNote={addNote} />
                </Grid2>
            </Grid2>
        </Box>

    )
}