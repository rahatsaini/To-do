//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err) {
        return console.log('Unable to connect to mongo server');
    }
     
     
     console.log('Connection successfukl');

    // db.collection('Todos').insertOne({
    //      text: 'something to do',
    //      completed :false
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log('unable to insert to do ',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

//  db.collection('User').insertOne({
     
//      name :'dummy user',
//      Age : 30,
//      Location :'Melbourne'
//  },(err,result)=>{
//      if(err)
//         return console.log('Unable to insert , '+ err);
     
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));

//  });

     db.close();

})