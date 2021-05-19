import React from 'react';
import Displayer from './displayer'
const URL = "http://localhost:3000/";


class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            path: 'c:%2F',
            isRoot: false,
        };

        this.navigateToPath = this.navigateToPath.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.goToRoot = this.goToRoot.bind(this);
        this.levelUp = this.levelUp.bind(this);
        this.goToFolder = this.goToFolder.bind(this);

    }

    navigateToPath(event) {
        if (event.key === 'Enter') {
            this.setState({ path: event.target.value.replace(/\//g, "%2F") }, () => this.getFiles());
        }
    }

    async getFiles() {
        const { path } = this.state;
        const response = await fetch(`${URL}${path}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const files = await response.json();
        this.setState({ files });
        console.log(files);
    }



    goToRoot() {
        this.setState({ path: "c:%2F", currentPage: 1 }, () => this.getFiles())
    }


    levelUp() {
        const { path } = this.state;
        const index = path.lastIndexOf('%2F');
        const upPath = path.substring(index,0);
        this.setState({ path: upPath, currentPage: 1 }, () => this.getFiles())

    }

    goToFolder(file) {
        const { path } = this.state;
        this.setState({ path: path+"%2F"+file, currentPage: 1 }, () => this.getFiles())
    }

    handleChange(event) {
        const { path } = this.state;
        path.replace(/\//g, "%2F");
        this.setState({ path: event.target.value });
    }

    componentDidMount() {
        this.getFiles()
    }



    render() {
        const { files, path } = this.state;
        let { isRoot } = this.state;
          if (path === 'c:%2F') {
            isRoot = true;
        }
            return (
            <>
                <div className="container window p-5">
                    <div className="row mb-3 p-1">
                        <div className="col-12 inside-window">
                            <input type="text" value={path.replace(/%2F/g, "/")} onChange={this.handleChange} onKeyPress={this.navigateToPath} ></input>
                        </div>
                    </div>
                    <button disabled={isRoot} className="btn mb-3 mr-3" onClick={this.levelUp}>Go up</button>
                    <button className="btn mb-3" onClick={this.goToRoot}>Go to root</button>
                    <Displayer files={files} goToFolder={this.goToFolder} />
                </div>
            </>
        )

    }
}

export default Explorer;
