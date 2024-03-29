// ItemsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../TableComponents/Table/Table'
import AddForm from '../FormComponents/AddForm/AddForm';
import EditForm from '../FormComponents/EditForm/EditForm';

const ItemsPage = () => {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(false);
    const [selectedEntry, setSelectedEntry] = useState({});

    useEffect(() => {
        let url = "http://127.0.0.1:3001/items";
        axios.get(url)
          .then(res => {
            setItems(res.data.entries);
          })
          .catch(error => {
            console.log(error);
          });
    }, []);

    const _addItem = entry => {
        //send entry to server via axios
        //update entries with response
        console.log("App _addEntry triggered");
     
        let url = "http://127.0.0.1:3001/items";  
        axios.post(url, {
                entry: entry
             })
             .then( res => {
                console.log(res.data.entries);
                setItems(res.data.entries);
             })
             .catch(error => {
                console.log(error);
             });
      }
     
       const editItem = entry => {
         setSelectedEntry(entry);
         setEditingItem(true);
       };
     
       const updateItems = entry => {
         let url = `http://127.0.0.1:3001/items/${entry.id}`;
         axios.patch(url, { entry })
           .then(res => {
              console.log(res.data.entries);
              setItems(res.data.entries);
           })
           .catch(error => {
             console.log(error);
           });
         setEditingItem(false);
       };
     
      //delete items
       const deleteItems = entry => {
         let url = `http://127.0.0.1:3001/items/${entry.id}`;
         axios.delete(url)
           .then(res => {
           setItems(res.data.entries);
           })
           .catch(error => {
             console.log(error);
           });
       };

  return (
    <div>
      <Table
        entries={items}
        onEditEntry={editItem}
        onDeleteEntry={deleteItems}
      />
      {editingItem ? (
        <EditForm
          onEditEntry={updateItems}
          entry={selectedEntry}
        />
      ) : (
        <AddForm
          onAddEntry={_addItem}
        />
      )}
    </div>
  );
}

export default ItemsPage;