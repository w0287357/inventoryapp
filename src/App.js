import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponents/AddForm/AddForm';
import EditForm from './FormComponents/EditForm/EditForm';
import CategoryTable from './CategoryTableComponents/CategoryTable/CategoryTable';
import CategoryAddForm from './CategoryFormComponents/CategoryAddForm/CategoryAddForm';
import CategoryEditForm from './CategoryFormComponents/CategoryEditForm/CategoryEditForm';

const ItemManagement = ({ entries, onEditEntry, onDeleteEntry, onAddEntry }) => (
  <div>
    <AddForm onAddEntry={onAddEntry} />
    <Table entries={entries} onEditEntry={onEditEntry} onDeleteEntry={onDeleteEntry} />
  </div>
);

const CategoryManagement = ({ entries, onEditEntry, onDeleteEntry, onAddEntry }) => (
  <div>
    <CategoryAddForm onAddEntry={onAddEntry} />
    <CategoryTable entries={entries} onEditEntry={onEditEntry} onDeleteEntry={onDeleteEntry} />
  </div>
);

const App = props => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(false);
  const [editingCategory, setEditingCategory] = useState(false);
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
   setEditingCategory(true);
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
   {editingItem ? (
     <div>
       {/* Render EditForm based on showItems */}
       {showItems ? (
         <EditForm onEditEntry={updateItems} entry={selectedEntry} />
       ) : (
         <CategoryEditForm onEditEntry={updateCategory} entry={selectedEntry} />
       )}
     </div>
   ) : (
     // Render ItemManagement or CategoryManagement based on showItems
     showItems ? (
       <ItemManagement
         entries={items}
         onEditEntry={editItem}
         onDeleteEntry={deleteItems}
         onAddEntry={_addItem}
       />
     ) : (
       <CategoryManagement
         entries={items}
         onEditEntry={editCategory}
         onDeleteEntry={deleteCategories}
         onAddEntry={_addCategory}
       />
     )
   )}
 </div>
  );
}

export default App;
