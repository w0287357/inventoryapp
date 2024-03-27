import React from "react";
import TableRow from "../TableRow/TableRow";
import './Table.css';

const Table = props => {

    const _editEntry = entry => {
        console.log("Table _editEntry triggered");
        props.onEditEntry(entry);
    }

    const _deleteEntry = entry => {
        console.log("Table _deleteEntry triggered");
        props.onDeleteEntry(entry);
    }

    return(
        <div className="Table">
            <table style={{ marginTop:'16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SKU</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.entries.map(
                            (entry, index) => (
                                <TableRow index={ index } entry={ entry } key={ index } onEditEntry={ _editEntry } onDeleteEntry={ _deleteEntry } />
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
export default Table;
