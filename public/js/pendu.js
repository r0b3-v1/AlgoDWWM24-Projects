    
    var usedWords = new Array();
    var remainingTries = 9;
    var word = document.currentScript.getAttribute('one');
    console.log(word);
    var underW = "";
    for (i = 0; i < word.length; i++) {
        underW += "_"
    }
    var under = document.createElement('p');
    under.setAttribute("id", "answer");
    under.setAttribute("style","letter-spacing:10px");
    under.innerHTML = underW;

    var pTries = document.createElement('p');
    pTries.setAttribute("id", "tries");
    pTries.innerHTML = 'il vous reste 9 essais';

    var pUsed = document.createElement('p');
    pUsed.setAttribute("id", "used");
    pUsed.innerHTML = 'Vous avez deja utilise les mots : ';

    
    var inputLetter = document.createElement("input");
    inputLetter.setAttribute("id", "letter");
    inputLetter.setAttribute("maxLength","1");
    var confirmB = document.createElement("button");
    confirmB.innerHTML = "confirm";
    confirmB.setAttribute("id", "confirmButton");
    
    var reset = document.createElement("button");
    reset.innerHTML = "relancer";
    reset.setAttribute('onClick',"window.location.reload();")
    
    var centre = document.getElementById("centre");
    
    centre.appendChild(under);
    centre.appendChild(inputLetter);
    centre.appendChild(confirmB);
    centre.appendChild(reset);
    centre.appendChild(pTries);
    centre.appendChild(pUsed);

    document.body.appendChild(centre);

    confirmB.setAttribute("onclick", "checkWord()");

    function checkWord() {
        if(remainingTries==0){
            alert("perdu!");
            
            return;
        }

        var guess = inputLetter.value;
        var test = false;
        var newWord = word;
        var partialWord = under.innerHTML;
        var replacementString = '';
        console.log(usedWords);
        
        while (newWord.includes(guess) && guess != '') {
            replacementString = '';
            test = true;
            var index = newWord.indexOf(guess);
            console.log(index);
            for (i = 0; i < guess.length; i++) {
                newWord = setCharAt(newWord, index + i, '*');
                partialWord = setCharAt(partialWord, index + i, guess[i]);
            }
            
            console.log('partialword = ' + partialWord);
            
            document.getElementById('answer').innerHTML = partialWord;
            console.log('newword = ' + newWord);
        }
        
        if(!test && !usedWords.includes(guess) && !guess==''){
            remainingTries -=1;
            pTries.innerHTML = 'il vous reste '+ remainingTries +' essais';
            if(remainingTries == 0){
                alert("perdu!");
                inputLetter.setAttribute("disabled","");
                confirmB.setAttribute("disabled","");    
                document.getElementById('answer').innerHTML = word;
            }
        }
        
        if(!usedWords.includes(guess)){
            usedWords.push(guess);
            pUsed.innerHTML += guess + " ";
        }

        if (word == partialWord){
            alert("gagné!");
            inputLetter.setAttribute("disabled","");
            confirmB.setAttribute("disabled","");    
        }
        inputLetter.value='';

        console.log('il vous reste '+ remainingTries + ' essais' );

    }

    function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }