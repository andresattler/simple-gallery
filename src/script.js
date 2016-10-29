function gallery (pictures){
  var index= 0;
  //cache DOM
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  var slider = document.getElementById("slider");
  var img = document.querySelector("#slider .slide img");
  //bind events
  left.addEventListener("click", slide);
  right.addEventListener("click", slide);
  render();
  function render(){
    img.src = pictures[index].src;
  }
  function slide(e){
    if(e.target.id =="left" && index>0){
      index--;
    }else if (e.target.id =="right" && index+1<pictures.length) {
      index++;
    }
    console.log(index);
    render();
  }
}


var pictures = [
  {
    src: "https://static.pexels.com/photos/87646/horsehead-nebula-dark-nebula-constellation-orion-87646.jpeg"
  },
  {
    src: "https://static.pexels.com/photos/167699/pexels-photo-167699.jpeg"
  },
  {
    src: "https://static.pexels.com/photos/185709/pexels-photo-185709.jpeg"
  },
  {
    src: "https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg"
  }
];
gallery(pictures);
