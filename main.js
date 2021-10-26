function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/BJiqHvf90/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

    document.getElementById("Result_Label").innerHTML='I Can Hear - '+ result[0].label;
    document.getElementById("Result_Confidence").innerHTML='Accuracy - '+ (result[0].confidence*100).toFixed(2)+ ' %';
    document.getElementById("Result_Label").style.color="rgb("+r +',' +g+',' +b+")";
    document.getElementById("Result_Confidence").style.color="rgb("+r +',' +g+',' +b+")";

    img1=document.getElementById("Cute Cat");
    img2=document.getElementById("Happy Dog");
    img3=document.getElementById("Happy Owl");

    if(result[0].label == "Background Noise"){
        img1.src='Cute Cat.jpg';
        img2.src='Happy Dog.jpg';
        img3.src='Happy Owl.jpg';
     }
    else if(result[0].label == "Bark"){
        img1.src='Cute Cat.jpg';
        img2.src='Dancing Dog.jpg';
        img3.src='Happy Owl.jpg';
    }
    else if(result[0].label == "Meow"){
        img1.src='Dancing Cat.jpg';
        img2.src='Happy Dog.jpg';
        img3.src='Happy Owl';
    }
    else{
        img1.src='Cute Cat.jpg';
        img2.src='Happy Dog.jpg';
        img3.src='Dancing Owl.jpg';
    }
    }
}