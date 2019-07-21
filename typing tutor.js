


var GameFrame;
var typedWord;
var highlightedWord;
var intensity = 1 ;
var lifes = 20;
var Destroyflag = false;
var dictionary = ["adequate" , "Chapman" , "Whitehall", "Leeds" , "kitchen", "London", "window", "kangaroo", "contain", "synonyms", "protagonist", 
"house", "home", "antagonist", "castle", "independence", "difference", "crossword" , "Uranus" , "Jupiter", "aberration", "abstruse", "acceleration", 
"antiseptic", "apathetic", "beguile", "barrage" , "bruise" ,"capitulate", "circumvent" , "commitment", "complement", "contusion" , "conduit",
"derivative", "disintegrate", "dickhead", "duplicate", "electricty", "empirical" , "espouse", "iphone" , "insurance", "Microsoft", "forbearance",
"fracture", "graecful", "gratitude", "Manchester", "hegemony" ,"incumbent" ,"highland" ,"investigate" ,"insurgent" ,"imitate" ,"irrelevant" , "liberation", "licence", 
 "maelstrom", "marauder", "champion", "negligent" ,"numb" ,"maverick" ,"obscurity" ,"omnivore" ,"omnipotent" ,"placeholder", "philanthrophy", "polearm", 
"protein", "quintessential", "quantitative", "qualitative" ,"relegate" ,"Rudolf" ,"rescind" ,"reduction" ,"sanctuary" ,"survive", "scum", "subjugate", 
"timid", "machine", "noodles", "turnaround" ,"tangible" ,"tranquility" ,"Transylvania" ,"Toulon" ,"universal" ,"university", "underworld", "xenophobic", "xenomorph",  
"vilify", "feroscious", "handsome", "Yorkshire" ,"pudding" ,"tirade" ,"zebra" ,"Wisconsin" ,"Mississippi" ,"Massachusetts", "Philippines", "Philadelphia" ,
"anticipation", "engagement", "zealous", "victory", "surrogate" , "variable", "replicate", "laceration", "injury", "paranormal", "phenomena", "ability", "capacity" ,
"healthy", "cervical" , "reimbursement", "surgery", "medicine", " accident", "arbitrage", "operation", "assessment", "column", "document", "department", "hospital" ,
"Germany", "diagnosis", "load", "exclusion" , "maximum" ];


var Interval;
var Score = 0 ;
var Timer = 60;

typedWord = "";
highlightedWord = "";

function initiate() {
	
	document.getElementById("typingtutor").style.backgroundImage = "url('backgroundimage.png')";
	document.getElementById("typingtutor").style.width = "700px";
	document.getElementById("typingtutor").style.height = "460px";
	
	GameFrame = document.getElementById("typingtutor")
	
	var StartScreen = document.createElement("div")
	StartScreen.id = "StartScreen"
	StartScreen.style = "border:solid;background-color:white;width:50%;margin:auto;"
	var StartButton = document.createElement("button")
	StartButton.id = "StartButton"
	StartButton.style = "margin:auto;width:50%;text-align:center;"
	StartButton.innerText = "Start"
	StartScreen.innerHTML = "<center>Typing Tutor Mini Game </center><br><br>Word bombs are dropping on your beloved city. Quickly save them by destroying the bombs before they hit the ground! <br><br> " + 
	"Game Rules : Type the exact words to destroy the bombs. <br><br>Press Start to begin"
	StartScreen.appendChild(StartButton)

	GameFrame.append(StartScreen)
	
	var LifeScreen = document.createElement("div")
	LifeScreen.id = "LifeScreen"
	LifeScreen.style = "position:absolute;top:8px;"
	LifeScreen.innerHTML = "Life:" + lifes + "<br>" + "Score:" + Score + "<br>" + "Timer:" + Timer
	GameFrame.append(LifeScreen)
	
	var EndScreen = document.createElement("div")
	EndScreen.id = "EndScreen"
	EndScreen.style = "border:solid;background-color:white;width:50%;margin:auto;display:none;position:absolute;z-index:1;top:100px;"
	EndScreen.innerHTML = "<center>Game Over <br><br> Your score is " + Score + " <br><br> and your life remaining is " + lifes + "<br><br> Click play to restart game <br><br>" + 
	"<input type='button' value = 'Play' onclick='startgame()'/></center>"
	GameFrame.append(EndScreen)
	
	
	
} // end of initiate
function startgame() {
	
	EndScreen.style.display = "none"
	

	var bombs = document.getElementsByClassName('bomb');

	while(bombs[0]) {
		bombs[0].parentNode.removeChild(bombs[0]);
	}
	
	lifes = 20;
	Score = 0 ;
	Timer = 60 ;
	LifeScreen.innerHTML = "Life:" + lifes + "<br>" + "Score:" + Score + "<br>" + "Timer:" + Timer
	StartScreen.style = "display:none;"
	Interval = setInterval(function(){ dropBomb(); }, 1000);
	 

	
}  //end of start game


function createBomb(text, w) {
	
	var newBomb = document.createElement("div")
	newBomb.innerText = text
	newBomb.className = "bomb"
	newBomb.style.top = "10px"
	newBomb.style.left = w;
	newBomb.style.position = "absolute";
	GameFrame.append(newBomb)
	
	
} //end of createBomb
 
 initiate()
 //createBomb("dsf", "100px")
 //createBomb("aaa", "0px")
 //createBomb("change", "350px")


 
 function dropBomb() {
	 
	var Rnd1 , Rnd2, WordToSend

	Rnd1 = Math.floor(Math.random() * dictionary.length);
	Rnd2 = Math.floor(Math.random() * 650);	 
	
	WordToSend = dictionary[Rnd1]

	createBomb(WordToSend, Rnd2 + "px")
	
	Timer = Timer - 1
	LifeScreen.innerHTML = "Life:" + lifes + "<br>" + "Score:" + Score + "<br>" + "Timer:" + Timer
	
	if (Timer == 0) {
		endgame()
	}

	var bombs = document.getElementsByClassName("bomb")
	
	for (var i = 0; i < bombs.length;i++) {
		var topVal = parseInt(bombs[i].style.top, 10);
		bombs[i].style.top = (topVal + 50) + "px";

		if (parseInt(bombs[i].style.top, 10) > 390) {
			reduceLife(bombs[i])
		}
		
	}
	
	


	 
	 
} //end of dropBomb

function endgame() {
	clearInterval(Interval)
	EndScreen.innerHTML = "<center>Game Over <br><br> Your score is " + Score + " <br><br> and your life remaining is " + lifes + "<br><br> Click play to restart game <br><br>" + 
	"<input type='button' value = 'Play' onclick='startgame()'/></center>"
	EndScreen.style.display = "block"
	
}

function reduceLife(div) {
	
	div.style.backgroundImage =  "url('explosion.png')";
	div.style.width = "50px"
	div.style.height = "50px"
	div.style.backgroundSize  = "contain"
	div.innerText = "";
	var audio = new Audio('explosion2.wav');
	audio.play();
	setTimeout(function(){ div.parentNode.removeChild(div); }, 1000);
	
	lifes = lifes - 1;
	LifeScreen.innerHTML = "Life:" + lifes + "<br>" + "Score:" + Score + "<br>" + "Timer:" + Timer
	
	if (lifes == 0) {
		endgame()
	}
} // end of reduceLife

function DestroyBomb(div) {
	
	div.style.backgroundImage =  "url('explosion.png')";
	div.style.width = "50px"
	div.style.height = "50px"
	div.style.backgroundSize  = "contain"
	div.innerText = "";
	var audio = new Audio('explosion.wav');
	audio.play();
	setTimeout(function(){ div.parentNode.removeChild(div); }, 1000);
	
	//div.parentNode.removeChild(div);
	Score = parseInt(Score) + 1
	LifeScreen.innerHTML = "Life:" + lifes + "<br>" + "Score:" + Score + "<br>" + "Timer:" + Timer
} // end of DestroyBomb

document.getElementById("StartButton").addEventListener("click", function(event){
	startgame();
});

document.body.addEventListener("keydown", function(event){
	
	highlightedWord = "";
	Destroyflag = false;
	if (event.keyCode > 64 && event.keyCode < 91) {
		var bombs = document.getElementsByClassName("bomb")
		var Typed = String.fromCharCode(event.keyCode)

		
		if (event.shiftKey) {
			Typed = Typed.toUpperCase()
		} else {
			Typed = Typed.toLowerCase()	
		}
		

		
		if (typedWord == "") {
			typedWord = Typed
		} else if (typedWord != "") {
			typedWord = typedWord + Typed
		}
		


		for (var i = 0; i < bombs.length;i++) {
			bombs[i].innerHTML = bombs[i].innerText
			if (bombs[i].innerText == typedWord) {
				DestroyBomb(bombs[i])
				Destroyflag = true;
			} else if (bombs[i].innerText.substring(0,typedWord.length) == typedWord) {
				highlightedWord = typedWord
				bombs[i].innerHTML = "<span style='color:red;'>" + bombs[i].innerText.substring(0,typedWord.length) + "</span>" + "<span style='color:black;'>" + bombs[i].innerText.substring(typedWord.length) + "</span>"
				break;
			}
		}
		
		if (highlightedWord == "") {
			typedWord = "";
			if (Destroyflag== false) {
				var audio = new Audio('Wrong-answer-sound-effect.mp3');
				audio.play();	
			}
		}
		
		

	}

});

