var second=0;
var minute=0;
var hour=0;
var d=new Date();

setInterval(
    function()
    {
        d=new Date();
        second=d.getSeconds()*6;
        minute=d.getMinutes()*6;
        hour=d.getHours()*30;
        let sec=document.getElementById("second-hand");
        sec.style.transform="rotate("+second+"deg)";
        let min=document.getElementById("minute-hand");
        min.style.transform="rotate("+minute+"deg)";
        let hrs=document.getElementById("hour-hand");
        hrs.style.transform="rotate("+hour+"deg)";
    },100
);