var list= document.getElementById('list')

function add(){
    var input = document.getElementById('input')
    var li= document.createElement('li')
    var liText= document.createTextNode(input.value)
    li.appendChild(liText)

    var createedt = document.createElement('i');
    createedt.setAttribute("class","fa fa-pencil-square-o");
    createedt.setAttribute("aria-hidden","true");
    li.appendChild(createedt);
    createedt.setAttribute("onclick","edt(this)")

    var createdlt = document.createElement('i');
    createdlt.setAttribute("class","fa fa-trash");
    createdlt.setAttribute("aria-hidden","true");
    li.appendChild(createdlt);
    createdlt.setAttribute('onclick','dlt(this)')


    list.appendChild(li)
    input.value=""
}
function dlt(e){
    e.parentNode.remove()
}
function dltall(){
    list.innerHTML = ""
}
function edt(e){
   var edit=e.parentNode.firstChild.nodeValue
   var editValue = prompt("edit:",edit)
   e.parentNode.firstChild.nodeValue = editValue
} 