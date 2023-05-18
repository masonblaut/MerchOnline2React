import React from 'react';
import './App.css';
import dataSource from './dataSource';
import SearchForm from './SearchForm';
import ProductList from './ProductList';
import OneProduct from './OneProduct';
import EditProduct from './EditProduct';
import Navbar from './Navbar';

import NewProduct from './NewProduct';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import NewDeleteProduct from './NewDeleteProduct';

//Very important constant for maintaining browser history and facilitating 'push' movement throughout the SPA
const history = createBrowserHistory();

//Main App class which dictates the primary homepage functionality
class App extends React.Component {

  //Independent Variables for the App component homepage.
  state = { productList: [], searchphrase: "", currentlySelectedproductId: 0 };

  //Loads Products immediately after the component (App class) is mounted (inserted into the tree)
  componentDidMount() {
    this.loadProducts();
  }

  //Waits for the dataSource class to get Products and then sets the productList state variable to those products
  loadProducts = async () => {
    const response = await dataSource.get('/service/products/');
    this.setState({ productList: response.data });
  }

  //Called whenever the Search bar input (searchphrase) is changed so that setState will update the productList array
  updateSearchResults = async (phrase) => {
    console.log("phrase = ", phrase);
    this.setState({ searchphrase: phrase });
    const response = await dataSource.get('/service/products/search/productName/' + phrase, {
      auth: {
        username: "test",
        password: "test"
      }
    });
    if (response.data === null)
      console.log(response.data);
    this.setState({ productList: response.data });
  }

  //Pushes to the /show/ URL, where a selected product is displayed by itself.
  updateSingleProduct = (id) => {
    console.log("updateSingleProduct =", id);
    var indexnumber = 0;
    for (var i = 0; i < this.state.productList.length; i++) {
      if (this.state.productList[i].id === id) {
        indexnumber = i;
        console.log("Index number", indexnumber);
      }
    }
    //console.log("Index check 2", indexnumber);
    this.setState({ currentlySelectedproductId: indexnumber }, () => {
      history.push('/show/' + indexnumber);
      console.log("state: ", this.state)
    });

  }

  //Pushes to /edit/ URL where a selected product's fields can be edited.
  editProduct = (productid) => {
    console.log("App. Edit currentlyselectedId =", productid);
    var indexnumber = 0;
    for (var i = 0; i < this.state.productList.length; i++) {
      if (this.state.productList[i].id === productid) {
        indexnumber = i;
      }
    }
    this.setState({ currentlySelectedproductId: indexnumber }, () => {
      history.push('/edit/' + indexnumber);
      console.log("state", this.state)
    });
  }

  //Pushes to /delete/ URL where the user must confirm the selected Product's deletion
  deleteSingleProduct = (productid) => {
    console.log("App. Delete Id: ", productid);
    var indexnumber = 0;
    for (var i = 0; i < this.state.productList.length; i++) {
      if (this.state.productList[i].id === productid) {
        indexnumber = i;
      }
    }
    this.setState({ currentlySelectedproductId: indexnumber }, () => {
      history.push('/delete/' + indexnumber);
      console.log("state", this.state)
    });
  }

  //Returns to Homepage when Cancel Button is pressed.
  cancelNewProduct = () => {
    history.push('/');
    console.log("Cancelling New Product");
  }

  cancelEditProduct = () => {
    history.push('/');
    console.log("Cancelling Edit Product");
  }

  cancelDisplayProduct = () => {
    history.push('/');
    console.log("Cancelling Display Product");
  }

  cancelDeleteProduct = () => {
    history.push('/');
    console.log("Cancelling Delete Product");
  }

  cancelDisplayProduct = () => {
    history.push('/');
    console.log("Cancelling Display Product");
  }

  //Returns to Homepage and reloads the Window when an operation is successful.
  returnHome = () => {
    history.push('/');
    window.location.reload();
    console.log("Operation was Successful!");
  }

  //Renders the App Homepage
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <div>
                  <SearchForm onSubmit={this.updateSearchResults} />
                  <ProductList productList={this.state.productList} onClick={this.updateSingleProduct} onDeleteProduct={this.deleteSingleProduct} onEditProduct={this.editProduct} />
                </div>)
            }
            }
            />
          </Switch>
          <Route exact path="/new" render={() => <NewProduct onCancel={this.cancelNewProduct} onFinished={this.returnHome} />} />
          <Route exact path="/show/:productId" render={() => <OneProduct product={this.state.productList[this.state.currentlySelectedproductId]} onCancel={this.cancelDisplayProduct} />} />
          <Route exact path="/edit/:productId" render={() => <EditProduct product={this.state.productList[this.state.currentlySelectedproductId]} onCancel={this.cancelEditProduct} onFinished={this.returnHome} />} />
          <Route exact path="/delete/:productId" render={() => <NewDeleteProduct product={this.state.productList[this.state.currentlySelectedproductId]} onCancel={this.cancelDeleteProduct} onFinished={this.returnHome} />} />
        </div>
      </Router>
    );
  }

}

export default App;