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
import DeleteProduct from './DeleteProduct';

const history = createBrowserHistory();

class App extends React.Component {
  state = {productList : [], searchphrase : "", currentlySelectedproductId: 0};
  
  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await dataSource.get('/service/products/');
    this.setState({productList: response.data});
  }

  updateSearchResults = async (phrase) => {
    console.log("phrase = ", phrase);
    this.setState({searchphrase: phrase});
    const response = await dataSource.get('/service/products/search/productName/'+phrase, {
      auth: {
        username: "test",
        password: "test"
      }});
      if(response.data === null)
    console.log(response.data);
    this.setState({productList: response.data});
  }

  updateSingleProduct = (id) => {
    console.log("updateSingleProduct =", id);
    var indexnumber = 0;
    for (var i = 0; i < this.state.productList.length; i++)
    {
      if (this.state.productList[i].id === id)
      {
        indexnumber = i;
        console.log("Index number", indexnumber);
      }
    }
    //console.log("Index check 2", indexnumber);
    this.setState({currentlySelectedproductId : indexnumber}, () => {
      history.push('/show/' + indexnumber);
      console.log("state: ", this.state)});
    
  }

  editProduct = (productid) => {
    console.log("App. Edit currentlyselectedId =", productid);
    var indexnumber = 0;
    for(var i=0; i<this.state.productList.length; i++){
      if(this.state.productList[i].id === productid)
      {
        indexnumber = i;
      }
    }
    this.setState({currentlySelectedproductId : indexnumber}, ()=>{
      history.push('/edit/'+indexnumber);
      console.log("state", this.state)
    });
  }

  deleteSingleProduct = (productid) =>
  {
    console.log("App. Delete Id: ", productid);
    var indexnumber = 0;
    for(var i=0; i<this.state.productList.length; i++){
      if(this.state.productList[i].id === productid)
      {
        indexnumber = i;
      }
    }
    this.setState({currentlySelectedproductId : indexnumber}, ()=>{
      history.push('/delete/'+indexnumber);
      console.log("state", this.state)
    });
  }

  cancelNewProduct = () =>
     {
          history.push('/');
          console.log("Cancelling New Product");          
     }

    cancelEditProduct = () =>
    {
        history.push('/');
        console.log("Cancelling Edit Product");          
    }

    cancelDisplayProduct = () =>
    {
        history.push('/');
        console.log("Cancelling Display Product");          
    }

    cancelDeleteProduct = () =>
    {
        history.push('/');
        console.log("Cancelling Delete Product");          
    }

  render() {
    return (
      <Router history = {history}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path ="/" render= { () => {
            return (
              <div>
              <SearchForm onSubmit={this.updateSearchResults}/>
              <ProductList productList={this.state.productList} onClick={this.updateSingleProduct} onDeleteProduct={this.deleteSingleProduct} onEditProduct={this.editProduct}  />
            </div>)
              }
            }
          />
          </Switch>
          <Route exact path = "/new" render = { () => <NewProduct onCancel={this.cancelNewProduct} /> } />
          <Route exact path = "/show/:productId" render = { ()=> <OneProduct product={this.state.productList[this.state.currentlySelectedproductId]} onCancel={this.cancelDisplayProduct}/> }/>
          <Route exact path = "/edit/:productId" render = { ()=> <EditProduct product={this.state.productList[this.state.currentlySelectedproductId]} onCancel={this.cancelEditProduct}/> }/>  
          <Route exact path = "/delete/:productId" render = { ()=> <DeleteProduct product={this.state.productList[this.state.currentlySelectedproductId]} onCancel={this.cancelDeleteProduct}/> }/>
      </div>
      </Router>
    );
  }

}

export default App;