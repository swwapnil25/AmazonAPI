let mongo = require('mongodb');
let { MongoClient } = require('mongodb');
let mongoUrl = "mongodb+srv://Swwapnil25:TAWonrrUWEo6V1rA@cluster0.hhxhpcr.mongodb.net/?retryWrites=true&w=majority";
// "mongodb://127.0.0.1:27017"
let client = new MongoClient(mongoUrl)



async function dbConnect() {
    await client.connect()
}


let db = client.db('Amazon');


async function getData(colName, query) {
    let output = [];

    try {
        const cursor = db.collection(colName).find(query);
        for await (const data of cursor) {
            output.push(data)
        }
        cursor.closed
    } catch (err) {
        output.push({ "Error": "Error in getData" })
    }
    
    return output
}


// Post Order
async function postData(colName,data){
    let output ;
    try{
        output = await db.collection(colName).insertOne(data)
    }
    catch(err){
        output={"response":"Error in post data"}
    }
    return output
}

// update order
async function updateOrder(colName,condition,data){
    let output ;
    try{
        output = db.collection(colName).updateOne(condition,data)
    }
    catch(err){
        output={"response":"error in update order"}
    }
    return output
}

// Delete Order

async function deleteOrder(colName,condition){
    let output;
    try{
        output= await db.collection(colName).deleteOne(condition)
    }
    catch(err){
        output= {"response":"Error in delete data"}
    }
    return output
}


module.exports = {
    dbConnect,
    getData,
    postData,
    updateOrder,
    deleteOrder

}