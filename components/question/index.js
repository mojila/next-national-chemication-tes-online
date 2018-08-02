import React from 'react'

import Navigator from '../sharedComponents/navigator'

const Number = ({ children, active }) => <div className={ "pointer p-2 pl-4 pr-4 small rounded m-1 " + (active ? "text-white bg-primary":"border bg-white")}>{ children }</div>

class Question extends React.Component {
    render() {
        return (
            <div>
                <Navigator/>
                <div className="mt-5 pt-3 border-bottom bg-light p-2">
                    <div className="d-flex justify-content-start noselect">
                        <Number active={true}>1</Number>
                        <Number>2</Number>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question