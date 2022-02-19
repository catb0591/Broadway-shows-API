import * as React from 'react';
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'id', label: 'ID', minWidth: 75 },
    { id: 'title', label: 'Show Title', minWidth: 100 },
    { id: 'name', label: 'Theater Name', minWidth: 100 },
    { id: 'yearBuilt', label: 'Theater Built', minWidth: 100 },
    { id: 'rating', label: 'Show Rating', minWidth: 100 },
    { id: 'status', label: 'Show Status', minWidth: 100 },
];


export default function ShowsTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
const rows = props.shows
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 1000 }}> 
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}S
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow> 
                    </TableHead>
                    <TableBody> 
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                const name = row.theater.name
                                const yearBuilt = row.theater.yearBuilt
                                
                                const newRow = {...row, name, yearBuilt}

                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = newRow[column.id];
                                            return (
                                               <TableCell key={column.id}>
                                                   <Link to={`/show/${newRow.id}`}>
                                                    {value}</Link>
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}