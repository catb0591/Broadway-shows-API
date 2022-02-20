import React, { useEffect, useState } from "react";
import ShowsTable from "./ShowsTable";
import axios from 'axios'

const HomePage = () => {

    const [ shows, setShows ] = useState([])

    useEffect(() => { axios.get('http://localhost:1337/api/show').then((payload) => {
        const {data} = payload
        return setShows(data)
    })
    },[])

    return(
        <div>
            <h1>Broadway Shows!</h1>
            <ShowsTable shows= {shows}>
            </ShowsTable>
        </div>
    )
}

 export default HomePage