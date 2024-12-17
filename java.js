        
document.querySelector('.btn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});




function cookiemeldingaccept(){
    document.querySelector(".cookie-message").style.display="none"
    console.log("accepted");
    
}

function lightmode(){
    document.querySelector(".home").classList.toggle("lightmode");
}

function cookiemelding(){
    document.querySelector(".cookie-message").style.display="none"
    console.log("decline");
}

function getTimeBasedGreeting() {
    const now = new Date(); // Verkrijg de huidige datum en tijd
    const hour = now.getHours(); // Verkrijg het uur van de dag (0-23)

    let greeting = "";

    // Bepaal de begroeting op basis van het uur
    if (hour >= 6 && hour < 12) {
        greeting = "Goedemorgen";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Goedemiddag";
    } else if (hour >= 18 && hour < 24) {
        greeting = "Goedenavond";
    } else {
        greeting = "Goedenacht";
    }

    // Zet de begroeting in het div-element met id "greeting"
    document.getElementById("greeting").textContent = greeting;
}

// Roep de functie aan zodra de pagina is geladen
window.onload = getTimeBasedGreeting;


function toggleMenu() {
    //Elke keer dat deze functie wordt gecalled voeg de show-mobile-nav toe aan de #mobile-nav.
    //Als de #mobile-nav al actief is omdat er al 1 keer is op geklikt, haal de class weer weg
    document.getElementById("mobile-nav").classList.toggle("show-mobile-nav");
  }

  
  function countdown(){
    var countDownDate = new Date("Dec 20, 2024 23:59:59").getTime();
 
    var x = setInterval(function() {
 
        var now = new Date().getTime();
           
        var distance = countDownDate - now;
           
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
           
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "KLAAR";
        }
    }, 1000);
}
countdown()
