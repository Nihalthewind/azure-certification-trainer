'use strict';
window.TRAINING_CATALOG = [
  {
    id:'az104',
    code:'AZ-104',
    name:'Azure Administrator',
    edition:'2026',
    tagline:'Comprendre Azure. Retenir l’essentiel.',
    description:'Toutes les questions et leurs réponses, avec les illustrations du support et une documentation Microsoft accessible pour chaque entrée.',
    questions:window.AZ104_QUESTIONS||[],
    domains:[
      ['Gérer les identités et la gouvernance Azure','Identités et gouvernance','01'],
      ['Implémenter et gérer le stockage','Stockage','02'],
      ['Déployer et gérer les ressources de calcul Azure','Calcul et applications','03'],
      ['Implémenter et gérer les réseaux virtuels','Réseaux','04'],
      ['Surveiller et maintenir les ressources Azure','Supervision et reprise','05']
    ],
    exam:{
      version:3,total:48,durationMinutes:100,allocation:[12,9,11,9,7],
      caseStudyIds:['T8-Q1','T9-Q1','T11-Q1','T11-Q2'],
      caseRelatedIds:['T8-Q1','T9-Q1','T11-Q1','T11-Q2','T8-Q2'],
      multiContext:true,
      subtitle:'100 minutes · 1 étude de cas (4 questions) · 1 question à contextes multiples'
    },
    source:{label:'guide AZ-104 de Microsoft',url:'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-104'},
    imported:false
  },
  {
    id:'az305',
    code:'AZ-305',
    name:'Azure Solutions Architect',
    edition:'2026',
    tagline:'Concevoir l’architecture. Choisir le bon service.',
    description:'Banque AZ-305 issue du PDF fourni : QCM, HOTSPOT, glisser-déposer et études de cas, en anglais original.',
    questions:window.AZ305_QUESTIONS||[],
    domains:[
      ['Concevoir des solutions d’identité, de gouvernance et de supervision','Identité · gouvernance · supervision','01'],
      ['Concevoir des solutions de stockage de données','Stockage de données','02'],
      ['Concevoir des solutions de continuité d’activité','Continuité d’activité','03'],
      ['Concevoir des solutions d’infrastructure','Infrastructure','04'],
      ['Études de cas','Études de cas','05']
    ],
    exam:{
      version:1,total:48,durationMinutes:100,allocation:[13,9,6,15,5],
      caseStudyIds:['AZ305-T8-Q1','AZ305-T8-Q2','AZ305-T8-Q3','AZ305-T8-Q4','AZ305-T8-Q5'],
      caseRelatedIds:['AZ305-T8-Q1','AZ305-T8-Q2','AZ305-T8-Q3','AZ305-T8-Q4','AZ305-T8-Q5'],
      multiContext:false,
      subtitle:'100 minutes · 48 questions · 1 étude de cas de 5 questions issue du corpus'
    },
    source:{label:'PDF AZ-305 fourni',url:''},
    imported:false
  }
];
