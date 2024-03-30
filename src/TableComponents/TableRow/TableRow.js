import React from "react";
import './TableRow.scss';

const TableRow = props => {
    return(
        <tr key={props.index}>
            <td>{ props.index + 1 }</td>
            <td>{ props.entry.category_id }</td>
            <td>{ props.entry.title }</td>
            <td>{ props.entry.description }</td>
            <td>{ props.entry.price }</td>
            <td>{ props.entry.quantity }</td>
            <td>{ props.entry.sku }</td>
            <td><button onClick={ () => props.onEditEntry(props.entry) }>Edit</button></td>
            <td><button onClick={ () => { if (window.confirm('Are you sure you want to delete this entry?')) props.onDeleteEntry(props.entry) } }>Delete</button></td>
        </tr>
    );
}
export default TableRow;