var bookMarkName = document.getElementById("bookMarkName");
var websiteUrl = document.getElementById("websiteUrl");
var webSiteList =[];
if(localStorage.getItem("webSiteLists")!= null) {
    webSiteList = JSON.parse(localStorage.getItem("webSiteLists"));
    display(webSiteList);
}


function addWebSite(){
  
    var webSite ={
        name:bookMarkName.value,
        webSite:websiteUrl.value,
    }
    webSiteList.push(webSite)
    localStorage.setItem("webSiteLists",JSON.stringify(webSiteList));
    display()
    clear()
   
}

function display(){
    var webSiteData=``;
    for(var i=0;i<webSiteList.length;i++){
        webSiteData += `<tr class="text-center  border-bottom">
        <td class="p-2">${webSiteList.indexOf(webSiteList[i])+1}</td>
        <td class="p-2">${webSiteList[i].name}</td>
        <td class="p-2"><a href="${ websiteUrl.value}" target="_blank" tabindex="webSiteList.indexOf"><button onclick="visit(${webSiteList.indexOf})"class="btn btn-success">
        
            <i class="fa-solid fa-eye"></i>
            visit</button></a></td>
        <td class="p-2"><button onclick="deleteWebSite(${i})" class="btn btn-danger" >
            <i class="fa-solid fa-trash-can"></i>
            Delete</button></td>
    </tr>`
    }
    document.getElementById("websiteContant").innerHTML=webSiteData;
}

function clear(){
    bookMarkName.value=null;
    websiteUrl.value=null;
}

function deleteWebSite(index){
    webSiteList.splice(index,1)
    localStorage.setItem("webSiteLists",JSON.stringify(webSiteList));
    display()
}
function visit()
{

     window.open(url,"_blank");
    
}
function search(searchValue){
 
    var searchSite =[]
    for(var i=0 ; i<webSiteList.length ; i++ ){
        if(webSiteList[i].name.toLowerCase().includes(searchValue.toLowerCase())){

            searchSite.push(webSiteList[i])
        }
    }
    display(searchSite)
}