import React from "react";

class OneProduct extends React.Component
{
    handleCancel = (event) => {
        console.log("Canceling Display Product");
        this.props.onCancel();
    }

    render()
    {
        return (
            <div>
                <div align="center">
                <h2>Product Details</h2>
                    <div className="container" align="center">
                        <div className="row">
                            <div className="card2">
                            <img 
                                src={"../assets/images/"+this.props.product.productNo}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src="../assets/images/tshirtIcon.png"; 
                                }}
                                className="card-img-top"
                                alt={this.props.product.productName}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.product.productName}</h5>
                                <p className="card-text" align="center">{this.props.product.price}</p>
                                <p className="card-text" align="center">{this.props.product.quantity}</p>
                                <p className="card-text">{this.props.product.productNo}</p>
                                    <div align="center">
                                    <button type="button" className="btn btn-light" onClick={this.handleCancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneProduct;