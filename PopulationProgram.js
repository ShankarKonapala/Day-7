


let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")


console.log("New object created")

xhr.onload=function(){
    console.log("*******Response received********")
    let data = JSON.parse(this.responseText)

    let data1 = Population(data);

    
    const result = data1.filter(lessPopulation);

    
console.log(result);

function lessPopulation(pop){


        return pop<200000;
}

        function Population(data) {
            let a = [];
            for (let i=0;i<data.length;i++)
            {
                a.push(data[i].population)
            }
            return a;
        }
}

xhr.send();
