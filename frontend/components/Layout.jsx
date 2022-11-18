import React from 'react';
import Link from 'next/link'
import { Box, Button, Divider, Slide, Stack, Fade } from '@mui/material'
import NoteIcon from '@mui/icons-material/Note';

function Apps({ open }) {
    const style = {
        width: "100vw",
        backgroundColor: "background.default",
        justifyContent: "center",
    }

    return (
        <>
            <Slide
                direction="down" in={open}
                mountOnEnter unmountOnExit
            >
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
            </Slide>
        </>
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

    const drawerStyle = {
        position: "fixed",
        inset: 0,
        top: 60,
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        zIndex: 90,
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

                <Fade in={openApps}>
                    <Box
                        onClick={() => setOpenApps(false)}
                        onWheel={() => setOpenApps(false)}
                        sx={drawerStyle}
                    >
                        <Apps open={openApps} />
                    </Box>
                </Fade>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}