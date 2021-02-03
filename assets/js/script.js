let nav = document.querySelector('.experimental');
let vh = window.innerHeight;
console.log(vh);
window.onscroll = function ()
{
let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

if((scrollTop >= vh && scrollTop < 2*vh) || (scrollTop >= 3*vh && scrollTop < 4*vh) || (scrollTop >= 5*vh && scrollTop < 6*vh))
{
    nav.style.backgroundColor = 'black';
}
else {
    if((scrollTop < vh) || (scrollTop >= 2*vh && scrollTop < 3*vh) || (scrollTop >= 4*vh && scrollTop < 5*vh) || (scrollTop >= 6*vh && scrollTop < 7*vh)) 
    {
    nav.style.backgroundColor = 'rgba(0,0,0,.1)'; 
    }
}
}