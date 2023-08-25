let express = require('express');
let app = express();
let port = process.env.PORT||9000;
let Mongo = require('mongodb')
const bodyParser =require('body-parser');
const cors = require('cors');
let { dbConnect, getData, postData, updateOrder, deleteOrder}  = require('./controller/dbController')


// middleware  --- are supporting library
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('<h3>hii i am learning how to go server is live...</h3>')
})

// get all Category

app.get('/category', async (req, res) => {
    let query = {};
    let collection = "category"
    let output = await getData(collection, query)
    res.send(output);
})

// get all Products
app.get('/products', async (req, res) => {
    let query = {};
    let collection = "products"
    let output = await getData(collection, query)
    res.send(output);
})


// Get All Names(Conatiner)
app.get('/name', async (req, res) => {
    let query = {};
    let collection = "name"
    let output = await getData(collection, query)
    res.send(output);
})

// Get All Names 1,2,3,4....(Product_Container)
app.get('/name1', async (req, res) => {
    let query = {};
    let collection = "name1"
    let output = await getData(collection, query)
    res.send(output);
})
app.get('/name2', async (req, res) => {
    let query = {};
    let collection = "name2"
    let output = await getData(collection, query)
    res.send(output);
})
app.get('/name3', async (req, res) => {
    let query = {};
    let collection = "name3"
    let output = await getData(collection, query)
    res.send(output);
})
app.get('/name4', async (req, res) => {
    let query = {};
    let collection = "name4"
    let output = await getData(collection, query)
    res.send(output);
})


// product as per Selection (Category or Product)
app.get('/quickSearch', async (req, res) => {
    let query = {};
    if(req.query.categoryid){
        query={category_id: Number(req.query.categoryid)}
    }
    else if(req.query.productid){

        query={"kinds.product_id": Number(req.query.productid)}
    }
    
    else{
        query={}
    }
    let collection = "quickSearch"
    let output = await getData(collection, query)
    res.send(output);
})


// product.json as per Selection (Category or Product)
app.get('/product', async (req, res) => {
    let query = {};
    if(req.query.categoryid){
        query={category_id: Number(req.query.categoryid)}
    }
    else if(req.query.productid){

        query={"productType_id": Number(req.query.productid)}
    }
    
    else{
        query={}
    }
    let collection = "products"
    let output = await getData(collection, query)
    res.send(output);
})



// product.json as per Selection (Category or Product)
app.get('/product1', async (req, res) => {
    let query = {};
    if(req.query.categoryid){
        query={category_id: Number(req.query.categoryid)}
    }
    else if(req.query.productid){

        query={"productType_id": Number(req.query.productid)}
    }
    
    else{
        query={}
    }
    let collection = "product1"
    let output = await getData(collection, query)
    res.send(output);
})



// products according to Lowest price & Highest Price(filter)
app.get('/filter/:id',async(req,res)=>{
    let id =  req.params.id;
    let query = {size:id}
    let collection = "products"
    let output = await getData(collection,query)
    res.send(output)
})

// CusineFilter Sathi
// app.get('/filter/:productid', async(req,res) => {
//     let productid = Number(req.params.productid);
//     // let cuisineId = Number(req.query.cuisineId)
//     let lcost = Number(req.query.lcost)
//     let hcost = Number(req.query.hcost)
//     if(productid){
//         query = {
//             "productTypes.productType_id":productid,
//             // "cuisines.cuisine_id":cuisineId
//         }
//     } else if(lcost && hcost){
//         query = {
//             "productTypes.productType_id":productid,
//             $and:[{price:{$gt:lcost,$lt:hcost}}]
//         }
//     }
//     else{
//         query = {}
//     }
//     let collection = "product1";
//     let output = await getData(collection,query);
//     res.send(output)
// })



// costFilter sathi
// app.get('/price',async(req,res)=>{
//     let productid = Number(req.params.productid);
//     let lcost = Number(req.query.lcost);
//     let hcost =Number(req.query.hcost); 
//     let query = {}
//     if (lcost && hcost){
//         query = {
//             "productType_id": productid,
//             $and:[{price:{$gt:lcost, $lt:hcost}}]
//         }
//     }
//     else{
//         query = {}
//     }
//     let collection = "product1"
//     let output = await getData(collection,query)
//     res.send(output)
// })


app.get('/price/:productid', async (req, res) => {
    let productid = Number(req.params.productid);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let query = {}
    if (lcost && hcost) {
        query = {
            "productType_id": productid,
            $and: [{ price: { $gt: lcost, $lt: hcost } }]
        }
    }
    else {
        query = {}
    }
    let collection = "product1"
    let output = await getData(collection, query)
    res.send(output)
})


// app.get('/product/:productid', async (req, res) => {
//     let productid = Number(req.params.productid);
//     // let lcost = Number(req.query.lcost);
//     // let hcost = Number(req.query.hcost);
//     let query = {}

     
//         query = {
//             "productType_id": productid,
//             // "productid":productType_id

//         }
   
//     let collection = "product1"
//     let output = await getData(collection, query)
//     res.send(output)
// })


// For Product
app.get('/product/:productid', async(req,res)=>{
    let productid = Number(req.params.productid);
    // let id = Number(req.params.id);
    let query =  {productType_id: productid}
    let collection = "product1"
    let output = await getData(collection,query)
    res.send(output)
})




// Details Of The Products
app.get('/detail/:id', async(req,res)=>{

    let id = Number(req.params.id);
    let query = {id:id}
    let collection = "products"
    let output = await getData(collection,query)
    res.send(output)
})

// Details Of The Product1
app.get('/details/:id', async(req,res)=>{

    let id = Number(req.params.id);
    let query = {id:id}
    let collection = "product1"
    let output = await getData(collection,query)
    res.send(output)
})


// Get All the Details Name 1,2,3,4....(Product_Container)
app.get('/details1/:id', async(req,res)=>{

    let id = Number(req.params.id);
    let query = {id:id}
    let collection = "name1"
    let output = await getData(collection,query)
    res.send(output)
})

app.get('/details2/:id', async(req,res)=>{

    let id = Number(req.params.id);
    let query = {id:id}
    let collection = "name2"
    let output = await getData(collection,query)
    res.send(output)
})
app.get('/details3/:id', async(req,res)=>{

    let id = Number(req.params.id);
    let query = {id:id}
    let collection = "name3"
    let output = await getData(collection,query)
    res.send(output)
})
app.get('/details4/:id', async(req,res)=>{

    let id = Number(req.params.id);
    let query = {id:id}
    let collection = "name4"
    let output = await getData(collection,query)
    res.send(output)
})



app.get('/producttype1/:id',async(req,res) => {
    let id = Number(req.params.id);
    let query = {productType_id:id};
    let collection = "name1";
    let output = await getData(collection,query);
    res.send(output)
})



app.get('/producttype/:id',async(req,res) => {
    let id = Number(req.params.id);
    let query = {productType_id:id};
    let collection = "product1";
    let output = await getData(collection,query);
    res.send(output)
})


// Categories wise products
app.get('/products/:id', async(req,res)=>{

    let id = Number(req.params.id);
    let query ={category_id:id}
    let collection = "products"
    let output = await getData(collection,query)
    res.send(output)
})

// Orders
app.get('/orders', async(req,res)=>{

    let id = Number(req.params.id);
    let query ={}
    let collection = "orders"
    let output = await getData(collection,query)
    res.send(output)
})

// placeOrder

app.post('/placeorder',async(req,res)=>{
    let data = req.body;
    let collection = "orders";
    console.log(">>>", data)
    let response = await postData(collection,data)
    res.send(response)
})

// product Details

app.post('/orderDetails',async (req,res)=>{
    if(Array.isArray(req.body.id)){
        let query = {product_id:{$in:req.body.id}}
        let collection = "products"
        let output = await getData(collection,query)
        res.send(output)
    } 
    else{
        res.send('please pass the data in form of array')
    }
})

// Update Order

app.put('/updateOrder', async (req,res)=>{
    let collection = "orders"
    let condition = {product_id:req.body.product_id}
    let data = {
        $set :{
            "status":req.body.status
        }
    }
    let output = await updateOrder(collection,condition,data)
    res.send(output)
})

// Delete Order


// app.delete('/deleteOrder',async(req,res)=>{
//     let collection = "orders"
//     let condition = {product_id:req.body.product_id}
//     let output = await deleteOrder(collection,condition)
//     res.send(output)
// })


app.delete('/deleteOrder', async (req, res) => {
    try {
        let collection = "orders";
        let condition = { id: req.query.id };
        let output = await deleteOrder(collection, condition);
        res.send(output);
    } catch (error) {
        console.error('Error deleting order:', error);
        res.status(500).json({ error: "An error occurred while deleting the order." });
    }
});



app.listen(port, (err) => {
    dbConnect()
    if (err) throw err;
    console.log(`server is running on port ${port}`)
})
