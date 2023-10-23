import React from 'react'
import './table.scss'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

    const List = () => {
        const rows = [
            {
                id: 1321543,
                product: "Laptop",
                image: 'https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg' ,
                customer: "John Doe",
                date: "2023-10-20",
                amount: 999.99,
                method: "Credit Card",
                status: "Pending",
            },
            {
                id: 5467890,
                product: "Smartphone",
                image: "https://images.pexels.com/photos/9555099/pexels-photo-9555099.jpeg?auto=compress&cs=tinysrgb&w=600",
                customer: "Jane Smith",
                date: "2023-10-19",
                amount: 499.99,
                method: "PayPal",
                status: "Approved",
            },
            {
                id: 7891234,
                product: "Headphones",
                image: "https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg?auto=compress&cs=tinysrgb&w=600",
                customer: "David Brown",
                date: "2023-10-18",
                amount: 89.99,
                method: "Credit Card",
                status: "Pending",
            },
            {
                id: 3156789,
                product: "Camera",
                image: "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=600",
                customer: "Lisa Wilson",
                date: "2023-10-17",
                amount: 799.99,
                method: "PayPal",
                status: "Approved",
            },
            {
                id: 9876543,
                product: "Tablet",
                image: "https://images.pexels.com/photos/5088022/pexels-photo-5088022.jpeg?auto=compress&cs=tinysrgb&w=600",
                customer: "Michael Johnson",
                date: "2023-10-16",
                amount: 349.99,
                method: "Credit Card",
                status: "Pending",
            },
        ];

        return (
            <TableContainer component={Paper} className='table'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='tableCell'>Tracking ID</TableCell>
                                <TableCell className='tableCell'>Product</TableCell>
                                <TableCell className='tableCell'>Customer</TableCell>
                                <TableCell className='tableCell'>Date</TableCell>
                                <TableCell className='tableCell'>Amount</TableCell>
                                <TableCell className='tableCell'>Payment Method</TableCell>
                                <TableCell className='tableCell'>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.id}
                                >
                                    <TableCell className='tableCell'>{row.id}</TableCell>
                                    <TableCell className='tableCell'>
                                        <div className="cellWrapper">
                                            <img src={row.image} alt="image" className="image" />
                                            {row.product}
                                        </div>
                                    </TableCell>
                                    <TableCell className='tableCell'>{row.customer}</TableCell>
                                    <TableCell className='tableCell'>{row.date}</TableCell>
                                    <TableCell className='tableCell'>{row.amount}</TableCell>
                                    <TableCell className='tableCell'>{row.method}</TableCell>
                                    <TableCell className='tableCell'>
                                        <span className={`status ${row.status}`}>{row.status}</span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
            </TableContainer>
        )
}

export default List