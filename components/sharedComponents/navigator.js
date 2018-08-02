import React from 'react'
import { Navbar } from 'reactstrap'
import ms from 'pretty-ms'

class Navigator extends React.Component {
    state = {
        seconds: 1000 * 60 * 60
    }

    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds - 1000
        }))
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <Navbar className="border-bottom bg-white" fixed="top">
                <div className="d-flex justify-content-between">
                    <div className="p-2 bg-danger rounded text-white">{ ms(this.state.seconds) }</div>
                </div>
            </Navbar>
        )
    }
}

export default Navigator