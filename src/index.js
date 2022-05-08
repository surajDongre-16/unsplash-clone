import navbar from "../components/navbar"

import "../styles/navbar.css"

import "../styles/style.css"

let navbar_div=document.getElementById("navbar")

navbar_div.innerHTML=navbar()

import {submit,append} from "./fetch.js" 

let query;
let sort;
let filter;

let search = (e) => {
    if(e.key == 'Enter'){
        sort=document.getElementById("sorting").value
        query=document.getElementById("search-inner").value || document.getElementById("abrakadabra").value
        filter=document.getElementById("filtering").value
        submit(query,sort,filter).then((data) => {
            console.log(data)
            let container=document.getElementById("photos")
            container.innerHTML=null
            append(data.results, container)
        })
        
    }
}



document.getElementById("search-inner").addEventListener("keydown",search)
document.getElementById("abrakadabra").addEventListener("keydown",search)

let categories=document.getElementById("bot-right").children

function cSearch() {
     console.log(this.id,sort,filter);
    submit(this.id).then((data) => {
        console.log(data)
        let container=document.getElementById("photos")
        container.innerHTML=null
        append(data.results, container)
    })
}
for(let el of categories){
    console.log(el)
    el.addEventListener("click",cSearch)
}

function select(){
    // console.log("im in")
    sort=document.getElementById("sorting").value
    filter=document.getElementById("filtering").value
    console.log(sort)
    submit(query,sort,filter).then((data)=>{
        // console.log(data)
        let container=document.getElementById("photos")
        container.innerHTML=null
        append(data.results,container)
    })
    
}

document.getElementById("sorting").addEventListener("change",select)
document.getElementById("filtering").addEventListener("change",select)