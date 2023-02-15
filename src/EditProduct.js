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
        this.setState( {title: t});
        console.log("State of form =", this.state);
    }

    updatePrice = (t) => {
        this.setState( {year: t});
        console.log("State of form =", this.state);
    }

    updateProductNo = (t) => {
        this.setState( {description: t});
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

    saveProduct = async (product) => {
        axios.put(`http://localhost:8080/products`, product)
        .then(result => {
            console.log(result);
            console.log(result.data);
        })
    }
    
    render () {
        console.log("EditProps", this.props);
        return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-group'>
                    <h1>Edit Product {this.props.product.productName}:</h1>
                        <FormInput id="productName" title="productName" placeholder={this.props.product.productName} value={this.props.product.productName} onChange={this.updateProductName} />
                        <FormTextArea id="productNo" title="productNo" placeholder={this.props.product.productNo} value={this.props.product.productNo} onChange={this.updateProductNo} />
                        <FormInput id="productPrice" title="Price" placeholder={this.props.product.price} value={this.props.product.price} onChange={this.updatePrice} />
                        <FormInput id="productQuantity" title="Quantity" placeholder={this.props.quantity} value={this.props.product.quantity} onChange={this.updateQuantity} />

                        {/*
                        
                        <input type="text" className="form-control" id="albumTitle" placeholder="Enter a Title"/>
                        <label for="albumArtist">Artist</label>
                        <input type="text" className="form-control" id="albumArtist" placeholder="Artist Name"/>
                        <label for="albumDescription">Description</label>
                        <textarea type="text" className='form-control' id="albumDescription" placeholder="Write something about the album:"/>
                        <label for="albumYear">Year</label>
                        <input type="text" className="form-control" id="albumYear" placeholder="2022"/>*/}
                </div>
                <button type="button" className="btn btn-light">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>)
    }
}

export default EditProduct;