import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import Container from '@mui/material/Container'
import './showTable.css'

const ShowPage = () => {
const [show, setShow] = useState({})
const {id} = useParams()

    useEffect(() => {
        const getShow = async () => {
           const {data } = await axios.get(`http://localhost:1337/api/show/${id}`)
            setShow(data)
        } 
        getShow()
        }, [id])

    const column1 = [
        { field: 'name', headerName: 'Awards', width: 560 },
    ];
    const column2 = [
        { field: 'type', headerName: 'Genres', width: 560 }  
    ]
    
    console.log(show)

    const rows1 = show.awards
    const rows2 = show.genres

    return(
        <div>
            <h1>{show.title}</h1>
            <Container>
            <div className='Award-Table' style={{ height: 500, width: '50%' }}>
                    <DataGrid getRowId={row => row.name}
                    rows={rows1}                    
                    columns={column1}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                />
            </div>
                <div className='Genre-Table' style={{ height: 500, width: '50%' }}>
                    <DataGrid getRowId={row => row.type}
                        rows={rows2}                        
                        columns={column2}
                        pageSize={5}
                        rowsPerPageOptions={[5]}

                    />
                </div>
            </Container>
            <Link to='/'><Button>Back</Button></Link>
        </div>
    )
}

export default ShowPage