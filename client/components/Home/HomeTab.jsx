import React from 'react'
import { Box } from '@mui/material'

const HomeTab = React.forwardRef((props, ref) => {
    const offsetTop = (props.index) * 100;

    return (
        <Box
            sx={{
                position: "absolute",
                top: `calc(${offsetTop}vh)`,
                width: "100%",
                height: `calc(100vh - 60.25px)`, // 60.25px = Navbar height
                px: 2,
                fontSize: 24,
            }}
            ref={ref}
        >
            {props.display}
        </Box>
    )
});

export default HomeTab