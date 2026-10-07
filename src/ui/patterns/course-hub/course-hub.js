import { createButton } from '../../components/button/button.js';
import { createIcon } from '../../icons/icons.js';

const node=(tag,className='',text)=>{const el=document.createElement(tag);el.className=className;if(text!==undefined)el.textContent=text;return el;};
let sequence=0;

/** Coverage of explored questions, not mastery or success rate. */
export function courseModules({domains=[],questions=[],state={}}={}) {
  return domains.map(([id,label])=>{
    const items=questions.filter(q=>q.domain===id);
    const explored=items.filter(q=>state.seen?.[q.id]||state.answers?.[q.id]?.done||state.answers?.[q.id]?.read||state.drafts?.[q.id]).length;
    const errors=items.some(q=>state.answers?.[q.id]?.correct===false);
    return {id,label,total:items.length,explored,percent:items.length?Math.round(explored/items.length*100):null,
      status:!items.length?'Donnée indisponible':!explored?'À commencer':errors?'À renforcer':explored===items.length?'Terminé':'En cours',
      topics:[...new Set(items.map(q=>q.category).filter(Boolean))]};
  });
}

export function createCourseHub({resumeButton,onSelect,onStart,onContinue,...initial}={}) {
  const instance=++sequence,element=node('section','ui-course-hub');
  const course=node('section','ui-course-hub__card ui-course-hub__summary');
  const copy=node('div','ui-course-hub__summary-copy'),actions=node('div','ui-course-hub__summary-action');
  const title=node('h3','ui-course-hub__title'),description=node('p','ui-course-hub__muted'),coverage=node('strong','ui-course-hub__coverage');
  const resume=resumeButton||createButton({label:'Reprendre l’entraînement',variant:'primary',onClick:()=>onContinue?.()});
  copy.append(title,description);actions.append(coverage,resume);course.append(copy,actions);
  const heading=node('h3','ui-course-hub__title'),modules=node('div','ui-course-hub__modules'),pagination=node('div','ui-course-hub__pagination');
  modules.setAttribute('aria-label','Modules de formation');element.append(course,heading,modules,pagination);
  let model={},opened=initial.openedDomain??null,modulePage=0;
  function update(data={}) {
    const previousCode=model.code;model={...model,...data};
    if(previousCode&&previousCode!==model.code){opened=null;modulePage=0;}
    if(Object.hasOwn(data,'openedDomain'))opened=data.openedDomain;
    const items=model.modules||[],size=items.length>5?4:5;
    if(!items.some(m=>m.id===opened))opened=null;
    modulePage=Math.max(0,Math.min(modulePage,Math.ceil(items.length/size)-1));
    const total=items.reduce((n,m)=>n+(m.total||0),0),explored=items.reduce((n,m)=>n+(m.explored||0),0);
    title.textContent=model.name||'Microsoft Azure Administrator';heading.textContent='Mon parcours '+(model.code||'AZ-104');
    description.textContent=total?(model.code||'AZ-104')+' · '+explored+' questions explorées sur '+total:'Aucune question disponible dans cette formation.';
    coverage.textContent=total?Math.round(explored/total*100)+' % explorés · '+items.length+' domaines':'Progression indisponible';
    if(model.resumeLabel)(resume.querySelector('.ui-button__label')||resume).textContent=model.resumeLabel;
    resume.disabled=!total;
    modules.replaceChildren(...items.slice(modulePage*size,(modulePage+1)*size).map(item=>{
      const wrapper=node('section','ui-course-hub__domain');
      const trigger=node('button','ui-course-hub__module');trigger.type='button';trigger.dataset.pathDomain=item.id;
      const key='course-domain-'+instance+'-'+items.indexOf(item),panel=node('div','ui-course-hub__panel');panel.id=key;
      trigger.setAttribute('aria-expanded',String(opened===item.id));trigger.setAttribute('aria-controls',key);panel.hidden=opened!==item.id;
      const header=node('span','ui-course-hub__module-header'),label=node('span','ui-course-hub__module-copy');
      const available=item.total>0&&Number.isFinite(item.percent),percent=available?Math.max(0,Math.min(100,item.percent)):null;
      label.append(node('strong','',item.label),node('small','',available?item.status+' · '+item.explored+' questions explorées sur '+item.total:'Donnée indisponible'));
      header.append(label,node('small','ui-course-hub__module-percent',available?percent+' % explorés':'—'),createIcon('chevronDown',{size:20}));
      const track=node('span','ui-course-hub__track'),fill=node('span','ui-course-hub__fill');
      track.setAttribute('role','progressbar');track.setAttribute('aria-label',item.label);track.setAttribute('aria-valuemin','0');track.setAttribute('aria-valuemax','100');
      if(available)track.setAttribute('aria-valuenow',String(percent));else track.setAttribute('aria-valuetext','Donnée indisponible');
      fill.style.width=(percent??0)+'%';track.append(fill);trigger.append(header,track);
      trigger.onclick=()=>{opened=opened===item.id?null:item.id;model.selected=item.id;update();modules.querySelector('[data-path-domain="'+CSS.escape(item.id)+'"]')?.focus({preventScroll:true});onSelect?.(item.id);};
      panel.append(node('p','ui-course-hub__muted',available?item.explored+' questions explorées sur '+item.total:'Aucune question disponible pour ce domaine.'));
      if(item.topics?.length){const topics=node('ul','ui-course-hub__topics');topics.append(...item.topics.map(t=>node('li','',t)));panel.append(topics);}
      panel.append(createButton({label:'Travailler ce domaine',disabled:!item.total,onClick:()=>onStart?.(item.id)}));
      wrapper.append(trigger,panel);return wrapper;
    }));
    if(!items.length)modules.append(node('p','ui-course-hub__muted','Importez une formation depuis les paramètres.'));
    pagination.replaceChildren();pagination.hidden=items.length<=5;if(items.length>5){pagination.append(createButton({label:'Précédent',disabled:!modulePage,onClick:()=>{modulePage--;update();}}),node('span','',(modulePage*size+1)+'–'+Math.min((modulePage+1)*size,items.length)+' sur '+items.length),createButton({label:'Suivant',disabled:(modulePage+1)*size>=items.length,onClick:()=>{modulePage++;update();}}));}
  }
  update(initial);return {element,update,get openedDomain(){return opened;}};
}
