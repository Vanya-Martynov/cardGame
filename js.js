(function () {
	


	// Создаем колоду и массив козырей

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


	// Мешем колоду и выбираем козырь


	shuffle(cardsArray);
	shuffle(trumpArray);
	let trump = trumpArray[0].value;
	
	
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

		//  Раздаем карты
	let handOfPeter = [],
		handOfVacili = [];

		for(let i = 0; i < cardsArray.length / 2; i++){
			handOfPeter[i] = cardsArray[i]; 
		}
		for(let i = cardsArray.length / 2, k = 0; i < cardsArray.length; i++, k++){
			handOfVacili[k] = cardsArray[i];
		}
		

		let PeterScore = 0,
			VaciliScore = 0,
			PeterHandValue = 0,
			VaciliHandValue = 0,
			PeterCardName,
			VaciliCardName,
			winPlayer,
			test = true;


			// Играем по одному ходу, расчет победителя


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
				
			if(PeterHandValue > VaciliHandValue){
				
				yield PeterScore++;
			}else if(PeterHandValue < VaciliHandValue){
				
				yield VaciliScore++;
			}
		}
		if(PeterScore > VaciliScore){
			winPlayer = 'Peter';
		}else if(PeterScore < VaciliScore){
			winPlayer = 'Vacili';
		}else if(PeterScore === VaciliScore){
			winPlayer = 'unknown';
		}
		console.log(PeterScore + ":" + VaciliScore);

	};

		// Игра начинается по клику на окно браузера


		let getWinner = whoIsWinner();

		window.addEventListener("click", addToBrowser);
		function addToBrowser() { 
			if(test === true){
				getWinner.next();
				test = false;
			}
			document.body.children[0].textContent = 'Suit --' + trump+'   '+ 'Winner --' + 'Peter ' + PeterScore +  ":" + ' Vacili '+ VaciliScore;
			let tbody = document.getElementById('myTable').getElementsByTagName("TBODY")[0];
    		let row = document.createElement("TR");
    		let td1 = document.createElement("TD");
    		td1.appendChild(document.createTextNode(PeterCardName));
    		let td2 = document.createElement("TD");
    		td2.appendChild (document.createTextNode(VaciliCardName));
    		row.appendChild(td1);
    		row.appendChild(td2);
    		tbody.appendChild(row);


    		if(getWinner.next().done){
			window.removeEventListener("click", addToBrowser);
			document.body.children[0].textContent = 'Suit --' + trump+'   '+ 'Winner --' + winPlayer + '(Peter ' + PeterScore +  ":" + ' Vacili '+ VaciliScore + ')';
			};
    		
		}

		
		
	

	


		

}());