import React from 'react';

class Displayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            folderIcon: "https://img.icons8.com/emoji/452/open-file-folder-emoji.png",
            fileIcon: "data:image/png;base64,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",
            currentPage: 1,
            filesPerPage: 5,

        };

    }

    // I've used the binding just to be consistent on my code since I started creating functions like that, 
    // but this way is cleaner
    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render() {
        const { files } = this.props
        const { fileIcon, folderIcon, currentPage, filesPerPage } = this.state;
        const indexOfLastFile = currentPage * filesPerPage;
        const indexOfFirstFile = indexOfLastFile - filesPerPage;
        const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);
        const pageNumbers = [];
        const { goToFolder } = this.props;
        
        for (let i = 1; i <= Math.ceil(files.length / filesPerPage); i++) {
            pageNumbers.push(i);
          }

       
        return (
            <>
               <div className="inside-window-2 p-5">
                        <ul>
                            {currentFiles.map((file) => (
                                file.split('.').length === 2 || file.includes('.tmp') || file.includes('.exe') ? 
                                <li key={file}><img src={fileIcon} alt="file" style={{ width: '35px'}}></img>{file}</li> : 
                                <a key={file} onClick={() => goToFolder(file)}><li key={file}><img src={folderIcon} alt="folder" style={{ width: '35px'}}></img>{file}</li></a>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {pageNumbers.map((_, num) => (
                            <button
                                className="btn mr-2 mt-5"
                                key={num}
                                disabled={num + 1 === currentPage}
                                onClick={() => this.setState({ currentPage: num + 1 })}
                            >
                                {num + 1}
                            </button>
                        ))}
                    </div>
            </>
        )

    }
}

export default Displayer;