import React from 'react'

import { Box, Slide, Stack } from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import styles from '../../styles/Home.module.css'

const MySlide = (props) => {
    const TransSpeed = 1500;

    return (
        <Slide
            {...props}
            timeout={TransSpeed}
            in
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: props.delay ? (props.delay * TransSpeed) : 0 }}
        >
            {props.children}
        </Slide>
    )
}

const Strong = (props) => {
    return (
        <strong style={{ display: "block", fontSize: "1.5em", fontWeight: "bold", textTransform: "uppercase", color: "#42A5F5" }}>
            {props.children}
        </strong>
    )
}

const Text = (props) => {
    return (
        <span style={{ display: "block" }}>
            {props.children}
        </span>
    )
}

const Presentation = () => {
    return (
        <Stack justifyContent="space-evenly" height="100%" sx={{ width: { xs: "100%", md: "50%" }, mx: "auto" }}>
            <MySlide direction="right">
                <Box sx={{ lineHeight: 1 }}>
                    <Text>Bienvenue, je suis</Text>
                    <Strong>Jonathan</Strong>
                </Box>
            </MySlide>

            <MySlide direction="left" delay={0.5}>
                <Box sx={{ textAlign: "end", mt: 3, lineHeight: 1 }}>
                    <Text>Je suis un passionné de</Text>
                    <Strong>Programmation</Strong>
                </Box>
            </MySlide>

            <MySlide direction="up" delay={1}>
                <Box sx={{ textAlign: "center", mt: 3, lineHeight: 1.3 }}>
                    <Stack alignItems="center">
                        Vous trouverez ici :
                        <ul style={{ listStyleType: "circle", textAlign: "left", marginTop: 6, fontSize: "0.8em", width: 'fit-content' }}>
                            <li>Une brève présentation de moi</li>
                            <li>Mon parcours scolaire</li>
                            <li>Mes compétences</li>
                            <li>L'objectif de ce site</li>
                            <li>Un moyen de me contacter</li>
                        </ul>
                    </Stack>
                </Box>
            </MySlide>
            <MySlide direction="up" delay={1}>
                <Box textAlign="center">
                    <Stack direction="row" alignItems="center" justifyContent="center" sx={{ fontSize: "2em", mt: 4 }}>
                        <DoubleArrowIcon sx={{ fontSize: "1em", mr: 1 }} className={styles.arrowAnim} />
                        <span style={{ display: "block", fontWeight: "bold", textTransform: "uppercase" }}>
                            Scrollez
                        </span>
                        <DoubleArrowIcon sx={{ fontSize: "1em", ml: 1 }} className={styles.arrowAnim} />
                    </Stack>
                    <span style={{ display: "block", fontSize: "0.7em", position: "relative", top: -12 }}>
                        pour voir la suite
                    </span>
                </Box>
            </MySlide>
        </Stack>
    )
};

export default Presentation