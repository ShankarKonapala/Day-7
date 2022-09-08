


let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")


console.log("New object created")

xhr.onload=function(){
    console.log("*******Response received********")
    let data = JSON.parse(this.responseText)

    for(let i=0;i<data.length;i++)    
    {
        console.log(data[i].currencies);
        if(data[i].currencies=="USD")
        {
            console.log(data[i].currencies)
            // if(data[i].currencies[1].symbol=="$"){
            //     a.push(data[i].name.common)
            // }
        }
    }

}

xhr.send();

//console.log("New object created"+xhr);