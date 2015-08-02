/*
MongoDb					SQL
_______________________
Database				Database
Collection      Table
Document 				Row
Field 					Column
*/
//Example on how to look for data.
db.addressBook.find({
	'email': 'jean@troiani.com'
});

brew install mongodb
./mongod --dbpath db   //sets the path
./mongo			//To start mongo after the server is running.
which mongo  //path to mongo


show dbs //Shows Databases
use myDatabase //switch/create that database.
show.collections	//show collecitons (tables in NoSQL).
db.user.insert({					//db current DB , user name of the new collection
	'name' : 'Jean Troiani',
	'email': 'jean@troiani.com'
});
db.users.find() 					//shows collections in the current DB.
db.users.find().pretty() 	//shows collections in the current DB.
db.users.count() 					//shows the amountof collections.
db.users.update({					// adds new information and if it cannot
'name': 'Jean Troiani'		//find the subject it creates it with the last parameter.
}, {
$set:{'Phone': 12334567
}}), {
upsert: true
};

db.users.remove({'name': 'Jean Troiani'}) 	//to remove Document (Row in NoSQL).

db.DropDatabase()			//whilst in use, deletes the database.
exit 									//To exit mongoDB