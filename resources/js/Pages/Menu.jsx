import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

export default function Menu({ auth, menus }) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'image', headerName: 'Image', renderCell:(params) => {
            return(
                <img src={`/storage/${params.value}`} alt={`Menu Image`} style={{ width: '50px', height: '50px' }} />
            )
        }},
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130, renderCell:(params) => {
            return(
                <p>Rp.{`${params.value.toLocaleString('id-ID')}`}</p>
            )
        } },
        { field: 'action', headerName: 'Action', flex:1, renderCell:(params) => {
            return(
                <Box sx={{ display: 'flex', gap:'5px' }}>
                    <Link href={`menu/${params.row.id_item}`} method='delete' className="h-[40px] rounded-lg text-white text-sm bg-red-500 hover:bg-red-700 py-2 px-4">
                        Delete
                    </Link>
                    <Link href={`menu/${params.row.id_item}/edit`} className="h-[40px] rounded-lg text-white text-sm bg-gray-500 hover:bg-gray-700 py-2 px-4">
                        Update
                    </Link>
                </Box>
            )
        }},
      ];
      
      const rows = menus.map((menu, index) => {
        index += 1
        return {
            id: index++,
            id_item: menu.id,
            image: menu.image,
            name: menu.name,
            price: menu.price,
            // Sesuaikan dengan struktur data kategori Anda
        };
    });


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Menu</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-100 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 ">
                        <Link href={route('menu.create')} className="text-white text-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
                            Create Menu
                        </Link>
                            <Box sx={{width: '100%',  marginTop:'20px' }} >
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                    
                                />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
