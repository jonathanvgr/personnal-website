import React from 'react'

// MUI
import { Box, Rating, Typography, Stack, Grid } from '@mui/material';

import { SkillsItems } from "../../constants"

const Skill = (props) => {
    return (
        <Box sx={{ width: "fit-content" }}>
            <Typography component="legend" sx={{ width: "fit-content" }}>{props.title}</Typography>
            <Typography component="legend" sx={{ width: "fit-content" }} variant="caption">{props.subtitle}</Typography>
            <Rating name={props.title} value={props.value} readOnly />
        </Box>
    )
}

const Scaling = (props) => {
    return (
        <Stack alignItems="center" maxWidth="20%">
            <Rating name="scaling 1" size="large" max={1} value={1} readOnly sx={{ color: "#fff6" }} />
            <Typography component="legend" align="center">{props.children}</Typography>
        </Stack>
    )
}


const Skills = () => {
    return (
        <Stack alignItems="center" justifyContent="space-evenly" height="100%">
            <Stack direction="row" justifyContent="space-around" mb={2}>
                <Scaling>Connaît</Scaling>
                <Scaling>Bases</Scaling>
                <Scaling>Bon</Scaling>
                <Scaling>Très bon</Scaling>
                <Scaling>A toute épreuve</Scaling>
            </Stack>

            <Grid container spacing={2} columns={2} justifyContent="center" sx={{ flexDirection: { xs: "row", sm: "column" }, width: "auto" }}>
                {SkillsItems.map((skill) => (
                    <Grid item xs sm key={skill.name}>
                        <Skill
                            title={skill.name}
                            value={skill.value}
                            subtitle={skill.subtitle}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="body1" align="center" mt={2}>
                Je suis une personne curieuse, touche-à-tout ce qui fait de moi quelqu'un de polyvalent. <br />
                J'aime découvrir de nouvelles choses, apprendre des autres et je reste à jour sur l'actualité de la programmation via Youtube.
            </Typography>
        </Stack >
    )
}

export default Skills