


let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")


console.log("New object created")

xhr.onload=function(){
    console.log("*******Response received********")
    let data = JSON.parse(this.responseText)
    console.log("Asian countries: ");
    let data1 = checkAsianCountries(data);
    console.log(data1);

    function checkAsianCountries(data) {
        let a = [];
        for (let i=0;i<data.length;i++)
        {
            if(data[i].continents=="Asia"){
                a.push(data[i].name.common)
            }
        }
        return a;


    }
}

xhr.send();

//console.log("New object created"+xhr);