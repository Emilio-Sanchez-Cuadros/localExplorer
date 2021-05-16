import React from 'react';
import { Link } from 'react-router-dom';
const URL = "http://localhost:3000/";

class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: 'c:%2F',
            files: [],
            currentPage: 1,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async getFiles(path = 'c:%2F') {
        const response = await fetch(`${URL}${path}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const files = await response.json();
        this.setState({ files });
    }

    handleChange(event) {
        const { path } = this.state;
        this.setState({ path: event.target.value });
        console.log(path)
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.path);
        event.preventDefault();
    }

    componentDidMount() {
        this.getFiles()
    }

    render() {
        const { currentPage, path, files } = this.state;
        const filesPerPage = 5;
        const totalPages = Math.round(files.length / filesPerPage)
        const filesToShowPosition = filesPerPage * (currentPage - 1);
        console.log(files)
        return (
            <>
                <div className="container window p-5">
                    <div className="row inside-window mb-3 p-1">
                        <input type="text" value={path.replace(/%2F/g, "/")} onChange={this.handleChange} onKeyPress={this.onKeyPress} ></input>
                        <Link to={`${path}`} className="btn btn-outline-light">
                            Go to path</Link>
                    </div>
                    <div className="inside-window-2 p-3">
                        <ul>
                            {files.slice(filesToShowPosition, filesToShowPosition + filesPerPage).map((file) => (
                                <li key={file}>{file}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {[...Array(totalPages)].map((_, num) => (
                            <button
                                className="btn mr-2 page-button mt-5"
                                key={num}
                                disabled={num + 1 === currentPage}
                                onClick={() => this.setState({ currentPage: num + 1 })}
                            >
                                {num + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </>
        )

    }
}

export default Explorer;
