//establish a connection to DB here
const db = require("../connection");

/*
    EDIT QUERIES BELOW TO FIT NEEDS
*/

module.exports = {
    index(req, res) {
        db.query(`SELECT * FROM items`, (err, results)=>{
            if (err) return res.sendStatus(500);
            return res.send({ entries: results });
        });
    },
    store(req, res) {
        const { category_id, title, description, price, quantity, sku } = req.body.entry;
        db.query(`INSERT INTO items (category_id, title, description, price, quantity, sku) VALUES (?,?,?,?,?,?)`, 
            [category_id, title, description, price, quantity, sku], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM items`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    }, 
    update(req, res){
        const { category_id, title, description, price, quantity, sku } = req.body.entry;
        db.query(`UPDATE items SET category_id=?, title=?, description=?, price=?, quantity=?, sku=? WHERE id=?`, 
            [category_id, title, description, price, quantity, sku, req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM items`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    },
    destroy(req, res){
        db.query(`DELETE FROM items WHERE id=?`, [req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM items`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    },
    indexCategory(req, res) {
        db.query(`SELECT * FROM categories`, (err, results)=>{
            if (err) return res.sendStatus(500);
            return res.send({ entries: results });
        });
    },
    storeCategory(req, res) {
        const { name } = req.body.entry;
        db.query(`INSERT INTO categories (name) VALUES (?)`, 
            [name], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    }, 
    updateCategory(req, res){
        const { name } = req.body.entry;
        db.query(`UPDATE categories SET name=? WHERE id=?`, 
            [ name, req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    },    
    destroyCategory(req, res){
        db.query(`DELETE FROM categories WHERE id=?`, [req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM categories`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    }
};