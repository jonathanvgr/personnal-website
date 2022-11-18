import React, { useContext, useRef } from 'react'

// MUI
import { Card, CardContent, CardHeader, TextField, IconButton, InputAdornment, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    const data = props.data

    const convertDate = (str) => {
        return new Date(Date.parse(str)).toLocaleString('fr', { dateStyle: "short", timeStyle: "short" });
    }

    return (
        <Card sx={{ height: "100%" }}>
            <CardHeader
                title={
                    <TextField
                        variant="standard"
                        InputProps={{
                            sx: { fontSize: (theme) => theme.typography["h5"] },
                            disableUnderline: true,
                            endAdornment: (
                                <Stack direction="row" alignItems="center">
                                    <InputAdornment position="end" ># {data.ID}</InputAdornment>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            )
                        }}
                        defaultValue={data.Name}
                        name="Name"
                    />
                }
                subheader={data.CreatedAt ? convertDate(data.CreatedAt) : ""}
            />
            <CardContent>
                <TextField
                    variant="standard"
                    InputProps={{ disableUnderline: true, sx: { fontSize: (theme) => theme.typography["h6"] } }}
                    defaultValue={data.Items}
                    multiline
                />
            </CardContent>
        </Card>
    )
}

export default Note