function dates() {
    var x = new Date("Mar 1 2021 15:30:00");
    var y = new Date();
    let seconds = Math.abs(x - y)/1000;

    var day = seconds / (24 * 3600);

    hh = seconds % (24 * 3600);
    var hour = hh / 3600;
  
    hh %= 3600;
    var minutes = hh / 60 ;
  
    hh %= 60;
    var rseconds = hh;

    document.getElementById('days').innerHTML = parseInt(day);
    document.getElementById('hours').innerHTML = parseInt(hour);
    document.getElementById('minutes').innerHTML = parseInt(minutes);
    document.getElementById('seconds').innerHTML = parseInt(rseconds);
}

setInterval(dates, 1000);

function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show');
        } else {
            card.classList.add('fade-out'); 
            card.classList.remove('show');
        }
    });
}

