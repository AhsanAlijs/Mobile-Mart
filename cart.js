const cartAdditem = document.getElementById('father');
const totalCartPrice = document.getElementById('totalBill');
const head = document.querySelector('.carth')

if (head.innerHTML === cartAdditem){
    
}


let retString = localStorage.getItem("cartArry")
let retArray = JSON.parse(retString)
// console.log(retArray);
// cartAdditem.innerHTML += ""
// for (let i = 0; i < retArray.length; i++) {
//     // console.log(retArray[i]);

//     cartAdditem.innerHTML += `<div class="main-mob"><h3>${retArray[i].brand}</h3>
//     <img src="${retArray[i].img}" class="image">
//     <h4>Model:${retArray[i].model}</h4>
//     <h4>Ram:${retArray[i].ram} Gb</h4>
//     <h4>Rom:${retArray[i].rom}Gb</h4>
//     <h4>Camra:${retArray[i].camera}</h4>
//     <h4>Price: ${retArray[i].price}</h4>
//     <h4>Quantity: ${retArray[i].Quantity}</h4>
//     <h4>TotlePrice: ${retArray[i].price * retArray[i].Quantity}</h4>
//     <button onclick="delte(${i})" class="cart">Delete</button>
//     <button onclick="add(${i})" class="less">+</button>
//     <button onclick="sub(${i})" class="less">-</button>
//     </div>`

// }
render()
function render() {
    cartAdditem.innerHTML = ""
    let full = 0 ;
    for (let i = 0; i < retArray.length; i++) {
        totalCartPrice.innerHTML=''
        retArray[i].TotalPrice = + `${retArray[i].price * retArray[i].Quantity}`
        // console.log(retArray[i]);
        cartAdditem.innerHTML += `<div class="main-mob width"><h3>${retArray[i].brand}</h3>
       
        <h4>Model:${retArray[i].model}</h4>
       
        
        <h4>Price: ${retArray[i].price}</h4>
        <h4>Quantity: ${retArray[i].Quantity}</h4>
        <h4>TotlePrice: ${retArray[i].TotalPrice}</h4>
        <button onclick="delte(${i})" class="cart">Delete</button>
        <button onclick="add(${i})" class="less">+</button>
        <span>${retArray[i].Quantity}</span>
        <button onclick="sub(${i})" class="less">-</button>
        </div>`
        

const totalItems =  retArray[i].TotalPrice
full += totalItems
        // totalCartPrice.innerHTML+=`${retArray[i].TotalPrice}`
    }
    
    if(full===0){
        totalCartPrice.innerHTML=`<p class="last">All Over Cart Price: ${full} PKR</p>`
        }else{
        totalCartPrice.innerHTML+=`<p class="last">All Over Cart Price: ${full} PKR</p>`
    }
    
}
function add(index) {
    retArray[index].Quantity += 1
    render()
}
function sub(index) {
    retArray[index].Quantity -= 1
    if (retArray[index].Quantity === 0) {
        retArray.splice(index, 1)
    }
    render()
}




function delte(index) {
    retArray.splice(index, 1);
    render()
}

function gotohome() {
    window.location = "./index.html";

}

// function total() {
//     totalCartPrice.innerHTML = ""
//     let cartTOtal = 0;
//     for(i = 0; i < retArray.length; i++){
//        console.log(retArray[i].TotalPrice);
//         //console.log(itemtotal);
        
//     }
//     // totalCartPrice.innerHTML= `<p>total price: ${cartTOtal}</p>`
// }
//     total()

