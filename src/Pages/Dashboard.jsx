import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';
import './Dashboard.css';

export const Dashboard = () => {
    const [chartInstance, setChartInstance] = useState(null);
    const graphRef = useRef(null);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [isAnimated, setIsAnimated] = useState(false);


    useEffect(() => {
        // Fetch products and orders from local storage
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];

        // Set the total products and orders
        setTotalProducts(storedProducts.length);
        setTotalOrders(storedOrders.length);

        if (chartInstance) {
            chartInstance.destroy(); // Destroy the previous chart instance
        }

        const ctx = graphRef.current.getContext('2d');
        const newChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
                datasets: [{
                    label: 'Product Orders',
                    data: [50, 30, 40, 60, 45],
                    backgroundColor: 'rgba(58, 58, 90)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        setChartInstance(newChartInstance);

        // Cleanup function to destroy the chart instance
        return () => {
            newChartInstance.destroy();
        };
    }, []); // Run only once on component mount

    useEffect(() => {
        setIsAnimated(true);
    }, []);


    return (
        <div className="new-container">
            <div className="container-xl mt-7 phone-width">
                <h2>Dashboard</h2>
                <div className="card-bodyy">


                    <div className="row">
                        {/* Box for Total Products */}
                        <Link to="/products" className="col-md-6" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={`dashboard-box ${isAnimated ? 'animated slideInDown' : ''}`}>
                                <h3>Total Products</h3>
                                <p>{totalProducts}</p>
                            </div>
                        </Link>

                        {/* Box for Total Orders */}
                        <Link to="/orders" className="col-md-6" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={`dashboard-box ${isAnimated ? 'animated slideInDown' : ''}`}>
                                <h3>Total Orders</h3>
                                <p>{totalOrders}</p>
                            </div>
                        </Link>
                    </div>




                    <div className="row">
                        {/* Graph */}
                        <div className="col-md-6">
                            <canvas ref={graphRef} style={{ width: '50%', height: '200px' }}></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
