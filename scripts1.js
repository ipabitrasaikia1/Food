function Signup(e){
   
    
    e.preventDefault();

    let form = document.getElementById("Signupform")

    let user_data = {

        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        number: form.mobile.value,
       
    }
    console.log(user_data)

    localStorage.setItem("Userdata", JSON.stringify(user_data))

    alert("Regiter Successfull")

    window.location.href = "login.html";

}


function login(e){


    e.preventDefault();
    



    let form = document.getElementById("loginform")

    let user_data = {

        name: form.user_name.value,
      
        password: form.password1.value,
 
       
    }
    console.log(user_data)
    let data = JSON.parse(localStorage.getItem("Userdata"))

    console.log("data JSON",data)

    if(user_data.name === data.name && user_data.password === data.password){

        console.log("Sucess")
        alert("Login Sucessfull")
        window.location.href = "index.html"
    }


} 

async function getData(){

    let data = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    let random_dish = await data.json() 
    console.log(random_dish.meals[0])
    appendData(random_dish.meals[0])

} 

let dishdata = [];
function appendData(random_dish){

    let parent = document.getElementById("display");
    let mainDiv = document.createElement("div")
   
    
     let imgdiv = document.createElement("div")
     imgdiv.style = "box-sizing:border-box;width:500px;height:500px"
     let img = document.createElement("img")
      img.src = random_dish.strMealThumb;
     img.style = "width : 100% "
     imgdiv.append(img)
    
     let price = document.createElement("p");
     price.textContent = "Rs. "+ Math.floor(Math.random() * 100);
    
     let des = document.createElement("p")
     des.textContent =  random_dish.strMeal;
    
     let add_to_cart = document.createElement("button")
     add_to_cart.innerHTML= "Add to cart"
     add_to_cart.style = "cursor:pointer"

     let PlaceOrder = document.createElement("button")
     PlaceOrder.innerHTML= "Place Order"
     PlaceOrder.style = "cursor:pointer"

     add_to_cart.onclick = ()=>{

       console.log("Rndmmm",random_dish)

        localStorage.setItem("dish-data",JSON.stringify(random_dish))

     }

PlaceOrder.onclick = ()=>{

    setTimeout(() => {
        alert("Order Placed")
    }, 2000);

    setTimeout(() => {
       alert("Cocking") 
    }, 6000);

setTimeout(() => {
 alert("Order Ready to deliver")
}, 8000);
 
 
      }
    
     
     mainDiv.append(imgdiv,des,price,add_to_cart,PlaceOrder)
     parent.append(mainDiv)
    

}
getData()




    
   
    


