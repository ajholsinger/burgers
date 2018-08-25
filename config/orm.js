var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, res){
        if (err) { throw err;
      }
      cb(res);
      });
  },
    insertOne: function(table, column, value, cb) {
      var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += column.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += value;
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, value, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
},
    updateOne: function(table, column, cb) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, [table, column], function(err, result) {
        if (err) {throw err;}
        cb(result);
      });
    }
};

module.exports = orm;

