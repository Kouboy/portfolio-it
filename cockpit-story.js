(() => {
"use strict";
document.body.classList.add("cs-js");
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const rises=[...document.querySelectorAll(".cs-rise")];
if(reduce||!("IntersectionObserver" in window)){rises.forEach(el=>el.classList.add("is-in"))}
else{
 const io=new IntersectionObserver(items=>{for(const e of items)if(e.isIntersecting){e.target.classList.add("is-in");io.unobserve(e.target)}},{threshold:.06,rootMargin:"0px 0px 40px 0px"});
 rises.forEach(el=>io.observe(el));
}
const nav=[...document.querySelectorAll(".cs-rail a")];
if("IntersectionObserver" in window){
 const spy=new IntersectionObserver(items=>{for(const e of items)if(e.isIntersecting)nav.forEach(a=>a.classList.toggle("is-current",a.getAttribute("href")==="#"+e.target.id))},{rootMargin:"-23% 0px -60% 0px",threshold:0});
 nav.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean).forEach(el=>spy.observe(el));
}
const buttons=[...document.querySelectorAll("[data-cs-script]")];
function setScript(script){
 buttons.forEach(b=>{const yes=b.dataset.csScript===script;b.classList.toggle("is-active",yes);b.setAttribute("aria-pressed",String(yes))});
 document.querySelectorAll(".cs-lex[data-zh][data-ja]").forEach(el=>{
   const word=el.dataset[script],reading=el.dataset[script+"Reading"];
   el.textContent=word;el.dataset.rrt4Gloss=word;el.dataset.rrt4Reading=reading;el.dataset.rrt4Meaning=el.dataset.meaning;
   el.dataset.rrt4Language=script;el.lang=script==="zh"?"zh-Hans":"ja";
 });
 window.RRT4Lexicon&&window.RRT4Lexicon.refresh();
}
buttons.forEach(b=>b.addEventListener("click",()=>setScript(b.dataset.csScript)));
setScript("zh");
})();