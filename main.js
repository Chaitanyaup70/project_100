function img1(){
  var img1=document.getElementById("selfie1");
  img1.style.borderRadius="20%";
}
function img2(){
    var img2=document.getElementById("selfie2");
    img2.style.borderRadius="20%";
  }
  function img3(){
    var img3=document.getElementById("selfie3");
    img3.style.borderRadius="20%";
  }
function img1o(){
    var img1o=document.getElementById("selfie1");
    img1o.style.borderRadius="0%"
}  
function img2o(){
    var img2o=document.getElementById("selfie2");
    img2o.style.borderRadius="0%"
}  
function img3o(){
    var img3o=document.getElementById("selfie3");
    img3o.style.borderRadius="0%"
}  
var Speechrecognition=window.webkitSpeechRecognition;
var recognition=new Speechrecognition();

function start(){
    document.getElementById("inp").value=""
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("inp").value=content
    if(content=="selfie"){
        speak()
        speak2()
        speak3()    
        
    }
}
function speak(){
    var synth=window.speechSynthesis;
    var data="Taking your selfie ";
    var utterThis=new SpeechSynthesisUtterance(data);
    synth.speak(utterThis);
   Webcam.attach('#div0');
   timer() 
   setTimeout(function(){

    snap1()
    
   },12000);
   
}

function speak2(){
    var synth=window.speechSynthesis;
    var data="Taking your next selfie ";
    var utterThis=new SpeechSynthesisUtterance(data);
    synth.speak(utterThis);
   Webcam.attach('#div0');
   timer() 
   setTimeout(function(){

    snap2()
    
   },24000);
   
}
function speak3(){
    var synth=window.speechSynthesis;
    var data="Taking your final selfie ";
    var utterThis=new SpeechSynthesisUtterance(data);
    synth.speak(utterThis);
   Webcam.attach('#div0');
   timer() 
   setTimeout(function(){

    snap3()
    
   },36000);
   
}
Webcam.set({
    width:350,
    height:350,
    image_format:"jpeg",
    jpeg_quality:100
});
function snap1(){
    Webcam.snap(function(data_uri){

        document.getElementById("img1").innerHTML='<img onmouseover="img1() onmouseout="img1o()"id="selfie1" src="'+data_uri+'">';
    });

}
function snap2(){
    Webcam.snap(function(data_uri){

        document.getElementById("img2").innerHTML='<img onmouseover="img2()"onmouseout="img2o()"id="selfie2" src="'+data_uri+'">';
    });

}
function snap3(){
    Webcam.snap(function(data_uri){

        document.getElementById("img3").innerHTML='<img onmouseover="img3()"onmouseout="img3o()"id="selfie3" src="'+data_uri+'">';
    });

}
function timer(){
    synth=window.speechSynthesis
    for(i=5;i>=1;i--){
        var data=i;
        var utterThis=new SpeechSynthesisUtterance(data);
        synth.speak(utterThis);
    }
    var data="Taking your selfie now ";
    var utterThis=new SpeechSynthesisUtterance(data);
    synth.speak(utterThis);
}
