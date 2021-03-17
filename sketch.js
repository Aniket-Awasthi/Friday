
let Xpos = 0, Xv = 0, Ypos = 0, Yv = 0, Stop = false;
var SpeechRec = new p5.SpeechRec();
var spech;

var img;
var image;







SpeechRec.continuous = true;
SpeechRec.interimResult = true;
function preload(){
  img = loadImage('download.png');
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(4);
  background(255);
  SpeechRec.start();
  SpeechRec.onResult = showResult;
  spech = new p5.Speech();
  spech.setRate(0.8);
  let h = hour();

  let m = minute();

  let s = second();

  if (h > 0 & h < 12) {
    spech.speak('Good Morning ,Sir Time Is' + h + 'Hours' + m + 'Minutes' + s + 'seconds' + ' We Are Online And Ready');

  }
  if (h > 12 & h < 16) {
    spech.speak('Good Afternoon ,Sir Time Is' + h + 'Hours' + m + 'Minutes' + s + 'seconds' + ' We Are Online And Ready');

  }
  if (h > 16 & h < 24) {
    spech.speak('Good Evening ,Sir Time Is' + h + 'Hours' + m + 'Minutes' + s + 'seconds' + ' We Are Online And Ready');

  }

}





function showResult() {

  console.log(SpeechRec.resultString);

  switch (SpeechRec.resultString) {

    case "Friday":
      spech.speak('Yes Sir I Am Here We Are Online And Ready');
      break;
    case "friday":
      spech.speak('Yes Sir I Am Here We Are Online And Ready');
      break;
    case "Hriday":
      spech.speak('Yes Sir I Am Here We Are Online And Ready');
      break;
    case "who are you":
      spech.speak('I Am The Most Advance A.I. System Friday. Developed By Aniket Awaasthi');
      break;
    case "where are you":
      spech.speak('I Am In your PC,To help you');
      break;
    case "how you can help me":
      spech.speak('I Help you by taking your comand , like you say me to Open Google,Open YouTube,Open Mail,Open WathasApp,Open Map,Open Play Store or You can ask he Time by speaking ,Tell me Time ,If you can say Anythink elief I Search it on Google');
      break;
    case "thank you":
      spech.speak('Its my Pleasure');
      break;
    case "open mail":
      spech.speak('ok Sir opening mail');
      window.open("https://mail.google.com");

      break;
    case "open YouTube":
      spech.speak('ok Sir opening you tube');
      window.open("https://www.youtube.com/");

      break;
    case "open Google":
      spech.speak('ok Sir opening google');
      window.open("https://www.google.com/");

    case "Open Google":
      spech.speak('ok Sir opening google');
      window.open("https://www.google.com/");

      break;
    case "open Play Store":
      spech.speak('ok Sir opening play store');
      window.open("https://play.google.com/");

      break;
    case "open WhatsApp":
      spech.speak('ok Sir oppening whats app');
      window.open("https://web.whatsapp.com/");

      break;
    case "open Map":
      spech.speak('ok Sir oppening map');
      window.open("https://www.google.com/maps/");

      break;
    case "open map":
      spech.speak('ok Sir oppening map');
      window.open("https://www.google.com/maps/");

      break;
      break;
    case "open book":
      spech.speak('ok Sir oppening book');
let f = new File("C:\Program Files (x86)\Kopykitab eBook Reader\Kopykitab_eBook_Reader.exe")

      break;
    case "Open map":
      spech.speak('ok Sir oppening map');
      window.open("https://www.google.com/maps/");
      break;
    case "tell me time":
      let h = hour();
      let m = minute();
      let s = second();
      spech.speak('Sir Time Is' + h + 'Hours' + m + 'Minutes' + s + 'seconds');


      break;

    case "Friday quit":
      spech.speak('As your wish Sir, Thank You for your time');



      window.close();




      break;
    case SpeechRec.resultString:
      spech.speak('Ok Sir ,I am searching');
      window.open("https://www.google.com/search?q=" + SpeechRec.resultString);


      break;


  }
}