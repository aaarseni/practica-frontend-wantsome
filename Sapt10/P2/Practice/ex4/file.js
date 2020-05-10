let requestUrl = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
let request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();

const myListOfColors = document.createElement('ul');
document.body.appendChild(myListOfColors);

const style = document.createElement('style');
style.setAttribute('type', 'text/css');
document.head.appendChild(style);
style.innerHTML = 'div{display:flex; align-items:center; height:50px; width:100px;} span{display:flex; text-align: center; align-items:center; padding:3px;} ul{list-style-type:none;}  li{display:flex; flex-direction:row; padding: 3px}';
   

request.onload = function() {
	let objOfColors = {};
	objOfColors = request.response;
	const colVal = Object.values(objOfColors);
	const colKey = Object.keys(objOfColors);
	
	for (let index in colVal) {
		let colName = '';
		let listLi = document.createElement('li');
		const creatDiv = document.createElement('div');
		const creatSpan = document.createElement('span');
		
		myListOfColors.appendChild(listLi);
		listLi.appendChild(creatDiv);
		creatDiv.style.backgroundColor = colVal[index];
		colName = colKey[index];
		listLi.appendChild(creatSpan);
		creatSpan.append(colName);
	}
};