import React from 'react';
const URL = "http://localhost:3000/";



class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        }
    }

    async getFiles() {
        const response = await fetch(URL, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const files = await response.json();
        // this.setState({ usuarios });
        console.log(files)
    }

    componentDidMount() {
        this.getFiles()
    }

    render() {
        const files = this.state.files;
        return(
            <h1>Explorer</h1>
            
        )
        
    }
}

export default Explorer;
