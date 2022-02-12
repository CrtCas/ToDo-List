function CloseButton(){
    let myNodelist = document.getElementsByTagName("li");
    for (let i = 0; i < myNodelist.length; i++) {
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}
function closeFunction(){
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        let div = this.parentElement;
        div.remove();
        }
    }
}
CloseButton()
closeFunction()

let ulList = document.querySelector('ul')
ulList.addEventListener('click', function(clickEvent){
    if(clickEvent.target.tagName ==='LI'){
        clickEvent.target.classList.toggle('checked');
        console.log("hmmm")
    }
})


function newElement(){
    let listDom = document.querySelector('#list')
    let newChild = document.createElement('li')
    newChild.innerHTML= document.querySelector('#task').value
    if(newChild.innerHTML.length ==0 || newChild.innerHTML ==null || newChild.innerHTML.trim().length ==0){
        $('.error').toast("show")
    }
    else{
        listDom.appendChild(newChild)
        CloseButton()
        closeFunction()
        $('.success').toast("show")
    }
    document.getElementById("task").value = ''
}



