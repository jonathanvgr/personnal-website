import Note from "../components/Note"
import { useRouter } from "next/router"
import Head from "next/head";
import API from "../API";

// MUI
import Grid2 from '@mui/material/Unstable_Grid2';
import { Box, Card, CardContent, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export async function getServerSideProps() {
    const res = await API.get("/note/")
    console.log(res);
    const data = await res.data

    return { props: { data } }
}

function NewNote(props) {
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

export default function Home(props) {
    const router = useRouter();

    const data = props.data["data"] || []

    const addNote = async () => {
        await API.post("/note/", { Name: "Note" })
            .then(() => router.replace(router.asPath)) // Refresh page
    }

    return (
        <Box sx={{ overflow: "scroll", px: 2, pb: "50vh" }}>
            <Head>
                <title>Mon Portfolio - Notes</title>
            </Head>
            <Grid2 container spacing={2} columns={6} >
                {data.map((note) => (
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