//selecting Popup-box popup-overlay button

var popupoverlay=document.querySelector('.popup-overlay');
var popupbox=document.querySelector('.Popup-box');
var addpopupbutton=document.getElementById('add-popup-button');

addpopupbutton.addEventListener('click',function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

//select cancel button

var cancelbutton=document.getElementById('cancel-copy');

//here no need to set the event becoz addeventlistner automatically get the event by the id name
cancelbutton.addEventListener('click',function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

//select container, select add-copy, select title-input, select autor-input, select description-input

var container=document.querySelector('.container');
var addbook=document.querySelector('#add-copy');
var booktitleinput=document.querySelector('#title-input');
var authorinput=document.querySelector('#autor-input');
var bookdescription=document.querySelector('#description-input');


addbook.addEventListener('click',function(event){
    event.preventDefault();
    var div=document.createElement('div');
    div.setAttribute('class','book-container');
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${authorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>
`
    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";
    
})

//delete the book

function deletebook(event){
   event.target.parentElement.remove();
}
