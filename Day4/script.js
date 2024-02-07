const bell=document.querySelector(".icon-tabler-bell-filled");
const notificationContainer=document.querySelector(".notification");


bell.addEventListener("click",()=>{
// notificationContainer.style.transform='scale(0)'
    if(notificationContainer.style.transform==='scale(0)'){
        notificationContainer.style.transform='scale(1)';
    }else{
        notificationContainer.style.transform='scale(0)';
    }
    
})