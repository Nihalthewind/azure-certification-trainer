import {createBrandMark} from '../../icons/icons.js';
import {createButton} from '../../components/button/button.js';
let sequence=0;
export function createExamIntroduction({code='AZ-104',total=0,durationMinutes=0,resume=false,status='ready',error='',onStart,onBack,startButton}={}) {
  const element=document.createElement('section');element.className='ui-exam-introduction';element.setAttribute('role','dialog');element.setAttribute('aria-modal','true');element.tabIndex=-1;
  const id='exam-introduction-'+(++sequence),title=document.createElement('h2');title.id=id;title.textContent='Examen blanc '+code;element.setAttribute('aria-labelledby',id);
  const description=document.createElement('p');description.textContent=resume?'Une session est déjà en cours. Reprenez-la exactement où vous l’avez laissée.':'Une simulation chronométrée, sauvegardée à chaque réponse.';
  const configuration=document.createElement('p');configuration.className='ui-exam-introduction__configuration';configuration.textContent=total+' questions · '+durationMinutes+' minutes';
  const correction=document.createElement('p');correction.textContent='Les corrections seront disponibles à la fin.';
  const message=document.createElement('p');message.className='ui-exam-introduction__status';message.setAttribute('role',status==='error'?'alert':'status');message.textContent=status==='loading'?'Préparation de l’examen…':error;message.hidden=!message.textContent;
  const start=startButton||createButton({variant:'primary',onClick:onStart});(start.querySelector('.ui-button__label')||start).textContent=status==='loading'?'Préparation…':status==='error'?'Réessayer':resume?'Reprendre l’examen':'Démarrer l’examen';start.disabled=status==='loading'||!total;
  const back=createButton({label:'Retour',onClick:onBack});back.disabled=status==='loading';back.dataset.examBack='';
  element.setAttribute('aria-busy',String(status==='loading'));element.append(createBrandMark(),title,description,configuration,correction,message,start,back);return {element,start};
}
