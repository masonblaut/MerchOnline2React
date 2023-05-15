import axios from 'axios';
import React from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

class NewProduct extends React.Component {
    
    state = {
        productName: "ProductName",
        productNo: "ProductNo",
        price: 2022,
        quantity: 1
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

    saveProduct = async (product) => {
        axios.post(`http://localhost:8080/service/products/`, product)
        .then(result => {
            console.log(result);
            console.log(result.data);
            this.props.onFinished();
        })
    }
    
    render () {
        return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-group'>
                    <h1>Create a New Product:</h1>
                        <FormInput 
                            id="productName" 
                            title="ProductName" 
                            placeholder ="Enter productName" 
                            onChange={this.updateProductName} 
                            required
                        />
                        <FormTextArea 
                            id="productNo" 
                            title="productNo" 
                            placeholder="productNo" 
                            onChange={this.updateProductNo}
                            required 
                        />
                        <FormInput 
                            id="productPrice" 
                            type="number" 
                            step="0.01" 
                            title="Price" 
                            placeholder="Price" 
                            onChange={this.updatePrice} 
                            required
                        />
                        <FormInput 
                            id="productQuantity" 
                            type="number" 
                            step="1" 
                            title="Quantity" 
                            placeholder="0" 
                            onChange={this.updateQuantity}
                            required
                        />
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

export default NewProduct;