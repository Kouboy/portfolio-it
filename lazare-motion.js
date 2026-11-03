/* LAZARE / RRT4 motion enhancement. Progressive, optional, no analytics. */
(() => {
 "use strict";
 const page=document.querySelector(".lazare-page");
 if(!page)return;
 const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const targets=[...document.querySelectorAll(
   ".lz-intro-copy h2, .lz-intro-copy>p, .lz-section-heading, .lz-method-card, .lz-register-lede, .lz-project-card, .lz-dossiers-divider, .lz-case-main h2, .lz-case-hook, .lz-timeline-entry, .lz-case-data, .lz-chain, .lz-evidence-card, .lz-proof-slot, .lz-outcome h3, .lz-lessons-grid>div, .lz-closing"
 )];
 if(!reduce){
   page.classList.add("lz-page-ready");
 }
 if(reduce||!("IntersectionObserver" in window)){
   targets.forEach(el=>el.classList.add("lz-in"));
   return;
 }
 // Preserve reading order and show every section if JS or observer fails.
 targets.forEach(el=>el.classList.add("lz-reveal"));
 const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting){
       entry.target.classList.add("lz-in");
       observer.unobserve(entry.target);
     }
   });
 },{threshold:.04,rootMargin:"0px 0px -25px 0px"});
 targets.forEach(el=>observer.observe(el));
 page.classList.add("lz-motion-enabled");
 window.addEventListener("pagehide",()=>observer.disconnect(),{once:true});
})();