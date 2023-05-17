import express from "express";
import mysql2 from "mysql2/promise";
import ViteExpress from "vite-express";


const app = express();
app.use(express.json());




app.get("/hello", (_, res) => {
 res.send("Hello Vite + React + TypeScript!");
});


// Create a connection pool
const db= mysql2.createPool({
 user:'root',
 host:'localhost',
 password:'',
 database:'login_system',
 waitForConnections: true,
 connectionLimit: 10,
 queueLimit: 0,
});


// Endpoint to fetch users from the database
app.get('/users', async (req, res) => {
 try {
   // Get a connection from the pool
   const connection = await db.getConnection();


   // Execute the query
   const [rows] = await connection.query('SELECT * FROM login_user');


   // Release the connection back to the pool
   connection.release();


   res.json(rows);
 } catch (error) {
   console.error('Error fetching users:', error);
   res.status(500).json({ error: 'Error fetching users' });
 }
});




app.post('/register',async (req,res)=>{
 const username= req.body.username;
 const password= req.body.password;


 try {
   const connection = await db.getConnection();


   const sql = 'INSERT INTO login_user (username, password) VALUES (?, ?)';
   const values = [username, password];


   await connection.query(sql, values);


   connection.release();


   console.log('User registered successfully!');
   res.status(200).json({ message: 'User registered successfully' });
 } catch (error) {
   console.error('Error inserting user into database:', error);
   res.status(500).json({ error: 'Error inserting user into database' });
 }
});


ViteExpress.listen(app, 3000, () =>
 console.log("Server is listening on port 3000...")
);



