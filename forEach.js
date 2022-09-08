


let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")


console.log("New object created")

xhr.onload=function(){
    console.log("*******Response received********")
    let data = JSON.parse(this.responseText)
    console.log("");

        let a = [];
        data.forEach(element => console.log(`Name:${element.name.common}
    Capital:${element.capital}
    Flag:${element.flags.png}
                                             `))
        // {
        //     if(data[i].continents=="Asia"){
        //         a.push(data[i].name.common)
        //     }
        // }

}

xhr.send();

//console.log("New object created"+xhr);