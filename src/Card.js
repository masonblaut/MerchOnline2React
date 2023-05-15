import React from 'react';

class Card extends React.Component {
    
    handleButtonClick = (event) => {
        console.log("id clicked =" + this.props.productId);
        this.props.onClick(this.props.productId);
    }

    handleProductEdit = (event) =>{
        this.props.editProduct(this.props.productId);
    }

    handleProductDelete = (event) =>{
        console.log("Delete id:", this.props.productId);
        this.props.deleteProduct(this.props.productId);
    }

    render(){
        return (
            <div className="card" style={{width: '12rem'}}>
            <img 
                src={"../assets/images/"+this.props.productNo}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="../assets/images/tshirtIcon.png"; 
                }}
                className="card-img-top"
                alt={this.props.productName}
            />
            <div className="card-body">
                <h5 className="card-title">{this.props.productName}</h5>
                <p className="card-text">${this.props.price}</p>
                <button href="#" onClick={this.handleButtonClick} className="btn btn-primary">Details</button>
                <button href="#" onClick={this.handleProductEdit} className="btn btn-success">Edit</button>
                <button href="#" onClick={this.handleProductDelete} className="btn btn-warning">Delete</button>
            </div>
            </div>
        );
    }

}

export default Card;
