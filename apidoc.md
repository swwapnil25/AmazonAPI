* Amazon App(Website)

//page 1
>Search for the item according to Products
* http://localhost:9000/products
> render live:- https://amazonapi-r8s2.onrender.com/products

>category list
* http://localhost:9000/category
> render live:- https://amazonapi-r8s2.onrender.com/category

>All Quick Search
* http://localhost:9000/quickSearch
 render live:- https://amazonapi-r8s2.onrender.com/quickSearch

 >Name Search
 *render live:- https://amazonapi-r8s2.onrender.com/name

>Products related to the same category
* http://localhost:9000/quickSearch?categoryid=5
> render live:- https://amazonapi-r8s2.onrender.com/quickSearch?categoryid=5 
 https://amazonapi-r8s2.onrender.com/product1?productid=4 


//page 2
> products as per selection or quick search
* http://localhost:9000/quickSearch?productid=5
> render live:- https://amazonapi-r8s2.onrender.com/quickSearch?productid=5

>products according to Lowest price & Highest Price
* http://localhost:9000/price?lcost=500&hcost=1000
> render live:- https://amazonapi-r8s2.onrender.com/price?lcost=500&hcost=1000
http://localhost:9000/price/1?lcost=1000&hcost=2000
https://amazonapi-r8s2.onrender.com/product/2


//page 3
>Details of the product selected
http://localhost:9000/details/10
> render live:- https://amazonapi-r8s2.onrender.com/details/10

>Categories wise products
* http://localhost:9000/products/1
> render live:- https://amazonapi-r8s2.onrender.com/products/1


//page 4
>List of Orders
* http://localhost:9000/orders
> render live:- https://amazonapi-r8s2.onrender.com/orders

>Place order
* http://localhost:9000/placeorder
> render live:- https://amazonapi-r8s2.onrender.com/placeorder

//page 5
>Details of the order
* http://localhost:9000/orderDetails
> render live:- https://amazonapi-r8s2.onrender.com/orderDetails

>Update Order Details
* localhost:9000/updateOrder
> render live:- https://amazonapi-r8s2.onrender.com/updateOrder

>Delete Orders
* http://localhost:9000/deleteOrder
> render live:- https://amazonapi-r8s2.onrender.com/deleteOrder




APis SignUp ANd Register:-


/////////////
/******GetAllUser*****/
(GET)> http://3.17.216.66:5000/api/auth/users

/******Register*****/
(POST)> http://3.17.216.66:5000/api/auth/register
(body) => {"name":"Aakash", "email":"aa@gmail.com","password":"12345678","phone":343432,role?":"user"}

/******Login*****/
(POST) => http://3.17.216.66:5000/api/auth/login
(body)  => {"email":"aa@gmail.com","password":"12345678"}
(response)=> {auth:true,token:'dgsdg'}

/******UserInfo*****/
(GET) => http://3.17.216.66:5000/api/auth/userinfo
(Header) => {'x-access-token':'token value from login'}
