import React from "react";
import CategoryTableRow from "../CategoryTableRow/CategoryTableRow";
import './CategoryTable.scss';

const CategoryTable = props => {

    const _editEntry = entry => {
        console.log("CategoryTable _editEntry triggered");
        props.onEditEntry(entry);
    }

    const _deleteEntry = entry => {
        console.log("CategoryTable _deleteEntry triggered");
        props.onDeleteEntry(entry);
    }

    return(
        <div className="CategoryTable">
            <table style={{ marginTop:'16px' }} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.entries.map(
                            (entry, index) => (
                                <CategoryTableRow index={ index } entry={ entry } key={ index } onEditEntry={ _editEntry } onDeleteEntry={ _deleteEntry } />
                            )
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
export default CategoryTable;
