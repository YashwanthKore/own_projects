function btn() {
    var cnt1 = Math.floor(Math.random() * 6) + 1;
    var player1Img = "images/dice" + cnt1 + ".png";
    document.getElementById("player1").setAttribute("src", player1Img);

    var cnt2 = Math.floor(Math.random() * 6) + 1;
    var player2Img = "images/dice" + cnt2 + ".png";
    document.getElementById("player2").setAttribute("src", player2Img);
    var h2 = document.querySelector("h2")
    if(cnt1 > cnt2){
        h2.innerHTML="Player 1 : Won"
    }
    else if(cnt1 < cnt2){
        h2.innerHTML="Player 2 : Won"
    }
    else{
      if(cnt1 == cnt2){
        h2.innerHTML="Tie"
      }
    }
  }