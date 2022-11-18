import React from "react";
import './Card.css';
import PropTypes, { func } from "prop-types"

function Card({ title, imageUrl, body, onClick, children, spacing = 2, direction = "row", wrap = false }) {
    const style = {
        display: "flex",
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap" : "nowrap",
        flexDirection: direction,
    }
    return (

        <div style={style}>

            {children}

       {/*  <div className="card-container">

                <div className="image-container">
                    <img src={imageUrl} alt='' />
                </div>

                <div className="card-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>

                    <div className="card-body">
                        <p>{body}</p>
                    </div>
                </div>

                <div className="btn">
                    <button onClick={onClick}>
                        <a>
                            View More
                        </a>
                    </button>
                </div>
    </div>*/} 

        </div>


    )

}

Card.propTypes = {
    onClick: PropTypes.func,
    spacing: PropTypes.number,
    wrap: PropTypes.bool,
    direction: PropTypes.oneOf(["row", "column"]),
}

Card.defaultProps = {
    onClick: undefined,
};


export default Card