import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

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

    return(
        <div>
            <h1>{show.title}</h1>
            <Link to='/'><Button>Back</Button></Link>
        </div>
    )
}

export default ShowPage