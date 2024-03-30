import React, {useEffect, useState} from "react";
import './AddForm.scss';
import Button from "../Button/Button";
import axios from "axios";

const AddForm = props => {
    const [category_id, setCategory_id] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [entry, setEntry] = useState({});
    const [availableCategoryIds, setAvailableCategoryIds] = useState([]);

    const _detectTitleTextChanged = (key, value) => {
        setTitle(value);
        console.log("_detectTitleTextChanged event fired");
    }
    const _detectDecriptionTextChanged = (key, value) => {
        setDescription(value);
        console.log("_detectDecriptionTextChanged event fired");
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
        setEntry({'category_id':category_id, 'title':title, 'description':description, 'price':price, 'quantity':quantity, 'sku':sku });
        //call the function to show the list of categories
        fetchAvailableCategoryIds();      
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
    
    //retrieve list of categories
    const fetchAvailableCategoryIds = entry => {
      let url = `http://127.0.0.1:3001/categories`;
      axios.get(url)
          .then(res => {
              const categories = res.data.entries.map(entry => entry.id);
              setAvailableCategoryIds(categories);
          })
          .catch(error => {
              console.error("Error fetching category IDs:", error);
          });
   };

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _add } title="Add Entry" />
            <br />
            <label>Category ID</label>
            <select value={category_id} onChange={e => setCategory_id(e.target.value)}>
                <option value="">Select Category ID</option>
                {availableCategoryIds.map(category_id => (
                    <option key={category_id} value={category_id}>{category_id}</option>
                ))}
            </select>
            <br />
            <label>Title:</label>
            <input type="text" placeholder="Title" value={ title } 
              onChange={ e => _detectTitleTextChanged('title', e.target.value) } />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Description" value={ description } 
              onChange={ e => _detectDecriptionTextChanged('description', e.target.value) } />
              <br />
            <label>Price:</label>
            <input type="text" placeholder="Price" value={ price } 
              onChange={ e => _detectPriceTextChanged('price', e.target.value) } />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity" value={ quantity } 
              onChange={ e => _detectQuantityTextChanged('quantity', e.target.value) } />
            <br />
            <label>Sku:</label>
            <input type="text" placeholder="Sku" value={ sku } 
              onChange={ e => _detectSkuTextChanged('sku', e.target.value) } />
        </div>
    );
}
export default AddForm;