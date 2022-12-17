import * as React from "react"

const Layout = (props) => {
    return (
        <div className="flex flex-col">
            {props.children}
        </div>
    )
}

export default Layout
