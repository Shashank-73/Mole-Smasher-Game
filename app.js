let cursor=document.querySelector('.cursor');
let holes=[...document.querySelectorAll('.hole')];
let scoreElement=document.querySelector('.score span');
let btn=document.querySelector('.btn button');

let score=0;
let audio=new Audio('Assets/assets_smash.mp3');
function go()
{
    const random=Math.floor(Math.random()* holes.length);
    const hole=holes[random];
    let timer=null;
    const img=document.createElement('img');
    img.classList.add('mole-img');
    img.src='Assets/mole.png';
    img.addEventListener('click',()=>
    {
        score+=10;
        scoreElement.textContent=score;
        img.src='Assets/mole-whacked.png';
        audio.play();
        clearTimeout(timer);
        timer=setTimeout(()=>{
            hole.removeChild(img);
            go();
        },500);
    })
    hole.appendChild(img);

    timer=setTimeout(()=>{
        hole.removeChild(img);
        go();
    },1500);
}
btn.addEventListener('click',()=>
{
    if(btn.textContent=='Play')
    {
        btn.textContent="Stop";
        go();
    }
})
window.addEventListener('mousemove',event=>{
    cursor.style.top=event.pageY+'px';
    cursor.style.left=event.pageX+'px';
});

// active class functionality

window.addEventListener('mousedown',()=>
{
    cursor.classList.add('active');
})
window.addEventListener('mouseup',()=>{
    cursor.classList.remove('active');
})
