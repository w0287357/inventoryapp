import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios";
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponents/AddForm/AddForm';
import EditForm from './FormComponents/EditForm/EditForm';
import CategoryTable from './CategoryTableComponents/CategoryTable/CategoryTable';
import CategoryAddForm from './CategoryFormComponents/CategoryAddForm/CategoryAddForm';
import CategoryEditForm from './CategoryFormComponents/CategoryEditForm/CategoryEditForm';

const App = props => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState({});
  const [showItems, setShowItems] = useState(true); // Initially showing item management

  useEffect(() => {
    let url = showItems ? "http://127.0.0.1:3001/items" : "http://127.0.0.1:3001/categories";
    axios.get(url)
      .then(res => {
        setItems(res.data.entries);
      })
      .catch(error => {
        console.log(error);
      });
  }, [showItems]);

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

 const _addCategory = entry => {
   //send entry to server via axios
   //update entries with response
   console.log("App _addEntry triggered");

   let url = "http://127.0.0.1:3001/categories";  
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

  const editCategory = entry => {
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

  //update categories
  const updateCategory = entry => {
   let url = `http://127.0.0.1:3001/categories/${entry.id}`;
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


  //delete categories
  const deleteCategories = entry => {
   let url = `http://127.0.0.1:3001/categories/${entry.id}`;
   axios.delete(url)
     .then(res => {
     setItems(res.data.entries);
     })
     .catch(error => {
       console.log(error);
     });
 };

  return (
   <div className="App">
  <div>
    <button onClick={() => setShowItems(true)}>Manage Items</button>
    <button onClick={() => setShowItems(false)}>Manage Categories</button>
  </div>
  {showItems ? (
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
  ) : (
    <div>
      <CategoryTable
        entries={items}
        onEditEntry={editCategory}
        onDeleteEntry={deleteCategories}
      />
      {editingItem ? (
        <CategoryEditForm
          onEditEntry={updateCategory}
          entry={selectedEntry}
        />
      ) : (
        <CategoryAddForm
          onAddEntry={_addCategory}
        />
      )}
    </div>
  )}
</div>
  );
}

export default App;
