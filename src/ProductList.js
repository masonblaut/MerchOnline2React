import React from 'react';
import Card from './Card';

class ProductList extends React.Component{
    handleSelectOne = (productid) => {
        console.log("Selected id = ", productid);
        this.props.onClick(productid);
    }

    handleEditProduct = (productId) =>{
        console.log("Edit this id =", productId);
        this.props.onEditProduct(productId);
    }

    handleDeleteProduct = (productId) =>{
        console.log("Delete this id =", productId);
        this.props.onDeleteProduct(productId);
    }
    
    render () {
        const products = this.props.productList.map(
            (product) => {
                return (<Card
                    productId = {product.id}
                    key = {product.id}
                    productName = {product.productName}
                    productNo = {product.productNo}
                    buttonText = "OK"
                    onClick = {this.handleSelectOne}
                    editProduct = {this.handleEditProduct}
                    deleteProduct = {this.handleDeleteProduct}
                />);
            }
        );
        return ( <div className="container">
            {products}
        </div>)
    }
}

export default ProductList;