import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Table from './TableComponents/Table/Table';
import AddForm from './FormComponents/AddForm/AddForm';
import EditForm from './FormComponents/EditForm/EditForm';
import CategoryTable from './CategoryTableComponents/CategoryTable/CategoryTable';
import CategoryAddForm from './CategoryFormComponents/CategoryAddForm/CategoryAddForm';
import CategoryEditForm from './CategoryFormComponents/CategoryEditForm/CategoryEditForm';


const App = () => {
  const [entries, setEntries] = useState([]);
  const [editing, setEditing] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState({});
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    let url = 'http://127.0.0.1:3001/entries';
    axios
      .get(url)
      .then(res => {
        console.log(res.data.entries);
        setEntries(res.data.entries);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const _addEntry = entry => {
    let url = 'http://127.0.0.1:3001/entries';
    axios
      .post(url, {
        entry: entry,
      })
      .then(res => {
        console.log(res.data.entries);
        setEntries(res.data.entries);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const _editEntry = entry => {
    setSelectedEntry(entry);
    setEditing(true);
  };

  const _updateEntry = entry => {
    let url = `http://127.0.0.1:3001/entries/${entry.id}`;
    axios
      .patch(url, {
        entry: entry,
      })
      .then(res => {
        console.log(res.data.entries);
        setEntries(res.data.entries);
      })
      .catch(error => {
        console.log(error);
      });

    setEditing(false);
  };

  const _deleteEntry = entry => {
    let url = `http://127.0.0.1:3001/entries/${entry.id}`;
    axios
      .delete(url, {
        entry: entry,
      })
      .then(res => {
        console.log(res.data.entries);
        setEntries(res.data.entries);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleManageItemsClick = () => {
    setShowItems(true);
  };

  return (
    <div className="App">
      {!showItems && (
        <button onClick={handleManageItemsClick}>Manage Items</button>
      )}
      {showItems && (
        <>
          {editing ? (
            <CategoryEditForm onEditEntry={_updateEntry} entry={selectedEntry} />
          ) : (
            <CategoryAddForm onAddEntry={_addEntry} />
          )}
          <CategoryTable
            entries={entries}
            onEditEntry={_editEntry}
            onDeleteEntry={_deleteEntry}
          />
        </>
      )}
    </div>
  );
};

export default App;
