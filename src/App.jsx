import React, {Component} from 'react';
import './styles/App.css'
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: ''
        }
    }

    searchQuery() {
        console.log('this.state', this.state);
        const BASE_URL = "https://api.spotify.com/v1/search?";
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log('FETCH_URL', FETCH_URL);

        fetch(FETCH_URL, {method: 'GET'})
            .then(response => response.json())
            .then((json) => {
                console.log(json);
            })
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Music Master
                </div>

                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
                            value={this.state.query}
                            onKeyPress={(event) => {
                            if (event.key === "Enter" && event.target.value.length > 0) 
                                this.searchQuery();
                            }}
                            onChange={(event) => {
                            this.setState({query: event.target.value});
                        }}/>
                        <InputGroup.Addon
                            onClick={() => {
                            this.searchQuery();
                        }}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>

                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        )
    }
}

export default App;