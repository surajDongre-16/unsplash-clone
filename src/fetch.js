

const submit= async (query,sort,filter) =>{
    // console.log("im in")
    try{
        // let input=document.getElementById("search-inner").value
        // console.log(input)
        const url=`https://api.unsplash.com/search/photos/?query=${query}&per_page=30&order_by=${sort}&orientation=${filter}&client_id=TbNUavE_PJQxceXDWYpT3xj0sfcvAv8Im5KvJ-xl1oI`

        const res=await fetch(url)

        const data=await res.json()
        // console.log(data)
        // append(data)
        return data
    }catch(err){
        console.log(err)
    }   
}

let append = (data,container) => {
    // console.log(urls.regular)
    // let box=document.getElementById("photos")
    // box.innerHTML=null
    data.forEach(({alt_description, urls:{small}}) =>{
        // console.log(el.urls.regular)
        let div=document.createElement("div")
        div.setAttribute("class","div")
        let img=document.createElement("img")
        img.src=small

        let h3=document.createElement("h3")
        h3.innerText=alt_description

        div.append(img,h3)

        container.append(div)
    })
}


export {submit,append}