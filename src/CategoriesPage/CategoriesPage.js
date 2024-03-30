// CategoriesPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryTable from '../CategoryTableComponents/CategoryTable/CategoryTable';
import CategoryAddForm from '../CategoryFormComponents/CategoryAddForm/CategoryAddForm';
import CategoryEditForm from '../CategoryFormComponents/CategoryEditForm/CategoryEditForm';

const CategoriesPage = () => {
  const [categories, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(false);
  const [selectedCategory, setSelectedEntry] = useState({});

  useEffect(() => {
    let url = "http://127.0.0.1:3001/categories";
    axios.get(url)
      .then(res => {
        setItems(res.data.entries);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
 
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
 
   const _editItem = entry => {
    setSelectedEntry(entry);
    setEditingItem(true);
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
    <div>
      <CategoryTable
        entries={categories}
        onEditEntry={_editItem}
        onDeleteEntry={deleteCategories}
      />
      {editingItem ? (
        <CategoryEditForm
          onEditEntry={updateCategory}
          entry={selectedCategory}
        />
      ) : (
        <CategoryAddForm
          onAddEntry={_addCategory}
        />
      )}
    </div>
  );
}

export default CategoriesPage;
