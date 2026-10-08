import { accordionTransition } from '../../integration/motion.js';
import { createButton } from '../../components/button/button.js';
import { createIcon } from '../../icons/icons.js';
import { createQuestionNavigator, questionNavigatorStatus } from '../question-navigator/question-navigator.js';

const node=(tag,className='',text)=>{const el=document.createElement(tag);el.className=className;if(text!==undefined)el.textContent=text;return el;};
let sequence=0;
const errorText=(count,summary=false)=>count+' '+(count>1?'erreurs':'erreur')+(summary?' à retravailler':'');
function updateErrorCount(element,count,summary=false){
  element.textContent=errorText(count,summary);
  element.classList.toggle('has-errors',count>0);
  element.title='Questions dont la dernière réponse est incorrecte.';
}

/** Coverage of explored questions, not mastery or success rate. */
export function courseModules({domains=[],questions=[],state={}}={}) {
  return domains.map(([id,label])=>{
    const items=questions.filter(q=>q.domain===id);
    const explored=items.filter(q=>state.seen?.[q.id]||state.answers?.[q.id]?.done||state.answers?.[q.id]?.read||state.drafts?.[q.id]).length;
    const errorCount=items.filter(q=>state.answers?.[q.id]?.correct===false).length;
    return {id,label,total:items.length,explored,errorCount,percent:items.length?Math.round(explored/items.length*100):null,
      status:!items.length?'Donnée indisponible':!explored?'À commencer':errorCount?'À renforcer':explored===items.length?'Terminé':'En cours',
      questions:items.map(q=>({id:q.id,index:questions.indexOf(q)+1,category:q.category,domain:label,
        title:q.prompt||q.question||'',status:questionNavigatorStatus(q,state),favorite:!!state.favorites?.[q.id],
        reported:(state.reports||[]).some(r=>r.questionId===q.id&&!r.resolved)}))};
  });
}

export function createCourseHub({resumeButton,onSelect,onStart,onContinue,onQuestionSelect,...initial}={}) {
  const instance=++sequence,element=node('section','ui-course-hub');
  const course=node('section','ui-course-hub__card ui-course-hub__summary');
  const copy=node('div','ui-course-hub__summary-copy'),actions=node('div','ui-course-hub__summary-action');
  const title=node('h3','ui-course-hub__title'),description=node('p','ui-course-hub__muted'),coverage=node('strong','ui-course-hub__coverage');
  const results=node('div','ui-course-hub__summary-results'),errors=node('span','ui-course-hub__errors ui-course-hub__errors--total');
  errors.setAttribute('aria-live','polite');errors.setAttribute('aria-atomic','true');results.append(coverage,errors);
  const resume=resumeButton||createButton({label:'Reprendre l’entraînement',variant:'primary',onClick:()=>onContinue?.()});
  const progress=node('span','ui-course-hub__track ui-course-hub__global');const globalFill=node('span','ui-course-hub__fill');progress.setAttribute('role','progressbar');progress.setAttribute('aria-label','Progression de la formation');progress.setAttribute('aria-valuemin','0');progress.setAttribute('aria-valuemax','100');progress.append(globalFill);copy.append(title,description,progress);actions.append(results,resume);course.append(copy,actions);
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
    updateErrorCount(errors,items.reduce((sum,item)=>sum+(item.errorCount||0),0),true);errors.hidden=!total;
    if(model.resumeLabel)(resume.querySelector('.ui-button__label')||resume).textContent=model.resumeLabel;
    resume.disabled=!total;const globalPercent=total?Math.round(explored/total*100):0;progress.setAttribute('aria-valuenow',String(globalPercent));globalFill.style.width=globalPercent+'%';
    modules.replaceChildren(...items.slice(modulePage*size,(modulePage+1)*size).map(item=>{
      const wrapper=node('section','ui-course-hub__domain');
      const trigger=node('button','ui-course-hub__module');trigger.type='button';trigger.dataset.pathDomain=item.id;
      const key='course-domain-'+instance+'-'+items.indexOf(item),panel=node('div','ui-course-hub__panel');panel.id=key;
      trigger.setAttribute('aria-expanded',String(opened===item.id));trigger.setAttribute('aria-controls',key);panel.hidden=opened!==item.id;
      const header=node('span','ui-course-hub__module-header'),label=node('span','ui-course-hub__module-copy');
      const available=item.total>0&&Number.isFinite(item.percent),percent=available?Math.max(0,Math.min(100,item.percent)):null;
      label.append(node('strong','',item.label),node('small','',available?item.status+' · '+item.explored+' questions explorées sur '+item.total:'Donnée indisponible'));
      const moduleResults=node('span','ui-course-hub__module-results');
      moduleResults.append(node('small','ui-course-hub__module-percent',available?percent+' % explorés':'—'));
      if(available){const count=node('small','ui-course-hub__errors');updateErrorCount(count,item.errorCount||0);moduleResults.append(count);}
      header.append(label,moduleResults,createIcon('chevronDown',{size:20}));
      const track=node('span','ui-course-hub__track'),fill=node('span','ui-course-hub__fill');
      track.setAttribute('role','progressbar');track.setAttribute('aria-label',item.label);track.setAttribute('aria-valuemin','0');track.setAttribute('aria-valuemax','100');
      if(available)track.setAttribute('aria-valuenow',String(percent));else track.setAttribute('aria-valuetext','Donnée indisponible');
      fill.style.width=(percent??0)+'%';track.append(fill);trigger.append(header,track);
      trigger.onclick=()=>{const previousHeight=wrapper.getBoundingClientRect().height;opened=opened===item.id?null:item.id;model.selected=item.id;update();modules.querySelector('[data-path-domain="'+CSS.escape(item.id)+'"]')?.focus({preventScroll:true});accordionTransition(modules.querySelector('[data-path-domain="'+CSS.escape(item.id)+'"]')?.closest('section'),previousHeight,opened===item.id);onSelect?.(item.id);};
      panel.append(createButton({label:'Travailler ce domaine',variant:'primary',disabled:!item.total,onClick:()=>onStart?.(item.id)}));
      if(opened===item.id&&item.questions?.length)panel.append(createQuestionNavigator({items:item.questions,embedded:true,
        label:'Questions · '+item.label,onSelect:questionId=>onQuestionSelect?.(questionId,item.id)}));
      else if(!item.total)panel.append(node('p','ui-course-hub__muted','Aucune question disponible pour ce domaine.'));
      wrapper.append(trigger,panel);return wrapper;
    }));
    if(!items.length)modules.append(node('p','ui-course-hub__muted','Importez une formation depuis les paramètres.'));
    pagination.replaceChildren();pagination.hidden=items.length<=5;if(items.length>5){pagination.append(createButton({label:'Précédent',disabled:!modulePage,onClick:()=>{modulePage--;update();}}),node('span','',(modulePage*size+1)+'–'+Math.min((modulePage+1)*size,items.length)+' sur '+items.length),createButton({label:'Suivant',disabled:(modulePage+1)*size>=items.length,onClick:()=>{modulePage++;update();}}));}
  }
  update(initial);return {element,update,get openedDomain(){return opened;}};
}
