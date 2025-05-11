let songIndex = 0;
let audioElement  = new Audio ('songs/2.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [

    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
    {songname : "salam" , filepath: "songs/1.mp3" , coverpath : "covers/1.jpg"},
]


masterplay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');

    }
  
})
myProgressBar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');

})

