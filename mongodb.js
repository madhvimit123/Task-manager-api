// CRUD create read update delete

const {MongoClient,ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser:true, useUnifiedTopology: true },(error,client) => {
    if(error){
        console.log('Unable to connect to the database!')
    }

    const db=client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id:new ObjectID("5e2f22f5dc983113049487f9")
    // },{
    //     $inc:{
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description:'Shopping list'
    }).then((result)=>{
        console.log(result.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })
})