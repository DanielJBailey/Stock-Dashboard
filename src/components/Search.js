import React, { Component }from 'react';
import '../styles/Search.css';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    render() {
        return(
            <div className="search-box">
                <div className="ticker-search">
                    <form>
                        <input type="text" id="symbol" name="symbol" value={this.state.userInput} placeholder="Ticker..ex: AAPL, TSLA" onChange={this.handleChange.bind(this)}/>
                    </form>
                    <div className="submit"><i className="fas fa-search"></i></div>
                </div>
                
            </div>
        );
    }


}

export default Search;