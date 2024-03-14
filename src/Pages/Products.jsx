
import React, { useState, useEffect } from 'react';
import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import "./Products.css";


const Products = () => {
    const initialProducts = JSON.parse(localStorage.getItem('products')) || [
        { id: 1, name: 'Product A', category: 'Electronics', price: 499.99, stock: 50 },
        { id: 2, name: 'Product B', category: 'Clothing', price: 29.99, stock: 100 },

    ];

    const [products, setProducts] = useState(initialProducts);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        category: '',
        price: 0,
        stock: 0,
    });

    const [showAddForm, setShowAddForm] = useState(false);
    const [isTableAnimated, setIsTableAnimated] = useState(true);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const handleAddProduct = () => {
        const updatedProducts = [...products, { ...newProduct, id: Date.now() }];
        setProducts(updatedProducts);
        setNewProduct({ name: '', category: '', price: 0, stock: 0 });
        setShowAddForm(false);
    };


    const handleDeleteProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    const handleEditClick = (product) => {
        setEditingProduct(product);
    };

    const handleCancelEdit = () => {
        setEditingProduct(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    };

    const handleEditInputChange = (e, field) => {
        const { value } = e.target;
        setEditingProduct((prevProduct) => ({
            ...prevProduct,
            [field]: field === 'price' || field === 'stock' ? parseFloat(value) : value,
        }));
    };


    const handleEditProduct = () => {
        setProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => {
                if (product.id === editingProduct.id) {
                    return editingProduct;
                }
                return product;
            });
            return updatedProducts;
        });

        // Clear the editing state
        setEditingProduct(null);
    };

    useEffect(() => {
        // Add a delay before removing the animation class
        const timeout = setTimeout(() => {
            setIsTableAnimated(false);
        }, 500); // Adjust the delay as needed

        // Clear the timeout to prevent memory leaks
        return () => clearTimeout(timeout);
    }, []);


    return (
        <div className="new-container">
            <div className="container-xl mt-7 phone-width">

                <h2 className='head'>Products Management</h2>


                <div className="mt-3">
                    <button className="btn-add" onClick={() => setShowAddForm(!showAddForm)}>
                        Add Product
                    </button>
                </div>


                <table className={`table ${isTableAnimated ? 'slideUpTable' : ''}`}>

                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price (USD)</th>
                            <th>Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <button className="btn mr-2" onClick={() => handleEditClick(product)}>
                                        <BsPencil />
                                    </button>
                                    <button className="btn" onClick={() => handleDeleteProduct(product.id)}>
                                        <BsTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>


                {showAddForm ? (
                    <div className="popup-container" style={{

                        marginTop: window.innerWidth < 800 ? '50px' : ''
                    }}>
                        <div className="popup custom-popup" style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <div className="card">
                                <div className="card-headerr">
                                    <h5 className="custom-card-headerr" style={{ textAlign: 'center', padding: '8px' }}>Add Product</h5>
                                </div>
                                <div className="card-body" style={{ marginTop: '-12px' }}>
                                    <form>

                                        <div className="form-group">
                                            <label htmlFor="productName">Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="productName"
                                                name="name"
                                                value={newProduct.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="productCategory">Category:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="productCategory"
                                                name="category"
                                                placeholder="Enter product category"
                                                value={newProduct.category}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="productPrice">Price (USD):</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="productPrice"
                                                name="price"
                                                placeholder="Enter product price"
                                                value={newProduct.price}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="productStock">Stock Quantity:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="productStock"
                                                name="stock"
                                                placeholder="Enter stock quantity"
                                                value={newProduct.stock}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <button type="button" className="btn btn-success" onClick={handleAddProduct}>
                                            Add Product
                                        </button>
                                        <button type="button" className="btn btn-secondary ml-2" onClick={() => setShowAddForm(false)}>
                                            Cancel
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}




                {editingProduct && (

                    <div className="popup-container" style={{


                        marginTop: window.innerWidth < 800 ? '50px' : ''
                    }}>
                        <div className="popup custom-popup" style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <div className="card">
                                <div className="card-headerr">
                                    <h5 className="custom-card-headerr" style={{ textAlign: 'center', padding: '8px' }}>Edit Product</h5>
                                </div>
                                <div className="card-body" style={{ marginTop: '-12px' }}>
                                    <form style={{ maxWidth: '400px', margin: '0 auto' }}>

                                        <div className="form-group">
                                            <label htmlFor="editProductName">Name:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="editProductName"
                                                name="name"
                                                value={editingProduct.name}
                                                onChange={(e) => handleEditInputChange(e, 'name')}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="editProductCategory">Category:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="editProductCategory"
                                                name="category"
                                                placeholder="Enter product category"
                                                value={editingProduct.category}
                                                onChange={(e) => handleEditInputChange(e, 'category')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editProductPrice">Price (USD):</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="editProductPrice"
                                                name="price"
                                                placeholder="Enter product price"
                                                value={editingProduct.price}
                                                onChange={(e) => handleEditInputChange(e, 'price')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="editProductStock">Stock Quantity:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="editProductStock"
                                                name="stock"
                                                placeholder="Enter stock quantity"
                                                value={editingProduct.stock}
                                                onChange={(e) => handleEditInputChange(e, 'stock')}
                                            />
                                        </div>

                                        <div className="btns">
                                            <button type="button" className="btn btn-success" onClick={handleEditProduct}>
                                                Save Changes
                                            </button>
                                            <button type="button" className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                )}

            </div>
        </div>

    );
}

export default Products;
