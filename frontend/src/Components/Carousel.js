import React from "react"

//Import the CSS

export const CarouselContent = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width}}>
            {children}
        </div>
    )
}

const Carousel = ({children}) => {
    return (
        <div className="carousel">
            <div className="inner" style={{ transform: "translateX(-0%)"}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>
        </div>
    )
}