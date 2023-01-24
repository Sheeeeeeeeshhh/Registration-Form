
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

app.use(cors());

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'12345678',
	database:'final'

});

/*app.get('/', (req,res) => {
    con.query("insert into practice (firstname) values ('mae')",(err,result) =>{
        console.log(err)
        console.log('success')
    })
}) */
app.post('/', (req,res) => {
	const firstName = req.body.firstName;
	
	con.query(
		'INSERT INTO practice (firstname) VALUES (?) ',
		[firstName],
		(err, result) => {
			console.log(err)
			console.log(result)
		})

})



app.listen(3000, () => {
	console.log("server is running at port 3000")
})  