// Application programming interface

// Fetch API - the fetch api provides an interface for fetching(sending/receiving) resources.

const URL = "https://catfact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getData = async() =>{
    console.log("getting data......");
    let response = await fetch(URL);
    console.log(response)   // json format
    let data = await response.json();
    factPara.innerText = data[2].text;
}

console.log(getData.data)