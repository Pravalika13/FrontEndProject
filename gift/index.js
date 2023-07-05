var element=document.getElementById("main");
var content=document.getElementById("top");
var ele = document.getElementById("date");
var audio,clapaudi,song,click;
function start()
{
    click=new Audio("click.mp3");
    click.play();
    element.innerHTML="";
    content.innerHTML="";
    date.innerHTML = "";
    document.body.style.backgroundImage= "url('bgphoto.jpg')";
    document.body.style.backgroundSize="100%";
    // document.body.style.cssFloat="right";
    document.body.style.backgroundRepeat="no-repeat";
    content.innerHTML=`<h3 id="wishes">Happy Birthday Bharathuuuuu🥳🤗</h3>`;
    document.getElementById("wishes").style.marginTop="30px";
    document.getElementById("wishes").style.textAlign="center";
    document.getElementById("wishes").style.fontFamily="Lucida Console", "Courier New";
    document.getElementById("wishes").style.color="white";
    document.getElementById("wishes").style.fontSize="3rem";
    element.innerHTML=`<img id="profile" src="photo1.jpeg" alt="profile" height="300px" width="300px"/>`;
    document.getElementById("profile").style.borderRadius="50px";
    document.getElementById("profile").style.marginBottom="-20px";
    document.getElementById("profile").style.marginLeft="-100px";
    content.innerHTML=content.innerHTML+`<button id="celeb" onclick="candlecall()">Click :):)</button>`;
    var more=document.getElementById("celeb");
    more.style.marginTop="300px";
    more.style.marginLeft="350px";
    more.style.width = '100px'; // setting the width to 200px
    more.style.height = '60px'; // setting the height to 200px
    more.style.background="white"; // setting the background color to teal
    more.style.color = '#4A55A2'; // setting the color to white
    more.style.fontSize = '20px'; // setting the font size to 20px
    more.style.borderWidth = "4px";
    more.style.borderRadius = "10px";
     audio = new Audio('introsong.mp3');
    audio.play();

}

function candlecall()
{
    click=new Audio("click.mp3");
    click.play();
    element.innerHTML="";
    content.innerHTML="";
    audio.pause();
    document.body.style.backgroundImage = "none";
    content.innerHTML=`<img id="cake" src="cake.jpg" alt="cake" height="400px" width="400px"/>`;
    content.innerHTML+=`<img id="blow" src="candleblow.gif" height="200px" width="200px"/>`;
    var b= document.getElementById("blow");
    b.style.marginLeft = "5%";
    b.style.borderRadius = "10px";
    var k=document.getElementById("cake");
    k.style.marginLeft="35%";
    k.style.marginTop="5%";
    k.style.borderRadius = "30px";
    content.innerHTML+=`<button id = "candle" onclick = "cakecut()">Blow out the candles🕯️🕯️</button>`;
    var cand = document.getElementById("candle");
    cand.style.marginTop="350px";
    cand.style.marginLeft="50px";
    cand.style.width = '100px'; // setting the width to 200px
    cand.style.height = '46px'; // setting the height to 200px
    cand.style.background="#7895CB"; // setting the background color to teal
    cand.style.color = 'white'; // setting the color to white
    cand.style.fontSize = '14px'; // setting the font size to 20px
    cand.style.borderWidth = "4px";
    cand.style.borderRadius = "10px";


}

function cakecut()
{
    click=new Audio("click.mp3");
    click.play();
    clapaudi = new Audio("claps.mp3");
    clapaudi.play();
    content.innerHTML = "";
    element.innerHTML = "";
    //document.body.style.backgroundImage = "none";
    content.innerHTML=`<img id="cake2" src="cake2.jpg" alt="cake" height="400px" width="400px"/>`;
    content.innerHTML+=`<img id="birthday" src="birthday22.gif" height= "200px" width="200px"/>`
    var c = document.getElementById("birthday");
    c.style.borderRadius = "20%";
    c.style.marginLeft = "15px";
    var k=document.getElementById("cake2");
    k.style.marginLeft="35%";
    k.style.marginTop="5%";
    k.style.borderRadius = "100%";
    content.innerHTML+=`<button id= "knife" onclick="cakeslice()">Cut the cake🎂</button>`;
    knife.style.marginTop="350px";
    knife.style.marginLeft="50px";
    knife.style.width = '100px'; // setting the width to 200px
    knife.style.height = '46px'; // setting the height to 200px
    knife.style.background="#7895CB"; // setting the background color to teal
    knife.style.color = 'white'; // setting the color to white
    knife.style.fontSize = '14px'; // setting the font size to 20px
    knife.style.borderWidth = "4px";
    knife.style.borderRadius = "10px";

}

function cakeslice()
{
    click=new Audio("click.mp3");
    click.play();
    clapaudi.pause();
    song = new Audio("song.mp3");
    song.play();
    content.innerHTML = "";
    element.innerHTML = "";
    content.innerHTML=`<img id="cakecut" src="cakecut.jpg" alt="cake" height="400px" width="400px"/>`;
    content.innerHTML+=`<img id="balloon" src="balloon.gif" height="200px" width="200px"/>`;
    var c = document.getElementById("balloon");
    c.style.borderRadius = "20%";
    c.style.marginLeft = "15px";
    var k=document.getElementById("cakecut");
    k.style.marginLeft="35%";
    k.style.marginTop="5%";
    k.style.borderRadius = "100%";
    content.innerHTML+=`<button id= "slice" onclick="cakeeat()">Next → →</button>`;
    slice.style.marginTop="350px";
    slice.style.marginLeft="50px";
    slice.style.width = '100px'; // setting the width to 200px
    slice.style.height = '46px'; // setting the height to 200px
    slice.style.background="#7895CB"; // setting the background color to teal
    slice.style.color = 'white'; // setting the color to white
    slice.style.fontSize = '14px'; // setting the font size to 20px
    slice.style.borderWidth = "4px";
    slice.style.borderRadius = "10px";


}

function cakeeat()
{
    click=new Audio("click.mp3");
    click.play();
    content.innerHTML = "";
    element.innerHTML = "";
    content.innerHTML=`<img id="feed" src="feedingcake.jpg" alt="cake" height="400px" width="400px"/>`;
    content.innerHTML+=`<img id="feedcake" src="cakefeed.gif" height="200px" width="200px"/>`;
    var c = document.getElementById("feedcake");
    c.style.borderRadius = "20%";
    c.style.marginLeft = "15px";
    var k=document.getElementById("feed");
    k.style.marginLeft="35%";
    k.style.marginTop="5%";
    k.style.borderRadius = "50px";
    content.innerHTML+=`<button id= "giftimg" onclick="gift()">surprise🎉</button>`;
    giftimg.style.marginTop="350px";
    giftimg.style.marginLeft="50px";
    giftimg.style.width = '100px'; // setting the width to 200px
    giftimg.style.height = '46px'; // setting the height to 200px
    giftimg.style.background="#7895CB"; // setting the background color to teal
    giftimg.style.color = 'white'; // setting the color to white
    giftimg.style.fontSize = '14px'; // setting the font size to 20px
    giftimg.style.borderWidth = "4px";
    giftimg.style.borderRadius = "10px";




}

function gift()
{
    click=new Audio("click.mp3");
    click.play();
    content.innerHTML = "";
    element.innerHTML = "";
    content.innerHTML=`<img id="giftopen" src="gift.jpg" alt="gift" height="400px" width="400px"/>`;
    content.innerHTML+=`<img id=giftgive src="giftgive.gif" height="200px" width="200px"/>`;
    var c = document.getElementById("giftgive");
    c.style.borderRadius = "20%";
    c.style.marginLeft = "15px";
    var k=document.getElementById("giftopen");
    k.style.marginLeft="35%";
    k.style.marginTop="5%";
    k.style.borderRadius = "60px";
    content.innerHTML+=`<button id= "giftnext" onclick="opengift()">Click to open</button>`;
    giftnext.style.marginTop="350px";
    giftnext.style.marginLeft="50px";
    giftnext.style.width = '100px'; // setting the width to 200px
    giftnext.style.height = '46px'; // setting the height to 200px
    giftnext.style.background="#7895CB"; // setting the background color to teal
    giftnext.style.color = 'white'; // setting the color to white
    giftnext.style.fontSize = '14px'; // setting the font size to 20px
    giftnext.style.borderWidth = "4px";
    giftnext.style.borderRadius = "10px";


}

    var i = 0;
    var txt= 'Happy Birthday idiot😂😂! May you be gifted with life’s biggest joys and never-ending bliss.Thank you for always being there for me through thick and thin.Always keep smiling🙂🙂';
    var speed = 200;
    s = document.getElementById("para");
function opengift()
{
    click=new Audio("click.mp3");
    click.play();
    song = new Audio("mashup.mp3");
    song.play();
    content.innerHTML = "";
    element.innerHTML = "";
    s.innerHTML+=`<img id="bye" src="bye.gif" height="300px" width="300px"/>`;
    var k = document.getElementById("bye");
    // k.style.marginLeft="80%";
    // k.style.marginTop="5%";
    k.style.borderRadius = "60px";
    k.style.marginRight = "30px";
    typeWriter();
    // var k = document.getElementById("bye");
    // // k.style.marginLeft="80%";
    // // k.style.marginTop="5%";
    // // k.style.borderRadius = "60px";
    // k.style.marginRight = "80px";

    


}

function typeWriter() {
    if (i < txt.length) {
        s.innerHTML += txt.charAt(i);
      if(txt.charAt(i)==='!' || txt.charAt(i)==='.')
         s.innerHTML+=`<br>`;
      i++;
      setTimeout(typeWriter, speed);
    }
  } 

  
  