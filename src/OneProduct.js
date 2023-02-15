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
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-3">
                            <div className="card">
                                <img src={"../assets/images/1.png"} className="card-img-top" alt={this.props.product.title} />
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