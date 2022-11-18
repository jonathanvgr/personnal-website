import React from 'react'
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Typography, Stack
} from '@mui/material';

import { BuildTable } from '../../constants';

const MyTable = () => (
    <TableContainer sx={{ width: { xs: "100%", md: "33%" } }}>
        {BuildTable.map((table) => (
            <Table
                key={table.title}
                size="small"
            >
                <TableHead>
                    <TableRow>
                        <TableCell
                            align="center"
                            colSpan={2}
                            sx={{ color: "primary.dark" }}
                        >
                            {table.title}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {table.rows.map((row, i) => (
                        <TableRow key={`row ${i}`}>
                            {row.map((col, j) => (
                                <TableCell
                                    key={`row ${i} col ${j}`}
                                    align="center"
                                    sx={{ width: "50%" }}
                                >
                                    {col.content.split("\n").map((text, k) => (
                                        <span
                                            key={`row ${i} col ${j} content ${k}`}
                                            style={{ display: "block" }}
                                        >
                                            {text}
                                        </span>
                                    ))}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        ))}
    </TableContainer>
)

const Goal = React.forwardRef((props, ref) => {
    return (
        <Stack justifyContent="center" alignItems="center" ref={ref}>
            <Typography mb={3} align="center">
                Ce site a pour objectif principal de montrer mes compétences en tant que développeur<br /><br />
                Voici ce que j'ai utilisé pour le créer :
            </Typography>

            <MyTable />

            <Typography mt={3} align="center">
                J'ai construit ce projet fullstack de sorte à ce qu'il soit facilement extensible et que le code puisse être parcouru ergonomiquement et compris avec simplicité <br /><br />
                Le code source du site est disponible sur <a href="https://github.com/jonathanvgr" target="_blank" rel="noreferrer">Github</a>
            </Typography>
        </Stack>
    )
});

export default Goal