



let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")


console.log("New object created")

xhr.onload=function(){
    console.log("*******Response received********")
    let data = JSON.parse(this.responseText)
    console.log("");

    let a = [];
    for(let i=0;i<data.length;i++)    
    {
        a.push(data[i].population);
    }
    let numbers=a;
    let total = numbers.reduce(myFunc);
    function myFunc(total, num) {
        return total + num;
    }
    console.log(total);
}

xhr.send();

//console.log("New object created"+xhr);



