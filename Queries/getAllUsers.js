module.exports = async(pool)=>{
    const con = await pool;
    const users = await con.query(`
    SELECT * FROM users;
    `);

    return users
}