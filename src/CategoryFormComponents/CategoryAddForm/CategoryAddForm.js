import React, {useEffect, useState} from "react";
import './CategoryAddForm.scss';
import CategoryButton from "../CategoryButton/CategoryButton";

const CategoryAddForm = props => {
    const [name, setName] = useState(''); 
    const [entry, setEntry] = useState({}); 

    const _detectNameTextChanged = (key, value) => {
        setName(value);
        console.log("_detectNameTextChanged event fired");
    }

    useEffect( () => {
        setEntry({'name':name});
        console.log("setEntry Changed");
    }, [name]);

    const _add = () => {
        console.log("AddForm _add triggered");
        props.onAddEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setName('');
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <CategoryButton onclick={ _add } title="Add Entry" />
            <br />
            <label>Category Name:</label>
            <input type="text" placeholder="name" value={ name } 
              onChange={ e => _detectNameTextChanged('name', e.target.value) } />
            </div>
    );
}
export default CategoryAddForm;