import React from 'react';
import Swal from 'sweetalert2';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error) {
        let timerInterval
        Swal.fire({
            title: 'You don\'t have enough permissions to access this path',
            timer: 6000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
                window.location.reload(true);            }
        })

        // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
        this.setState({
            hasError: true,
        })
    }

    render() {
        if (this.state.hasError) {
            // Puedes renderizar cualquier interfaz de repuesto
            return <h1>error</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
