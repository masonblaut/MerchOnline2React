import React from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

class DeleteProduct extends React.Component {

    state = {
        id: 1,
        productName: "",
        productNo: "",
        price: 0,
        quantity: 0
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Final submit = ", this.state);
        this.deleteSingleProduct(this.state);
    }

    // Calls axios to run Delete /products/ route
    deleteSingleProduct = async (product) => {

        axios.delete(`http://localhost:8080/service/products/${product.id}`)
        .then(result => {
            console.log(result);
            console.log(result.data);
        })
    }

    render () {
        console.log("deleteRender props", this.props);
        return (
            <div className="container" align="center">
                <form onSubmit={ ()=> this.handleFormSubmit}>
                    <div className='form-group'>
                        <h1>Delete { this.props.product.id }?</h1>
                        <h2>{this.props.product.productName}</h2>
                    </div>
                    <button type="button" className="btn btn-light">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default DeleteProduct;