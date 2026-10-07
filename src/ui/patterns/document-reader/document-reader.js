import {createButton} from '../../components/button/button.js';
import {createIconButton} from '../../components/icon-button/icon-button.js';
/** Non-modal support reader: the original answer controls remain live alongside it. */
export function createDocumentReader({onClose=()=>{},layoutRoot=document.body}={}) {
  const element=document.createElement('aside');element.className='ui-document-reader';element.hidden=true;element.setAttribute('aria-label','Lecteur de support');
  const header=document.createElement('header'),title=document.createElement('h2');title.textContent='Support source';
  const closeButton=createIconButton({icon:'close',label:'Fermer le lecteur',onClick:close});
  const body=document.createElement('div');body.className='ui-document-reader__body';
  const toolbar=document.createElement('div');toolbar.className='ui-document-reader__toolbar';
  let scale=1,returnFocus=null,image=null;
  const zoom=delta=>{scale=Math.max(.5,Math.min(4,scale+delta));if(image)image.style.width=scale*100+'%';};
  toolbar.append(createButton({label:'Zoom −',onClick:()=>zoom(-.25)}),createButton({label:'Zoom +',onClick:()=>zoom(.25)}),createButton({label:'Ajuster',onClick:()=>{scale=1;if(image)image.style.width='100%';}}));
  header.append(title,closeButton);element.append(header,toolbar,body);
  function close(){if(element.hidden)return;element.hidden=true;body.replaceChildren();layoutRoot.classList.remove('has-document-reader');returnFocus?.focus({preventScroll:true});onClose();}
  function open({url,label='Support source',trigger=null}={}) {
    const safe=new URL(url,location.href);if(!['http:','https:','blob:'].includes(safe.protocol))return;
    returnFocus=trigger;scale=1;image=null;title.textContent=label;body.replaceChildren();
    const isImage=/\.(png|jpe?g|gif|webp|svg)(?:$|[?#])/i.test(safe.href);toolbar.hidden=!isImage;
    if(isImage){image=document.createElement('img');image.src=safe.href;image.alt=label;body.append(image);}
    else {const frame=document.createElement('iframe');frame.src=safe.href;frame.title=label;body.append(frame);}
    element.hidden=false;layoutRoot.classList.add('has-document-reader');closeButton.focus({preventScroll:true});
  }
  element.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();close();}});
  return {element,open,close};
}
export function installDocumentReader(){
  const view=createDocumentReader();document.body.append(view.element);
  document.addEventListener('click',e=>{const link=e.target.closest?.('a');if(!link||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
    const localSupport=link.closest('#figures,#feedback')&&/\.(pdf|png|jpe?g|gif|webp|svg)(?:$|[?#])/i.test(link.href);
    if(!link.hasAttribute('data-reader')&&!localSupport)return;e.preventDefault();view.open({url:link.href,label:link.querySelector('img')?.alt||link.textContent.trim()||'Support source',trigger:link});
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!view.element.hidden){e.preventDefault();view.close();}});
  return view;
}
