// Import environment variables and mysql driver
const keys = require('../config/keys');
const mysql = require('mysql');

// Establish MySQL connection
const connection = mysql.createConnection({
  user: keys.mySqlUser,
  host: keys.mySqlHost,
  database: keys.mySqlDatabase,
  password: keys.mySqlPassword,
  port: keys.mySqlPort
});

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('*******************************************');
  console.log('Connected to MySQL as ID: ' + connection.threadId);
  console.log('*******************************************');
});

// Handle route logic in this file
const getLocations = (req, res) => {
  const postcode = req.body.postcode;
  connection.query(
    'SELECT name FROM postcode WHERE number = ? ', [postcode],
    function (error, results) {
      if (error) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      res.json(results);
    }
  );
};

const getMunicipalities = (req, res) => {
  const postcode = req.body.postcode;
  connection.query(
    'SELECT municipality.name FROM municipality, municipality_has_postcode WHERE municipality.number = municipality_has_postcode.municipality_number AND municipality_has_postcode.postcode_number = ? GROUP BY municipality.name', [postcode],
    function (error, results) {
      if (error) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log(results);
      res.send({
        payload: results,
      });
    }
  );
};

module.exports = {
  getLocations,
  getMunicipalities
}