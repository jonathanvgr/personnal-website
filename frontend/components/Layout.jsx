import React from 'react';
import Link from 'next/link'
import { Box, Button, Divider, Slide, Stack } from '@mui/material'
import NoteIcon from '@mui/icons-material/Note';


function Apps() {
    const style = {
        position: "absolute",
        width: "100vw",
        backgroundColor: "background.default",
        justifyContent: "center",
    }

    return (
        <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
            sx={style}
        >
            <Link href="/note">
                <Button size="small" sx={{ color: "text.primary" }} >
                    <Stack alignItems="center">
                        <NoteIcon />
                        Notes
                    </Stack>
                </Button>
            </Link>
        </Stack>
    )
}

export default function Layout({ children }) {
    const [openApps, setOpenApps] = React.useState(false);

    const btnStyle = {
        borderBottom: 2,
        borderColor: "secondary.dark",
        borderRadius: 0,
        color: "white",
        p: 0
    }

    const navStyle = {
        position: "relative",
        p: 2,
        backgroundColor: "background.default",
        justifyContent: "center",
        zIndex: 100,
    }


    return (
        <>
            <header>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={navStyle}
                >
                    <Link href="/">
                        <Button sx={btnStyle} size="large">
                            Accueil
                        </Button>
                    </Link>
                    <Button
                        sx={btnStyle} size="large"
                        onClick={() => setOpenApps(current => !current)}
                    >
                        Apps
                    </Button>
                </Stack>
                <Slide
                    direction="down" in={openApps}
                    mountOnEnter unmountOnExit
                >
                    <Box>
                        <Apps />
                    </Box>
                </Slide>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}