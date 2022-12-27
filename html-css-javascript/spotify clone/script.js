
let songIndex = 0;
let audioElement = new Audio("content/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songitem"));
let mastersong=document.getElementById('nameofsong');

let songs = [{ songName: "salam-e-ishq", filepath: "content/songs/1.mp3", coverpath: "content/covers/1.jpg" },
{ songName: "1.salam-e-ishq", filepath: "content/songs/1.mp3", coverpath: "content/covers/1.jpg" },
{ songName: "2.salam-e-ishq", filepath: "content/songs/2.mp3", coverpath: "content/covers/2.jpg" },
{ songName: "3.salam-e-ishq", filepath: "content/songs/3.mp3", coverpath: "content/covers/3.jpg" },
{ songName: "4.salam-e-ishq", filepath: "content/songs/4.mp3", coverpath: "content/covers/4.jpg" },
{ songName: "5.salam-e-ishq", filepath: "content/songs/5.mp3", coverpath: "content/covers/5.jpg" },
{ songName: "6.salam-e-ishq", filepath: "content/songs/6.mp3", coverpath: "content/covers/6.jpg" },
{ songName: "7.salam-e-ishq", filepath: "content/songs/7.mp3", coverpath: "content/covers/7.jpg" },
{ songName: "8.salam-e-ishq", filepath: "content/songs/8.mp3", coverpath: "content/covers/8.jpg" },
{ songName: "9.salam-e-ishq", filepath: "content/songs/9.mp3", coverpath: "content/covers/9.jpg" },
{ songName: "10.salam-e-ishq", filepath: "content/songs/10.mp3", coverpath: "content/covers/10.jpg" }

];


// Handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen events
audioElement.addEventListener('timeupdate', () => {


    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
let makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');


    })

};

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;

})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
console.log(e.target);
makeAllPlays(); 
songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src=`content/songs/${songIndex}.mp3`;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
mastersong.innerText=songs[songIndex].songName;

})


})

document.getElementById('next').addEventListener('click',()=>{
if(songIndex==10){

    songIndex=0;
}
else{

    songIndex +=1;
}
audioElement.src=`content/songs/${songIndex}.mp3`;
audioElement.currentTime=0;
audioElement.play();
gif.style.opacity=1;
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
mastersong.innerText=songs[songIndex].songName;


})

document.getElementById('privious').addEventListener('click',()=>{
    if(songIndex==1){
    
        songIndex=10;
    }
    else{
    
        songIndex -=1;
    }
    audioElement.src=`content/songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    mastersong.innerText=songs[songIndex].songName;
    // makeAllPlays();
    
    
    // document.getElementById('songIndex').classList.remove('fa-circle-play');
    // document.getElementById('songIndex').classList.add('fa-circle-pause');
    
    })