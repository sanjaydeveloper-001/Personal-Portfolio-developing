const page2=document.querySelector('.Aboutpage');
const page1=document.querySelector('.frontpage');
const bt1=document.querySelector('.knowmore');

bt1.addEventListener('click', () => {
    
    page1.style.display='none';
    page2.style.display='flex'; 

})