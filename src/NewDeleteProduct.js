import axios from 'axios';
import React from 'react';

class NewDeleteProduct extends React.Component {
    
    state = {
        id: this.props.product.id,
        productName: this.props.product.productName,
        productNo: this.props.product.productNo,
        price: this.props.product.price,
        quantity: this.props.product.quantity
    }

    updateProductName = (t) =>{
        this.setState( {productName: t});
        console.log("State of form =", this.state);
    }

    updatePrice = (t) => {
        this.setState( {price: t});
        console.log("State of form =", this.state);
    }

    updateProductNo = (t) => {
        this.setState( {productNo: t});
        console.log("State of form =", this.state);
    }

    updateQuantity = (t) => {
        this.setState( {quantity: t});
        console.log("State of form = ", this.state);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Final submit = ", this.state);
        this.saveProduct(this.state);
    }

    handleCancel = (event) => {
        console.log("Canceling Display Product");
        this.props.onCancel();
    }

    saveProduct = async (product) => {
        axios.post(`http://localhost:8080/service/products/delete/`, product)
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.props.onFinished();
        })
    }
    
    render () {
        console.log("DeleteProps", this.props);
        return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-group'>
                    <h1>Delete Product {this.props.product.productName}?</h1>
                    <p align="center">Price: {this.props.product.price}</p><br/>
                    <p align="center">Quantity: {this.props.product.quantity}</p><br/>
                    <p align="center">ProductNo: {this.props.product.productNo}</p>
                    <h1>Delete { this.props.product.id }?</h1>
                    <h2>{this.props.product.productName}</h2>
                </div>
                <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
    }
}

export default NewDeleteProduct;