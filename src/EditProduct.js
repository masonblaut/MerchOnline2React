import axios from 'axios';
import React from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

class EditProduct extends React.Component {
    
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
        axios.put(`http://localhost:8080/service/products/`, product)
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.props.onFinished();
        })
    }
    
    render () {
        console.log("EditProps", this.props);
        return (

        <div className="container">
            <div className='card2'>
            <img 
                src={"../assets/images/"+this.props.product.productNo}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="../assets/images/tshirtIcon.png"; 
                }}
                className="card-img-top"
                alt={this.props.product.productName}
            />
            
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-group'>
                    <h1>Edit Product {this.props.product.productName}:</h1>
                        <FormInput id="productName" title="productName" placeholder={this.props.product.productName} value={this.props.product.productName} onChange={this.updateProductName} />
                        <FormTextArea id="productNo" title="productNo" placeholder={this.props.product.productNo} value={this.props.product.productNo} onChange={this.updateProductNo} />
                        <FormInput id="productPrice" title="Price" placeholder={this.props.product.price} value={this.props.product.price} onChange={this.updatePrice} />
                        <FormInput id="productQuantity" title="Quantity" placeholder={this.props.product.quantity} value={this.props.product.quantity} onChange={this.updateQuantity} />
                </div>
                <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>)
    }
}

export default EditProduct;