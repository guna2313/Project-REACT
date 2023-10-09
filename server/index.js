const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: 'sqluser',
  host: 'localhost',
  password: 'password',
  database: 'crud',
});

app.post('/create', (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const salary = req.body.salary;

  db.query(
    'INSERT INTO crud.my_bio (name, age, country, position, salary) VALUES (?, ?, ?, ?, ?)',
    [name, age, country, position, salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.get('/my_bio', (req, res) => {
  db.query('SELECT * FROM crud.my_bio', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const salary = req.body.salary;

  db.query(
    'UPDATE crud.my_bio SET name = ?, age = ?, country = ?, position = ?, salary = ? WHERE id = ?',
    [name, age, country, position, salary, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Updated');
      }
    }
  );
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM crud.my_bio WHERE id = ?', id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Value Deleted');
    }
  });
});

app.listen(3001, () => {
  console.log('backend is running');
});
