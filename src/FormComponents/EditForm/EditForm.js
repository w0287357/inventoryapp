import React, { useEffect, useState } from "react";
import './EditForm.css';
import Button from "../Button/Button";

const EditForm = props => {
    const [id, setID] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [entry, setEntry] = useState({});

    useEffect(() => {
        setID(props.entry.id);
        setCategoryID(props.entry.category_id);
        setTitle(props.entry.title);
        setDescription(props.entry.description);
        setPrice(props.entry.price);
        setQuantity(props.entry.quantity);
        setSku(props.entry.sku);
    }, [props.entry]);

    const _detectCategoryIDChanged = value => {
        setCategoryID(value);
        console.log("_detectCategoryIDChanged event fired");
    }

    const _detectTitleTextChanged = value => {
        setTitle(value);
        console.log("_detectTitleTextChanged event fired");
    }

    const _detectDescriptionTextChanged = value => {
        setDescription(value);
        console.log("_detectDescriptionTextChanged event fired");
    }

    const _detectPriceTextChanged = value => {
        setPrice(value);
        console.log("_detectPriceTextChanged event fired");
    }

    const _detectQuantityTextChanged = value => {
        setQuantity(value);
        console.log("_detectQuantityTextChanged event fired");
    }

    const _detectSkuTextChanged = value => {
        setSku(value);
        console.log("_detectSkuTextChanged event fired");
    }

    useEffect(() => {
        setEntry({ id, category_id: categoryID, title, description, price, quantity, sku });
        console.log("setEntry Changed");
    }, [id, categoryID, title, description, price, quantity, sku]);

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID('');
        setCategoryID('');
        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setSku('');
        console.log("_clear event fired");
    }

    return (
        <div className="Form" style={{ marginTop: '16px' }}>
            <Button onClick={_edit} title="Save Entry" />
            <br />
            <label>Category:</label>
            <input
                type="text"
                placeholder="Category"
                value={categoryID}
                onChange={e => _detectCategoryIDChanged(e.target.value)}
            />
            <br />
            <label>Title:</label>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => _detectTitleTextChanged(e.target.value)}
            />
            <br />
            <label>Description:</label>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={e => _detectDescriptionTextChanged(e.target.value)}
            />
            <br />
            <label>Price:</label>
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={e => _detectPriceTextChanged(e.target.value)}
            />
            <br />
            <label>Quantity:</label>
            <input
                type="text"
                placeholder="Quantity"
                value={quantity}
                onChange={e => _detectQuantityTextChanged(e.target.value)}
            />
            <br />
            <label>Sku:</label>
            <input
                type="text"
                placeholder="Sku"
                value={sku}
                onChange={e => _detectSkuTextChanged(e.target.value)}
            />
        </div>
    );
}

export default EditForm;
