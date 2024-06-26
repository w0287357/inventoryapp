import React from "react";
import './CategoryTableRow.scss';

const CategoryTableRow = props => {
    return(
        <tr key={props.index}>
            <td>{ props.entry.id }</td>
            <td>{ props.entry.name }</td>
            <td><button onClick={ () => props.onEditEntry(props.entry) }>Edit</button></td>
            <td><button onClick={ () => { if (window.confirm('Are you sure you want to delete this entry?')) props.onDeleteEntry(props.entry) } }>Delete</button></td>
        </tr>
    );
}
export default CategoryTableRow;
