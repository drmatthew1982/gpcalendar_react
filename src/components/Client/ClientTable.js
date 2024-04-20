import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstname',
        headerName: 'First Name',
        width: 150,
        editable: true,
    },
    {
        field: 'middlename',
        headerName: 'Middle Name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastname',
        headerName: 'Last Name',
        width: 150,
        editable: true,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 150,
        editable: true,
    },
    {
        field: 'birthday',
        headerName: 'Birthday',
        width: 150,
        editable: true,
    },
    {
        field: 'clientNoId',
        headerName: 'Client No Id',
        width: 150,
        editable: true,
    },
]
const rows = [
    { id: 1, firstname: 'Tom', middlename: '', lastname: 'Wang', gender: 'Other',birthday: '2013-01-25',clientNoId: 'Ivan-W'},
    { id: 2, firstname: 'Raymond', middlename: '', lastname: 'X', gender: 'Male',birthday: '2023-06-11',clientNoId: '12341231231'},

];


function ClientTable({theadData, tbodyData} ) {

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>);
}

export default ClientTable;


