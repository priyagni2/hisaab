
function moreUserTextBox() {
	users++;
	document.getElementById('users').value = users;
	
	var container = document.getElementById('userNameDiv');
	
	var appendData = '<div class="left">User ' + users + '</div><div class="right"><input type="text" id="user' + users + '" name="user' + users + '" value="user' + users + '"></div><div class="clear"></div>';
	
	var div = document.createElement('div');
	div.className='users';
	div.innerHTML = appendData
	
	container.appendChild(div);
}


function disableEnable(textInputDependentOnCheckBox) {
	if(document.getElementById(textInputDependentOnCheckBox).disabled)
	    document.getElementById(textInputDependentOnCheckBox).disabled = false;
	else
		document.getElementById(textInputDependentOnCheckBox).disabled = true;
}


function moreItemTextBox() {
	var namesCount = names.length;
	items++;
	document.getElementById('items').value = items;

	var container = document.getElementById('itemDiv');
	
	var appendData1 = '<div><div class="left">Item ' + items + '</div><div class="right"><input type="text" id="item' + items + '" name="item' + items + '" value="item' + items + '"></div><div class="clear"></div></div>';
	var appendData2 = '<div class="info">Kindly Tick the people who PAID for this Item & enter the AMOUNT paid by them</div>';
	var appendData4 = '<div class="info">Kindly Tick the people who OWN / UTILIZE this Item</div>';
	var appendData3 = '';
	var appendData5 = '';
	
	for	(index = 0; index < namesCount; index++) {
		var currentName = names[index];
		var asArgument = "'"+currentName+"Paid"+items+"'" ;
		appendData3 += '<div><input type="checkbox" name="peoplePaid' + items + '" value="' + currentName + '" onchange="disableEnable(' + asArgument + ')">' + currentName + '<input type="text" id="' + currentName + 'Paid' + items + '" name="' + currentName + 'Paid' + items + '" value="0" disabled></div>' ;
		appendData5 += '<div><input type="checkbox" name="peopleOwn' + items + '" value="' + currentName + '">' + currentName + '</div>';
	}
	
	var appendData = appendData1 + appendData2 + appendData3 + appendData4 + appendData5;
	
	var div = document.createElement('div');
	div.className='items';
	div.innerHTML = appendData
	
	container.appendChild(div);
}


function showItemWise() {
	check++;
	if(check==1) {
		document.getElementById("itemWise").style.display = 'block';
	}
	else {
		document.getElementById("finalOnly").style.display = 'none';
		document.getElementById("itemWise").style.display = 'block';
	}
}


function showFinal() {
	check++;
	if(check==1) {
		document.getElementById("finalOnly").style.display = 'block';
	}
	else {
		document.getElementById("itemWise").style.display = 'none';
		document.getElementById("finalOnly").style.display = 'block';
	}
}


function showHide(id) {
	var valueOfDisplay = document.getElementById(id).style.display;
	if(valueOfDisplay=='block')
		valueOfDisplay = 'none';
	else
		valueOfDisplay = 'block';
}

