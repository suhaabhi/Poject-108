function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5xA5wvRHV/model.json', modelReady);
}

function modelReady()
{
  classifier.classify(gotResults);
}

function gotResults(error, results) 
{
  if(error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("animal_audio").innerHTML = "Detected voice is of" + results[0].label;
    document.getElementById("detected").innerHTML = "Detected dog: " + dog + " , Detected cat: " + cat + " , Detected cow: " + cow + " , Detected lion: " + lion;
    document.getElementById("animal_audio").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("detected").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

    img = document.getElementById("animal_images");

    if(results[0].label == "Barking")
    {
      img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
      dog = dog + 1;
    }
    else if(results[0].label == "Meowing")
    {
      img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
      cat = cat + 1;
    }
    else if(results[0].label == "Mooing")
    {
      img.src = "https://th.bing.com/th?id=OIP.oarz4T9N3NSf8z-bD99GkgHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
      cow = cow + 1;
    }
    else if(results[0].label == "Roaring")
    {
      img.src = "https://th.bing.com/th?id=OIP.7UJM5-iqjo6lkJxew5S-BwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
      lion = lion+ 1;
    }
    }
}