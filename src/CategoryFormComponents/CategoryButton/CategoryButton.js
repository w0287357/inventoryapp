import React from "react";
import './CategoryButton.css';

const CategoryButton = props => {
    return(
        <div className="CategoryButton">
            <button onClick={ props.onclick}>{ props.title }</button>
        </div>
    );
}
export default CategoryButton;