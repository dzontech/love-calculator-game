document.querySelector(".poruka").innerHTML = "LJUBAvNO DIGITRONTČE";
document.addEventListener("keypress", function(event) {
   if( event.keyCode === 13) {
        let rez = Math.floor(Math.random()*100)+1;
        if(rez<30) {
            document.querySelector(".poruka").innerHTML = "E JEBIGA....";
        } else if (rez>30 && rez<70) {
            document.querySelector(".poruka").innerHTML = "MORE BIT BIDNE......";
        } else {
            document.querySelector(".poruka").innerHTML = "PROSTO NEVEROVATNO.......NEK JE SA SRECOM";
        }
        document.querySelector(".rezultat").innerHTML = rez + "%";
}
});