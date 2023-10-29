const db = require("./db.js");

module.exports.getCarehomeByQuery = async (obj) => {
    const k = Object.keys(obj);
    const temp = Object.values(obj);
    // const len = k.length;
    let sql;
    // if (len === 3) 
    //     sql =`SELECT * FROM carehome WHERE ${k[0]} = ? and ${k[1]} = ? and ${k[2]} = ?`;
    // if (len === 2)
    //     sql =`SELECT * FROM carehome WHERE ${k[0]} = ? and ${k[1]} = ?`;
    // if (len === 1) {
    //     sql =`SELECT * FROM carehome WHERE ${k[0]} = ?`;
    // }
    sql =`SELECT * FROM carehome WHERE ${k[0]} = ?`;
    const [record] = await db.query(sql, [ ...temp ]);   
    return record;
}
