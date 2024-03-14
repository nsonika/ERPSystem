// Orders.jsx
import React, { useState, useEffect } from 'react';
import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import "./Orders.css";

const Orders = () => {
    // Key for local storage
    const localStorageKey = 'orders';

    // Mock data for demonstration purposes
    const initialOrders = [
        { id: 1, customerName: 'John Doe', orderDate: '2024-03-08', status: 'Processing' },
        { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-08', status: 'Shipped' },
        { id: 3, customerName: 'Bob Johnson', orderDate: '2024-03-08', status: 'Delivered' },
        { id: 4, customerName: 'Alice Brown', orderDate: '2024-03-09', status: 'Processing' },
        { id: 5, customerName: 'Charlie White', orderDate: '2024-03-09', status: 'Shipped' },
        { id: 6, customerName: 'David Black', orderDate: '2024-03-09', status: 'Processing' },
        { id: 7, customerName: 'Eva Green', orderDate: '2024-03-09', status: 'Shipped' },
        { id: 8, customerName: 'Frank Red', orderDate: '2024-03-14', status: 'Delivered' },
        { id: 9, customerName: 'Grace Blue', orderDate: '2024-03-14', status: 'Processing' },
        { id: 10, customerName: 'Henry Yellow', orderDate: '2024-03-14', status: 'Shipped' },
        // Add more mock orders as needed
    ];

    // State for orders
    const [orders, setOrders] = useState(initialOrders);

    // State for viewing and editing orders
    const [viewingOrder, setViewingOrder] = useState(null);
    const [editingOrder, setEditingOrder] = useState(null);







    // Effect to load orders from local storage on component mount
    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem(localStorageKey));
        if (storedOrders && storedOrders.length > 0) {
            setOrders(storedOrders);
        } else {
            // Use initialOrders as default when there is no data in local storage
            setOrders(initialOrders);
        }
    }, []);

    // Effect to update local storage when orders change
    useEffect(() => {
        updateLocalStorage(orders);
    }, [orders]);


    const handleViewOrder = (orderId) => {
        const orderToView = orders.find((order) => order.id === orderId);
        setViewingOrder(orderToView);
    };

    const handleEditOrder = (orderId) => {
        const orderToEdit = orders.find((order) => order.id === orderId);
        setEditingOrder(orderToEdit);
    };

    const handleUpdateOrder = () => {
        if (editingOrder) {
            // Use the callback form of setOrders to ensure we have the latest state
            setOrders(prevOrders => {
                const updatedOrders = prevOrders.map((order) =>
                    order.id === editingOrder.id ? editingOrder : order
                );
                updateLocalStorage(updatedOrders);
                return updatedOrders;
            });

            setEditingOrder(null);
        }
    };

    const handleDeleteOrder = (orderId) => {
        setOrders(prevOrders => {
            const updatedOrders = prevOrders.filter((order) => order.id !== orderId);
            updateLocalStorage(updatedOrders);
            return updatedOrders;
        });

        setEditingOrder(null);
    };



    const handleCancelView = () => {
        setViewingOrder(null);
    };

    const handleCancelEdit = () => {
        setEditingOrder(null);
    };

    const handleInputChange = (field, value) => {
        setEditingOrder((prevOrder) => ({
            ...prevOrder,
            [field]: value,
        }));
    };

    // ... (previous code)

    const updateLocalStorage = (orders) => {
        localStorage.setItem(localStorageKey, JSON.stringify(orders));
    };

    // Effect to update local storage when orders change
    useEffect(() => {
        updateLocalStorage(orders);
    }, [orders]);

    // ... (remaining code)
    // State for date filter
    const [filterDate, setFilterDate] = useState('');

    // Filtered orders based on date
    const filteredOrders = orders.filter((order) => {
        if (!filterDate) return true; // If no date is selected, show all orders
        return order.orderDate === filterDate;
    });

    // Function to reset the date filter
    const resetFilter = () => {
        setFilterDate('');
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Processing':
                return 'text-warning'; // or use a class for warning color
            case 'Shipped':
                return 'text-info'; // or use a class for info color
            case 'Delivered':
                return 'text-success'; // or use a class for success color
            default:
                return '';
        }
    };


    return (
        <div className="new-container">
            <div className="container-xl mt-7 phone-width" >
                <h2>Orders Management</h2>

                {/* Date Filter */}
                <div className="mb-3 d-flex align-items-center">
                    <input
                        type="date"
                        id="filterDate"
                        className="form-control form-control-sm me-2 custom-cal"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                    />
                    {filterDate && (
                        <button className="btn btn-secondary btn-sm custom-button-reset" onClick={resetFilter} style={{ padding: '5x', marginBottom: '5px' }}>
                            Reset
                        </button>
                    )}
                </div>


                {/* Order List */}


                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map((order) => (
                            <tr key={order.id} >
                                <td>{order.id}</td>
                                <td>{order.customerName}</td>
                                <td>{order.orderDate}</td>
                                <td className={getStatusColor(order.status)}>{order.status}</td>
                                <td>
                                    <button className="btn mr-2" onClick={() => handleViewOrder(order.id)}>
                                        <BsEye />
                                    </button>
                                    <button className="btn mr-2" onClick={() => handleEditOrder(order.id)}>
                                        <BsPencil />
                                    </button>
                                    <button className="btn" onClick={() => handleDeleteOrder(order.id)}>
                                        <BsTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>


                </table>


                {/* View Order Details */}
                {viewingOrder && (
                    <div className="popup-container">
                        <div className="popup">
                            <div className="card">
                                <div className="card-headerr">
                                    <h5 className="custom-card-headerr" style={{ textAlign: 'center', padding: '8px' }}>Order Details</h5>
                                </div>
                                <div className="card-body">
                                    <p>Order ID: {viewingOrder.id}</p>
                                    <p>Customer Name: {viewingOrder.customerName}</p>
                                    <p>Order Date: {viewingOrder.orderDate}</p>
                                    <p className={getStatusColor(viewingOrder.status)}>Status: {viewingOrder.status}</p>
                                    <button className="btn btn-secondary" onClick={handleCancelView}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit Order Details */}
                {editingOrder && (
                    <div className="popup-container custom-popup">
                        <div className="popup">
                            <div className="card">
                                <div className="card-headerr">
                                    <h5 className="custom-card-headerr" style={{ textAlign: 'center', padding: '8px' }}>Edit Order Details</h5>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <p>Order ID: {editingOrder.id}</p>
                                        <p>Customer Name: {editingOrder.customerName}</p>
                                        <p>Order Date: {editingOrder.orderDate}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editStatus">Status:</label>
                                        <select
                                            className="form-select"
                                            id="editStatus"
                                            value={editingOrder.status}
                                            onChange={(e) => handleInputChange('status', e.target.value)}
                                        >
                                            {['Processing', 'Shipped', 'Delivered'].map((status) => (
                                                <option key={status} value={status} className={getStatusColor(status)}>
                                                    {status}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button className="btn btn-success" onClick={handleUpdateOrder}>
                                        Save Changes
                                    </button>
                                    <button className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}








            </div>
        </div >
    );
};

export default Orders;
