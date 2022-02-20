import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export default function ShowsTable(props) {

const columns = [
    { field: 'id', headerName: 'ID', width: 75 },
    { field: 'title', headerName: 'Show Title', width: 300 },
    { field: 'name', headerName: 'Theater Name', width: 300 },
    { field: 'yearBuilt', headerName: 'Theater Year Built', width: 250 },
    { field: 'rating', headerName: 'Show Rating', width: 250 },
    { field: 'status', headerName: 'Show Status', width: 250 },
    {field: '', headerName: '', width:250, 
        renderCell: (cellValues) => {
            return <Link to={`/show/${cellValues.row.id}`}>More Info</Link>
    }}
];

const rows = props.shows.map((show)=>{
    const name = show.theater.name
    const yearBuilt = show.theater.yearBuilt
    const newRow = {...show, name, yearBuilt}
    return newRow
})

    return (
        <div style={{ height: 650, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
        </div>
    );
}
