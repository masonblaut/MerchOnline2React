import React from 'react';

class SearchForm extends React.Component {
    state = {inputtext: ""};
    
    handleChangeInput = (event) =>{
        this.setState({inputtext: event.target.value});
        console.log(event.target.value);
    }

    handleFormSubmit = (event) => {
        //alert(this.state.inputtext);
        event.preventDefault();
        this.props.onSubmit(this.state.inputtext)
    }

    render(){
        return ( 
        <div>
            <form onSubmit ={this.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="search-term">Search Box:</label>
                    <input 
                    onChange={this.handleChangeInput}
                    type="text"
                    className="form-control"
                    placeholder="Search Term Here"/>
                </div>
            </form>
        </div>)
    }
}

export default SearchForm;