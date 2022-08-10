var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);

    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content)
    if(content=="take my selfie"){ //class108 we changed some lines
        speak(); // calling speak only when if condition is satisfied
    }
    
}

camera=document.getElementById("camera");

function speak(){
    var synth=window.speechSynthesis
    speak_data="taking your selfie in five seconds"
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(camera)
    setTimeout(function(){ //c108 30-33 line
     take_snapshot(); //calling function inside timeout i.e. after a certain time
     save();//calling save after taking snap  
    },5000); //time=5000ms=5sec
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

function take_snapshot(){ //writingths function directlky from webcam library to save the snap 
    Webcam.snap(function(data_uri){ //snap is saved inside data_uri 
        document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>"; //showing image using img tag inside the result div
    })
}           

function save(){
    link=document.getElementById("link"); //saving a tag with id link in a var
    image=document.getElementById("selfie_img").src;// getting image from take_snapshot()
    link.href=image; //giving value to the href of a tag as the imageclicked by the webcam 
    link.click(); //calling click function for the a tag
}