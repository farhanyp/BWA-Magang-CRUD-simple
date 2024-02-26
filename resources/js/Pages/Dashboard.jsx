import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { Link } from '@inertiajs/react';

export default function Dashboard({ auth, categories }) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'action', headerName: 'Action', flex:1, renderCell:(params) => {
            return(
                <Box sx={{ display: 'flex', gap:'5px' }}>
                    <Link href={`delete-category/${params.row.id_item}`} method='delete' className="h-[40px] rounded-lg text-white text-sm bg-red-500 hover:bg-red-700 py-2 px-4">
                        Delete
                    </Link>
                    <Link href={`edit-category/edit/${params.row.id_item}`} className="h-[40px] rounded-lg text-white text-sm bg-gray-500 hover:bg-gray-700 py-2 px-4">
                        Update
                    </Link>
                </Box>
            )
        }},
      ];    
      const rows = categories.map((category, index) => {
        index += 1
        return {
            id: index++,
            id_item: category.id,
            name: category.name,
            // Sesuaikan dengan struktur data kategori Anda
        };
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Category</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-100 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 ">
                        <Link href={route('form.category')} className="text-white text-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
                            Create Category
                        </Link>
                            <Box sx={{width: '100%', marginTop:'20px' }} >
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
