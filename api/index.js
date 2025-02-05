const express = require("express");
const mysql = require("mysql2/promise"); // TAKE A NOTE "PROMISE"


const app = express();
const port = 3000;

const dbConfig = {
    host: "localhost",
    port: 3306,
    user : "root",
    password: "123456",
    database: "simple_calc_db"
};

app.use(express.json());

app.post("/api/calculate", async (req, res) => {
    const { operation, result } = req.body;
    if(!operation || !result ){
        return res.status(400).json({ error: "Error to insert the data"});
    }
    try {
        const conn = await mysql.createConnection(dbConfig);
        const query = " INSERT INTO calculations (operation, result) VALUES (?, ?)";
        await conn.execute(query, [operation, result]);
        await conn.end();
    } catch (error) {
        res.status(500).json({ error: "Somenthing happens in the server"});
    }
});

app.get("/api/calculations", async (req, res) => {
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [rows] = await conn.execute("SELECT * FROM calculations");
        await conn.end();
        res.status(200).json(rows); // array of messages objects
    } catch (error) {
        res.status(500).json({ error: "Fail" });
    }
})

async function initDatabase() {
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [tables] = await conn.query("SHOW TABLES like 'calculations'"); 

        if(tables.length === 0){
            const createTableQuery = `
                CREATE TABLE calculations (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    operation VARCHAR(255),
                    result FLOAT
                )
            `;

            await conn.query(createTableQuery);
            console.log('Table created');
            
        }

        await conn.end();
        

    } catch (error) {
        console.error("Database ERROR", error);
        process.exit(1);
        
    }
}

initDatabase().then(() => {
    app.listen(port, () => {
        console.log(`The server is runnin, PORT: ${port}`);
    })
}).catch((error) => {
    console.error("Fail to init database", error);
    process.exit(1);
})