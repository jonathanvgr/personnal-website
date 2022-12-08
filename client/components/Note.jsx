import React, { useRef } from 'react'
import { useRouter } from "next/router"
import API from '../API';
// MUI
import { Card, CardContent, CardHeader, TextField, IconButton, InputAdornment, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
    const data = props.data
    const router = useRouter();

    const nameInput = useRef();
    const itemsInput = useRef();

    const convertDate = (str) => {
        return new Date(Date.parse(str)).toLocaleString('fr', { dateStyle: "short", timeStyle: "short" });
    }

    const deleteNote = async () => {
        await API.delete(`/note/${data.ID}`)
            .then(() => router.replace(router.asPath)); // Refresh page
    }

    const updateNote = async e => {
        if (e.currentTarget.contains(e.relatedTarget))
            return;

        let items = itemsInput.current.value;
        let name = nameInput.current.value;

        await API.patch(`/note/${data.ID}`, {
            Name: name,
            Items: items
        })
            .then(() => router.replace(router.asPath)); // Refresh page
    }

    return (
        <Card sx={{ height: "100%" }} onBlur={updateNote}>
            <CardHeader
                title={
                    <TextField
                        inputRef={nameInput}
                        variant="standard"
                        InputProps={{
                            sx: { fontSize: (theme) => theme.typography["h5"] },
                            disableUnderline: true,
                            endAdornment: (
                                <Stack direction="row" alignItems="center">
                                    <InputAdornment position="end" ># {data.ID}</InputAdornment>
                                    <IconButton onClick={deleteNote}>
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
                    inputRef={itemsInput}
                    variant="standard"
                    InputProps={{ disableUnderline: true, sx: { fontSize: (theme) => theme.typography["h6"] } }}
                    defaultValue={data.Items}
                    multiline
                    sx={{ borderLeft: "1px solid rgba(255, 255, 255, 0.2)", pl: 1, cursor: "pointer" }}
                />
            </CardContent>
        </Card>
    )
}

export default Note