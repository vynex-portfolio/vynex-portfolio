const startup=document.getElementById("startup");
const typed=document.getElementById("typed");
const percent=document.getElementById("loadPercent");
const phrase="VYNEX STUDIO";
let index=0;
function typeIntro(){
  if(index<=phrase.length){
    typed.textContent=phrase.slice(0,index);
    index++;
    setTimeout(typeIntro,90);
  }
}
typeIntro();
let pct=0;
const progress=setInterval(()=>{
  pct+=Math.floor(Math.random()*7)+4;
  if(pct>=100){
    pct=100;clearInterval(progress);
    setTimeout(()=>startup.classList.add("done"),450);
  }
  percent.textContent=pct+"%";
},70);

const nav=document.querySelector(".nav");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>20));

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));

let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,gx=mx,gy=my;
addEventListener("pointermove",e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px"});
(function cursor(){
  rx+=(mx-rx)*.18;ry+=(my-ry)*.18;gx+=(mx-gx)*.07;gy+=(my-gy)*.07;
  ring.style.left=rx+"px";ring.style.top=ry+"px";glow.style.left=gx+"px";glow.style.top=gy+"px";
  requestAnimationFrame(cursor);
})();
document.querySelectorAll("a,button,.service,.project,.step").forEach(el=>{
  el.addEventListener("mouseenter",()=>document.body.classList.add("hover"));
  el.addEventListener("mouseleave",()=>document.body.classList.remove("hover"));
});

document.querySelectorAll(".magnetic").forEach(btn=>{
  btn.addEventListener("mousemove",e=>{
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.08}px)`;
  });
  btn.addEventListener("mouseleave",()=>btn.style.transform="");
});

document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1100px) rotateY(${x*-3}deg) rotateX(${y*3}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});

const menu=document.querySelector(".menu"),navLinks=document.querySelector(".nav nav");
menu?.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  if(open){navLinks.style.display="flex";navLinks.style.position="absolute";navLinks.style.top="70px";navLinks.style.right="6vw";navLinks.style.flexDirection="column";navLinks.style.background="#0d0f15";navLinks.style.padding="18px";navLinks.style.border="1px solid rgba(255,255,255,.1)";navLinks.style.borderRadius="14px"}
  else navLinks.style.display="";
});
navLinks?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<901)navLinks.style.display=""}));

const hero=document.querySelector(".hero");
hero?.addEventListener("pointermove",e=>{
  const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;
  document.querySelector(".hero-light.one").style.transform=`translate(${x*25}px,${y*25}px)`;
  document.querySelector(".hero-light.two").style.transform=`translate(${x*-18}px,${y*-18}px)`;
});

/* final micro-interactions */
document.querySelectorAll(".brand-showcase").forEach(el=>{
  el.addEventListener("pointermove",e=>{
    const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
    el.querySelector(".brand-main").style.transform=`translate(${x*.018}px,${y*.018}px)`;
  });
  el.addEventListener("pointerleave",()=>el.querySelector(".brand-main").style.transform="");
});


/* Custom cursor intentionally disabled */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cursor-dot,.cursor-ring,.custom-cursor,.cursor-circle,.cursor-follow')
    .forEach(el => el.remove());
});
