import * as React from "react"

const Section = (props) => {
    return (
        <div className={`py-5 px-[8%] ${props.color ? props.color : ""}`}>
            {props.children}
        </div>
    )
}

export default Section
