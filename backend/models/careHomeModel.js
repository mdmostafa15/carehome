const db = require("./db.js");

module.exports.getAllCarehome = async () => {
    const sql = "SELECT * FROM carehome"
    const [records] = await db.query(sql);
    return records;
}

module.exports.getCarehomeById = async (id) => {
    const sql ="SELECT * FROM carehome WHERE id = ?";
    const [[record]] = await db.query(sql, [id]);
    return record;
}

module.exports.deleteCarehome = async (id) => {
    const sql = "DELETE FROM carehome WHERE id = ?";
    const [{ affectedRows }] = await db.query(sql, [id]);
    return affectedRows;
}

module.exports.addCarehome = async (obj) => {
    const arr =Object.values(obj);
    const sql = 'INSERT INTO carehome (image, home, holding, area, postal, tags, facilities) VALUES (?)';
    const [{affectedRows}] = await db.query(sql,[arr]);
    return affectedRows;
}

module.exports.editCarehome = async (obj) => {
    // const sql = ""
    // const [{affectedRows}] = await db.query();
    // return affectedRows;
}