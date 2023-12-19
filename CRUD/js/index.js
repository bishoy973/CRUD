

// CRUD
// **************************

// Product data inputs
var productName = document.getElementById("productName");
var productModel = document.getElementById("productModel");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById('productDescription');

var productList;
var updateIndex = 0

if(localStorage.getItem('productList') == null){
productList = [];
} else {
 productList = JSON.parse(localStorage.getItem('productList'))
 displayProduct(productList)
}

function createProduct(){
 if(regexProductNamee()==true && regexModel()==true &&regexproductPricee()==true && regexDescription()==true){
  var productObject = {
    name:productName.value,
    model:productModel.value,
    price:productPrice.value,
    description: productDescription.value
    
 }
 productList.push(productObject)
 displayProduct(productList)
//  save data locally after creating 
localStorage.setItem('productList',JSON.stringify(productList))
// clean Inputs
clearInput()
 }

}

// Display Product Data in the Table Function

function displayProduct(list){
    var cartona = "" ;
    if(list.length ==0){
      document.getElementById("data").innerHTML = `<td colspan="6" class="text-danger text-center fs-3 fw-bold ">No Data Found........</td>` ;

    } else{
    for(var i=0;i<list.length;i++){
     cartona += 
     `<tr>
     <td>${i+1}</td>
     <td>${list[i].name}</td>
     <td>${list[i].model}</td>
     <td>${list[i].price}</td>
     <td>${list[i].description}</td>
     <td><button class="btn btn-warning text-light" onclick = "updateProduct(${i})">Update</button></td>
     <td><button class="btn btn-danger  text-light" onclick="delProduct(${i})">Delete</button></td>
      </tr>`
    }
  document.getElementById("data").innerHTML = cartona;
}
}
// Delete Item From Table and local storage and display the Updated Array

function delProduct(index){
    productList.splice(index,1)
    localStorage.setItem('productList',JSON.stringify(productList))
    displayProduct(productList)


}

// Search function
function searchProduct(letter){
    var foundedProducts = []
 for(var i=0;i<productList.length;i++){
    if(    (productList[i].name).toLowerCase().includes(letter.toLowerCase())){
        foundedProducts.push(productList[i]) 
        
    } 
    displayProduct(foundedProducts)
   
    
 }
}

// Clean Input 
function clearInput(){
    productName.value = "";
    productModel.value = "";
    productPrice.value = "";

}
// Update Function:
/*
1- add product button toggled by updateProduct 
2 - replace object values by the current object
3- display the updated object


*/ 


function updateProduct(index){
  document.getElementById('addProduct').classList.add('d-none');
  document.getElementById('updateProduct').classList.replace('d-none','d-block');
  updateIndex = index;
  productName.value = productList[index].name;
  productModel.value = productList[index].model;
  productPrice.value = productList[index].price;
  productDescription.value = productList[index].description
  clearInput()

}
function UpdatedExistingArray(i){
  document.getElementById('addProduct').classList.replace('d-none','d-block');
  document.getElementById('updateProduct').classList.replace('d-block','d-none');

var productUpdated = {
 name:productName.value,
    model:productModel.value,
    price:productPrice.value,
    description: productDescription.value
}

productList.splice(updateIndex,1,productUpdated)
displayProduct(productList)
localStorage.setItem('productList',JSON.stringify(productList))
clearInput()
}

// input Validation
var regexProductName = /^[A-Za-z]{3,11}$/
var regexproductPrice = /^([1-9][0-9][0-9][0-9]|10000)$/
var regexProductModel = /^(mobile|tv|laptop|tablet)$/
var regexDescriptionn = /^[A-za-z0-9]{200,}$/

// Name Validation
function regexProductNamee(){
  var nameErrorMsg = document.getElementById('nameErrorMsg');
  var inputName = productName.value
  if(regexProductName.test(inputName)){
    productName.classList.add('is-valid');
    productName.classList.remove('is-invalid');
    nameErrorMsg.classList.add('d-none')
    nameErrorMsg.classList.remove('d-block')
    return true;
  } else{
    productName.classList.add('is-invalid');
    productName.classList.remove('is-vaild');
    nameErrorMsg.classList.add('d-block');
    nameErrorMsg.classList.remove('d-none');
    return false;
    
  }
}

// PRice Validation


function regexproductPricee(){
  var priceErrorMsg = document.getElementById('priceErrorMsg')
  var inputPrice = productPrice.value
  if(regexproductPrice.test(inputPrice)){
    productPrice.classList.add('is-valid');
    productPrice.classList.remove('is-invalid');
    priceErrorMsg.classList.add('d-none')
    priceErrorMsg.classList.remove('d-block')


    return true;
  } else{
    productPrice.classList.add('is-invalid');
    productPrice.classList.remove('is-vaild');
    priceErrorMsg.classList.add('d-block');
    priceErrorMsg.classList.remove('d-none');
    return false;
  }
}

// Category Validation


function regexModel(){
  var modelErrorMsg = document.getElementById('modelErrorMsg');
  var inputModel= productModel.value
  if(regexProductModel.test(inputModel)){
    productModel.classList.add('is-valid');
    productModel.classList.remove('is-invalid');
    modelErrorMsg.classList.add('d-none')
    modelErrorMsg.classList.remove('d-block')

    return true;
  } else{
    productModel.classList.add('is-invalid');
    productModel.classList.remove('is-vaild');
    modelErrorMsg.classList.add('d-block');
    modelErrorMsg.classList.remove('d-none');
    return false;
  }
}

// Description Validation


function regexDescription(){
  var descErrorMsg = document.getElementById('descErrorMsg')
  var inputDesc= productDescription.value
  if(regexDescriptionn.test(inputDesc)){
    productDescription.classList.add('is-valid');
    productDescription.classList.remove('is-invalid');
    descErrorMsg.classList.add('d-none')
    descErrorMsg.classList.remove('d-block')
    return true;
  } else{
    productDescription.classList.add('is-invalid');
    productDescription.classList.remove('is-vaild');
    descErrorMsg.classList.add('d-block');
    descErrorMsg.classList.remove('d-none');
    return false;
  }
}