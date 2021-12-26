        
        console.log(new Date(new Date().toUTCString())
);

        var pTimeZone = document.createElement("P");
        pTimeZone.innerHTML = 'your timezone is : ' + Intl.DateTimeFormat().resolvedOptions().timeZone;

        var select = document.createElement("SELECT");
        var fuseau1 = document.createElement("OPTION");
        var fuseau2 = document.createElement("OPTION");
        var fuseau3 = document.createElement("OPTION");
        var fuseau4 = document.createElement("OPTION");
        var fuseau5 = document.createElement("OPTION");
        var fuseau6 = document.createElement("OPTION");
        fuseau1.setAttribute("option","America/New_York");
        fuseau1.innerHTML = "USA(NewYork)";
        fuseau2.setAttribute("option","Europe/Paris");
        fuseau2.innerHTML = "France";
        fuseau3.setAttribute("option","Europe/Moscow");
        fuseau3.innerHTML = "Russie(Moscou)";
        fuseau4.setAttribute("option","America/Manaus");
        fuseau4.innerHTML = "Bresil(Manaus)";
        fuseau5.setAttribute("option","Asia/Shanghai");
        fuseau5.innerHTML = "Chine(Shanghai)";
        fuseau6.setAttribute("option","Asia/Tokyo");
        fuseau6.innerHTML = "Japon";
        
        select.appendChild(fuseau1);
        select.appendChild(fuseau2);
        select.appendChild(fuseau3);
        select.appendChild(fuseau4);
        select.appendChild(fuseau5);
        select.appendChild(fuseau6);
        
        // select.appendChild(optionPlus);
        
        
        var button = document.createElement("BUTTON");
        button.setAttribute("type","button");
        button.setAttribute("id","btn");
        button.innerHTML="Result";
        button.onclick = function(e){getCountries();};
        
        var bToAppend = document.getElementById("corps");

        var textResult = document.createElement("P");
        
        bToAppend.appendChild(pTimeZone);
        bToAppend.appendChild(select);
        bToAppend.appendChild(button);
        bToAppend.appendChild(document.createElement("br"));
        bToAppend.appendChild(textResult);

        console.log("test ...")
        let d = new Date()
        console.log("UTC time " + d)
        let ank = d.toLocaleString('en-US', { timeZone: 'Europe/Madrid' });
        console.log("your time zone " + ank)

        function getCountries(country = 'Europe/Paris', summerTime = false){
          var country = select.options[select.selectedIndex].getAttribute("option");
          // console.log(country);
          let date = new Date(new Date().getFullYear(), summerTime ? 6 : 11, 1);
          let wordTime = new Date(date.toISOString().substr(0, 19)).getTime();
          let localTime = new Date(date.toLocaleString('en', { timeZone: country })).getTime();

          let countrySelected = (wordTime - localTime) / 1000 / 60;
          console.log(countrySelected);
          
          var date2 = new Date();
          var offset = date.getTimezoneOffset();
          textResult.innerHTML = 'La différence d\'heure entre votre pays et celui sélectionné est de <span class="red-glow">' +(countrySelected - offset) / 60+'h</span>';

          console.log('difference d\'heure entre votre pays et celui sélectionné : ' +(countrySelected - offset) / 60+'h');
        }