(function () {
	


	

	let cardsArray = [
		{name: 'six',
		 suit: 'heart',
		 value: 6},
		 {name: 'six',
		 suit: 'peak',
		 value: 6},
		 {name: 'six',
		 suit: 'diamonds',
		 value: 6},
		 {name: 'six',
		 suit: 'cross',
		 value: 6},
		
		{name: 'seven',
		 suit: 'heart',
		 value: 7},
		 {name: 'seven',
		 suit: 'peak',
		 value: 7},
		 {name: 'seven',
		 suit: 'diamonds',
		 value: 7},
		 {name: 'seven',
		 suit: 'cross',
		 value: 7},
		 
		 {name: 'eight',
		 suit: 'heart',
		 value: 8},
		 {name: 'eight',
		 suit: 'peak',
		 value: 8},
		 {name: 'eight',
		 suit: 'diamonds',
		 value: 8},
		 {name: 'eight',
		 suit: 'cross',
		 value: 8},
		 
		 {name: 'nine',
		 suit: 'heart',
		 value: 9},
		 {name: 'nine',
		 suit: 'peak',
		 value: 9},
		 {name: 'nine',
		 suit: 'diamonds',
		 value: 9},
		 {name: 'nine',
		 suit: 'cross',
		 value: 9},
		 
		 {name: 'ten',
		 suit: 'heart',
		 value: 10},
		 {name: 'ten',
		 suit: 'peak',
		 value: 10},
		 {name: 'ten',
		 suit: 'diamonds',
		 value: 10},
		 {name: 'ten',
		 suit: 'cross',
		 value: 10},
		 
		 {name: 'jack',
		 suit: 'heart',
		 value: 11},
		 {name: 'jack',
		 suit: 'peak',
		 value: 11},
		 {name: 'jack',
		 suit: 'diamonds',
		 value: 11},
		 {name: 'jack',
		 suit: 'cross',
		 value: 11},

		 {name: 'quinn',
		 suit: 'heart',
		 value: 12},
		 {name: 'quinn',
		 suit: 'peak',
		 value: 12},
		 {name: 'quinn',
		 suit: 'diamonds',
		 value: 12},
		 {name: 'quinn',
		 suit: 'cross',
		 value: 12},

		 {name: 'king',
		 suit: 'heart',
		 value: 13},
		 {name: 'king',
		 suit: 'peak',
		 value: 13},
		 {name: 'king',
		 suit: 'diamonds',
		 value: 13},
		 {name: 'king',
		 suit: 'cross',
		 value: 13},

		 {name: 'ace',
		 suit: 'heart',
		 value: 14},
		 {name: 'ace',
		 suit: 'peak',
		 value: 14},
		 {name: 'ace',
		 suit: 'diamonds',
		 value: 14},
		 {name: 'ace',
		 suit: 'cross',
		 value: 14},


	];

	let trumpArray = [{value: 'heart'}, {value:'diamonds'}, {value:'cross'}, {value:'peak'}]


	let randomArray = [];
	for (var i = 0; i < 46; i++){
  		randomArray.push(i);
	}
	shuffle(cardsArray);
	shuffle(trumpArray);
	let trump = trumpArray[0].value;
	console.log(trump);
	
	function shuffle(arr){
		let currentIndex = arr.length,
			randomIndex,
			temporaryValue;
		while(0 !== currentIndex){
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			temporaryValue = arr[currentIndex];
    		arr[currentIndex] = arr[randomIndex];
    		arr[randomIndex] = temporaryValue;
    		
		}
		
		
		return arr;
	}


	let handOfPeter = [],
		handOfVacili = [];

		for(let i = 0; i < cardsArray.length / 2; i++){
			handOfPeter[i] = cardsArray[i]; 
		}
		for(let i = cardsArray.length / 2, k = 0; i < cardsArray.length; i++, k++){
			handOfVacili[k] = cardsArray[i];
		}
		console.log(handOfVacili);
		console.log(handOfPeter);

		let PeterScore = 0,
			VaciliScore = 0,
			PeterHandValue = 0,
			VaciliHandValue = 0,
			PeterCardName,
			VaciliCardName;
		function* whoIsWinner(){

			for(let i = 0; i < handOfPeter.length; i++){
					PeterHandValue = 0;
					VaciliHandValue = 0;
				if(handOfPeter[i].suit === trump){
					PeterHandValue +=9;
				}
				if(handOfVacili[i].suit === trump){
					VaciliHandValue +=9;
				}
				PeterHandValue += handOfPeter[i].value;
				VaciliHandValue += handOfVacili[i].value;
				PeterCardName = handOfPeter[i].name +'--'+ handOfPeter[i].suit;
				VaciliCardName = handOfVacili[i].name + '--' + handOfVacili[i].suit;
				console.log(PeterHandValue+ "----"+VaciliHandValue);
			if(PeterHandValue > VaciliHandValue){
				console.log(PeterScore + ":" + VaciliScore);
				yield PeterScore++;
			}else if(PeterHandValue < VaciliHandValue){
				console.log(PeterScore + ":" + VaciliScore);
				yield VaciliScore++;
			}
		}

		console.log(PeterScore + ":" + VaciliScore);
	};
		let getWinner = whoIsWinner();
		
  		
  		
		
		window.addEventListener("click", function() { 
			document.body.children[0].textContent = 'Suit --' + trump+'   '+ 'Winner --' + PeterScore + ":" + VaciliScore;
			getWinner.next();



			
			var tbody = document.getElementById('myTable').getElementsByTagName("TBODY")[0];
    		var row = document.createElement("TR")
    		var td1 = document.createElement("TD")
    		td1.appendChild(document.createTextNode(PeterCardName))
    		var td2 = document.createElement("TD")
    		td2.appendChild (document.createTextNode(VaciliCardName))
    		row.appendChild(td1);
    		row.appendChild(td2);
    		tbody.appendChild(row);
    		
    		


		})
		
	

	


		//var n=2;

/*var i=1;

document.write("<table border=1>");

while (i <= n){

    document.write('<tr>');

    var j=1;

    while(j <= n){

        document.write('<td>');

        document.write(i*j);

        document.write("</td>");

        j++;

    }

    document.write("</tr>");

    i++;

}

document.write("</table>");


*/

}());