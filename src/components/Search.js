import React, { Component }from 'react';
import '../styles/Search.css';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            ticker: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }

    handleSubmit() {
        this.setState({
            ticker: this.state.userInput
        });
    }

    render() {
        return(
            <div className = "search-component">
                <div className = "progress-bar">
                    <div className = "progress"></div>
                </div>

                <div className="ticker-search">
                    <form>
                        <input type="text" id="symbol" name="symbol" value={this.state.userInput} placeholder="Ticker..ex: AAPL, TSLA" onChange={this.handleChange.bind(this)}/>
                    </form>
                    <div className="submit"><i className="fas fa-search"></i></div>
                </div>
                <div className="error-message">
                    <p className = "status"></p>
                </div>
            </div>
            
        );
    }


}

export default Search;