function gallery (pictures){
  var index= 0;
  //cache DOM
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  var img = document.querySelector("#slider .slide img");
  var description = document.getElementById("description");
  //bind events
  left.addEventListener("click", slide);
  right.addEventListener("click", slide);
  document.addEventListener("keydown", keyPressed);
  document.addEventListener("mousemove", toggleButtons);
  render();
  function render(){
    preload()
    var pic = pictures[index];
    img.src = pic.src;
    if(pic.description){
      description.style.display = "block";
      description.innerHTML = "<p>" + pic.description + "</p>";
    }else{
      description.style.display = "none";
    }
  }
  function preload(){
    if(index+1<pictures.length){
      var nextImg = new Image();
      nextImg.src = pictures[index+1].src;
    }
  }
  function slide(e){
    console.log("x");
    if(e.target.id =="left" && index>0){
      index--;
    }else if (e.target.id =="right" && index+1<pictures.length) {
      index++;
    }
    render();
  }
  function keyPressed(e){
    if(e.key =="ArrowLeft" && index>0){
      index--;
      render();
    }else if(e.key =="ArrowRight" && index+1<pictures.length){
      index++;
      render();
    }
  }
  function toggleButtons(){
    right.style.display = "block";
    left.style.display = "block";
    document.removeEventListener("mousemove", toggleButtons);
    window.setTimeout(function(){
      right.style.display = "none";
      left.style.display = "none";
      document.addEventListener("mousemove", toggleButtons);
    }, 3000);
  }
}


var pictures = [
  {
    src: "pics/1.jpeg",
    description: "Hello world!"
  },
  {
    src: "pics/2.jpeg",
    description: "snow!!!"
  },
  {
    src: "pics/3.jpeg",
    description: "city"
  },
  {
    src: "pics/4.jpeg"
  }
];
gallery(pictures);
