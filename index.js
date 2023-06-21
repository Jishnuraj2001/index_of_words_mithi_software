const fs=require("fs");

const str1=fs.readFileSync('./Page1.txt',{encoding:"utf-8"});
const str2=fs.readFileSync('./Page2.txt',{encoding:"utf-8"});
const str3=fs.readFileSync('./Page3.txt',{encoding:"utf-8"});
const ex_str=fs.readFileSync('./exclude-words.txt',{encoding:"utf-8"});

let arr1 = str1.match(/[a-zA-Z]+/g);
let arr2 = str2.match(/[a-zA-Z]+/g);
let arr3 = str3.match(/[a-zA-Z]+/g);
let ex_arr= ex_str.split("\n");


let obj={};

for(let i=0;i<arr1.length;i++){
    if(obj[arr1[i].toLowerCase()]==undefined){
        obj[arr1[i].toLowerCase()]=[1];
    }
}

for(let i=0;i<arr2.length;i++){
    if(obj[arr2[i].toLowerCase()]==undefined){
        obj[arr2[i].toLowerCase()]=[2];
    }else if(!obj[arr2[i].toLowerCase()].includes(2)){
        obj[arr2[i].toLowerCase()].push(2);
    }
}

for(let i=0;i<arr3.length;i++){
    if(obj[arr3[i].toLowerCase()]==undefined){
        obj[arr3[i].toLowerCase()]=[3];
    }else if(!obj[arr3[i].toLowerCase()].includes(3)){
        obj[arr3[i].toLowerCase()].push(3);
    }
}

let fin_arr=[];

for(let key in obj){
    if(!ex_arr.includes(key)){
        fin_arr.push(`${key} : ${obj[key].join(",")}`);
    }
}

const output=fin_arr.sort().join("\n");

fs.writeFileSync("./index.txt",output);