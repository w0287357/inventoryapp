import React, {useEffect, useState} from "react";
import './AddForm.css';
import Button from "../Button/Button";

const AddForm = props => {
    const [category_id, setCategory_id] = useState(''); 
    const [title, setTitle] = useState(''); 
    const [description, setDescription] = useState(''); 
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(''); 
    const [sku, setSku] = useState(''); 
    const [entry, setEntry] = useState({}); 

    const _detectCategory_idChanged = (key, value) => {
        setCategory_id(value);
        console.log("_detectCategory_idChanged event fired");
    }
    const _detectTitleTextChanged = (key, value) => {
        setTitle(value);
        console.log("_detectTitleTextChanged event fired");
    }
    const _detectDescriptionTextChanged = (key, value) => {
        setDescription(value);
        console.log("_detectDescriptionTextChanged event fired");
    }
    const _detectPriceTextChanged = (key, value) => {
        setPrice(value);
        console.log("_detectPriceTextChanged event fired");
    }
    const _detectQuantityTextChanged = (key, value) => {
        setQuantity(value);
        console.log("_detectQuantityTextChanged event fired");
    }
    const _detectSkuTextChanged = (key, value) => {
        setSku(value);
        console.log("_detectSkuTextChanged event fired");
    }

    useEffect( () => {
        setEntry({'category_id':category_id, 'title':title, 'description':description, 'price':price, 'quantity':quantity, 'sku':sku});
        console.log("setEntry Changed");
    }, [category_id, title, description, price, quantity, sku]);

    const _add = () => {
        console.log("AddForm _add triggered");
        props.onAddEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setCategory_id(''); setTitle(""); setDescription(""); setPrice(''); setQuantity(""); setSku("");
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _add } title="Add Entry" />
            <br />
            <label>Category:</label>
            <input type="text" placeholder="category_id" value={ category_id } 
              onChange={ e => _detectCategory_idChanged('category_id', e.target.value) } />
            <br />
            <label>Title:</label>
            <input type="text" placeholder="title" value={ title } 
              onChange={ e => _detectTitleTextChanged('title', e.target.value) } />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="description" value={ description } 
              onChange={ e => _detectDescriptionTextChanged('description', e.target.value) } />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="price" value={ price } 
              onChange={ e => _detectPriceTextChanged('price', e.target.value) } />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="quantity" value={ quantity } 
              onChange={ e => _detectQuantityTextChanged('quantity', e.target.value) } />
            <br />
            <label>Sku:</label>
            <input type="text" placeholder="sku" value={ sku } 
              onChange={ e => _detectSkuTextChanged('sku', e.target.value) } />
            </div>
    );
}
export default AddForm;