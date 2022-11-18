import Note from "../components/Note"

// MUI
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box, Card, CardContent, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export async function getServerSideProps() {
    const res = await fetch("http://localhost:8080/api/note/")
    const data = await res.json()

    return { props: { data } }
}

function DummyNote(props) {
    return (
        <Card sx={{ width: "100%", height: "150px" }}>
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
    const addNote = () => {
        fetch('http://localhost:8080/api/note/', {
            method: 'POST',
            body: {
                Name: "Note"
            },
        })
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
                    <DummyNote addNote={addNote} />
                </Grid2>
            </Grid2>
        </Box>

    )
}