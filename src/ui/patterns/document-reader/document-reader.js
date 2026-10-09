import {createButton} from '../../components/button/button.js';
import {createIconButton} from '../../components/icon-button/icon-button.js';
import {createSourceIllustration} from './source-illustration.js';
/** Non-modal support reader: the original answer controls remain live alongside it. */
export function createDocumentReader({onClose=()=>{},layoutRoot=document.body}={}) {
  const element=document.createElement('aside');element.className='ui-document-reader';element.hidden=true;element.setAttribute('aria-label','Lecteur de support');
  const header=document.createElement('header'),title=document.createElement('h2');title.textContent='Support source';
  const closeButton=createIconButton({icon:'close',label:'Fermer le lecteur',onClick:close});
  const body=document.createElement('div');body.className='ui-document-reader__body';
  const toolbar=document.createElement('div');toolbar.className='ui-document-reader__toolbar';
  let scale=1,returnFocus=null,image=null,hand=true,drag=null;
  body.tabIndex=0;body.setAttribute('role','region');body.setAttribute('aria-label','Document : glisser ou utiliser les flèches pour naviguer');
  const handButton=createButton({label:'Main',ariaLabel:'Outil main : déplacer le document',onClick:()=>setHand(!hand)});
  handButton.dataset.readerAction='hand';
  function stopDrag(){if(drag&&body.hasPointerCapture(drag.id))body.releasePointerCapture(drag.id);drag=null;body.classList.remove('is-dragging');}
  function setHand(active){stopDrag();hand=active;handButton.setAttribute('aria-pressed',String(hand));body.classList.toggle('has-hand-tool',hand&&!!image);}
  function zoom(delta){
    if(!image)return;
    const next=Math.max(.5,Math.min(4,scale+delta)),ratio=next/scale;
    const centerX=body.scrollLeft+body.clientWidth/2,centerY=body.scrollTop+body.clientHeight/2;
    scale=next;image.style.width=scale*100+'%';
    body.scrollLeft=centerX*ratio-body.clientWidth/2;body.scrollTop=centerY*ratio-body.clientHeight/2;
    updateZoom();
  }
  const minus=createButton({label:'Zoom −',onClick:()=>zoom(-.25)}),plus=createButton({label:'Zoom +',onClick:()=>zoom(.25)});
  minus.dataset.readerAction='zoom-out';plus.dataset.readerAction='zoom-in';
  const fit=createButton({label:'Ajuster',onClick:()=>{if(!image)return;scale=1;image.style.width='100%';body.scrollTo(0,0);updateZoom();}});
  fit.dataset.readerAction='fit';
  function updateZoom(){minus.disabled=scale<=.5;plus.disabled=scale>=4;body.dataset.zoom=String(scale);}
  toolbar.append(handButton,minus,plus,fit);
  body.addEventListener('pointerdown',e=>{if(!image||!hand||e.button!==0)return;e.preventDefault();stopDrag();drag={id:e.pointerId,x:e.clientX,y:e.clientY,left:body.scrollLeft,top:body.scrollTop};body.setPointerCapture(e.pointerId);body.classList.add('is-dragging');body.focus({preventScroll:true});});
  body.addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;body.scrollLeft=drag.left+drag.x-e.clientX;body.scrollTop=drag.top+drag.y-e.clientY;});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])body.addEventListener(event,stopDrag);
  body.addEventListener('keydown',e=>{if(!image||e.target!==body)return;const direction={ArrowLeft:[-64,0],ArrowRight:[64,0],ArrowUp:[0,-64],ArrowDown:[0,64]}[e.key];if(direction){e.preventDefault();e.stopPropagation();body.scrollBy(...direction);}});
  header.append(title,closeButton);element.append(header,toolbar,body);
  function close(){if(element.hidden)return;stopDrag();element.hidden=true;body.replaceChildren();image=null;layoutRoot.classList.remove('has-document-reader');returnFocus?.focus({preventScroll:true});onClose();}
  function open({url,label='Support source',trigger=null,crop=null}={}) {
    const safe=new URL(url,location.href);if(!['http:','https:','blob:'].includes(safe.protocol))return;
    stopDrag();returnFocus=trigger;scale=1;image=null;title.textContent=label;body.replaceChildren();body.scrollTo(0,0);
    const isImage=/\.(png|jpe?g|gif|webp|svg)(?:$|[?#])/i.test(safe.href);toolbar.hidden=!isImage;
    if(isImage){image=createSourceIllustration({url:safe.href,label,crop});body.append(image);}
    else {const frame=document.createElement('iframe');frame.src=safe.href;frame.title=label;body.append(frame);}
    setHand(true);updateZoom();element.hidden=false;layoutRoot.classList.add('has-document-reader');closeButton.focus({preventScroll:true});
  }
  element.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}});
  return {element,open,close};
}
export function installDocumentReader(){
  const view=createDocumentReader();document.body.append(view.element);
  document.addEventListener('click',e=>{const link=e.target.closest?.('a');if(!link||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
    const localSupport=link.closest('#figures,#feedback')&&/\.(pdf|png|jpe?g|gif|webp|svg)(?:$|[?#])/i.test(link.href);
    if(!link.hasAttribute('data-reader')&&!localSupport)return;e.preventDefault();let crop=null;try{crop=JSON.parse(link.dataset.readerCrop||'null')}catch{}view.open({url:link.href,label:link.querySelector('img')?.alt||link.textContent.trim()||'Support source',trigger:link,crop});
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!view.element.hidden){e.preventDefault();view.close();}});
  return view;
}
