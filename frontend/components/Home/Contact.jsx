import React from 'react'

// MUI
import { Stack, Typography } from '@mui/material';

const Contact = React.forwardRef((props, ref) => {
    return (
        <Stack ref={ref} sx={{ fontSize: 20 }}>
            <Typography align="center">
                Pour me contacter, veuillez utiliser
                <a
                    href="mailto:pro.jonathanvgr@gmail.com"
                    style={{ color: "#fff", textDecoration: "underline", marginLeft: 6 }}
                >
                    mon adresse mail
                </a>
                <br /><br />
                N'hésitez pas à envoyer des retours par rapport au site, que ce soit bugs ou améliorations potentielles !
            </Typography>

        </Stack>
    )
});

export default Contact