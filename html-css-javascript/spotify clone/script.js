
let songIndex=0;
let audioElement = new Audio("content/songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItem=Array.from(document.getElementsByClassName("songitem"));

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
// audioElement.play();

// Handle play pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime==0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
gif.style.opacity=1;
}
else{

    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
}
})

//listen events
audioElement.addEventListener('timeupdate',()=>{

   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
 })

 myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

 })

 songItem.forEach((element,i)=>{
 element.getElementsByTagName("img")[0].src=songs[i].coverpath;
 element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;

 })