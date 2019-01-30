//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err) {
        return console.log('Unable to connect to mongo server');
    }
     
     
     console.log('Connection successfull');

    //  var todos = db.collection('Todos').find().toArray().then((docs)=>{
    //        console.log('todos');
    //        var {comlpeted} = docs;
    //        console.log(comlpeted);
    //        console.log(JSON.stringify(docs,undefined,2));

    //  },(err)=>{
    //       console.log('unable to fetch toDos , '+ err);
    //  });


//     var todos = db.collection('Todos').find({completed: false}).toArray().then((docs) =>{ 
//         console.log(JSON.stringify(docs,undefined,2));  
//     }, (err)=>{
//            console.log('umable to fetch the records ,' + err)
//     }
//  );
  
// var todos = db.collection('Todos').find({_id : new ObjectID('5c4fe55fb76967373c283922')
// }).toArray().then((docs) =>{
//       console.log(JSON.stringify(docs,undefined,2));
// }, (err)=>{
//      console.log('Quert not completed , '+err);
//   }
// );

var todos = db.collection('Todos').find().count().then((count) =>{
      console.log(`To dos ${count}`);
}, (err)=>{
     console.log('Quert not completed , '+err);
  }
);


var user = db.collection('User').find({name :'dummy user', Age :29}).count().then((count) =>{
      console.log('Users : '+count)   ;
} ,(err)=>{
    console.log('Cannot fetch the users ,' +err);
})
      db.close();

})