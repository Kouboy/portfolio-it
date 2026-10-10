/* RRT4 living language labels, standalone and offline. */
(() => {
"use strict";
const JP={
"記号":["kigō","Signe, symbole"],"修復":["shūfuku","Réparation"],"記録":["kiroku","Journal, consignation"],"試験":["shiken","Essai, test"],"案件一覧":["anken ichiran","Index des projets"],"手順":["tejun","Procédure, étapes"],"経歴":["keireki","Parcours"],"背景":["haikei","Contexte"],"目的":["mokuteki","Objectif"],"診断":["shindan","Diagnostic"],"証拠":["shōko","Preuve"],"状態":["jōtai","État"],"学び":["manabi","Apprentissages"],"構築":["kōchiku","Construction"],"接続":["setsuzoku","Connexion"],"観測":["kansoku","Observation"],"設計":["sekkei","Conception"],"制作記録":["seisaku kiroku","Carnet de fabrication"],"現在":["genzai","Maintenant"],"作業台":["sagyōdai","Établi, plan de travail"],"星図":["seizu","Carte des étoiles"],"検証":["kenshō","Vérification, validation"],"発見":["hakken","Découverte"],"起点":["kiten","Point de départ"],"言語設計":["gengo sekkei","Conception linguistique"]};
let popup=null,active=null,pinned=false;
const selector=".cs-lex,[data-rrt4-gloss],.jp,.jp-big";
function init(el){
 if(el.closest('[aria-hidden="true"],svg')||el.hasAttribute("data-rrt4-no-gloss"))return;
 const word=el.getAttribute("data-rrt4-gloss")||el.textContent.trim();
 const lang=el.dataset.rrt4Language||(el.dataset.zh?"zh":"ja");
 if(!(el.dataset.rrt4Reading&&el.dataset.rrt4Meaning)&&!(lang==="ja"&&JP[word]))return;
 el.dataset.rrt4Ready="1";el.dataset.rrt4Lang=lang;
 el.setAttribute("lang",lang==="zh"?"zh-Hans":"ja");
 if(!el.closest("a,button")&&!el.hasAttribute("tabindex")){
  el.setAttribute("tabindex","0");el.setAttribute("role","button");el.setAttribute("aria-label",word+", afficher la prononciation et la traduction");
 }
}
function payload(el){
 const word=el.getAttribute("data-rrt4-gloss")||el.textContent.trim();
 const lang=el.dataset.rrt4Language||el.dataset.rrt4Lang||"ja";
 const entry=lang==="ja"?JP[word]:null;
 const reading=el.dataset.rrt4Reading||(entry&&entry[0]);
 const meaning=el.dataset.rrt4Meaning||(entry&&entry[1]);
 return reading&&meaning?{word,reading,meaning}:null;
}
function position(el){
 const rect=el.getBoundingClientRect(),margin=12,w=popup.offsetWidth,h=popup.offsetHeight;
 popup.style.left=Math.max(margin,Math.min(innerWidth-w-margin,rect.left+(rect.width-w)/2))+"px";
 popup.style.top=(rect.bottom+10+h<innerHeight-margin?rect.bottom+10:Math.max(margin,rect.top-h-10))+"px";
}
function show(el,pin){
 const p=payload(el);if(!p)return;
 if(active&&active!==el)active.removeAttribute("aria-describedby");
 active=el;pinned=!!pin;
 popup.querySelector(".rrt4-word").textContent=p.word;
 popup.querySelector(".rrt4-reading").textContent=p.reading;
 popup.querySelector(".rrt4-meaning").textContent=p.meaning;
 popup.hidden=false;el.setAttribute("aria-describedby",popup.id);position(el);
}
function hide(){
 if(active)active.removeAttribute("aria-describedby");
 active=null;pinned=false;if(popup)popup.hidden=true;
}
function toggle(el){if(active===el&&pinned)hide();else show(el,true)}
function refresh(root){
 hide();(root||document).querySelectorAll(selector).forEach(el=>{delete el.dataset.rrt4Ready;init(el)});
}
function setup(){
 popup=document.createElement("div");popup.className="rrt4-lex-popup";popup.setAttribute("role","tooltip");
 popup.id="rrt4-lex-note";popup.hidden=true;
 popup.innerHTML='<span class="rrt4-word"></span><span class="rrt4-reading"></span><div class="rrt4-meaning"></div>';
 document.body.appendChild(popup);refresh();
 document.addEventListener("pointerover",e=>{
   const el=e.target.closest&&e.target.closest("[data-rrt4-ready]");
   if(el&&el!==active&&e.pointerType!=="touch")show(el,false);
 });
 document.addEventListener("pointerout",e=>{
   const el=e.target.closest&&e.target.closest("[data-rrt4-ready]");
   if(el&&e.pointerType!=="touch"&&!el.contains(e.relatedTarget)&&!pinned)hide();
 });
 document.addEventListener("focusin",e=>{
   const el=e.target.closest&&e.target.closest("[data-rrt4-ready]")||(e.target.querySelector&&e.target.querySelector("[data-rrt4-ready]"));
   if(el)show(el,false);
 });
 document.addEventListener("focusout",e=>{if(active&&!active.contains(e.relatedTarget)&&!pinned)hide()});
 document.addEventListener("click",e=>{
   const el=e.target.closest&&e.target.closest("[data-rrt4-ready]");
   if(!el){hide();return}
   if(el.closest("a,button")&&el.closest("a,button")!==el)return;
   toggle(el);
 });
 document.addEventListener("keydown",e=>{
   if(e.key==="Escape")hide();
   if((e.key==="Enter"||e.key===" ")&&e.target.matches&&e.target.matches("[data-rrt4-ready][tabindex]")){
     e.preventDefault();toggle(e.target);
   }
 });
 window.addEventListener("scroll",()=>{if(active&&!pinned)hide();else if(active)position(active)},{passive:true});
 window.addEventListener("resize",()=>{if(active)position(active)});
}
window.RRT4Lexicon={refresh,entries:JP};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setup,{once:true});else setup();
})();