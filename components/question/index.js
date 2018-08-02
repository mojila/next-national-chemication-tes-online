import React from 'react'
import { Container } from 'reactstrap'

import Navigator from '../sharedComponents/navigator'

const Number = ({ children, active }) => <div className={ "pointer p-2 pl-4 pr-4 small rounded m-1 " + (active ? "text-white bg-primary":"border bg-white")}>{ children }</div>

class Question extends React.Component {
    render() {
        return (
            <div>
                <Navigator/>
                <div className="mt-5 pt-3 border-bottom bg-light p-2">
                    <div className="d-flex justify-content-start flex-wrap noselect">
                        <Number active={true}>1</Number>
                        <Number>2</Number>
                    </div>
                </div>
                <div className="mt-5">
                    <Container>
                        <div className="p-2 border">
                            
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Question