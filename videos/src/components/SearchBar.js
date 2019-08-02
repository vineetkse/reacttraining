import React from 'react';

class SearchBar extends React.Component {

    state = {term: ''};

    handleChange = evt => {
        this.setState({term: evt.target.value});
    };

    handleFormSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return(
            <div className="searchbar ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term} onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;