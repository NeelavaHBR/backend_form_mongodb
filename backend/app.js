
const express = require("express")
const mongoConnect = require("./db/db")



const app = express()
port = 5001
app.use(express.json());

const db= mongoConnect()



app.get("/hello",(req, res)=>{
    res.send("hello word")
})

// app.post("/api/books", (req, res) => {
//     const book = req.body;
//     const db= mongoConnect()
//     db.collection("books") // Assuming "books" is the name of the collection
//         .insertOne(book)
//         .then(result => {
//             res.status(201).json(result);
//         })
//         .catch(err => {
//             res.status(500).json({ error: "Failed to create a document" });
//         });
// });



app.post("/api/books", async (req, res) => {
    try {
        const db = mongoConnect(); // Assuming mongoConnect() returns the database connection
        const book = req.body;
        console.log(book);
        const result = await db.collection("books").insertOne(book);
        res.status(201).json(result.ops[0]); // Return the inserted document
    } catch (error) {
        console.error("Failed to create a document:", error);
        res.status(500).json({ error: "Failed to create a document" });
    }
});




app.listen(port, ()=>{
    console.log("server is running",port);
})