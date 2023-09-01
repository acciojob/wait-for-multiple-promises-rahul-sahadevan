//your JS code here. If required.
const body = document.getElementById("output");
const tr0 = document.createElement("tr");
const td0 = document.createElement("td");
const td01 = document.createElement("td");

tr0.style.columnSpan = "2";
td0.innerText = "loading";
tr0.append(td0,td01);
body.append(tr0);

let p1 = new Promise((resolve) =>{
	setTimeout(() =>{

		resolve(2);
	},2000)
})
let p2 = new Promise((resolve) =>{
	setTimeout(() =>{

		resolve(1);
	},1000)
})
let p3 = new Promise((resolve) =>{
	setTimeout(() =>{

		resolve(3);
	},3000)
})
let arr = [p1,p2,p3];
let all = Promise.all(arr);

all.then((data) =>{
	// tr0.style.display = "none";
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const r1 = document.createElement("tr");

	const td3 = document.createElement("td");
	const td4 = document.createElement("td");
	const r2 = document.createElement("tr");

	const td5 = document.createElement("td");
	const td6 = document.createElement("td");
	const r3= document.createElement("tr");

	const td7 = document.createElement("td");
	const td8 = document.createElement("td");
	const r4 = document.createElement("tr");

	td1.innerText = "Promise 1";
	td2.innerText = data[0];
	r1.append(td1,td2);

	td3.innerText = "Promise 2";
	td4.innerText = data[1];
	r2.append(td3,td4);

	td5.innerText = "Promise 3";
	td6.innerText = data[2];
	r3.append(td5,td6);

	td7.innerText = "Total";
	td8.innerText = Math.max(data[0],Math.max(data[1],data[2])).toFixed(3);
	r4.append(td7,td8);
	body.append(r1,r2,r3,r4);

})
