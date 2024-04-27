import React,{useState} from 'react';
import Box from '@mui/material/Box';
import {DataGrid, GridColDef, useOnMount} from '@mui/x-data-grid';
import { useEffect } from "react";
import axios from 'axios';


function OrganisationTable({theadData, tbodyData} ) {

    const [rows,setRows]=useState([]);
    //
    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        axios.get(`http://localhost:8080/findorgbyuserid`,{params: {
            created_user_id: 1
        }
    })
        .then(res => {
            console.log(res.data);
            setRows(res.data);
        })
    }
    const columns: GridColDef<(typeof rows)[number]>[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'org_name',
            headerName: 'Org name',
            width: 150,
            editable: true,
        },
        {
            field: 'org_code',
            headerName: 'Org code',
            width: 150,
            editable: true,
        },
    ]

    // let rows = [
    //     { id: 1, org_name: 'Snow', org_code: 'Jon', age: 14 },
    //     { id: 2, org_name: 'Lannister', org_code: 'Cersei', age: 31 },
    // ];
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                //checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>);
}

export default OrganisationTable;


