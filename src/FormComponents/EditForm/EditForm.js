import React, {useEffect, useState} from "react";
import './EditForm.scss';
import Button from "../Button/Button";
import axios from "axios";

const EditForm = props => {
    const [id, setID] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [sku, setSku] = useState('');
    const [entry, setEntry] = useState({});
    const [availableCategoryIds, setAvailableCategoryIds] = useState([]);

    useEffect(()=>{
        setID(props.entry.id);
        setCategory_id(props.entry.category_id);
        setTitle(props.entry.title);
        setDescription(props.entry.description);
        setPrice(props.entry.price);
        setQuantity(props.entry.quantity);
        setSku(props.entry.sku);     
        //call function to retrieve list of categories
        fetchAvailableCategoryIds();      
    }, [props]);
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
        setEntry({'id':id, 'category_id':category_id, 'title':title, 'description':description, 'price':price, 'quantity':quantity, 'sku':sku});
        console.log("setEntry Changed");
    }, [id, category_id, title, description, price, quantity, sku]);

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

    const _edit = () => {
        console.log("EditForm _edit triggered");
        props.onEditEntry(entry);
        _clear();
    }

    const _clear = () => {
        setEntry({});
        setID(''); setCategory_id(''); setTitle(""); setDescription(""); setPrice(''); setQuantity(""); setSku("");
        console.log("_clear event fired");
    }

    return(
        <div className="Form" style={ {marginTop:'16px'} }>
            <Button onclick={ _edit } title="Save Entry" />
            <br />
            <label>Category ID:</label>
            <select value={category_id} onChange={e => setCategory_id(e.target.value)}>
                <option value="">Select Category ID</option>
                {availableCategoryIds.map(category_id => (
                    <option key={category_id} value={category_id}>{category_id}</option>
                ))}
            </select>
            <br />
            <label>Title</label>
            <input type="text" placeholder="Title" value={ title } 
              onChange={ e => _detectTitleTextChanged('value2', e.target.value) } />
            <br />
            <label>Description:</label>
            <input type="text" placeholder="Description" value={ description } 
              onChange={ e => _detectDecriptionTextChanged('value3', e.target.value) } />
            <br />
            <label>Price:</label>
            <input type="text" placeholder="Price " value={ price } 
              onChange={ e => _detectPriceTextChanged('value1', e.target.value) } />
            <br />
            <label>Quantity:</label>
            <input type="text" placeholder="Quantity " value={ quantity } 
              onChange={ e => _detectQuantityTextChanged('value2', e.target.value) } />
            <br />
            <label>Sku:</label>
            <input type="text" placeholder="Sku" value={ sku } 
              onChange={ e => _detectSkuTextChanged('value3', e.target.value) } />
            </div>
    );
}
export default EditForm;