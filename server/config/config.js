//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://lowens97:edward97@cluster0-apiqq.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '25b1e9d610d74d4382c1897e8f91ffb4' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};