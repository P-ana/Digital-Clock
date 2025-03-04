

function time(){
    const date=new Date();
    const hour=date.getHours();
    const minute=date.getMinutes();
    const second=date.getSeconds();
    const clock=document.getElementById('clock');
    clock.innerHTML=`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;;
}

setInterval(time,1000);