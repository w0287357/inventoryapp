import React, { useEffect, useState } from "react";
import './CategoryEditForm.scss';
import CategoryButton from "../CategoryButton/CategoryButton";

const CategoryEditForm = props => {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [entry, setEntry] = useState({});

    useEffect(() => {
        setID(props.entry.id);
        setName(props.entry.name);
    }, [props]);

    const _detectNameTextChanged = (key, value) => {
        setName(value);
        console.log("_detectNameTextChanged event fired");
    }

    useEffect( () => {
        setEntry({'id':id, 'name':name});
        console.log("setEntry Changed");
    }, [id, name]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID(''); setName('');
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <CategoryButton onclick={ _edit } title="Save Entry" />
            <br />
            <label>Category Name:</label>
            <input type="text" placeholder="name" value={ name } 
              onChange={ e => _detectNameTextChanged('name', e.target.value) } />
            </div>
    );
}

export default CategoryEditForm;
