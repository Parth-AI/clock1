function setup(){
  createCanvas(400,400);

}

function draw(){
  background(0);

  let mn  = minute();
  let hr = hour();
  let sc = second();

  let mn1  = minute();
  let hr1 = hour();
  let sc1 = second();

  let mn2  = minute();
  let hr2 = hour();
  let sc2 = second();

  let mn3  = minute();
  let hr3 = hour();
  let sc3 = second();

  if(mn1 < 30){
    mn1 = mn1+30;
  }

  else{
    mn1 = mn1 - 30;
  hr1 = hr1 - 10;

  }

  hr1 = hr1-10;

  if(mn2 < 30){
    mn2 = mn2+30;
  }

  else{
    mn2 = mn2 - 30;
  hr2 = hr2 - 5;

  }

  hr2 = hr2-5;

  if(mn3 < 30){
    mn3 = mn3+30;
  }

  else{
    mn3 = mn3 - 30;
  hr3 = hr3 - 12;

  }

  hr3 = hr3-12;

  /*mn2 = mn2 - 30;
  hr2 = hr2 - 5;

  mn3 = mn3 - 30;
  hr3 = hr3 - 12;*/

  fill("lightgreen");
  textSize(22);
  text(hr + ':' + mn + ':' + sc,50,100);
  fill("red");
  text("IST time",50,130);

  fill("lightgreen");
  textSize(22);
  text(hr1 + ':' + mn1 + ':' + sc1,250,100);
  fill("red");
  text("CDT time",250,130);

fill("lightgreen");
  textSize(22);
  text(hr2 + ':' + mn2 + ':' + sc2,50,300);
  fill("red");
  text("GMT time",50,330);

  fill("lightgreen");
  textSize(22);
  text(hr3 + ':' + mn3 + ':' + sc3,250,300);
  fill("red");
  text("PAC time",250,330);

}
// cdt,ist,gmt,pac