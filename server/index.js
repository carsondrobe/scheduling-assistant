const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Ribbitrock",
    database: "employeeSystem",
});

app.post('/create', (req, res) => {
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const shifts = req.body.shifts;
    const position = req.body.position;

    db.query(
        "INSERT INTO Employees (firstName, lastName, shifts, position) VALUES (?,?,?,?)",
        [firstName, lastName, shifts, position],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error inserting values");
            } else {
                console.log("Values Inserted");
                res.status(200).send("Values Inserted");
            }
        }
    );
});

app.get("/employees", (req, res) => {
    const filterPosition = req.query.position;
    let query = "SELECT * FROM Employees";

    if (filterPosition) {
        query += ` WHERE position = '${filterPosition}'`;
    }

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error retrieving employees");
        } else {
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    const id = req.body.id;
    const shifts = req.body.shifts;
    db.query("UPDATE Employees SET shifts = ? WHERE id = ?", [shifts, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM Employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
