let myName = prompt("Adınız nedir?")
if (myName<=0){
    alert("Lüften sizden istenilen bilgiyi giriniz!")
} 
document.getElementById("myName").innerHTML = myName


 function showTime() {
   const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
   let date = new Date ()
   let hour = date.getHours();
   let minute = date.getMinutes();
   let second = date.getSeconds();
   let day = days[date.getDay()];
   document.getElementById("myClock").innerHTML = `${hour}:${minute}:${second} ${day}`
}
setInterval (showTime,1000);
showTime()
