import React from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

class deleteProduct extends React.Component {

    // Calls axios to run Delete /products/ route
    deleteSingleProduct = async (product) => {

        console.log("Delete product", product.productName);
        //console.log("Delete album title", title);
        axios.delete(`http://localhost:8080/service/products/${product.id}`)
        .then(result => {
            console.log("result", result);
            console.log("result data", result.data);
        })
    }

    render () {
        console.log("deleteRender props", this.props);
        return (
            <div className="container" align="center">
                <form onSubmit={ ()=> this.deleteSingleProduct(this.props.product.productName, this.props.product.id)}>
                    <h1>Delete { this.props.product.id }?</h1>
                    <h2>{this.props.product.productName}</h2>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default deleteProduct;