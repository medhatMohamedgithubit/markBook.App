var bookMarkName = document.getElementById("bookMarkName");
var websiteUrl = document.getElementById("websiteUrl");
var webSiteList =[];
id=0;
if(localStorage.getItem("webSiteLists")!= null) {
    webSiteList = JSON.parse(localStorage.getItem("webSiteLists"));
    display(webSiteList);
}


function addWebSite(){
    var webSites= {
        name:bookMarkName.value,
        webSite:websiteUrl.value,  
        id:webSiteList.length
    }
    webSiteList.push(webSites)
    
    localStorage.setItem("webSiteLists",JSON.stringify(webSiteList));
    display(webSiteList)
    clear()
   
}

function display(loop){
    var webSiteData=``;
    for(var i=0;i<loop.length;i++){
        webSiteData += `
        <input type="hidden" value="${i}">
        <tr class="text-center  border-bottom">
        <td class="p-2">${loop.indexOf(loop[i])+1}</td>
        <td class="p-2">${loop[i].name}</td>
        <td class="p-2"><a href="${loop[i].webSite}" target="_blank" tabindex="webSiteList.indexOf"><button onclick="visit()"class="btn btn-success">
        
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

function deleteWebSite(id){
    webSiteList.splice(id,1)
    localStorage.setItem("webSiteLists",JSON.stringify(webSiteList));
    display(webSiteList)
}
function visit()
{
    
     
        window.open(url);
       
    
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