window.AZ305_QUESTIONS = [
  {
    "id": "AZ305-T1-Q1",
    "topic": 1,
    "number": 1,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains a custom application named Application1. Application1 was developed by an external company\n\nnamed Fabrikam,\n\nLtd. Developers at Fabrikam were assigned role-based access control (RBAC) permissions to the Application1 components. All users are licensed\n\nfor the\n\nMicrosoft 365 E5 plan.\n\nYou need to recommend a solution to verify whether the Fabrikam developers still require permissions to Application1. The solution must meet\n\nthe following requirements:\n\n✑ To the manager of the developers, send a monthly email message that lists the access permissions to Application1.\n\n✑ If the manager does not verify an access permission, automatically revoke that permission.\n\n✑ Minimize development effort.\n\nWhat should you recommend?",
    "solutionAnswer": "In Azure Active Directory (Azure AD), create an access review of Application1.",
    "explanation": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations.",
    "options": [
      "In Azure Active Directory (Azure AD), create an access review of Application1.",
      "Create an Azure Automation runbook that runs the Get-AzRoleAssignment cmdlet.",
      "In Azure Active Directory (Azure AD) Privileged Identity Management, create a custom role assignment for the Application1 resources.",
      "Create an Azure Automation runbook that runs the Get-AzureADUserAppRoleAssignment cmdlet."
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "In Azure Active Directory (Azure AD), create an access review of Application1.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 1,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations."
  },
  {
    "id": "AZ305-T1-Q2",
    "topic": 1,
    "number": 2,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription. The subscription has a blob container that contains multiple blobs.\n\nTen users in the finance department of your company plan to access the blobs during the month of April.\n\nYou need to recommend a solution to enable access to the blobs during the month of April only.\n\nWhich security solution should you include in the recommendation?",
    "solutionAnswer": "shared access signatures (SAS)",
    "explanation": "Une SAS fournit un accès limité à Azure Storage avec des permissions et une durée définies. Elle est adaptée lorsqu’il faut accorder un accès temporaire sans distribuer les clés du compte de stockage.",
    "options": [
      "shared access signatures (SAS)",
      "Conditional Access policies",
      "certificates",
      "access keys"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "shared access signatures (SAS)",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 1,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Une SAS fournit un accès limité à Azure Storage avec des permissions et une durée définies. Elle est adaptée lorsqu’il faut accorder un accès temporaire sans distribuer les clés du compte de stockage."
  },
  {
    "id": "AZ305-T1-Q3",
    "topic": 1,
    "number": 3,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.\n\nYou have an internal web app named WebApp1 that is hosted on-premises. WebApp1 uses Integrated Windows authentication.\n\nSome users work remotely and do NOT have VPN access to the on-premises network.\n\nYou need to provide the remote users with single sign-on (SSO) access to WebApp1.\n\nWhich two features should you include in the solution? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Azure AD Application Proxy; Azure AD enterprise applications",
    "explanation": "Application Proxy publie une application web interne via Microsoft Entra ID sans imposer un VPN aux utilisateurs distants. L’application d’entreprise porte ensuite la configuration d’authentification et d’accès.",
    "options": [
      "Azure AD Application Proxy",
      "Azure AD Privileged Identity Management (PIM)",
      "Conditional Access policies",
      "Azure Arc",
      "Azure AD enterprise applications",
      "Azure Application Gateway"
    ],
    "answerIndices": [
      0,
      4
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Application Proxy; Azure AD enterprise applications",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 2,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Application Proxy publie une application web interne via Microsoft Entra ID sans imposer un VPN aux utilisateurs distants. L’application d’entreprise porte ensuite la configuration d’authentification et d’accès."
  },
  {
    "id": "AZ305-T1-Q4",
    "topic": 1,
    "number": 4,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant named contoso.com that has a security group named Group1. Group1 is configured for\n\nassigned membership. Group1 has 50 members, including 20 guest users.\n\nYou need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:\n\n✑ The evaluation must be repeated automatically every three months.\n\n✑ Every member must be able to report whether they need to be in Group1.\n\n✑ Users who report that they do not need to be in Group1 must be removed from Group1 automatically.\n\n✑ Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Create an access review.",
    "explanation": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations.",
    "options": [
      "Implement Azure AD Identity Protection.",
      "Change the Membership type of Group1 to Dynamic User.",
      "Create an access review.",
      "Implement Azure AD Privileged Identity Management (PIM)."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Create an access review.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 2,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations."
  },
  {
    "id": "AZ305-T1-Q5",
    "topic": 1,
    "number": 5,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You plan to deploy Azure Databricks to support a machine learning application. Data engineers will mount an Azure Data Lake Storage account to\n\nthe Databricks file system. Permissions to folders are granted directly to the data engineers.\n\nYou need to recommend a design for the planned Databrick deployment. The solution must meet the following requirements:\n\n✑ Ensure that the data engineers can only access folders to which they have permissions.\n\n✑ Minimize development effort.\n\n✑ Minimize costs.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Premium; Credential passthrough",
    "explanation": "La correction du support retient « Premium; Credential passthrough ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Premium"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Credential passthrough"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q5-p3-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q5-p3-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/databricks/security/credential-passthrough/adls-passthrough"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Premium; Credential passthrough",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 3,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Premium - Premium Databricks SKU is required for credential passhtrough. Box 2: Credential passthrough - Athenticate automatically to Azure Data Lake Storage Gen1 (ADLS Gen1) and Azure Data Lake Storage Gen2 (ADLS Gen2) from Azure Databricks clusters using the same Azure Active Directory (Azure AD) identity that you use to log into Azure Databricks. When you enable Azure Data Lake Storage credential passthrough for your cluster, commands that you run on that cluster can read and write data in Azure Data Lake Storage without requiring you to configure service principal credentials for access to storage.",
    "pedagogicalContext": "La correction du support retient « Premium; Credential passthrough ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q6",
    "topic": 1,
    "number": 6,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You plan to deploy an Azure web app named App1 that will use Azure Active Directory (Azure AD) authentication.\n\nApp1 will be accessed from the internet by the users at your company. All the users have computers that run Windows 10 and are joined to Azure\n\nAD.\n\nYou need to recommend a solution to ensure that the users can connect to App1 without being prompted for authentication and can access App1\n\nonly from company-owned computers.\n\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "An Azure AD app registration; A conditional access policy",
    "explanation": "Conditional Access applique des règles d’accès en fonction de signaux comme l’identité, l’appareil, l’emplacement ou le niveau de risque. Dans un scénario d’architecture, il faut l’associer aux exigences d’accès conditionnel plutôt qu’à l’hébergement de l’application.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "An Azure AD app registration"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "A conditional access policy"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q6-p5-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q6-p5-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://codingcanvas.com/using-azure-active-directory-authentication-in-your-web-application/"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "An Azure AD app registration; A conditional access policy",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 5,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: An Azure AD app registration Azure active directory (AD) provides cloud based directory and identity management services.You can use azure AD to manage users of your application and authenticate access to your applications using azure active directory. You register your application with Azure active directory tenant. Box 2: A conditional access policy Conditional Access policies at their simplest are if-then statements, if a user wants to access a resource, then they must complete an action. By using Conditional Access policies, you can apply the right access controls when needed to keep your organization secure and stay out of your user's way when not needed.",
    "pedagogicalContext": "Conditional Access applique des règles d’accès en fonction de signaux comme l’identité, l’appareil, l’emplacement ou le niveau de risque. Dans un scénario d’architecture, il faut l’associer aux exigences d’accès conditionnel plutôt qu’à l’hébergement de l’application."
  },
  {
    "id": "AZ305-T1-Q7",
    "topic": 1,
    "number": 7,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure\n\nconnectivity.\n\nSeveral virtual machines exhibit network connectivity issues.\n\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\n\nSolution: Use Azure Traffic Analytics in Azure Network Watcher to analyze the network traffic.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« Use Azure Traffic Analytics in Azure Network Watcher to analyze the network traffic. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 6,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« Use Azure Traffic Analytics in Azure Network Watcher to analyze the network traffic. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T1-Q8",
    "topic": 1,
    "number": 8,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure\n\nconnectivity.\n\nSeveral virtual machines exhibit network connectivity issues.\n\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\n\nSolution: Use Azure Advisor to analyze the network traffic.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« Use Azure Advisor to analyze the network traffic. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 6,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« Use Azure Advisor to analyze the network traffic. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T1-Q9",
    "topic": 1,
    "number": 9,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure\n\nconnectivity.\n\nSeveral virtual machines exhibit network connectivity issues.\n\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\n\nSolution: Use Azure Network Watcher to run IP flow verify to analyze the network traffic.\n\nDoes this meet the goal?",
    "solutionAnswer": "Yes",
    "explanation": "Le point clé est de vérifier si la solution proposée (« Use Azure Network Watcher to run IP flow verify to analyze the network traffic. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Yes",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 7,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« Use Azure Network Watcher to run IP flow verify to analyze the network traffic. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T1-Q10",
    "topic": 1,
    "number": 10,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription. The subscription contains Azure virtual machines that run Windows Server 2016 and Linux.\n\nYou need to use Azure Monitor to design an alerting strategy for security-related events.\n\nWhich Azure Monitor Logs tables should you query? To answer, drag the appropriate tables to the correct log types. Each table may be used once,\n\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q10-p8-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q10-p8-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-sources-windows-events"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 8,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q11",
    "topic": 1,
    "number": 11,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You are designing a large Azure environment that will contain many subscriptions.\n\nYou plan to use Azure Policy as part of a governance solution.\n\nTo which three scopes can you assign Azure Policy definitions? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "subscriptions; resource groups; management groups",
    "explanation": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante.",
    "options": [
      "Azure Active Directory (Azure AD) administrative units",
      "Azure Active Directory (Azure AD) tenants",
      "subscriptions",
      "compute resources",
      "resource groups",
      "management groups"
    ],
    "answerIndices": [
      2,
      4,
      5
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "subscriptions; resource groups; management groups",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 9,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante."
  },
  {
    "id": "AZ305-T1-Q12",
    "topic": 1,
    "number": 12,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your on-premises network contains a server named Server1 that runs an ASP.NET application named App1.\n\nYou have a hybrid deployment of Azure Active Directory (Azure AD).\n\nYou need to recommend a solution to ensure that users sign in by using their Azure AD account and Azure Multi-Factor Authentication (MFA) when\n\nthey connect to App1 from the internet.\n\nWhich three features should you recommend be deployed and configured in sequence? To answer, move the appropriate features from the list of\n\nfeatures to the answer area and arrange them in the correct order.\n\nSelect and Place:",
    "solutionAnswer": "Azure AD Application Proxy; an Azure AD enterprise application",
    "explanation": "Application Proxy publie une application web interne via Microsoft Entra ID sans imposer un VPN aux utilisateurs distants. L’application d’entreprise porte ensuite la configuration d’authentification et d’accès.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Étape 1",
          "choices": [],
          "expected": "Azure AD Application Proxy"
        },
        {
          "label": "Étape 2",
          "choices": [],
          "expected": "an Azure AD enterprise application"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q12-p10-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q12-p10-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/app-proxy/application-proxy-add-on-premises-application"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Application Proxy; an Azure AD enterprise application",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 10,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Step 1: Azure AD Application Proxy Start by enabling communication to Azure data centers to prepare your environment for Azure AD Application Proxy. Step 2: an Azure AD enterprise application Add an on-premises app to Azure AD. Now that you've prepared your environment and installed a connector, you're ready to add on-premises applications to Azure AD. 1. Sign in as an administrator in the Azure portal. 2. In the left navigation panel, select Azure Active Directory. 3. Select Enterprise applications, and then select New application. 4. Etc.",
    "pedagogicalContext": "Application Proxy publie une application web interne via Microsoft Entra ID sans imposer un VPN aux utilisateurs distants. L’application d’entreprise porte ensuite la configuration d’authentification et d’accès."
  },
  {
    "id": "AZ305-T1-Q13",
    "topic": 1,
    "number": 13,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Activity Log",
    "explanation": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement.",
    "options": [
      "Azure Activity Log",
      "Azure Advisor",
      "Azure Analysis Services",
      "Azure Monitor action groups"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Activity Log",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 11,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement."
  },
  {
    "id": "AZ305-T1-Q14",
    "topic": 1,
    "number": 14,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company deploys several virtual machines on-premises and to Azure. ExpressRoute is deployed and configured for on-premises to Azure\n\nconnectivity.\n\nSeveral virtual machines exhibit network connectivity issues.\n\nYou need to analyze the network traffic to identify whether packets are being allowed or denied to the virtual machines.\n\nSolution: Install and configure the Azure Monitoring agent and the Dependency Agent on all the virtual machines. Use VM insights in Azure\n\nMonitor to analyze the network traffic.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« Install and configure the Azure Monitoring agent and the Dependency Agent on all the virtual machines. Use VM insights in Azure ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 11,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« Install and configure the Azure Monitoring agent and the Dependency Agent on all the virtual machines. Use VM insights in Azure ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T1-Q15",
    "topic": 1,
    "number": 15,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to design an architecture to capture the creation of users and the assignment of roles. The captured data must be stored in Azure\n\nCosmos DB.\n\nWhich services should you include in the design? To answer, drag the appropriate services to the correct targets. Each service may be used once,\n\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "Azure Event Hubs; Azure Function",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure Event Hubs"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure Function"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q15-p12-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q15-p13-1-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/reports-monitoring/concept-activity-logs-azure-monitor"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Event Hubs; Azure Function",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 12,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure Event Hubs - You can route Azure Active Directory (Azure AD) activity logs to several endpoints for long term retention and data insights. The Event Hub is used for streaming. Box 2: Azure Function - Use an Azure Function along with a cosmos DB change feed, and store the data in Cosmos DB.",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T1-Q16",
    "topic": 1,
    "number": 16,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company, named Contoso, Ltd., implements several Azure logic apps that have HTTP triggers. The logic apps provide access to an on-\n\npremises web service.\n\nContoso establishes a partnership with another company named Fabrikam, Inc.\n\nFabrikam does not have an existing Azure Active Directory (Azure AD) tenant and uses third-party OAuth 2.0 identity management to authenticate\n\nits users.\n\nDevelopers at Fabrikam plan to use a subset of the logic apps to build applications that will integrate with the on-premises web service of\n\nContoso.\n\nYou need to design a solution to provide the Fabrikam developers with access to the logic apps. The solution must meet the following\n\nrequirements:\n\n✑ Requests to the logic apps from the developers must be limited to lower rates than the requests from the users at Contoso.\n\n✑ The developers must be able to rely on their existing OAuth 2.0 provider to gain access to the logic apps.\n\n✑ The solution must NOT require changes to the logic apps.\n\n✑ The solution must NOT use Azure AD guest accounts.\n\nWhat should you include in the solution?",
    "solutionAnswer": "Azure API Management",
    "explanation": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend.",
    "options": [
      "Azure Front Door",
      "Azure AD Application Proxy",
      "Azure AD business-to-business (B2B)",
      "Azure API Management"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure API Management",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 14,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend."
  },
  {
    "id": "AZ305-T1-Q17",
    "topic": 1,
    "number": 17,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains 300 virtual machines that run Windows Server 2019.\n\nYou need to centrally monitor all warning events in the System logs of the virtual machines.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "A Log Analytics workspace; Install the Azure Monitor agent",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "A Log Analytics workspace"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Install the Azure Monitor agent"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q17-p15-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q17-p15-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/resource-logs"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "A Log Analytics workspace; Install the Azure Monitor agent",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 15,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: A Log Analytics workspace Send resource logs to a Log Analytics workspace to enable the features of Azure Monitor Logs. You must create a diagnostic setting for each Azure resource to send its resource logs to a Log Analytics workspace to use with Azure Monitor Logs. Box 2: Install the Azure Monitor agent Use the Azure Monitor agent if you need to: Collect guest logs and metrics from any machine in Azure, in other clouds, or on-premises. Manage data collection configuration centrally",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T1-Q18",
    "topic": 1,
    "number": 18,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have several Azure App Service web apps that use Azure Key Vault to store data encryption keys.\n\nSeveral departments have the following requests to support the web app:\n\nWhich service should you recommend for each department's request? To answer, configure the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure AD Privileged Identity Management; Azure Managed Identity; Azure AD Privileged Identity Management",
    "explanation": "PIM permet de limiter dans le temps et de contrôler l’activation des rôles privilégiés. C’est pertinent lorsque le besoin porte sur du juste-à-temps, de l’approbation ou une réduction de l’exposition permanente des privilèges.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure AD Privileged Identity Management"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure Managed Identity"
        },
        {
          "label": "Sélection 3",
          "choices": [],
          "expected": "Azure AD Privileged Identity Management"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q18-p16-1-q.png",
      "assets/az305/AZ305-T1-Q18-p16-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q18-p16-3-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/privileged-identity-management/pim-configure"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Privileged Identity Management; Azure Managed Identity; Azure AD Privileged Identity Management",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 16,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure AD Privileged Identity Management Privileged Identity Management provides time-based and approval-based role activation to mitigate the risks of excessive, unnecessary, or misused access permissions on resources that you care about. Here are some of the key features of Privileged Identity Management: Provide just-in-time privileged access to Azure AD and Azure resources Assign time-bound access to resources using start and end dates Require approval to activate privileged roles Enforce multi-factor authentication to activate any role Use justification to understand why users activate Get notifications when privileged roles are activated Conduct access reviews to ensure users still need roles Download audit history for internal or external audit Prevents removal of the last active Global Administrator role assignment Box 2: Azure Managed Identity - Managed identities provide an identity for applications to use when connecting to resources that support Azure Active Directory (Azure AD) authentication. Applications may use the managed identity to obtain Azure AD tokens. With Azure Key Vault, developers can use managed identities to access resources. Key Vault stores credentials in a secure manner and gives access to storage accounts. Box 3: Azure AD Privileged Identity Management Privileged Identity Management provides time-based and approval-based role activation to mitigate the risks of excessive, unnecessary, or misused access permissions on resources that you care about. Here are some of the key features of Privileged Identity Management: Provide just-in-time privileged access to Azure AD and Azure resources Assign time-bound access to resources using start and end dates",
    "pedagogicalContext": "PIM permet de limiter dans le temps et de contrôler l’activation des rôles privilégiés. C’est pertinent lorsque le besoin porte sur du juste-à-temps, de l’approbation ou une réduction de l’exposition permanente des privilèges."
  },
  {
    "id": "AZ305-T1-Q19",
    "topic": 1,
    "number": 19,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nYou plan to deploy a custom application to each subscription. The application will contain the following:\n\n✑ A resource group\n\n✑ An Azure web app\n\n✑ Custom role assignments\n\n✑ An Azure Cosmos DB account\n\nYou need to use Azure Blueprints to deploy the application to each subscription.\n\nWhat is the minimum number of objects required to deploy the application? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q19-p18-1-q.png",
      "assets/az305/AZ305-T1-Q19-p18-2-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q19-p19-1-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 18,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q20",
    "topic": 1,
    "number": 20,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to design an Azure policy that will implement the following functionality:\n\n✑ For new resources, assign tags and values that match the tags and values of the resource group to which the resources are deployed.\n\n✑ For existing resources, identify whether the tags and values match the tags and values of the resource group that contains the resources.\n\n✑ For any non-compliant resources, trigger auto-generated remediation tasks to create missing tags and values.\n\nThe solution must use the principle of least privilege.\n\nWhat should you include in the design? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Modify; A managed identity with the Contributor role",
    "explanation": "Une identité managée permet à une ressource Azure de s’authentifier auprès d’autres services sans stocker de secret dans le code ou sur la machine. Une identité attribuée par l’utilisateur est réutilisable par plusieurs ressources, tandis qu’une identité système suit le cycle de vie d’une ressource.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Modify"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "A managed identity with the Contributor role"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q20-p20-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q20-p20-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/governance/policy/concepts/effects"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Modify; A managed identity with the Contributor role",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 20,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Modify - Modify is used to add, update, or remove properties or tags on a subscription or resource during creation or update. A common example is updating tags on resources such as costCenter. Existing non-compliant resources can be remediated with a remediation task. A single Modify rule can have any number of operations. Policy assignments with effect set as Modify require a managed identity to do remediation. Incorrect: * The following effects are deprecated: EnforceOPAConstraint EnforceRegoPolicy * Append is used to add additional fields to the requested resource during creation or update. A common example is specifying allowed IPs for a storage resource. Append is intended for use with non-tag properties. While Append can add tags to a resource during a create or update request, it's recommended to use the Modify effect for tags instead. Box 2: A managed identity with the Contributor role The managed identity needs to be granted the appropriate roles required for remediating resources to grant the managed identity. Contributor - Can create and manage all types of Azure resources but can't grant access to others. Incorrect: User Access Administrator: lets you manage user access to Azure resources.",
    "pedagogicalContext": "Une identité managée permet à une ressource Azure de s’authentifier auprès d’autres services sans stocker de secret dans le code ou sur la machine. Une identité attribuée par l’utilisateur est réutilisable par plusieurs ressources, tandis qu’une identité système suit le cycle de vie d’une ressource."
  },
  {
    "id": "AZ305-T1-Q21",
    "topic": 1,
    "number": 21,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains the resources shown in the following table.\n\nYou create an Azure SQL database named DB1 that is hosted in the East US Azure region.\n\nTo DB1, you add a diagnostic setting named Settings1. Settings1 archive SQLInsights to storage1 and sends SQLInsights to Workspace1.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nHot Area:",
    "solutionAnswer": "Yes; Yes; Yes",
    "explanation": "La correction du support retient « Yes; Yes; Yes ». Dans l’énoncé, le point à résoudre est : « For each of the following statements, select Yes if the statement is true. Otherwise, select No. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "yn",
      "labels": [
        "Proposition 1",
        "Proposition 2",
        "Proposition 3"
      ],
      "expected": [
        true,
        true,
        true
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q21-p21-1-q.png",
      "assets/az305/AZ305-T1-Q21-p21-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q21-p21-3-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Yes; Yes; Yes",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 21,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Yes - A single diagnostic setting can define no more than one of each of the destinations. If you want to send data to more than one of a particular destination type (for example, two different Log Analytics workspaces), then create multiple settings. Each resource can have up to 5 diagnostic settings. Note: This diagnostic telemetry can be streamed to one of the following Azure resources for analysis. * Log Analytics workspace * Azure Event Hubs * Azure Storage Box 2: Yes - Box 3: Yes -",
    "pedagogicalContext": "La correction du support retient « Yes; Yes; Yes ». Dans l’énoncé, le point à résoudre est : « For each of the following statements, select Yes if the statement is true. Otherwise, select No. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q22",
    "topic": 1,
    "number": 22,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You plan to deploy an Azure SQL database that will store Personally Identifiable Information (PII).\n\nYou need to ensure that only privileged users can view the PII.\n\nWhat should you include in the solution?",
    "solutionAnswer": "dynamic data masking",
    "explanation": "La correction du support retient « dynamic data masking ». Dans l’énoncé, le point à résoudre est : « What should you include in the solution? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "dynamic data masking",
      "role-based access control (RBAC)",
      "Data Discovery & Classification",
      "Transparent Data Encryption (TDE)"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "dynamic data masking",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 22,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « dynamic data masking ». Dans l’énoncé, le point à résoudre est : « What should you include in the solution? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q23",
    "topic": 1,
    "number": 23,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You plan to deploy an app that will use an Azure Storage account.\n\nYou need to deploy the storage account. The storage account must meet the following requirements:\n\n✑ Store the data for multiple users.\n\n✑ Encrypt each user's data by using a separate key.\n\n✑ Encrypt all the data in the storage account by using customer-managed keys.\n\nWhat should you deploy?",
    "solutionAnswer": "blobs in a general purpose v2 storage account",
    "explanation": "La correction du support retient « blobs in a general purpose v2 storage account ». Dans l’énoncé, le point à résoudre est : « What should you deploy? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "files in a premium file share storage account",
      "blobs in a general purpose v2 storage account",
      "blobs in an Azure Data Lake Storage Gen2 account",
      "files in a general purpose v2 storage account"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "blobs in a general purpose v2 storage account",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 22,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « blobs in a general purpose v2 storage account ». Dans l’énoncé, le point à résoudre est : « What should you deploy? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q24",
    "topic": 1,
    "number": 24,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure App Service web app that uses a system-assigned managed identity.\n\nYou need to recommend a solution to store the settings of the web app as secrets in an Azure key vault. The solution must meet the following\n\nrequirements:\n\n✑ Minimize changes to the app code.\n\n✑ Use the principle of least privilege.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Key Vault references in Application settings; Secrets: Get",
    "explanation": "Une identité managée permet à une ressource Azure de s’authentifier auprès d’autres services sans stocker de secret dans le code ou sur la machine. Une identité attribuée par l’utilisateur est réutilisable par plusieurs ressources, tandis qu’une identité système suit le cycle de vie d’une ressource.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Key Vault references in Application settings"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Secrets: Get"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q24-p23-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q24-p23-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/app-service/app-service-key-vault-references"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/app-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Key Vault references in Application settings; Secrets: Get",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 23,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Key Vault references in Application settings Source Application Settings from Key Vault. Key Vault references can be used as values for Application Settings, allowing you to keep secrets in Key Vault instead of the site config. Application Settings are securely encrypted at rest, but if you need secret management capabilities, they should go into Key Vault. To use a Key Vault reference for an app setting, set the reference as the value of the setting. Your app can reference the secret through its key as normal. No code changes are required. Box 2: Secrets: Get - In order to read secrets from Key Vault, you need to have a vault created and give your app permission to access it. 1. Create a key vault by following the Key Vault quickstart. 2. Create a managed identity for your application. 3. Key Vault references will use the app's system assigned identity by default, but you can specify a user-assigned identity. 4. Create an access policy in Key Vault for the application identity you created earlier. Enable the \"Get\" secret permission on this policy.",
    "pedagogicalContext": "Une identité managée permet à une ressource Azure de s’authentifier auprès d’autres services sans stocker de secret dans le code ou sur la machine. Une identité attribuée par l’utilisateur est réutilisable par plusieurs ressources, tandis qu’une identité système suit le cycle de vie d’une ressource."
  },
  {
    "id": "AZ305-T1-Q25",
    "topic": 1,
    "number": 25,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You plan to deploy an application named App1 that will run on five Azure virtual machines. Additional virtual machines will be deployed later to run\n\nApp1.\n\nYou need to recommend a solution to meet the following requirements for the virtual machines that will run App1:\n\n✑ Ensure that the virtual machines can authenticate to Azure Active Directory (Azure AD) to gain access to an Azure key vault, Azure Logic Apps\n\ninstances, and an Azure SQL database.\n\n✑ Avoid assigning new roles and permissions for Azure services when you deploy additional virtual machines.\n\n✑ Avoid storing secrets and certificates on the virtual machines.\n\n✑ Minimize administrative effort for managing identities.\n\nWhich type of identity should you include in the recommendation?",
    "solutionAnswer": "a user-assigned managed identity",
    "explanation": "Une identité managée permet à une ressource Azure de s’authentifier auprès d’autres services sans stocker de secret dans le code ou sur la machine. Une identité attribuée par l’utilisateur est réutilisable par plusieurs ressources, tandis qu’une identité système suit le cycle de vie d’une ressource.",
    "options": [
      "a system-assigned managed identity",
      "a service principal that is configured to use a certificate",
      "a service principal that is configured to use a client secret",
      "a user-assigned managed identity"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "a user-assigned managed identity",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 24,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Une identité managée permet à une ressource Azure de s’authentifier auprès d’autres services sans stocker de secret dans le code ou sur la machine. Une identité attribuée par l’utilisateur est réutilisable par plusieurs ressources, tandis qu’une identité système suit le cycle de vie d’une ressource."
  },
  {
    "id": "AZ305-T1-Q26",
    "topic": 1,
    "number": 26,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have the resources shown in the following table:\n\nCDB1 hosts a container that stores continuously updated operational data.\n\nYou are designing a solution that will use AS1 to analyze the operational data daily.\n\nYou need to recommend a solution to analyze the data without affecting the performance of the operational data store.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Synapse Link for Azure Cosmos DB",
    "explanation": "Synapse Link permet d’analyser les données opérationnelles de Cosmos DB sans déplacer les données par un ETL classique et en limitant l’impact sur la charge transactionnelle.",
    "options": [
      "Azure Cosmos DB change feed",
      "Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors",
      "Azure Synapse Link for Azure Cosmos DB",
      "Azure Synapse Analytics with PolyBase data loading"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q26-p24-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Synapse Link for Azure Cosmos DB",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 24,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Synapse Link permet d’analyser les données opérationnelles de Cosmos DB sans déplacer les données par un ETL classique et en limitant l’impact sur la charge transactionnelle."
  },
  {
    "id": "AZ305-T1-Q27",
    "topic": 1,
    "number": 27,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You deploy several Azure SQL Database instances.\n\nYou plan to configure the Diagnostics settings on the databases as shown in the following exhibit.\n\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "90 days; 730 days",
    "explanation": "La correction du support retient « 90 days; 730 days ». Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "90 days"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "730 days"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q27-p25-1-q.jpeg",
      "assets/az305/AZ305-T1-Q27-p25-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q27-p26-1-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-monitor/app/data-retention-privacy"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "90 days; 730 days",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 25,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: 90 days - As per exhibit. Box 2: 730 days - How long is the data kept? Raw data points (that is, items that you can query in Analytics and inspect in Search) are kept for up to 730 days.",
    "pedagogicalContext": "La correction du support retient « 90 days; 730 days ». Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q28",
    "topic": 1,
    "number": 28,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an application that is used by 6,000 users to validate their vacation requests. The application manages its own credential store.\n\nUsers must enter a username and password to access the application. The application does NOT support identity providers.\n\nYou plan to upgrade the application to use single sign-on (SSO) authentication by using an Azure Active Directory (Azure AD) application\n\nregistration.\n\nWhich SSO method should you use?",
    "solutionAnswer": "password-based",
    "explanation": "La correction du support retient « password-based ». Dans l’énoncé, le point à résoudre est : « Which SSO method should you use? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "header-based",
      "SAML",
      "password-based",
      "OpenID Connect"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "password-based",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 26,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « password-based ». Dans l’énoncé, le point à résoudre est : « Which SSO method should you use? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q29",
    "topic": 1,
    "number": 29,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains a virtual network named VNET1 and 10 virtual machines. The virtual machines are connected to\n\nVNET1.\n\nYou need to design a solution to manage the virtual machines from the internet. The solution must meet the following requirements:\n\n✑ Incoming connections to the virtual machines must be authenticated by using Azure Multi-Factor Authentication (MFA) before network\n\nconnectivity is allowed.\n\n✑ Incoming connections must use TLS and connect to TCP port 443.\n\n✑ The solution must support RDP and SSH.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q29-p27-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q29-p27-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 27,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q30",
    "topic": 1,
    "number": 30,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You are designing an Azure governance solution.\n\nAll Azure resources must be easily identifiable based on the following operational information: environment, owner, department and cost center.\n\nYou need to ensure that you can use the operational information when you generate reports for the Azure resources.\n\nWhat should you include in the solution?",
    "solutionAnswer": "an Azure policy that enforces tagging rules",
    "explanation": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante.",
    "options": [
      "an Azure data catalog that uses the Azure REST API as a data source",
      "an Azure management group that uses parent groups to create a hierarchy",
      "an Azure policy that enforces tagging rules",
      "Azure Active Directory (Azure AD) administrative units"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Azure policy that enforces tagging rules",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 28,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante."
  },
  {
    "id": "AZ305-T1-Q31",
    "topic": 1,
    "number": 31,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "A company named Contoso, Ltd. has an Azure Active Directory (Azure AD) tenant that is integrated with Microsoft 365 and an Azure subscription.\n\nContoso has an on-premises identity infrastructure. The infrastructure includes servers that run Active Directory Domain Services (AD DS) and\n\nAzure AD Connect.\n\nContoso has a partnership with a company named Fabrikam. Inc. Fabrikam has an Active Directory forest and a Microsoft 365 tenant. Fabrikam\n\nhas the same on- premises identity infrastructure components as Contoso.\n\nA team of 10 developers from Fabrikam will work on an Azure solution that will be hosted in the Azure subscription of Contoso. The developers\n\nmust be added to the Contributor role for a resource group in the Contoso subscription.\n\nYou need to recommend a solution to ensure that Contoso can assign the role to the 10 Fabrikam developers. The solution must ensure that the\n\nFabrikam developers use their existing credentials to access resources\n\nWhat should you recommend?",
    "solutionAnswer": "In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers.",
    "explanation": "La correction du support retient « In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "In the Azure AD tenant of Contoso. create cloud-only user accounts for the Fabrikam developers.",
      "Configure a forest trust between the on-premises Active Directory forests of Contoso and Fabrikam.",
      "Configure an organization relationship between the Microsoft 365 tenants of Fabrikam and Contoso.",
      "In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers."
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 28,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « In the Azure AD tenant of Contoso, create guest accounts for the Fabnkam developers. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q32",
    "topic": 1,
    "number": 32,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Use Azure AD entitlement management to govern external users.",
    "explanation": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure the Azure AD provisioning service.",
      "Enable Azure AD pass-through authentication and update the sign-in endpoint.",
      "Use Azure AD entitlement management to govern external users.",
      "Configure Azure AD join."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q32-p29-1-q.jpeg"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Use Azure AD entitlement management to govern external users.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 29,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q33",
    "topic": 1,
    "number": 33,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has 20 web APIs that were developed in-house.\n\nThe company is developing 10 web apps that will use the web APIs. The web apps and the APIs are registered in the company s Azure Active\n\nDirectory (Azure\n\nAD) tenant. The web APIs are published by using Azure API Management.\n\nYou need to recommend a solution to block unauthorized requests originating from the web apps from reaching the web APIs. The solution must\n\nmeet the following requirements:\n\n✑ Use Azure AD-generated claims.\n\nMinimize configuration and management effort.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure AD; Azure API Management",
    "explanation": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure AD"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure API Management"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T1-Q33-p30-2-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q33-p30-3-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/api-management/api-management-howto-protect-backend-with-aad"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD; Azure API Management",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 30,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure AD - Grant permissions in Azure AD. Box 2: Azure API Management - Configure a JWT validation policy to pre-authorize requests. Pre-authorize requests in API Management with the Validate JWT policy, by validating the access tokens of each incoming request. If a request does not have a valid token, API Management blocks it.",
    "pedagogicalContext": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend."
  },
  {
    "id": "AZ305-T1-Q34",
    "topic": 1,
    "number": 34,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Azure Log Analytics",
      "Azure Arc",
      "Azure Analysis Services",
      "Application Insights"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 31,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T1-Q35",
    "topic": 1,
    "number": 35,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Use Azure AD entitlement management to govern external users.",
    "explanation": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure the Azure AD provisioning service.",
      "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).",
      "Use Azure AD entitlement management to govern external users.",
      "Configure Azure AD Identity Protection."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q35-p31-1-q.jpeg"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Use Azure AD entitlement management to govern external users.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 31,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q36",
    "topic": 1,
    "number": 36,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You are developing an app that will read activity logs for an Azure subscription by using Azure Functions.\n\nYou need to recommend an authentication solution for Azure Functions. The solution must minimize administrative effort.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "system-assigned managed identities",
    "explanation": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement.",
    "options": [
      "an enterprise application in Azure AD",
      "system-assigned managed identities",
      "shared access signatures (SAS)",
      "application registration in Azure AD"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "system-assigned managed identities",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 32,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement."
  },
  {
    "id": "AZ305-T1-Q37",
    "topic": 1,
    "number": 37,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Use Azure AD entitlement management to govern external users.",
    "explanation": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure Azure AD join.",
      "Use Azure AD entitlement management to govern external users.",
      "Enable Azure AD pass-through authentication and update the sign-in endpoint.",
      "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q37-p32-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Use Azure AD entitlement management to govern external users.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 32,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q38",
    "topic": 1,
    "number": 38,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Use Azure AD entitlement management to govern external users.",
    "explanation": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure Azure AD join.",
      "Configure Azure AD Identity Protection.",
      "Use Azure AD entitlement management to govern external users.",
      "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q38-p33-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Use Azure AD entitlement management to govern external users.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 33,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q39",
    "topic": 1,
    "number": 39,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Activity Log",
    "explanation": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement.",
    "options": [
      "Azure Activity Log",
      "Azure Arc",
      "Azure Analysis Services",
      "Azure Monitor metrics"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Activity Log",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 33,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement."
  },
  {
    "id": "AZ305-T1-Q40",
    "topic": 1,
    "number": 40,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains an Azure key vault named KV1 and a virtual machine named VM1. VM1 runs Windows Server 2022:\n\nAzure Edition.\n\nYou plan to deploy an ASP.Net Core-based application named App1 to VM1.\n\nYou need to configure App1 to use a system-assigned managed identity to retrieve secrets from KV1. The solution must minimize development\n\neffort.\n\nWhat should you do? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q40-p34-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q40-p34-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 34,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q41",
    "topic": 1,
    "number": 41,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Configure Supported account types in the application registration and update the sign-in endpoint.",
    "explanation": "La correction du support retient « Configure Supported account types in the application registration and update the sign-in endpoint. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure Azure AD join.",
      "Configure Azure AD Identity Protection.",
      "Configure a Conditional Access policy.",
      "Configure Supported account types in the application registration and update the sign-in endpoint."
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q41-p35-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Configure Supported account types in the application registration and update the sign-in endpoint.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 35,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Configure Supported account types in the application registration and update the sign-in endpoint. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q42",
    "topic": 1,
    "number": 42,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure AD tenant named contoso.com that has a security group named Group1. Group1 is configured for assigned memberships.\n\nGroup1 has 50 members, including 20 guest users.\n\nYou need to recommend a solution for evaluating the membership of Group1. The solution must meet the following requirements:\n\n• The evaluation must be repeated automatically every three months.\n\n• Every member must be able to report whether they need to be in Group1.\n\n• Users who report that they do not need to be in Group1 must be removed from Group1 automatically.\n\n• Users who do not report whether they need to be in Group1 must be removed from Group1 automatically.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Create an access review.",
    "explanation": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations.",
    "options": [
      "Implement Azure AD Identity Protection.",
      "Change the Membership type of Group1 to Dynamic User.",
      "Create an access review.",
      "Implement Azure AD Privileged Identity Management (PIM)."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Create an access review.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 35,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations."
  },
  {
    "id": "AZ305-T1-Q43",
    "topic": 1,
    "number": 43,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription named Sub1 that is linked to an Azure AD tenant named contoso.com.\n\nYou plan to implement two ASP.NET Core apps named App1 and App2 that will be deployed to 100 virtual machines in Sub1. Users will sign in to\n\nApp1 and App2 by using their contoso.com credentials.\n\nApp1 requires read permissions to access the calendar of the signed-in user. App2 requires write permissions to access the calendar of the\n\nsigned-in user.\n\nYou need to recommend an authentication and authorization solution for the apps. The solution must meet the following requirements:\n\n• Use the principle of least privilege.\n\n• Minimize administrative effort.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q43-p36-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q43-p36-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 36,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q44",
    "topic": 1,
    "number": 44,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Use Azure AD entitlement management to govern external users.",
    "explanation": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Enable Azure AD pass-through authentication and update the sign-in endpoint.",
      "Use Azure AD entitlement management to govern external users.",
      "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).",
      "Configure Azure AD Identity Protection."
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q44-p37-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Use Azure AD entitlement management to govern external users.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 37,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q45",
    "topic": 1,
    "number": 45,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Configure Supported account types in the application registration and update the sign-in endpoint.",
    "explanation": "La correction du support retient « Configure Supported account types in the application registration and update the sign-in endpoint. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure the Azure AD provisioning service.",
      "Enable Azure AD pass-through authentication and update the sign-in endpoint.",
      "Configure Supported account types in the application registration and update the sign-in endpoint.",
      "Configure Azure AD join."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q45-p37-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Configure Supported account types in the application registration and update the sign-in endpoint.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 37,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Configure Supported account types in the application registration and update the sign-in endpoint. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q46",
    "topic": 1,
    "number": 46,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure AD tenant that contains a management group named MG1.\n\nYou have the Azure subscriptions shown in the following table.\n\nThe subscriptions contain the resource groups shown in the following table.\n\nThe subscription contains the Azure AD security groups shown in the following table.\n\nThe subscription contains the user accounts shown in the following table.\n\nYou perform the following actions:\n\nAssign User3 the Contributor role for Sub1.\n\nAssign Group1 the Virtual Machine Contributor role for MG1.\n\nAssign Group3 the Contributor role for the Tenant Root Group.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q46-p38-1-q.png",
      "assets/az305/AZ305-T1-Q46-p38-2-q.png",
      "assets/az305/AZ305-T1-Q46-p38-3-q.png",
      "assets/az305/AZ305-T1-Q46-p38-4-q.png",
      "assets/az305/AZ305-T1-Q46-p38-5-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q46-p39-1-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 38,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q47",
    "topic": 1,
    "number": 47,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Configure Supported account types in the application registration and update the sign-in endpoint.",
    "explanation": "La correction du support retient « Configure Supported account types in the application registration and update the sign-in endpoint. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure Azure AD Identity Protection.",
      "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM).",
      "Configure Supported account types in the application registration and update the sign-in endpoint.",
      "Configure a Conditional Access policy."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q47-p39-2-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Configure Supported account types in the application registration and update the sign-in endpoint.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 39,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Configure Supported account types in the application registration and update the sign-in endpoint. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q48",
    "topic": 1,
    "number": 48,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Use Azure AD entitlement management to govern external users.",
    "explanation": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Use Azure AD entitlement management to govern external users.",
      "Enable Azure AD pass-through authentication and update the sign-in endpoint.",
      "Configure a Conditional Access policy.",
      "Configure assignments for the fabrikam.com users by using Azure AD Privileged Identity Management (PIM)."
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T1-Q48-p40-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Use Azure AD entitlement management to govern external users.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 40,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q49",
    "topic": 1,
    "number": 49,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains 1,000 resources.\n\nYou need to generate compliance reports for the subscription. The solution must ensure that the resources can be grouped by department.\n\nWhat should you use to organize the resources?",
    "solutionAnswer": "Azure Policy and tags",
    "explanation": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante.",
    "options": [
      "application groups and quotas",
      "Azure Policy and tags",
      "administrative units and Azure Lighthouse",
      "resource groups and role assignments"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Policy and tags",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 40,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante."
  },
  {
    "id": "AZ305-T1-Q50",
    "topic": 1,
    "number": 50,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Azure Arc",
      "Azure Monitor metrics",
      "Azure Advisor",
      "Azure Log Analytics"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 41,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T1-Q51",
    "topic": 1,
    "number": 51,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Activity Log",
    "explanation": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement.",
    "options": [
      "Azure Monitor action groups",
      "Azure Arc",
      "Azure Monitor metrics",
      "Azure Activity Log"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Activity Log",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 41,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement."
  },
  {
    "id": "AZ305-T1-Q52",
    "topic": 1,
    "number": 52,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure AD tenant that contains an administrative unit named MarketingAU. MarketingAU contains 100 users.\n\nYou create two users named User1 and User2.\n\nYou need to ensure that the users can perform the following actions in MarketingAU:\n\n• User1 must be able to create user accounts.\n\n• User2 must be able to reset user passwords.\n\nWhich role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than\n\nonce, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q52-p42-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q52-p42-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 42,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q53",
    "topic": 1,
    "number": 53,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Azure Arc",
      "Azure Log Analytics",
      "Application insights",
      "Azure Monitor action groups"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 42,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T1-Q54",
    "topic": 1,
    "number": 54,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You are designing an app that will be hosted on Azure virtual machines that run Ubuntu. The app will use a third-party email service to send email\n\nmessages to users. The third-party email service requires that the app authenticate by using an API key.\n\nYou need to recommend an Azure Key Vault solution for storing and accessing the API key. The solution must minimize administrative effort.\n\nWhat should you recommend using to store and access the key? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q54-p43-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q54-p43-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 43,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q55",
    "topic": 1,
    "number": 55,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have two app registrations named App1 and App2 in Azure AD. App1 supports role-based access control (RBAC) and includes a role named\n\nWriter.\n\nYou need to ensure that when App2 authenticates to access App1, the tokens issued by Azure AD include the Writer role claim.\n\nWhich blade should you use to modify each app registration? To answer, drag the appropriate blades to the correct app registrations. Each blade\n\nmay be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q55-p44-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q55-p44-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 44,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q56",
    "topic": 1,
    "number": 56,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Application Insights",
      "Azure Arc",
      "Azure Log Analytics",
      "Azure Monitor metrics"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 44,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T1-Q57",
    "topic": 1,
    "number": 57,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription.\n\nYou plan to deploy a monitoring solution that will include the following:\n\n• Azure Monitor Network Insights\n\n• Application Insights\n\n• Microsoft Sentinel\n\n• VM insights\n\nThe monitoring solution will be managed by a single team.\n\nWhat is the minimum number of Azure Monitor workspaces required?",
    "solutionAnswer": "1",
    "explanation": "La correction du support retient « 1 ». Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "1",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 45,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « 1 ». Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q58",
    "topic": 1,
    "number": 58,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Activity Log",
    "explanation": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement.",
    "options": [
      "Application Insights",
      "Azure Analysis Services",
      "Azure Advisor",
      "Azure Activity Log"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Activity Log",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 45,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement."
  },
  {
    "id": "AZ305-T1-Q59",
    "topic": 1,
    "number": 59,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "Case Study\n\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study\n\n-\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview\n\n-\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam, Berlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes\n\n-\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\n• Website content must be easily updated from a single point.\n\n• User input must be minimized when provisioning new web app instances.\n\n• Whenever possible, existing on-premises licenses must be used to reduce cost.\n\n• Users must always authenticate by using their corp.fabrikam.com UPN identity.\n\n• Any new deployments to Azure must be redundant in case an Azure region fails.\n\n• Whenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\n• An email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\n• In the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\n• Directory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between\n\nAzure and the on-premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\n• Database metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\n• To avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\n• Database backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\n• Company information including policies, templates, and data must be inaccessible to anyone outside the company.\n\n• Users on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\n• Administrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\n• All administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\n• The testing of WebApp1 updates must not be visible to anyone outside the company.\n\nTo meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the\n\nanswer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q59-p48-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q59-p48-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 46,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q60",
    "topic": 1,
    "number": 60,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains 10 web apps. The apps are integrated with Azure AD and are accessed by users on different project\n\nteams.\n\nThe users frequently move between projects.\n\nYou need to recommend an access management solution for the web apps. The solution must meet the following requirements:\n\n• The users must only have access to the app of the project to which they are assigned currently.\n\n• Project managers must verify which users have access to their project’s app and remove users that are no longer assigned to their project.\n\n• Once every 30 days, the project managers must be prompted automatically to verify which users are assigned to their projects.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure AD Identity Governance",
    "explanation": "La correction du support retient « Azure AD Identity Governance ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure AD Identity Protection",
      "Microsoft Defender for Identity",
      "Microsoft Entra Permissions Management",
      "Azure AD Identity Governance"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Identity Governance",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 49,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure AD Identity Governance ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q61",
    "topic": 1,
    "number": 61,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains 50 Azure SQL databases.\n\nYou create an Azure Resource Manager (ARM) template named Template1 that enables Transparent Data Encryption (TDE).\n\nYou need to create an Azure Policy definition named Policy1 that will use Template1 to enable TDE for any noncompliant Azure SQL databases.\n\nHow should you configure Policy1? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q61-p50-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q61-p50-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 50,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q62",
    "topic": 1,
    "number": 62,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription. The subscription contains a tiered app named App1 that is distributed across multiple containers hosted in Azure\n\nContainer Instances.\n\nYou need to deploy an Azure Monitor monitoring solution for App. The solution must meet the following requirements:\n\n• Support using synthetic transaction monitoring to monitor traffic between the App1 components.\n\n• Minimize development effort.\n\nWhat should you include in the solution?",
    "solutionAnswer": "Application Insights",
    "explanation": "La correction du support retient « Application Insights ». Dans l’énoncé, le point à résoudre est : « What should you include in the solution? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Network insights",
      "Application Insights",
      "Container insights",
      "Log Analytics Workspace insights"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Application Insights",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 51,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Application Insights ». Dans l’énoncé, le point à résoudre est : « What should you include in the solution? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T1-Q63",
    "topic": 1,
    "number": 63,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains the resources shown in the following table:\n\nLog files from App1 are registered to App1Logs. An average of 120 GB of log data is ingested per day.\n\nYou configure an Azure Monitor alert that will be triggered if the App1 logs contain error messages.\n\nYou need to minimize the Log Analytics costs associated with App1. The solution must meet the following requirements:\n\n• Ensure that all the log files from App1 are ingested to App1Logs.\n\n• Minimize the impact on the Azure Monitor alert.\n\nWhich resource should you modify, and which modification should you perform? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q63-p52-1-q.png",
      "assets/az305/AZ305-T1-Q63-p52-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q63-p52-3-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 52,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q64",
    "topic": 1,
    "number": 64,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have 12 Azure subscriptions and three projects. Each project uses resources across multiple subscriptions.\n\nYou need to use Microsoft Cost Management to monitor costs on a per project basis. The solution must minimize administrative effort.\n\nWhich two components should you include in the solution? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "budgets; resource tags",
    "explanation": "Les tags sont des métadonnées clé/valeur utiles pour la gouvernance, le reporting et la ventilation des coûts. Ils ne remplacent pas les groupes de ressources ni les contrôles d’accès.",
    "options": [
      "budgets",
      "resource tags",
      "custom role-based access control (RBAC) roles",
      "management groups",
      "Azure boards"
    ],
    "answerIndices": [
      0,
      1
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "budgets; resource tags",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 53,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Les tags sont des métadonnées clé/valeur utiles pour la gouvernance, le reporting et la ventilation des coûts. Ils ne remplacent pas les groupes de ressources ni les contrôles d’accès."
  },
  {
    "id": "AZ305-T1-Q65",
    "topic": 1,
    "number": 65,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription that contains multiple storage accounts.\n\nYou assign Azure Policy definitions to the storage accounts.\n\nYou need to recommend a solution to meet the following requirements:\n\n• Trigger on-demand Azure Policy compliance scans.\n\n• Raise Azure Monitor non-compliance alerts by querying logs collected by Log Analytics.\n\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q65-p54-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q65-p54-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 54,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q66",
    "topic": 1,
    "number": 66,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription.\n\nYou plan to deploy five storage accounts that will store block blobs and five storage accounts that will host file shares. The file shares will be\n\naccessed by using the SMB protocol.\n\nYou need to recommend an access authorization solution for the storage accounts. The solution must meet the following requirements:\n\n• Maximize security.\n\n• Prevent the use of shared keys.\n\n• Whenever possible, support time-limited access.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q66-p55-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q66-p55-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 55,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q67",
    "topic": 1,
    "number": 67,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have an Azure subscription. The subscription contains 100 virtual machines that run Windows Server 2022 and have the Azure Monitor Agent\n\ninstalled.\n\nYou need to recommend a solution that meets the following requirements:\n\n• Forwards JSON-formatted logs from the virtual machines to a Log Analytics workspace\n\n• Transforms the logs and stores the data in a table in the Log Analytics workspace\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q67-p56-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q67-p56-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 56,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T1-Q68",
    "topic": 1,
    "number": 68,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’identité, de gouvernance et de supervision",
    "prompt": "You have five Azure subscriptions. Each subscription is linked to a separate Azure AD tenant and contains virtual machines that run Windows\n\nServer 2022.\n\nYou plan to collect Windows security events from the virtual machines and send them to a single Log Analytics workspace.\n\nYou need to recommend a solution that meets the following requirements:\n\n• Collects event logs from multiple subscriptions\n\n• Supports the use of data collection rules (DCRs) to define which events to collect\n\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T1-Q68-p57-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T1-Q68-p57-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 57,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q1",
    "topic": 2,
    "number": 1,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have 100 servers that run Windows Server 2012 R2 and host Microsoft SQL Server 2014 instances. The instances host databases that have\n\nthe following characteristics:\n\n✑ Stored procedures are implemented by using CLR.\n\n✑ The largest database is currently 3 TB. None of the databases will ever exceed 4 TB.\n\nYou plan to move all the data from SQL Server to Azure.\n\nYou need to recommend a service to host the databases. The solution must meet the following requirements:\n\n✑ Whenever possible, minimize management overhead for the migrated databases.\n\n✑ Ensure that users can authenticate by using Azure Active Directory (Azure AD) credentials.\n\n✑ Minimize the number of database changes required to facilitate the migration.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure SQL Managed Instance",
    "explanation": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base.",
    "options": [
      "Azure SQL Database elastic pools",
      "Azure SQL Managed Instance",
      "Azure SQL Database single databases",
      "SQL Server 2016 on Azure virtual machines"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Managed Instance",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 58,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base."
  },
  {
    "id": "AZ305-T2-Q2",
    "topic": 2,
    "number": 2,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription that contains an Azure Blob Storage account named store1.\n\nYou have an on-premises file server named Server1 that runs Windows Server 2016. Server1 stores 500 GB of company files.\n\nYou need to store a copy of the company files from Server1 in store1.\n\nWhich two possible Azure services achieve this goal? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "an Azure Import/Export job; Azure Data Factory",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "an Azure Logic Apps integration account",
      "an Azure Import/Export job",
      "Azure Data Factory",
      "an Azure Analysis services On-premises data gateway",
      "an Azure Batch account"
    ],
    "answerIndices": [
      1,
      2
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Azure Import/Export job; Azure Data Factory",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 58,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T2-Q3",
    "topic": 2,
    "number": 3,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription that contains two applications named App1 and App2. App1 is a sales processing application. When a transaction\n\nin App1 requires shipping, a message is added to an Azure Storage account queue, and then App2 listens to the queue for relevant transactions.\n\nIn the future, additional applications will be added that will process some of the shipping requests based on the specific details of the\n\ntransactions.\n\nYou need to recommend a replacement for the storage account queue to ensure that each additional application will be able to read the relevant\n\ntransactions.\n\nWhat should you recommend?",
    "solutionAnswer": "one Azure Service Bus topic",
    "explanation": "Un topic Service Bus permet un modèle publication/abonnement : plusieurs consommateurs reçoivent chacun les messages pertinents via leurs subscriptions. Il convient mieux qu’une file unique lorsqu’il faut distribuer un même flux à plusieurs traitements.",
    "options": [
      "one Azure Data Factory pipeline",
      "multiple storage account queues",
      "one Azure Service Bus queue",
      "one Azure Service Bus topic"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "one Azure Service Bus topic",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 59,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Un topic Service Bus permet un modèle publication/abonnement : plusieurs consommateurs reçoivent chacun les messages pertinents via leurs subscriptions. Il convient mieux qu’une file unique lorsqu’il faut distribuer un même flux à plusieurs traitements."
  },
  {
    "id": "AZ305-T2-Q4",
    "topic": 2,
    "number": 4,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You need to design a storage solution for an app that will store large amounts of frequently used data. The solution must meet the following\n\nrequirements:\n\n✑ Maximize data throughput.\n\n✑ Prevent the modification of data for one year.\n\n✑ Minimize latency for read and write operations.\n\nWhich Azure Storage account type and storage service should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "BlockBlobStorage; Blob",
    "explanation": "La correction du support retient « BlockBlobStorage; Blob ». Dans l’énoncé, le point à résoudre est : « Which Azure Storage account type and storage service should you recommend? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "BlockBlobStorage"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Blob"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T2-Q4-p60-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q4-p60-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/storage/blobs/archive-blob"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "BlockBlobStorage; Blob",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 60,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: BlockBlobStorage - Block Blob is a premium storage account type for block blobs and append blobs. Recommended for scenarios with high transactions rates, or scenarios that use smaller objects or require consistently low storage latency. Box 2: Blob - The Archive tier is an offline tier for storing blob data that is rarely accessed. The Archive tier offers the lowest storage costs, but higher data retrieval costs and latency compared to the online tiers (Hot and Cool). Data must remain in the Archive tier for at least 180 days or be subject to an early deletion charge.",
    "pedagogicalContext": "La correction du support retient « BlockBlobStorage; Blob ». Dans l’énoncé, le point à résoudre est : « Which Azure Storage account type and storage service should you recommend? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T2-Q5",
    "topic": 2,
    "number": 5,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription that contains the storage accounts shown in the following table.\n\nYou plan to implement two new apps that have the requirements shown in the following table.\n\nWhich storage accounts should you recommend using for each app? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Storage1 and storage3 only; Storage1 and storage4 only",
    "explanation": "La correction du support retient « Storage1 and storage3 only; Storage1 and storage4 only ». Dans l’énoncé, le point à résoudre est : « Which storage accounts should you recommend using for each app? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Storage1 and storage3 only"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Storage1 and storage4 only"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T2-Q5-p62-1-q.png",
      "assets/az305/AZ305-T2-Q5-p62-2-q.png",
      "assets/az305/AZ305-T2-Q5-p62-3-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q5-p63-1-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview#feature-support"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Storage1 and storage3 only; Storage1 and storage4 only",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 62,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Storage1 and storage3 only Need to use Standard accounts. Data stored in a premium block blob storage account cannot be tiered to hot, cool, or archive using Set Blob Tier or using Azure Blob Storage lifecycle management Box 2: Storage1 and storage4 only Azure File shares requires Premium accounts. Only Storage1 and storage4 are premium.",
    "pedagogicalContext": "La correction du support retient « Storage1 and storage3 only; Storage1 and storage4 only ». Dans l’énoncé, le point à résoudre est : « Which storage accounts should you recommend using for each app? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T2-Q6",
    "topic": 2,
    "number": 6,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing an application that will be hosted in Azure.\n\nThe application will host video files that range from 50 MB to 12 GB. The application will use certificate-based authentication and will be available\n\nto users on the internet.\n\nYou need to recommend a storage option for the video files. The solution must provide the fastest read performance and must minimize storage\n\ncosts.\n\nWhat should you recommend?",
    "solutionAnswer": "Azure Blob Storage",
    "explanation": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès.",
    "options": [
      "Azure Files",
      "Azure Data Lake Storage Gen2",
      "Azure Blob Storage",
      "Azure SQL Database"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Blob Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 63,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès."
  },
  {
    "id": "AZ305-T2-Q7",
    "topic": 2,
    "number": 7,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing a SQL database solution. The solution will include 20 databases that will be 20 GB each and have varying usage patterns.\n\nYou need to recommend a database platform to host the databases. The solution must meet the following requirements:\n\n✑ The solution must meet a Service Level Agreement (SLA) of 99.99% uptime.\n\n✑ The compute resources allocated to the databases must scale dynamically.\n\n✑ The solution must have reserved capacity.\n\nCompute charges must be minimized.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "an elastic pool that contains 20 Azure SQL databases",
    "explanation": "Un elastic pool mutualise un ensemble de ressources de calcul entre plusieurs bases Azure SQL dont l’activité varie. Il est utile lorsque les pics de charge des bases ne se produisent pas tous au même moment.",
    "options": [
      "an elastic pool that contains 20 Azure SQL databases",
      "20 databases on a Microsoft SQL server that runs on an Azure virtual machine in an availability set",
      "20 databases on a Microsoft SQL server that runs on an Azure virtual machine",
      "20 instances of Azure SQL Database serverless"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an elastic pool that contains 20 Azure SQL databases",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 64,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Un elastic pool mutualise un ensemble de ressources de calcul entre plusieurs bases Azure SQL dont l’activité varie. Il est utile lorsque les pics de charge des bases ne se produisent pas tous au même moment."
  },
  {
    "id": "AZ305-T2-Q8",
    "topic": 2,
    "number": 8,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an on-premises database that you plan to migrate to Azure.\n\nYou need to design the database architecture to meet the following requirements:\n\n✑ Support scaling up and down.\n\n✑ Support geo-redundant backups.\n\n✑ Support a database of up to 75 TB.\n\n✑ Be optimized for online transaction processing (OLTP).\n\nWhat should you include in the design? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure SQL Database; Hyperscale",
    "explanation": "Hyperscale est conçu pour les bases Azure SQL qui doivent croître fortement et bénéficier d’une architecture de stockage distribuée, avec une mise à l’échelle indépendante du calcul et du stockage.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure SQL Database"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Hyperscale"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T2-Q8-p65-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q8-p65-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview"
      },
      {
        "title": "Référence du document source",
        "url": "https://medium.com/awesome-azure/azure-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database; Hyperscale",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 65,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure SQL Database - Azure SQL Database: Database size always depends on the underlying service tiers (e.g. Basic, Business Critical, Hyperscale). It supports databases of up to 100 TB with Hyperscale service tier model. Active geo-replication is a feature that lets you to create a continuously synchronized readable secondary database for a primary database. The readable secondary database may be in the same Azure region as the primary, or, more commonly, in a different region. This kind of readable secondary databases are also known as geo-secondaries, or geo-replicas. Azure SQL Database and SQL Managed Instance enable you to dynamically add more resources to your database with minimal downtime. Box 2: Hyperscale - Incorrect Answers: ✑ SQL Server on Azure VM: geo-replication not supported. ✑ Azure Synapse Analytics is not optimized for online transaction processing (OLTP). ✑ Azure SQL Managed Instance max database size is up to currently available instance size (depending on the number of vCores). Max instance storage size (reserved) - 2 TB for 4 vCores - 8 TB for 8 vCores - 16 TB for other sizes",
    "pedagogicalContext": "Hyperscale est conçu pour les bases Azure SQL qui doivent croître fortement et bénéficier d’une architecture de stockage distribuée, avec une mise à l’échelle indépendante du calcul et du stockage."
  },
  {
    "id": "AZ305-T2-Q9",
    "topic": 2,
    "number": 9,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are planning an Azure IoT Hub solution that will include 50,000 IoT devices.\n\nEach device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data\n\nwill be visualized in near real time.\n\nYou need to recommend a service to store and query the data.\n\nWhich two services can you recommend? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Azure Cosmos DB SQL API; Azure Time Series Insights",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "Azure Table Storage",
      "Azure Event Grid",
      "Azure Cosmos DB SQL API",
      "Azure Time Series Insights"
    ],
    "answerIndices": [
      2,
      3
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Cosmos DB SQL API; Azure Time Series Insights",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 66,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T2-Q10",
    "topic": 2,
    "number": 10,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing an application that will aggregate content for users.\n\nYou need to recommend a database solution for the application. The solution must meet the following requirements:\n\n✑ Support SQL commands.\n\n✑ Support multi-master writes.\n\n✑ Guarantee low latency read operations.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Cosmos DB SQL API",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "Azure Cosmos DB SQL API",
      "Azure SQL Database that uses active geo-replication",
      "Azure SQL Database Hyperscale",
      "Azure Database for PostgreSQL"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Cosmos DB SQL API",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 66,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T2-Q11",
    "topic": 2,
    "number": 11,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription that contains the SQL servers on Azure shown in the following table.\n\nThe subscription contains the storage accounts shown in the following table.\n\nYou create the Azure SQL databases shown in the following table.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Yes; No; No",
    "explanation": "La correction du support retient « Yes; No; No ». Dans l’énoncé, le point à résoudre est : « For each of the following statements, select Yes if the statement is true. Otherwise, select No. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "yn",
      "labels": [
        "Proposition 1",
        "Proposition 2",
        "Proposition 3"
      ],
      "expected": [
        true,
        false,
        false
      ]
    },
    "assets": [
      "assets/az305/AZ305-T2-Q11-p67-1-q.png",
      "assets/az305/AZ305-T2-Q11-p67-2-q.png",
      "assets/az305/AZ305-T2-Q11-p67-3-q.png",
      "assets/az305/AZ305-T2-Q11-p67-4-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q11-p67-5-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-sql/database/auditing-overview#auditing-limitations"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Yes; No; No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 67,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Yes - Auditing works fine for a Standard account. Box 2: No - Auditing limitations: Premium storage is currently not supported. Box 3: No - Auditing limitations: Premium storage is currently not supported.",
    "pedagogicalContext": "La correction du support retient « Yes; No; No ». Dans l’énoncé, le point à résoudre est : « For each of the following statements, select Yes if the statement is true. Otherwise, select No. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T2-Q12",
    "topic": 2,
    "number": 12,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You plan to import data from your on-premises environment to Azure. The data is shown in the following table.\n\nWhat should you recommend using to migrate the data? To answer, drag the appropriate tools to the correct data sources. Each tool may be used\n\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "Data Migration Assistant; Azure Cosmos DB Data Migration Tool",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Data Migration Assistant"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure Cosmos DB Data Migration Tool"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T2-Q12-p68-1-q.png",
      "assets/az305/AZ305-T2-Q12-p68-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q12-p68-3-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/sql/dma/dma-overview"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/cosmos-db/cosmosdb-migrationchoices"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Data Migration Assistant; Azure Cosmos DB Data Migration Tool",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 68,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Data Migration Assistant - The Data Migration Assistant (DMA) helps you upgrade to a modern data platform by detecting compatibility issues that can impact database functionality in your new version of SQL Server or Azure SQL Database. DMA recommends performance and reliability improvements for your target environment and allows you to move your schema, data, and uncontained objects from your source server to your target server. Incorrect: AzCopy is a command-line utility that you can use to copy blobs or files to or from a storage account. Box 2: Azure Cosmos DB Data Migration Tool Azure Cosmos DB Data Migration Tool can used to migrate a SQL Server Database table to Azure Cosmos.",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T2-Q13",
    "topic": 2,
    "number": 13,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You store web access logs data in Azure Blob Storage.\n\nYou plan to generate monthly reports from the access logs.\n\nYou need to recommend an automated process to upload the data to Azure SQL Database every month.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Data Factory",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "Microsoft SQL Server Migration Assistant (SSMA)",
      "Data Migration Assistant (DMA)",
      "AzCopy",
      "Azure Data Factory"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Factory",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 68,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T2-Q14",
    "topic": 2,
    "number": 14,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription.\n\nYour on-premises network contains a file server named Server1. Server1 stores 5 ‫׀‬¢‫ ’׀‬of company files that are accessed rarely.\n\nYou plan to copy the files to Azure Storage.\n\nYou need to implement a storage solution for the files that meets the following requirements:\n\n✑ The files must be available within 24 hours of being requested.\n\n✑ Storage costs must be minimized.\n\nWhich two possible storage solutions achieve this goal? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.; Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.",
    "explanation": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès.",
    "options": [
      "Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.",
      "Create a general-purpose v1 storage account. Create a blob container and copy the files to the blob container.",
      "Create a general-purpose v2 storage account that is configured for the Cool default access tier. Create a file share in the storage account and copy the files to the file share.",
      "Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.",
      "Create a general-purpose v1 storage account. Create a fie share in the storage account and copy the files to the file share."
    ],
    "answerIndices": [
      0,
      3
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Create an Azure Blob Storage account that is configured for the Cool default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.; Create a general-purpose v2 storage account that is configured for the Hot default access tier. Create a blob container, copy the files to the blob container, and set each file to the Archive access tier.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 69,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès."
  },
  {
    "id": "AZ305-T2-Q15",
    "topic": 2,
    "number": 15,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an app named App1 that uses two on-premises Microsoft SQL Server databases named DB1 and DB2.\n\nYou plan to migrate DB1 and DB2 to Azure\n\nYou need to recommend an Azure solution to host DB1 and DB2. The solution must meet the following requirements:\n\n✑ Support server-side transactions across DB1 and DB2.\n\n✑ Minimize administrative effort to update the solution.\n\nWhat should you recommend?",
    "solutionAnswer": "two databases on the same Azure SQL managed instance",
    "explanation": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base.",
    "options": [
      "two Azure SQL databases in an elastic pool",
      "two databases on the same Azure SQL managed instance",
      "two databases on the same SQL Server instance on an Azure virtual machine",
      "two Azure SQL databases on different Azure SQL Database servers"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "two databases on the same Azure SQL managed instance",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 69,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base."
  },
  {
    "id": "AZ305-T2-Q16",
    "topic": 2,
    "number": 16,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n✑ Failover between replicas of the database must occur without any data loss.\n\n✑ The database must remain available in the event of a zone outage.\n\n✑ Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Database Hyperscale",
      "Azure SQL Database Premium",
      "Azure SQL Database Basic",
      "Azure SQL Managed Instance General Purpose"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 70,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T2-Q17",
    "topic": 2,
    "number": 17,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.\n\nYou need to recommend a storage solution that meets the following requirements:\n\n✑ All the data written to storage must be retained for five years.\n\n✑ Once the data is written, the data can only be read. Modifications and deletion must be prevented.\n\n✑ After five years, the data can be deleted, but never modified.\n\n✑ Data access charges must be minimized.\n\nWhat should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q17-p71-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q17-p71-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 71,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q18",
    "topic": 2,
    "number": 18,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing a data storage solution to support reporting.\n\nThe solution will ingest high volumes of data in the JSON format by using Azure Event Hubs. As the data arrives, Event Hubs will write the data to\n\nstorage. The solution must meet the following requirements:\n\n✑ Organize data in directories by date and time.\n\n✑ Allow stored data to be queried directly, transformed into summarized tables, and then stored in a data warehouse.\n\n✑ Ensure that the data warehouse can store 50 TB of relational data and support between 200 and 300 concurrent read operations.\n\nWhich service should you recommend for each type of data store? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure Data Lake Storage Gen2; Azure SQL Database Hyperscale",
    "explanation": "Hyperscale est conçu pour les bases Azure SQL qui doivent croître fortement et bénéficier d’une architecture de stockage distribuée, avec une mise à l’échelle indépendante du calcul et du stockage.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure Data Lake Storage Gen2"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure SQL Database Hyperscale"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T2-Q18-p72-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q18-p72-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/data-explorer/data-lake-query-data"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Lake Storage Gen2; Azure SQL Database Hyperscale",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 72,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure Data Lake Storage Gen2 Azure Data Explorer integrates with Azure Blob Storage and Azure Data Lake Storage (Gen1 and Gen2), providing fast, cached, and indexed access to data stored in external storage. You can analyze and query data without prior ingestion into Azure Data Explorer. You can also query across ingested and uningested external data simultaneously. Azure Data Lake Storage is optimized storage for big data analytics workloads. Use cases: Batch, interactive, streaming analytics and machine learning data such as log files, IoT data, click streams, large datasets Box 2: Azure SQL Database Hyperscale Azure SQL Database Hyperscale is optimized for OLTP and high throughput analytics workloads with storage up to 100TB. A Hyperscale database supports up to 100 TB of data and provides high throughput and performance, as well as rapid scaling to adapt to the workload requirements. Connectivity, query processing, database engine features, etc. work like any other database in Azure SQL Database. Hyperscale is a multi-tiered architecture with caching at multiple levels. Effective IOPS will depend on the workload. Compare to: General purpose: 500 IOPS per vCore with 7,000 maximum IOPS Business critical: 5,000 IOPS with 200,000 maximum IOPS Incorrect: * Azure Synapse Analytics Dedicated SQL pool. Max database size: 240 TB - A maximum of 128 concurrent queries will execute and remaining queries will be queued.",
    "pedagogicalContext": "Hyperscale est conçu pour les bases Azure SQL qui doivent croître fortement et bénéficier d’une architecture de stockage distribuée, avec une mise à l’échelle indépendante du calcul et du stockage."
  },
  {
    "id": "AZ305-T2-Q19",
    "topic": 2,
    "number": 19,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an app named App1 that uses an on-premises Microsoft SQL Server database named DB1.\n\nYou plan to migrate DB1 to an Azure SQL managed instance.\n\nYou need to enable customer managed Transparent Data Encryption (TDE) for the instance. The solution must maximize encryption strength.\n\nWhich type of encryption algorithm and key length should you use for the TDE protector?",
    "solutionAnswer": "RSA 3072",
    "explanation": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base.",
    "options": [
      "RSA 3072",
      "AES 256",
      "RSA 4096",
      "RSA 2048"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "RSA 3072",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 73,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base."
  },
  {
    "id": "AZ305-T2-Q20",
    "topic": 2,
    "number": 20,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are planning an Azure IoT Hub solution that will include 50,000 IoT devices.\n\nEach device will stream data, including temperature, device ID, and time data. Approximately 50,000 records will be written every second. The data\n\nwill be visualized in near real time.\n\nYou need to recommend a service to store and query the data.\n\nWhich two services can you recommend? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Azure Cosmos DB for NoSQL; Azure Time Series Insights",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "Azure Table Storage",
      "Azure Event Grid",
      "Azure Cosmos DB for NoSQL",
      "Azure Time Series Insights"
    ],
    "answerIndices": [
      2,
      3
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Cosmos DB for NoSQL; Azure Time Series Insights",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 74,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T2-Q21",
    "topic": 2,
    "number": 21,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are planning an Azure Storage solution for sensitive data. The data will be accessed daily. The dataset is less than 10 GB.\n\nYou need to recommend a storage solution that meets the following requirements:\n\n• All the data written to storage must be retained for five years.\n\n• Once the data is written, the data can only be read. Modifications and deletion must be prevented.\n\n• After five years, the data can be deleted, but never modified.\n\n• Data access charges must be minimized.\n\nWhat should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q21-p75-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q21-p75-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 75,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q22",
    "topic": 2,
    "number": 22,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing a data analytics solution that will use Azure Synapse and Azure Data Lake Storage Gen2.\n\nYou need to recommend Azure Synapse pools to meet the following requirements:\n\n• Ingest data from Data Lake Storage into hash-distributed tables.\n\n• Implement query, and update data in Delta Lake.\n\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q22-p76-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q22-p76-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 76,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q23",
    "topic": 2,
    "number": 23,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an on-premises storage solution.\n\nYou need to migrate the solution to Azure. The solution must support Hadoop Distributed File System (HDFS).\n\nWhat should you use?",
    "solutionAnswer": "Azure Data Lake Storage Gen2",
    "explanation": "ADLS Gen2 ajoute un espace de noms hiérarchique à Blob Storage, ce qui le rend adapté aux charges analytiques et aux arborescences de données tout en conservant les capacités du stockage objet Azure.",
    "options": [
      "Azure Data Lake Storage Gen2",
      "Azure NetApp Files",
      "Azure Data Share",
      "Azure Table storage"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Lake Storage Gen2",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 77,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "ADLS Gen2 ajoute un espace de noms hiérarchique à Blob Storage, ce qui le rend adapté aux charges analytiques et aux arborescences de données tout en conservant les capacités du stockage objet Azure."
  },
  {
    "id": "AZ305-T2-Q24",
    "topic": 2,
    "number": 24,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an on-premises app named App1.\n\nCustomers use App1 to manage digital images.\n\nYou plan to migrate App1 to Azure.\n\nYou need to recommend a data storage solution for App1. The solution must meet the following image storage requirements:\n\n• Encrypt images at rest.\n\n• Allow files up to 50 MB.\n\n• Manage access to the images by using Azure Web Application Firewall (WAF) on Azure Front Door.\n\nThe solution must meet the following customer account requirements:\n\n• Support automatic scale out of the storage.\n\n• Maintain the availability of App1 if a datacenter fails.\n\n• Support reading and writing data from multiple Azure regions.\n\nWhich service should you include in the recommendation for each type of data? To answer, drag the appropriate services to the correct type of\n\ndata. Each service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct answer is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q24-p78-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q24-p78-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 78,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q25",
    "topic": 2,
    "number": 25,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing an application that will aggregate content for users.\n\nYou need to recommend a database solution for the application. The solution must meet the following requirements:\n\n• Support SQL commands.\n\n• Support multi-master writes.\n\n• Guarantee low latency read operations.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Cosmos DB for NoSQL",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "Azure Cosmos DB for NoSQL",
      "Azure SQL Database that uses active geo-replication",
      "Azure SQL Database Hyperscale",
      "Azure Cosmos DB for PostgreSQL"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Cosmos DB for NoSQL",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 79,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T2-Q26",
    "topic": 2,
    "number": 26,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You plan to migrate on-premises MySQL databases to Azure Database for MySQL Flexible Server.\n\nYou need to recommend a solution for the Azure Database for MySQL Flexible Server configuration. The solution must meet the following\n\nrequirements:\n\n• The databases must be accessible if a datacenter fails.\n\n• Costs must be minimized.\n\nWhich compute tier should you recommend?",
    "solutionAnswer": "General Purpose",
    "explanation": "La correction du support retient « General Purpose ». Dans l’énoncé, le point à résoudre est : « Which compute tier should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Burstable",
      "General Purpose",
      "Memory Optimized"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "General Purpose",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 79,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « General Purpose ». Dans l’énoncé, le point à résoudre est : « Which compute tier should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T2-Q27",
    "topic": 2,
    "number": 27,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing an app that will use Azure Cosmos DB to collate sales from multiple countries.\n\nYou need to recommend an API for the app. The solution must meet the following requirements:\n\n• Support SQL queries.\n\n• Support geo-replication.\n\n• Store and access data relationally.\n\nWhich API should you recommend?",
    "solutionAnswer": "PostgreSQL",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "Apache Cassandra",
      "PostgreSQL",
      "MongoDB",
      "NoSQL"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "PostgreSQL",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 80,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T2-Q28",
    "topic": 2,
    "number": 28,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an app that generates 50,000 events daily.\n\nYou plan to stream the events to an Azure event hub and use Event Hubs Capture to implement cold path processing of the events. The output of\n\nEvent Hubs Capture will be consumed by a reporting system.\n\nYou need to identify which type of Azure storage must be provisioned to support Event Hubs Capture, and which inbound data format the reporting\n\nsystem must support.\n\nWhat should you identify? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q28-p81-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q28-p81-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 81,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q29",
    "topic": 2,
    "number": 29,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have the resources shown in the following table.\n\nCDB1 hosts a container that stores continuously updated operational data.\n\nYou are designing a solution that will use AS1 to analyze the operational data daily.\n\nYou need to recommend a solution to analyze the data without affecting the performance of the operational data store.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Synapse Link for Azure Cosmos DB",
    "explanation": "Synapse Link permet d’analyser les données opérationnelles de Cosmos DB sans déplacer les données par un ETL classique et en limitant l’impact sur la charge transactionnelle.",
    "options": [
      "Azure Data Factory with Azure Cosmos DB and Azure Synapse Analytics connectors",
      "Azure Synapse Analytics with PolyBase data loading",
      "Azure Synapse Link for Azure Cosmos DB",
      "Azure Cosmos DB change feed"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T2-Q29-p82-1-q.jpeg"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Synapse Link for Azure Cosmos DB",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 82,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Synapse Link permet d’analyser les données opérationnelles de Cosmos DB sans déplacer les données par un ETL classique et en limitant l’impact sur la charge transactionnelle."
  },
  {
    "id": "AZ305-T2-Q30",
    "topic": 2,
    "number": 30,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription. The subscription contains an Azure SQL managed instance that stores employee details, including social security\n\nnumbers and phone numbers.\n\nYou need to configure the managed instance to meet the following requirements:\n\n• The helpdesk team must see only the last four digits of an employee’s phone number.\n\n• Cloud administrators must be prevented from seeing the employee’s social security numbers.\n\nWhat should you enable for each column in the managed instance? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q30-p83-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q30-p83-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 83,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q31",
    "topic": 2,
    "number": 31,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You plan to use an Azure Storage account to store data assets.\n\nYou need to recommend a solution that meets the following requirements:\n\n• Supports immutable storage\n\n• Disables anonymous access to the storage account\n\n• Supports access control list (ACL)-based Azure AD permissions\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Data Lake Storage",
    "explanation": "La correction du support retient « Azure Data Lake Storage ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Files",
      "Azure Data Lake Storage",
      "Azure NetApp Files",
      "Azure Blob Storage"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Lake Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 84,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Data Lake Storage ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T2-Q32",
    "topic": 2,
    "number": 32,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing a storage solution that will ingest, store, and analyze petabytes (PBs) of structured, semi-structured, and unstructured text data.\n\nThe analyzed data will be offloaded to Azure Data Lake Storage Gen2 for long-term retention.\n\nYou need to recommend a storage and analytics solution that meets the following requirements:\n\n• Stores the processed data\n\n• Provides interactive analytics\n\n• Supports manual scaling, built-in autoscaling, and custom autoscaling\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q32-p85-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q32-p85-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 85,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q33",
    "topic": 2,
    "number": 33,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You plan to use Azure SQL as a database platform.\n\nYou need to recommend an Azure SQL product and service tier that meets the following requirements:\n\n• Automatically scales compute resources based on the workload demand\n\n• Provides per second billing\n\nWhat should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q33-p86-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q33-p86-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 86,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q34",
    "topic": 2,
    "number": 34,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription.\n\nYou need to deploy a solution that will provide point-in-time restore for blobs in storage accounts that have blob versioning and blob soft delete\n\nenabled.\n\nWhich type of blob should you create, and what should you enable for the accounts? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q34-p87-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q34-p87-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 87,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q35",
    "topic": 2,
    "number": 35,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "Your company, named Contoso, Ltd., has an Azure subscription that contains the following resources:\n\n• An Azure Synapse Analytics workspace named contosoworkspace1\n\n• An Azure Data Lake Storage account named contosolake1\n\n• An Azure SQL database named contososql1\n\nThe product data of Contoso is copied from contososql1 to contosolake1.\n\nContoso has a partner company named Fabrikam Inc. Fabrikam has an Azure subscription that contains the following resources:\n\n• A virtual machine named FabrikamVM1 that runs Microsoft SQL Server 2019\n\n• An Azure Storage account named fabrikamsa1\n\nContoso plans to upload the research data on FabrikamVM1 to contosolake1. During the upload, the research data must be transformed to the\n\ndata formats used by Contoso.\n\nThe data in contosolake1 will be analyzed by using contosoworkspace1.\n\nYou need to recommend a solution that meets the following requirements:\n\n• Upload and transform the FabrikamVM1 research data.\n\n• Provide Fabrikam with restricted access to snapshots of the data in contosoworkspace1.\n\nWhat should you recommend for each requirement? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q35-p88-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q35-p88-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 88,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q36",
    "topic": 2,
    "number": 36,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You are designing a data pipeline that will integrate large amounts of data from multiple on-premises Microsoft SQL Server databases into an\n\nanalytics platform in Azure. The pipeline will include the following actions:\n\n• Database updates will be exported periodically into a staging area in Azure Blob storage.\n\n• Data from the blob storage will be cleansed and transformed by using a highly parallelized load process.\n\n• The transformed data will be loaded to a data warehouse.\n\n• Each batch of updates will be used to refresh an online analytical processing (OLAP) model in a managed serving layer.\n\n• The managed serving layer will be used by thousands of end users.\n\nYou need to implement the data warehouse and serving layers.\n\nWhat should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q36-p89-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q36-p89-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 89,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q37",
    "topic": 2,
    "number": 37,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an Azure subscription.\n\nYou need to deploy a relational database. The solution must meet the following requirements:\n\n• Support multiple read-only replicas.\n\n• Automatically load balance read-only requests across all the read-only replicas.\n\n• Minimize administrative effort\n\nWhat should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T2-Q37-p90-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T2-Q37-p90-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 90,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T2-Q38",
    "topic": 2,
    "number": 38,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have an app named App1 that uses an Azure Blob Storage container named app1data.\n\nApp1 uploads a cumulative transaction log file named File1.txt to a block blob in app1data once every hour. File1.txt only stores transaction data\n\nfrom the current day.\n\nYou need to ensure that you can restore the last uploaded version of File1.txt from any day for up to 30 days after the file was overwritten. The\n\nsolution must minimize storage space.\n\nWhat should you include in the solution?",
    "solutionAnswer": "blob versioning",
    "explanation": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès.",
    "options": [
      "container soft delete",
      "blob snapshots",
      "blob soft delete",
      "blob versioning"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "blob versioning",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 91,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès."
  },
  {
    "id": "AZ305-T2-Q39",
    "topic": 2,
    "number": 39,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de stockage de données",
    "prompt": "You have 12 on-premises data sources that contain customer information and consist of Microsoft SQL Server, MySQL, and Oracle databases.\n\nYou have an Azure subscription.\n\nYou plan to create an Azure Data Lake Storage account that will consolidate the customer information for analysis and reporting.\n\nYou need to recommend a solution to automatically copy new information from the data sources to the Data Lake Storage account by using\n\nextract, transform and load (ETL). The solution must minimize administrative effort.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Data Factory",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "Azure Data Factory",
      "Azure Data Explorer",
      "Azure Data Share",
      "Azure Data Studio"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Factory",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 91,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T3-Q1",
    "topic": 3,
    "number": 1,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have SQL Server on an Azure virtual machine. The databases are written to nightly as part of a batch process.\n\nYou need to recommend a disaster recovery solution for the data. The solution must meet the following requirements:\n\n✑ Provide the ability to recover in the event of a regional outage.\n\n✑ Support a recovery time objective (RTO) of 15 minutes.\n\n✑ Support a recovery point objective (RPO) of 24 hours.\n\n✑ Support automated recovery.\n\n✑ Minimize costs.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Site Recovery",
    "explanation": "Azure Site Recovery orchestre la réplication et le basculement de machines pour la reprise après sinistre. Il complète la sauvegarde, qui répond à un autre objectif : restaurer des données ou des points dans le temps.",
    "options": [
      "Azure virtual machine availability sets",
      "Azure Disk Backup",
      "an Always On availability group",
      "Azure Site Recovery"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Site Recovery",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 92,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Site Recovery orchestre la réplication et le basculement de machines pour la reprise après sinistre. Il complète la sauvegarde, qui répond à un autre objectif : restaurer des données ou des points dans le temps."
  },
  {
    "id": "AZ305-T3-Q2",
    "topic": 3,
    "number": 2,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You plan to deploy the backup policy shown in the following exhibit.\n\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q2-p93-1-q.png",
      "assets/az305/AZ305-T3-Q2-p94-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q2-p94-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 93,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q3",
    "topic": 3,
    "number": 3,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n\n✑ Provide access to the full .NET framework.\n\nProvide redundancy if an Azure region fails.\n\n✑ Grant administrators access to the operating system to install custom application dependencies.\n\nSolution: You deploy two Azure virtual machines to two Azure regions, and you create an Azure Traffic Manager profile.\n\nDoes this meet the goal?",
    "solutionAnswer": "Yes",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You deploy two Azure virtual machines to two Azure regions, and you create an Azure Traffic Manager profile. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Yes",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 94,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You deploy two Azure virtual machines to two Azure regions, and you create an Azure Traffic Manager profile. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T3-Q4",
    "topic": 3,
    "number": 4,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n\n✑ Provide access to the full .NET framework.\n\n✑ Provide redundancy if an Azure region fails.\n\n✑ Grant administrators access to the operating system to install custom application dependencies.\n\nSolution: You deploy two Azure virtual machines to two Azure regions, and you deploy an Azure Application Gateway.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You deploy two Azure virtual machines to two Azure regions, and you deploy an Azure Application Gateway. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 95,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You deploy two Azure virtual machines to two Azure regions, and you deploy an Azure Application Gateway. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T3-Q5",
    "topic": 3,
    "number": 5,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You plan to create an Azure Storage account that will host file shares. The shares will be accessed from on-premises applications that are\n\ntransaction intensive.\n\nYou need to recommend a solution to minimize latency when accessing the file shares. The solution must provide the highest-level of resiliency\n\nfor the selected storage tier.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Premium; Zone-redundant storage (ZRS):",
    "explanation": "La correction du support retient « Premium; Zone-redundant storage (ZRS): ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Premium"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Zone-redundant storage (ZRS):"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T3-Q5-p96-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q5-p96-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/storage/files/storage-files-planning"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Premium; Zone-redundant storage (ZRS):",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 96,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Premium - Premium: Premium file shares are backed by solid-state drives (SSDs) and provide consistent high performance and low latency, within single- digit milliseconds for most IO operations, for IO-intensive workloads. Incorrect Answers: ✑ Hot: Hot file shares offer storage optimized for general purpose file sharing scenarios such as team shares. Hot file shares are offered on the standard storage hardware backed by HDDs. ✑ Transaction optimized: Transaction optimized file shares enable transaction heavy workloads that don't need the latency offered by premium file shares. Transaction optimized file shares are offered on the standard storage hardware backed by hard disk drives (HDDs). Transaction optimized has historically been called \"standard\", however this refers to the storage media type rather than the tier itself (the hot and cool are also \"standard\" tiers, because they are on standard storage hardware). Box 2: Zone-redundant storage (ZRS): Premium Azure file shares only support LRS and ZRS. Zone-redundant storage (ZRS): With ZRS, three copies of each file stored, however these copies are physically isolated in three distinct storage clusters in different Azure availability zones.",
    "pedagogicalContext": "La correction du support retient « Premium; Zone-redundant storage (ZRS): ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T3-Q6",
    "topic": 3,
    "number": 6,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n\n✑ Provide access to the full .NET framework.\n\n✑ Provide redundancy if an Azure region fails.\n\n✑ Grant administrators access to the operating system to install custom application dependencies.\n\nSolution: You deploy an Azure virtual machine scale set that uses autoscaling.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You deploy an Azure virtual machine scale set that uses autoscaling. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 97,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You deploy an Azure virtual machine scale set that uses autoscaling. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T3-Q7",
    "topic": 3,
    "number": 7,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You need to recommend an Azure Storage account configuration for two applications named Application1 and Application2. The configuration\n\nmust meet the following requirements:\n\n✑ Storage for Application1 must provide the highest possible transaction rates and the lowest possible latency.\n\n✑ Storage for Application2 must provide the lowest possible storage costs per GB.\n\n✑ Storage for both applications must be available in an event of datacenter failure.\n\n✑ Storage for both applications must be optimized for uploads and downloads.\n\nWhat should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "BlobStorage with Premium Performance,‫ג‬€¦; General purpose v2 with Standard Performance,..",
    "explanation": "La correction du support retient « BlobStorage with Premium Performance,‫ג‬€¦; General purpose v2 with Standard Performance,.. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "BlobStorage with Premium Performance,‫ג‬€¦"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "General purpose v2 with Standard Performance,.."
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T3-Q7-p98-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q7-p98-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/storage/common/storage-account-upgrade"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "BlobStorage with Premium Performance,‫ג‬€¦; General purpose v2 with Standard Performance,..",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 98,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: BlobStorage with Premium Performance,‫ג‬€¦ Application1 requires high transaction rates and the lowest possible latency. We need to use Premium, not Standard. Box 2: General purpose v2 with Standard Performance,.. General Purpose v2 provides access to the latest Azure storage features, including Cool and Archive storage, with pricing optimized for the lowest GB storage prices. These accounts provide access to Block Blobs, Page Blobs, Files, and Queues. Recommended for most scenarios using Azure Storage.",
    "pedagogicalContext": "La correction du support retient « BlobStorage with Premium Performance,‫ג‬€¦; General purpose v2 with Standard Performance,.. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T3-Q8",
    "topic": 3,
    "number": 8,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You plan to develop a new app that will store business critical data. The app must meet the following requirements:\n\n✑ Prevent new data from being modified for one year.\n\n✑ Maximize data resiliency.\n\n✑ Minimize read latency.\n\nWhat storage solution should you recommend for the app? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q8-p99-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q8-p99-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 99,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q9",
    "topic": 3,
    "number": 9,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You plan to deploy 10 applications to Azure. The applications will be deployed to two Azure Kubernetes Service (AKS) clusters. Each cluster will\n\nbe deployed to a separate Azure region.\n\nThe application deployment must meet the following requirements:\n\n✑ Ensure that the applications remain available if a single AKS cluster fails.\n\n✑ Ensure that the connection traffic over the internet is encrypted by using SSL without having to configure SSL on each container.\n\nWhich service should you include in the recommendation?",
    "solutionAnswer": "Azure Front Door",
    "explanation": "Azure Front Door fournit une entrée globale HTTP(S), du routage applicatif et des fonctions de résilience/accélération à l’échelle mondiale. Il se distingue d’un load balancer régional ou d’un équipement réseau L4.",
    "options": [
      "Azure Front Door",
      "Azure Traffic Manager",
      "AKS ingress controller",
      "Azure Load Balancer"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Front Door",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 100,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Front Door fournit une entrée globale HTTP(S), du routage applicatif et des fonctions de résilience/accélération à l’échelle mondiale. Il se distingue d’un load balancer régional ou d’un équipement réseau L4."
  },
  {
    "id": "AZ305-T3-Q10",
    "topic": 3,
    "number": 10,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have an on-premises file server that stores 2 TB of data files.\n\nYou plan to move the data files to Azure Blob Storage in the West Europe Azure region.\n\nYou need to recommend a storage account type to store the data files and a replication solution for the storage account. The solution must meet\n\nthe following requirements:\n\n✑ Be available if a single Azure datacenter fails.\n\n✑ Support storage tiers.\n\n✑ Minimize cost.\n\nWhat should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Standard general-purpose v2; Zone-redundant storage (ZRS)",
    "explanation": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Standard general-purpose v2"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Zone-redundant storage (ZRS)"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T3-Q10-p101-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q10-p101-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Standard general-purpose v2; Zone-redundant storage (ZRS)",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 101,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Standard general-purpose v2 Standard general-purpose v2 meets the requirements and minimizes the costs. Box 2: Zone-redundant storage (ZRS) ZRS protects against a Datacenter failure, while minimizing the costs.",
    "pedagogicalContext": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès."
  },
  {
    "id": "AZ305-T3-Q11",
    "topic": 3,
    "number": 11,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have an Azure web app named App1 and an Azure key vault named KV1.\n\nApp1 stores database connection strings in KV1.\n\nApp1 performs the following types of requests to KV1:\n\n✑ Get\n\n✑ List\n\n✑ Wrap\n\n✑ Delete\n\nUnwrap -\n\n✑ Backup\n\n✑ Decrypt\n\n✑ Encrypt\n\nYou are evaluating the continuity of service for App1.\n\nYou need to identify the following if the Azure region that hosts KV1 becomes unavailable:\n\n✑ To where will KV1 fail over?\n\n✑ During the failover, which request type will be unavailable?\n\nWhat should you identify? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "A server in the paired region; Delete",
    "explanation": "Key Vault centralise les secrets, clés et certificats. Les références Key Vault permettent à une application d’utiliser un secret sans le copier dans sa configuration, avec des permissions limitées au strict nécessaire.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "A server in the paired region"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Delete"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T3-Q11-p102-2-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q11-p102-3-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/key-vault/general/disaster-recovery-guidance"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "A server in the paired region; Delete",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 102,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: A server in the paired region The contents of your key vault are replicated within the region and to a secondary region at least 150 miles away, but within the same geography to maintain high durability of your keys and secrets. Regions are paired for cross-region replication based on proximity and other factors. Box 2: Delete - During failover, your key vault is in read-only mode. Requests that are supported in this mode are: List certificates - Get certificates - List secrets - Get secrets - List keys - Get (properties of) keys - Encrypt - Decrypt - Wrap - Unwrap - Verify - Sign - Backup -",
    "pedagogicalContext": "Key Vault centralise les secrets, clés et certificats. Les références Key Vault permettent à une application d’utiliser un secret sans le copier dans sa configuration, avec des permissions limitées au strict nécessaire."
  },
  {
    "id": "AZ305-T3-Q12",
    "topic": 3,
    "number": 12,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "Your company identifies the following business continuity and disaster recovery objectives for virtual machines that host sales, finance, and\n\nreporting applications in the company's on-premises data center:\n\n✑ The sales application must be able to fail over to a second on-premises data center.\n\n✑ The reporting application must be able to recover point-in-time data at a daily granularity. The RTO is eight hours.\n\n✑ The finance application requires that data be retained for seven years. In the event of a disaster, the application must be able to run from\n\nAzure. The recovery time objective (RTO) is 10 minutes.\n\nYou need to recommend which services meet the business continuity and disaster recovery objectives. The solution must minimize costs.\n\nWhat should you recommend for each application? To answer, drag the appropriate services to the correct applications. Each service may be used\n\nonce, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "Azure Site Recovery; Azure Site Recovery and Azure Backup; Azure Backup only",
    "explanation": "Azure Site Recovery orchestre la réplication et le basculement de machines pour la reprise après sinistre. Il complète la sauvegarde, qui répond à un autre objectif : restaurer des données ou des points dans le temps.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure Site Recovery"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure Site Recovery and Azure Backup"
        },
        {
          "label": "Sélection 3",
          "choices": [],
          "expected": "Azure Backup only"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T3-Q12-p104-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q12-p104-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://lighthousemsp.com/whats-the-difference-between-azure-backup-and-azure-site-recovery/"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Site Recovery; Azure Site Recovery and Azure Backup; Azure Backup only",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 104,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure Site Recovery - Azure Site Recovery - Coordinates virtual-machine and physical-server replication, failover, and fullback. DR solutions have low Recovery point objectives; DR copy can be behind by a few seconds/minutes. DR needs only operational recovery data, which can take hours to a day. Using DR data for long-term retention is not recommended because of the fine-grained data capture. Disaster recovery solutions have smaller Recovery time objectives because they are more in sync with the source. Remote monitor the health of machines and create customizable recovery plans. Box 2: Azure Site Recovery and Azure Backup Backup ensures that your data is safe and recoverable while Site Recovery keeps your workloads available when/if an outage occurs. Box 3: Azure Backup only - Azure Backup - Backs up data on-premises and in the cloud Have wide variability in their acceptable Recovery point objective. VM backups usually one day while database backups as low as 15 minutes. Backup data is typically retained for 30 days or less. From a compliance view, data may need to be saved for years. Backup data is ideal for archiving in such instances. Because of a larger Recovery point objective, the amount of data a backup solution needs to process is usually much higher, which leads to a longer Recovery time objective.",
    "pedagogicalContext": "Azure Site Recovery orchestre la réplication et le basculement de machines pour la reprise après sinistre. Il complète la sauvegarde, qui répond à un autre objectif : restaurer des données ou des points dans le temps."
  },
  {
    "id": "AZ305-T3-Q13",
    "topic": 3,
    "number": 13,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n✑ Failover between replicas of the database must occur without any data loss.\n\n✑ The database must remain available in the event of a zone outage.\n\n✑ Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Database Premium",
      "Azure SQL Database Basic",
      "Azure SQL Managed Instance General Purpose"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 105,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T3-Q14",
    "topic": 3,
    "number": 14,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n✑ Failover between replicas of the database must occur without any data loss.\n\n✑ The database must remain available in the event of a zone outage.\n\n✑ Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Database Premium",
      "Azure SQL Database Basic",
      "Azure SQL Database Hyperscale"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 105,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T3-Q15",
    "topic": 3,
    "number": 15,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou need to deploy resources to host a stateless web app in an Azure subscription. The solution must meet the following requirements:\n\n✑ Provide access to the full .NET framework.\n\n✑ Provide redundancy if an Azure region fails.\n\n✑ Grant administrators access to the operating system to install custom application dependencies.\n\nSolution: You deploy a web app in an Isolated App Service plan.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You deploy a web app in an Isolated App Service plan. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 106,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You deploy a web app in an Isolated App Service plan. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T3-Q16",
    "topic": 3,
    "number": 16,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n✑ Failover between replicas of the database must occur without any data loss.\n\n✑ The database must remain available in the event of a zone outage.\n\n✑ Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Database Serverless",
      "Azure SQL Database Business Critical",
      "Azure SQL Database Basic",
      "Azure SQL Database Standard"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 106,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T3-Q17",
    "topic": 3,
    "number": 17,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have an on-premises Microsoft SQL Server database named SQL1.\n\nYou plan to migrate SQL1 to Azure.\n\nYou need to recommend a hosting solution for SQL1. The solution must meet the following requirements:\n\n• Support the deployment of multiple secondary, read-only replicas.\n\n• Support automatic replication between primary and secondary replicas.\n\n• Support failover between primary and secondary replicas within a 15-minute recovery time objective (RTO).\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q17-p107-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q17-p107-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 107,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q18",
    "topic": 3,
    "number": 18,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have two on-premises Microsoft SQL Server 2017 instances that host an Always On availability group named AG1. AG1 contains a single\n\ndatabase named DB1.\n\nYou have an Azure subscription that contains a virtual machine named VM1. VM1 runs Linux and contains a SQL Server 2019 instance.\n\nYou need to migrate DB1 to VM1. The solution must minimize downtime on DB1.\n\nWhat should you do? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q18-p108-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q18-p108-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 108,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q19",
    "topic": 3,
    "number": 19,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You are building an Azure web app that will store the Personally Identifiable Information (PII) of employees.\n\nYou need to recommend an Azure SQL. Database solution for the web app. The solution must meet the following requirements:\n\n• Maintain availability in the event of a single datacenter outage.\n\n• Support the encryption of specific columns that contain PII.\n\n• Automatically scale up during payroll operations.\n\n• Minimize costs.\n\nWhat should you include in the recommendations? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q19-p109-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q19-p109-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 109,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q20",
    "topic": 3,
    "number": 20,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You plan to deploy an Azure Database for MySQL flexible server named Server1 to the East US Azure region.\n\nYou need to implement a business continuity solution for Server1. The solution must minimize downtime in the event of a failover to a paired\n\nregion.\n\nWhat should you do?",
    "solutionAnswer": "Implement Geo-redundant backup.",
    "explanation": "Azure Backup protège les données et machines avec des points de restauration et des politiques de rétention. La sauvegarde ne remplace pas un mécanisme de réplication/basculement de reprise après sinistre.",
    "options": [
      "Create a read replica.",
      "Store the database files in Azure premium file shares.",
      "Implement Geo-redundant backup.",
      "Configure native MySQL replication."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Implement Geo-redundant backup.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 110,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Backup protège les données et machines avec des points de restauration et des politiques de rétention. La sauvegarde ne remplace pas un mécanisme de réplication/basculement de reprise après sinistre."
  },
  {
    "id": "AZ305-T3-Q21",
    "topic": 3,
    "number": 21,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have an Azure subscription that contains the resources shown in the following table.\n\nYou need to recommend a load balancing solution that will distribute incoming traffic for VMSS1 across NVA1 and NVA2. The solution must\n\nminimize administrative effort.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Gateway Load Balancer",
    "explanation": "La correction du support retient « Gateway Load Balancer ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Gateway Load Balancer",
      "Azure Front Door",
      "Azure Application Gateway",
      "Azure Traffic Manager"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T3-Q21-p110-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Gateway Load Balancer",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 110,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Gateway Load Balancer ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T3-Q22",
    "topic": 3,
    "number": 22,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have the Azure subscriptions shown in the following table.\n\nContoso.onmicrosft.com contains a user named User1.\n\nYou need to deploy a solution to protect against ransomware attacks. The solution must meet the following requirements:\n\n• Ensure that all the resources in Sub1 are backed up by using Azure Backup.\n\n• Require that User1 first be assigned a role for Sub2 before the user can make major changes to the backup configuration.\n\nWhat should you create in each subscription? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q22-p111-1-q.png",
      "assets/az305/AZ305-T3-Q22-p111-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q22-p111-3-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 111,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q23",
    "topic": 3,
    "number": 23,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have 10 on-premises servers that run Windows Server.\n\nYou need to perform daily backups of the servers to a Recovery Services vault. The solution must meet the following requirements:\n\n• Back up all the files and folders on the servers.\n\n• Maintain three copies of the backups in Azure.\n\n• Minimize costs.\n\nWhat should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q23-p112-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q23-p112-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 112,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q24",
    "topic": 3,
    "number": 24,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You plan to deploy a containerized web-app that will be hosted in five Azure Kubernetes Service (AKS) clusters. Each cluster will be hosted in a\n\ndifferent Azure region.\n\nYou need to provide access to the app from the internet. The solution must meet the following requirements:\n\n• Incoming HTTPS requests must be routed to the cluster that has the lowest network latency.\n\n• HTTPS traffic to individual pods must be routed via an ingress controller.\n\n• In the event of an AKS cluster outage, failover time must be minimized.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q24-p113-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q24-p113-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 113,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q25",
    "topic": 3,
    "number": 25,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have an Azure subscription.\n\nYou create a storage account that will store documents.\n\nYou need to configure the storage account to meet the following requirements:\n\n• Ensure that retention policies are standardized across the subscription.\n\n• Ensure that data can be purged if the data is copied to an unauthorized location.\n\nWhich two settings should you enable? To answer, select the appropriate settings in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q25-p114-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q25-p115-1-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 114,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q26",
    "topic": 3,
    "number": 26,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You have an Azure subscription.\n\nYou are designing a solution for containerized apps. The solution must meet the following requirements:\n\n• Automatically scale the apps by creating additional instances.\n\n• Minimize administrative effort to maintain nodes and clusters.\n\n• Ensure that containerized apps are highly available across multiple availability zones.\n\n• Provide a central location for the lifecycle management and storage of container images.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q26-p116-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q26-p116-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 116,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T3-Q27",
    "topic": 3,
    "number": 27,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions de continuité d’activité",
    "prompt": "You plan to use Azure Storage to store data assets.\n\nYou need to identify the procedure to fail over a general-purpose v2 account as part of a disaster recovery plan. The solution must meet the\n\nfollowing requirements:\n\n• Apps must be able to access the storage account after a failover.\n\n• You must be able to fail back the storage account to the original location.\n\n• Downtime must be minimized.\n\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\n\narrange them in the correct order.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T3-Q27-p117-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T3-Q27-p117-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 117,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q1",
    "topic": 4,
    "number": 1,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription that contains a Basic Azure virtual WAN named VirtualWAN1 and the virtual hubs shown in the following table.\n\nYou have an ExpressRoute circuit in the US East Azure region.\n\nYou need to create an ExpressRoute association to VirtualWAN1.\n\nWhat should you do first?",
    "solutionAnswer": "Upgrade VirtualWAN1 to Standard.",
    "explanation": "Azure Virtual WAN centralise la connectivité de succursales, VPN, ExpressRoute et hubs Azure. Un hub sécurisé ajoute des fonctions de sécurité et de routage centralisées.",
    "options": [
      "Upgrade VirtualWAN1 to Standard.",
      "Create a gateway on Hub1.",
      "Enable the ExpressRoute premium add-on.",
      "Create a hub virtual network in US East."
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T4-Q1-p118-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Upgrade VirtualWAN1 to Standard.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 118,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Virtual WAN centralise la connectivité de succursales, VPN, ExpressRoute et hubs Azure. Un hub sécurisé ajoute des fonctions de sécurité et de routage centralisées."
  },
  {
    "id": "AZ305-T4-Q2",
    "topic": 4,
    "number": 2,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription that contains a storage account.\n\nAn application sometimes writes duplicate files to the storage account.\n\nYou have a PowerShell script that identifies and deletes duplicate files in the storage account. Currently, the script is run manually after approval\n\nfrom the operations manager.\n\nYou need to recommend a serverless solution that performs the following actions:\n\n✑ Runs the script once an hour to identify whether duplicate files exist\n\n✑ Sends an email notification to the operations manager requesting approval to delete the duplicate files\n\n✑ Processes an email response from the operations manager specifying whether the deletion was approved\n\n✑ Runs the script if the deletion was approved\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Logic Apps and Azure Functions",
    "explanation": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau.",
    "options": [
      "Azure Logic Apps and Azure Event Grid",
      "Azure Logic Apps and Azure Functions",
      "Azure Pipelines and Azure Service Fabric",
      "Azure Functions and Azure Batch"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Logic Apps and Azure Functions",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 118,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau."
  },
  {
    "id": "AZ305-T4-Q3",
    "topic": 4,
    "number": 3,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company has the infrastructure shown in the following table.\n\nThe on-premises Active Directory domain syncs with Azure Active Directory (Azure AD).\n\nServer1 runs an application named App1 that uses LDAP queries to verify user identities in the on-premises Active Directory domain.\n\nYou plan to migrate Server1 to a virtual machine in Subscription1.\n\nA company security policy states that the virtual machines and services deployed to Subscription1 must be prevented from accessing the on-\n\npremises network.\n\nYou need to recommend a solution to ensure that App1 continues to function after the migration. The solution must meet the security policy.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure AD Domain Services (Azure AD DS)",
    "explanation": "La correction du support retient « Azure AD Domain Services (Azure AD DS) ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure AD Application Proxy",
      "the Active Directory Domain Services role on a virtual machine",
      "an Azure VPN gateway",
      "Azure AD Domain Services (Azure AD DS)"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T4-Q3-p119-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Domain Services (Azure AD DS)",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 119,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure AD Domain Services (Azure AD DS) ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q4",
    "topic": 4,
    "number": 4,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a solution that will execute custom C# code in response to an event routed to Azure Event Grid. The solution must meet the\n\nfollowing requirements:\n\n✑ The executed code must be able to access the private IP address of a Microsoft SQL Server instance that runs on an Azure virtual machine.\n\n✑ Costs must be minimized.\n\nWhat should you include in the solution?",
    "solutionAnswer": "Azure Functions in the Premium plan",
    "explanation": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau.",
    "options": [
      "Azure Logic Apps in the Consumption plan",
      "Azure Functions in the Premium plan",
      "Azure Functions in the Consumption plan",
      "Azure Logic Apps in the integrated service environment"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Functions in the Premium plan",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 119,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau."
  },
  {
    "id": "AZ305-T4-Q5",
    "topic": 4,
    "number": 5,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises network and an Azure subscription. The on-premises network has several branch offices.\n\nA branch office in Toronto contains a virtual machine named VM1 that is configured as a file server. Users access the shared files on VM1 from all\n\nthe offices.\n\nYou need to recommend a solution to ensure that the users can access the shared files as quickly as possible if the Toronto branch office is\n\ninaccessible.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "an Azure file share and Azure File Sync",
    "explanation": "Azure File Sync met en cache un partage Azure Files sur des serveurs Windows et synchronise les fichiers avec le cloud. Il permet de conserver une expérience de serveur de fichiers local tout en centralisant les données.",
    "options": [
      "a Recovery Services vault and Windows Server Backup",
      "Azure blob containers and Azure File Sync",
      "a Recovery Services vault and Azure Backup",
      "an Azure file share and Azure File Sync"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Azure file share and Azure File Sync",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 120,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure File Sync met en cache un partage Azure Files sur des serveurs Windows et synchronise les fichiers avec le cloud. Il permet de conserver une expérience de serveur de fichiers local tout en centralisant les données."
  },
  {
    "id": "AZ305-T4-Q6",
    "topic": 4,
    "number": 6,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription named Subscription1 that is linked to a hybrid Azure Active Directory (Azure AD) tenant.\n\nYou have an on-premises datacenter that does NOT have a VPN connection to Subscription1. The datacenter contains a computer named Server1\n\nthat has\n\nMicrosoft SQL Server 2016 installed. Server is prevented from accessing the internet.\n\nAn Azure logic app resource named LogicApp1 requires write access to a database on Server1.\n\nYou need to recommend a solution to provide LogicApp1 with the ability to access Server1.\n\nWhat should you recommend deploying on-premises and in Azure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "An on-premises data gateway; A connection gateway resource",
    "explanation": "La correction du support retient « An on-premises data gateway; A connection gateway resource ». Dans l’énoncé, le point à résoudre est : « What should you recommend deploying on-premises and in Azure? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "An on-premises data gateway"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "A connection gateway resource"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q6-p121-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q6-p121-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/connectors/connectors-create-api-sqlazure"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "An on-premises data gateway; A connection gateway resource",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 121,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: An on-premises data gateway For logic apps in global, multi-tenant Azure that connect to on-premises SQL Server, you need to have the on-premises data gateway installed on a local computer and a data gateway resource that's already created in Azure. Box 2: A connection gateway resource",
    "pedagogicalContext": "La correction du support retient « An on-premises data gateway; A connection gateway resource ». Dans l’énoncé, le point à résoudre est : « What should you recommend deploying on-premises and in Azure? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q7",
    "topic": 4,
    "number": 7,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company develops a web service that is deployed to an Azure virtual machine named VM1. The web service allows an API to access real-\n\ntime data from\n\nVM1.\n\nThe current virtual machine deployment is shown in the Deployment exhibit.\n\nThe chief technology officer (CTO) sends you the following email message: \"Our developers have deployed the web service to a virtual machine\n\nnamed VM1.\n\nTesting has shown that the API is accessible from VM1 and VM2. Our partners must be able to connect to the API over the Internet. Partners will\n\nuse this data in applications that they develop.\"\n\nYou deploy an Azure API Management (APIM) service. The relevant API Management configuration is shown in the API exhibit.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q7-p122-1-q.png",
      "assets/az305/AZ305-T4-Q7-p122-2-q.jpeg",
      "assets/az305/AZ305-T4-Q7-p122-3-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q7-p123-1-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/api-management/api-management-using-with-vnet"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 122,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q8",
    "topic": 4,
    "number": 8,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company has an existing web app that runs on Azure virtual machines.\n\nYou need to ensure that the app is protected from SQL injection attempts and uses a layer-7 load balancer. The solution must minimize\n\ndisruptions to the code of the app.\n\nWhat should you recommend? To answer, drag the appropriate services to the correct targets. Each service may be used once, more than once, or\n\nnot at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "Azure Application Gateway; Web Application Firewall (WAF)",
    "explanation": "Application Gateway est un équilibreur de charge applicatif régional de couche 7. Avec WAF, il peut aussi protéger les applications HTTP(S) contre des attaques web courantes.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure Application Gateway"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Web Application Firewall (WAF)"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q8-p124-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q8-p124-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/web-application-firewall/ag/application-gateway-customize-waf-rules-portal"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Application Gateway; Web Application Firewall (WAF)",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 124,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure Application Gateway The Azure Application Gateway Web Application Firewall (WAF) provides protection for web applications. These protections are provided by the Open Web Application Security Project (OWASP) Core Rule Set (CRS). Box 2: Web Application Firewall (WAF)",
    "pedagogicalContext": "Application Gateway est un équilibreur de charge applicatif régional de couche 7. Avec WAF, il peut aussi protéger les applications HTTP(S) contre des attaques web courantes."
  },
  {
    "id": "AZ305-T4-Q9",
    "topic": 4,
    "number": 9,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing a microservices architecture that will be hosted in an Azure Kubernetes Service (AKS) cluster. Apps that will consume the\n\nmicroservices will be hosted on Azure virtual machines. The virtual machines and the AKS cluster will reside on the same virtual network.\n\nYou need to design a solution to expose the microservices to the consumer apps. The solution must meet the following requirements:\n\n✑ Ingress access to the microservices must be restricted to a single private IP address and protected by using mutual TLS authentication.\n\n✑ The number of incoming microservice calls must be rate-limited.\n\n✑ Costs must be minimized.\n\nWhat should you include in the solution?",
    "solutionAnswer": "Azure API Management Premium tier with virtual network connection",
    "explanation": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend.",
    "options": [
      "Azure App Gateway with Azure Web Application Firewall (WAF)",
      "Azure API Management Standard tier with a service endpoint",
      "Azure Front Door with Azure Web Application Firewall (WAF)",
      "Azure API Management Premium tier with virtual network connection"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure API Management Premium tier with virtual network connection",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 125,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend."
  },
  {
    "id": "AZ305-T4-Q10",
    "topic": 4,
    "number": 10,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have a .NET web service named Service1 that performs the following tasks:\n\n✑ Reads and writes temporary files to the local file system.\n\n✑ Writes to the Application event log.\n\nYou need to recommend a solution to host Service1 in Azure. The solution must meet the following requirements:\n\n✑ Minimize maintenance overhead.\n\n✑ Minimize costs.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "an Azure App Service web app",
    "explanation": "La correction du support retient « an Azure App Service web app ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "an Azure App Service web app",
      "an Azure virtual machine scale set",
      "an App Service Environment (ASE)",
      "an Azure Functions app"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Azure App Service web app",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 125,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « an Azure App Service web app ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q11",
    "topic": 4,
    "number": 11,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have the Azure resources shown in the following table.\n\nYou need to deploy a new Azure Firewall policy that will contain mandatory rules for all Azure Firewall deployments. The new policy will be\n\nconfigured as a parent policy for the existing policies.\n\nWhat is the minimum number of additional Azure Firewall policies you should create?",
    "solutionAnswer": "3",
    "explanation": "La correction du support retient « 3 ». Dans l’énoncé, le point à résoudre est : « You need to deploy a new Azure Firewall policy that will contain mandatory rules for all Azure Firewall deployments. The new policy will be » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T4-Q11-p126-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "3",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 126,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « 3 ». Dans l’énoncé, le point à résoudre est : « You need to deploy a new Azure Firewall policy that will contain mandatory rules for all Azure Firewall deployments. The new policy will be » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q12",
    "topic": 4,
    "number": 12,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company has an app named App1 that uses data from the on-premises Microsoft SQL Server databases shown in the following table.\n\nApp1 and the data are used on the first day of the month only. The data is not expected to grow more than 3 percent each year.\n\nThe company is rewriting App1 as an Azure web app and plans to migrate all the data to Azure.\n\nYou need to migrate the data to Azure SQL Database and ensure that the database is only available on the first day of each month.\n\nWhich service tier should you use?",
    "solutionAnswer": "vCore-based General Purpose",
    "explanation": "La correction du support retient « vCore-based General Purpose ». Dans l’énoncé, le point à résoudre est : « Which service tier should you use? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "vCore-based General Purpose",
      "DTU-based Standard",
      "vCore-based Business Critical",
      "DTU-based Basic"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T4-Q12-p126-2-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "vCore-based General Purpose",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 126,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « vCore-based General Purpose ». Dans l’énoncé, le point à résoudre est : « Which service tier should you use? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q13",
    "topic": 4,
    "number": 13,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Service Fabric",
      "Azure Data Lake",
      "Azure Service Bus",
      "Azure Traffic Manager"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 127,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q14",
    "topic": 4,
    "number": 14,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company has 300 virtual machines hosted in a VMware environment. The virtual machines vary in size and have various utilization levels.\n\nYou plan to move all the virtual machines to Azure.\n\nYou need to recommend how many and what size Azure virtual machines will be required to move the current workloads to Azure. The solution\n\nmust minimize administrative effort.\n\nWhat should you use to make the recommendation?",
    "solutionAnswer": "Azure Migrate",
    "explanation": "Azure Migrate regroupe l’évaluation et la migration de serveurs et charges vers Azure. C’est le point d’entrée à privilégier pour inventorier, dimensionner et migrer des workloads existants.",
    "options": [
      "Azure Pricing calculator",
      "Azure Advisor",
      "Azure Migrate",
      "Azure Cost Management"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Migrate",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 127,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Migrate regroupe l’évaluation et la migration de serveurs et charges vers Azure. C’est le point d’entrée à privilégier pour inventorier, dimensionner et migrer des workloads existants."
  },
  {
    "id": "AZ305-T4-Q15",
    "topic": 4,
    "number": 15,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to provision a High Performance Computing (HPC) cluster in Azure that will use a third-party scheduler.\n\nYou need to recommend a solution to provision and manage the HPC cluster node.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure CycleCloud",
    "explanation": "La correction du support retient « Azure CycleCloud ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Automation",
      "Azure CycleCloud",
      "Azure Purview",
      "Azure Lighthouse"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure CycleCloud",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 127,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure CycleCloud ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q16",
    "topic": 4,
    "number": 16,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing an Azure App Service web app.\n\nYou plan to deploy the web app to the North Europe Azure region and the West Europe Azure region.\n\nYou need to recommend a solution for the web app. The solution must meet the following requirements:\n\n✑ Users must always access the web app from the North Europe region, unless the region fails.\n\n✑ The web app must be available to users if an Azure region is unavailable.\n\n✑ Deployment costs must be minimized.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "A Traffic Manager profile; Priority traffic routing",
    "explanation": "Traffic Manager effectue un routage DNS entre plusieurs points de terminaison selon une méthode comme priorité, performance ou géographie. Il n’agit pas comme un proxy HTTP en ligne.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "A Traffic Manager profile"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Priority traffic routing"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q16-p128-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q16-p128-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/app-service-web-app/multi-region"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-routing-methods"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "A Traffic Manager profile; Priority traffic routing",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 128,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: A Traffic Manager profile To support load balancing across the regions we need a Traffic Manager. Box 2: Priority traffic routing - Priority traffic-routing method. Often an organization wants to provide reliability for their services. To do so, they deploy one or more backup services in case their primary goes down. The 'Priority' traffic-routing method allows Azure customers to easily implement this failover pattern.",
    "pedagogicalContext": "Traffic Manager effectue un routage DNS entre plusieurs points de terminaison selon une méthode comme priorité, performance ou géographie. Il n’agit pas comme un proxy HTTP en ligne."
  },
  {
    "id": "AZ305-T4-Q17",
    "topic": 4,
    "number": 17,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\n\nYou need to design an access solution for the app. The solution must meet the following replication requirements:\n\n✑ Support rate limiting.\n\n✑ Balance requests between all instances.\n\n✑ Ensure that users can access the app in the event of a regional outage.\n\nSolution: You use Azure Traffic Manager to provide access to the app.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You use Azure Traffic Manager to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 129,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You use Azure Traffic Manager to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q18",
    "topic": 4,
    "number": 18,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\n\nYou need to design an access solution for the app. The solution must meet the following replication requirements:\n\n✑ Support rate limiting.\n\n✑ Balance requests between all instances.\n\n✑ Ensure that users can access the app in the event of a regional outage.\n\nSolution: You use Azure Load Balancer to provide access to the app.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You use Azure Load Balancer to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 129,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You use Azure Load Balancer to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q19",
    "topic": 4,
    "number": 19,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\n\nYou need to design an access solution for the app. The solution must meet the following replication requirements:\n\n✑ Support rate limiting.\n\n✑ Balance requests between all instances.\n\n✑ Ensure that users can access the app in the event of a regional outage.\n\nSolution: You use Azure Application Gateway to provide access to the app.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You use Azure Application Gateway to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 130,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You use Azure Application Gateway to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q20",
    "topic": 4,
    "number": 20,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company has two on-premises sites in New York and Los Angeles and Azure virtual networks in the East US Azure region and the West US\n\nAzure region.\n\nEach on-premises site has ExpressRoute Global Reach circuits to both regions.\n\nYou need to recommend a solution that meets the following requirements:\n\n✑ Outbound traffic to the internet from workloads hosted on the virtual networks must be routed through the closest available on-premises site.\n\n✑ If an on-premises site fails, traffic from the workloads on the virtual networks to the internet must reroute automatically to the other site.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Border Gateway Protocol (BGP); Border Gateway Protocol (BGP)",
    "explanation": "La correction du support retient « Border Gateway Protocol (BGP); Border Gateway Protocol (BGP) ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Border Gateway Protocol (BGP)"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Border Gateway Protocol (BGP)"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q20-p131-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q20-p131-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/ja-jp/azure/expressroute/designing-for-disaster-recovery-with-expressroute-privatepeering"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/expressroute/expressroute-routing"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Border Gateway Protocol (BGP); Border Gateway Protocol (BGP)",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 131,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Border Gateway Protocol (BGP) An on-premises network gateway can exchange routes with an Azure virtual network gateway using the border gateway protocol (BGP). Using BGP with an Azure virtual network gateway is dependent on the type you selected when you created the gateway. If the type you selected were: ExpressRoute: You must use BGP to advertise on-premises routes to the Microsoft Edge router. You cannot create user-defined routes to force traffic to the ExpressRoute virtual network gateway if you deploy a virtual network gateway deployed as type: ExpressRoute. You can use user-defined routes for forcing traffic from the Express Route to, for example, a Network Virtual Appliance. Box 2: Border Gateway Protocol (BGP) Incorrect: Microsoft does not support HSRP or VRRP for high availability configurations.",
    "pedagogicalContext": "La correction du support retient « Border Gateway Protocol (BGP); Border Gateway Protocol (BGP) ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q21",
    "topic": 4,
    "number": 21,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing an application that will use Azure Linux virtual machines to analyze video files. The files will be uploaded from corporate offices\n\nthat connect to\n\nAzure by using ExpressRoute.\n\nYou plan to provision an Azure Storage account to host the files.\n\nYou need to ensure that the storage account meets the following requirements:\n\n✑ Supports video files of up to 7 TB\n\n✑ Provides the highest availability possible\n\n✑ Ensures that storage is optimized for the large video files\n\n✑ Ensures that files from the on-premises network are uploaded by using ExpressRoute\n\nHow should you configure the storage account? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q21-p132-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q21-p132-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 132,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q22",
    "topic": 4,
    "number": 22,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "A company plans to implement an HTTP-based API to support a web app. The web app allows customers to check the status of their orders.\n\nThe API must meet the following requirements:\n\n✑ Implement Azure Functions.\n\n✑ Provide public read-only operations.\n\n✑ Prevent write operations.\n\nYou need to recommend which HTTP methods and authorization level to configure.\n\nWhat should you recommend? To answer, configure the appropriate options in the dialog box in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "GET only; Anonymous",
    "explanation": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "GET only"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Anonymous"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q22-p133-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q22-p133-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "GET only; Anonymous",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 133,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: GET only - Get for read-only- Box 2: Anonymous - Anonymous for public operations.",
    "pedagogicalContext": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau."
  },
  {
    "id": "AZ305-T4-Q23",
    "topic": 4,
    "number": 23,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription.\n\nYou need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the\n\nfollowing requirements:\n\n✑ Only allow the creation of the virtual machines in specific regions.\n\n✑ Only allow the creation of specific sizes of virtual machines.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Policy",
    "explanation": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante.",
    "options": [
      "Azure Resource Manager (ARM) templates",
      "Azure Policy",
      "Conditional Access policies",
      "role-based access control (RBAC)"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Policy",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 134,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante."
  },
  {
    "id": "AZ305-T4-Q24",
    "topic": 4,
    "number": 24,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises network that uses an IP address space of 172.16.0.0/16.\n\nYou plan to deploy 30 virtual machines to a new Azure subscription.\n\nYou identify the following technical requirements:\n\n✑ All Azure virtual machines must be placed on the same subnet named Subnet1.\n\n✑ All the Azure virtual machines must be able to communicate with all on-premises servers.\n\n✑ The servers must be able to communicate between the on-premises network and Azure by using a site-to-site VPN.\n\nYou need to recommend a subnet design that meets the technical requirements.\n\nWhat should you include in the recommendation? To answer, drag the appropriate network addresses to the correct subnets. Each network\n\naddress may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q24-p134-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q24-p134-2-s.jpeg"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 134,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q25",
    "topic": 4,
    "number": 25,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have data files in Azure Blob Storage.\n\nYou plan to transform the files and move them to Azure Data Lake Storage.\n\nYou need to transform the data by using mapping data flow.\n\nWhich service should you use?",
    "solutionAnswer": "Azure Data Factory",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "Azure Databricks",
      "Azure Storage Sync",
      "Azure Data Factory",
      "Azure Data Box Gateway"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Factory",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 135,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T4-Q26",
    "topic": 4,
    "number": 26,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription.\n\nYou need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following\n\nrequirements:\n\n✑ Minimize the time it takes to provision compute resources during scale-out operations.\n\n✑ Support autoscaling of Windows Server containers.\n\nWhich scaling option should you recommend?",
    "solutionAnswer": "cluster autoscaler",
    "explanation": "Le cluster autoscaler ajuste le nombre de nœuds d’un cluster en fonction des pods qui ne peuvent pas être planifiés ou de la capacité inutilisée. Il complète l’autoscaling des pods, qui agit sur le nombre de réplicas applicatifs.",
    "options": [
      "Kubernetes version 1.20.2 or newer",
      "Virtual nodes with Virtual Kubelet ACI",
      "cluster autoscaler",
      "horizontal pod autoscaler"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "cluster autoscaler",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 135,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le cluster autoscaler ajuste le nombre de nœuds d’un cluster en fonction des pods qui ne peuvent pas être planifiés ou de la capacité inutilisée. Il complète l’autoscaling des pods, qui agit sur le nombre de réplicas applicatifs."
  },
  {
    "id": "AZ305-T4-Q27",
    "topic": 4,
    "number": 27,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your on-premises network contains a file server named Server1 that stores 500 GB of data.\n\nYou need to use Azure Data Factory to copy the data from Server1 to Azure Storage.\n\nYou add a new data factory.\n\nWhat should you do next? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Install a self-hosted integration runtime.; Create a pipeline.",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Install a self-hosted integration runtime."
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Create a pipeline."
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q27-p136-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q27-p136-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/data-factory/connector-file-system"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Install a self-hosted integration runtime.; Create a pipeline.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 136,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Install a self-hosted integration runtime. If your data store is located inside an on-premises network, an Azure virtual network, or Amazon Virtual Private Cloud, you need to configure a self-hosted integration runtime to connect to it. The Integration Runtime to be used to connect to the data store. You can use Azure Integration Runtime or Self-hosted Integration Runtime (if your data store is located in private network). If not specified, it uses the default Azure Integration Runtime. Box 2: Create a pipeline. You perform the Copy activity with a pipeline.",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T4-Q28",
    "topic": 4,
    "number": 28,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription.\n\nYou need to recommend an Azure Kubernetes Service (AKS) solution that will use Linux nodes. The solution must meet the following\n\nrequirements:\n\n✑ Minimize the time it takes to provision compute resources during scale-out operations.\n\n✑ Support autoscaling of Linux containers.\n\n✑ Minimize administrative effort.\n\nWhich scaling option should you recommend?",
    "solutionAnswer": "virtual nodes",
    "explanation": "La correction du support retient « virtual nodes ». Dans l’énoncé, le point à résoudre est : « Which scaling option should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "horizontal pod autoscaler",
      "cluster autoscaler",
      "virtual nodes",
      "Virtual Kubelet"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "virtual nodes",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 137,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « virtual nodes ». Dans l’énoncé, le point à résoudre est : « Which scaling option should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q29",
    "topic": 4,
    "number": 29,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing an order processing system in Azure that will contain the Azure resources shown in the following table.\n\nThe order processing system will have the following transaction flow:\n\n✑ A customer will place an order by using App1.\n\n✑ When the order is received, App1 will generate a message to check for product availability at vendor 1 and vendor 2.\n\n✑ An integration component will process the message, and then trigger either Function1 or Function2 depending on the type of order.\n\n✑ Once a vendor confirms the product availability, a status message for App1 will be generated by Function1 or Function2.\n\n✑ All the steps of the transaction will be logged to storage1.\n\nWhich type of resource should you recommend for the integration component?",
    "solutionAnswer": "an Azure Service Bus queue",
    "explanation": "Une file Service Bus fournit une messagerie fiable point-à-point avec des fonctions avancées de livraison, verrouillage et reprise. Un message est consommé par un traitement plutôt que diffusé à plusieurs abonnés.",
    "options": [
      "an Azure Service Bus queue",
      "an Azure Data Factory pipeline",
      "an Azure Event Grid domain",
      "an Azure Event Hubs capture"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T4-Q29-p137-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Azure Service Bus queue",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 137,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Une file Service Bus fournit une messagerie fiable point-à-point avec des fonctions avancées de livraison, verrouillage et reprise. Un message est consommé par un traitement plutôt que diffusé à plusieurs abonnés."
  },
  {
    "id": "AZ305-T4-Q30",
    "topic": 4,
    "number": 30,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have 100 Microsoft SQL Server Integration Services (SSIS) packages that are configured to use 10 on-premises SQL Server databases as their\n\ndestinations.\n\nYou plan to migrate the 10 on-premises databases to Azure SQL Database.\n\nYou need to recommend a solution to create Azure-SQL Server Integration Services (SSIS) packages. The solution must ensure that the packages\n\ncan target the\n\nSQL Database instances as their destinations.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Data Factory",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "Data Migration Assistant (DMA)",
      "Azure Data Factory",
      "Azure Data Catalog",
      "SQL Server Migration Assistant (SSMA)"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Factory",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 138,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T4-Q31",
    "topic": 4,
    "number": 31,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure virtual machine named VM1 that runs Windows Server 2019 and contains 500 GB of data files.\n\nYou are designing a solution that will use Azure Data Factory to transform the data files, and then load the files to Azure Data Lake Storage.\n\nWhat should you deploy on VM1 to support the design?",
    "solutionAnswer": "the self-hosted integration runtime",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "the On-premises data gateway",
      "the Azure Pipelines agent",
      "the self-hosted integration runtime",
      "the Azure File Sync agent"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "the self-hosted integration runtime",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 138,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T4-Q32",
    "topic": 4,
    "number": 32,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant that syncs with an on-premises Active Directory domain.\n\nYour company has a line-of-business (LOB) application that was developed internally.\n\nYou need to implement SAML single sign-on (SSO) and enforce multi-factor authentication (MFA) when users attempt to access the application\n\nfrom an unknown location.\n\nWhich two features should you include in the solution? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Azure AD enterprise applications; Conditional Access policies",
    "explanation": "Conditional Access applique des règles d’accès en fonction de signaux comme l’identité, l’appareil, l’emplacement ou le niveau de risque. Dans un scénario d’architecture, il faut l’associer aux exigences d’accès conditionnel plutôt qu’à l’hébergement de l’application.",
    "options": [
      "Azure AD Privileged Identity Management (PIM)",
      "Azure Application Gateway",
      "Azure AD enterprise applications",
      "Azure AD Identity Protection",
      "Conditional Access policies"
    ],
    "answerIndices": [
      2,
      4
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD enterprise applications; Conditional Access policies",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 139,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Conditional Access applique des règles d’accès en fonction de signaux comme l’identité, l’appareil, l’emplacement ou le niveau de risque. Dans un scénario d’architecture, il faut l’associer aux exigences d’accès conditionnel plutôt qu’à l’hébergement de l’application."
  },
  {
    "id": "AZ305-T4-Q33",
    "topic": 4,
    "number": 33,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to automata the deployment of resources to Azure subscriptions.\n\nWhat is a difference between using Azure Blueprints and Azure Resource Manager (ARM) templates?",
    "solutionAnswer": "Blueprints remain connected to the deployed resources.",
    "explanation": "La correction du support retient « Blueprints remain connected to the deployed resources. ». Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "ARM templates remain connected to the deployed resources.",
      "Only blueprints can contain policy definitions.",
      "Only ARM templates can contain policy definitions.",
      "Blueprints remain connected to the deployed resources."
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Blueprints remain connected to the deployed resources.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 139,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Blueprints remain connected to the deployed resources. ». Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q34",
    "topic": 4,
    "number": 34,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have the resources shown in the following table.\n\nYou create a new resource group in Azure named RG2.\n\nYou need to move the virtual machines to RG2.\n\nWhat should you use to move each virtual machine? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure Resource Mover; Azure Migrate",
    "explanation": "Azure Migrate regroupe l’évaluation et la migration de serveurs et charges vers Azure. C’est le point d’entrée à privilégier pour inventorier, dimensionner et migrer des workloads existants.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure Resource Mover"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure Migrate"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q34-p140-1-q.png",
      "assets/az305/AZ305-T4-Q34-p140-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q34-p140-3-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/resource-mover/overview"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/migrate/migrate-services-overview"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-migrate"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Resource Mover; Azure Migrate",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 140,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure Resource Mover - To move Azure VMs to another region, Microsoft now recommends using Azure Resource Mover. Incorrect: Not Azure Migrate: We are not migrating, only moving a VM between resource groups. Box 2: Azure Migrate - Azure Migrate provides a centralized hub to assess and migrate on-premises servers, infrastructure, applications, and data to Azure. Azure migrate includes Azure Migrate Server Migration: Migrate VMware VMs, Hyper-V VMs, physical servers, other virtualized servers, and public cloud VMs to Azure. Incorrect: Not Arc: Azure Migrate is adequate. No need to use Azure Arc. Not Data Migration Assistant: Data Migration Assistant is a stand-alone tool to assess SQL Servers. It is used to assess SQL Server databases for migration to Azure SQL Database, Azure SQL Managed Instance, or Azure VMs running SQL Server. Not Lighthouse: Azure Lighthouse enables multi-tenant management with scalability, higher automation, and enhanced governance across resources. With Azure Lighthouse, service providers can deliver managed services using comprehensive and robust tooling built into the Azure platform. Customers maintain control over who has access to their tenant, which resources they can access, and what actions can be taken.",
    "pedagogicalContext": "Azure Migrate regroupe l’évaluation et la migration de serveurs et charges vers Azure. C’est le point d’entrée à privilégier pour inventorier, dimensionner et migrer des workloads existants."
  },
  {
    "id": "AZ305-T4-Q35",
    "topic": 4,
    "number": 35,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to deploy an Azure App Service web app that will have multiple instances across multiple Azure regions.\n\nYou need to recommend a load balancing service for the planned deployment The solution must meet the following requirements:\n\n✑ Maintain access to the app in the event of a regional outage.\n\n✑ Support Azure Web Application Firewall (WAF).\n\n✑ Support cookie-based affinity.\n\n✑ Support URL routing.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Front Door",
    "explanation": "Azure Front Door fournit une entrée globale HTTP(S), du routage applicatif et des fonctions de résilience/accélération à l’échelle mondiale. Il se distingue d’un load balancer régional ou d’un équipement réseau L4.",
    "options": [
      "Azure Front Door",
      "Azure Traffic Manager",
      "Azure Application Gateway",
      "Azure Load Balancer"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Front Door",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 141,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Front Door fournit une entrée globale HTTP(S), du routage applicatif et des fonctions de résilience/accélération à l’échelle mondiale. Il se distingue d’un load balancer régional ou d’un équipement réseau L4."
  },
  {
    "id": "AZ305-T4-Q36",
    "topic": 4,
    "number": 36,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have the Azure resources shown in the following table.\n\nYou need to design a solution that provides on-premises network connectivity to SQLDB1 through PE1.\n\nHow should you configure name resolution? To answer select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q36-p142-1-q.png",
      "assets/az305/AZ305-T4-Q36-p142-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q36-p142-3-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 142,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q37",
    "topic": 4,
    "number": 37,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing a microservices architecture that will support a web application.\n\nThe solution must meet the following requirements:\n\n✑ Deploy the solution on-premises and to Azure.\n\nSupport low-latency and hyper-scale operations.\n\n✑ Allow independent upgrades to each microservice.\n\n✑ Set policies for performing automatic repairs to the microservices.\n\nYou need to recommend a technology.\n\nWhat should you recommend?",
    "solutionAnswer": "Azure Service Fabric",
    "explanation": "Azure Service Fabric orchestre des applications distribuées et microservices avec gestion du cycle de vie, de l’état et de la résilience. Son intérêt apparaît lorsque l’architecture demande un contrôle fin sur des services distribués.",
    "options": [
      "Azure Container Instance",
      "Azure Logic App",
      "Azure Service Fabric",
      "Azure virtual machine scale set"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Fabric",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 143,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Service Fabric orchestre des applications distribuées et microservices avec gestion du cycle de vie, de l’état et de la résilience. Son intérêt apparaît lorsque l’architecture demande un contrôle fin sur des services distribués."
  },
  {
    "id": "AZ305-T4-Q38",
    "topic": 4,
    "number": 38,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou plan to deploy multiple instances of an Azure web app across several Azure regions.\n\nYou need to design an access solution for the app. The solution must meet the following replication requirements:\n\n✑ Support rate limiting.\n\n✑ Balance requests between all instances.\n\n✑ Ensure that users can access the app in the event of a regional outage.\n\nSolution: You use Azure Front Door to provide access to the app.\n\nDoes this meet the goal?",
    "solutionAnswer": "Yes",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You use Azure Front Door to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Yes",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 143,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You use Azure Front Door to provide access to the app. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q39",
    "topic": 4,
    "number": 39,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Activity Log",
    "explanation": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement.",
    "options": [
      "Azure Activity Log",
      "Azure Arc",
      "Azure Analysis Services",
      "Azure Monitor action groups"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Activity Log",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 144,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Activity Log contient les événements de contrôle du plan de gestion Azure, notamment les créations et modifications de ressources. C’est la source à privilégier pour retracer les opérations ARM au niveau d’un abonnement."
  },
  {
    "id": "AZ305-T4-Q40",
    "topic": 4,
    "number": 40,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription.\n\nYou need to recommend a solution to provide developers with the ability to provision Azure virtual machines. The solution must meet the\n\nfollowing requirements:\n\n✑ Only allow the creation of the virtual machines in specific regions.\n\n✑ Only allow the creation of specific sizes of virtual machines.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Policy",
    "explanation": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante.",
    "options": [
      "Attribute-based access control (ABAC)",
      "Azure Policy",
      "Conditional Access policies",
      "role-based access control (RBAC)"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Policy",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 144,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante."
  },
  {
    "id": "AZ305-T4-Q41",
    "topic": 4,
    "number": 41,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Notification Hubs",
      "Azure Data Lake",
      "Azure Service Bus",
      "Azure Blob Storage"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 144,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q42",
    "topic": 4,
    "number": 42,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have 100 devices that write performance data to Azure Blob Storage.\n\nYou plan to store and analyze the performance data in an Azure SQL database.\n\nYou need to recommend a solution to continually copy the performance data to the Azure SQL database.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Data Factory",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "Azure Data Factory",
      "Data Migration Assistant (DMA)",
      "Azure Data Box",
      "Azure Database Migration Service"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Factory",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 145,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T4-Q43",
    "topic": 4,
    "number": 43,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a storage solution for the records of a mission critical application. The solution must provide a Service Level Agreement\n\n(SLA) for the latency of write operations and the throughput.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Cosmos DB",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "Azure Data Lake Storage Gen2",
      "Azure Blob Storage",
      "Azure SQL",
      "Azure Cosmos DB"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Cosmos DB",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 145,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T4-Q44",
    "topic": 4,
    "number": 44,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are planning a storage solution. The solution must meet the following requirements:\n\n✑ Support at least 500 requests per second.\n\n✑ Support a large image, video, and audio streams.\n\nWhich type of Azure Storage account should you provision?",
    "solutionAnswer": "premium block blobs",
    "explanation": "La correction du support retient « premium block blobs ». Dans l’énoncé, le point à résoudre est : « Which type of Azure Storage account should you provision? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "standard general-purpose v2",
      "premium block blobs",
      "premium page blobs",
      "premium file shares"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "premium block blobs",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 145,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « premium block blobs ». Dans l’énoncé, le point à résoudre est : « Which type of Azure Storage account should you provision? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q45",
    "topic": 4,
    "number": 45,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a data storage solution that meets the following requirements:\n\n✑ Ensures that applications can access the data by using a REST connection\n\n✑ Hosts 20 independent tables of varying sizes and usage patterns\n\n✑ Automatically replicates the data to a second Azure region\n\n✑ Minimizes costs\n\nWhat should you recommend?",
    "solutionAnswer": "tables in an Azure Storage account that use geo-redundant storage (GRS)",
    "explanation": "La correction du support retient « tables in an Azure Storage account that use geo-redundant storage (GRS) ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "an Azure SQL Database elastic pool that uses active geo-replication",
      "tables in an Azure Storage account that use geo-redundant storage (GRS)",
      "tables in an Azure Storage account that use read-access geo-redundant storage (RA-GRS)",
      "an Azure SQL database that uses active geo-replication"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "tables in an Azure Storage account that use geo-redundant storage (GRS)",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 146,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « tables in an Azure Storage account that use geo-redundant storage (GRS) ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q46",
    "topic": 4,
    "number": 46,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing a software as a service (SaaS) application that will enable Azure Active Directory (Azure AD) users to create and publish online\n\nsurveys. The\n\nSaaS application will have a front-end web app and a back-end web API. The web app will rely on the web API to handle updates to customer\n\nsurveys.\n\nYou need to design an authorization flow for the SaaS application. The solution must meet the following requirements:\n\n✑ To access the back-end web API, the web app must authenticate by using OAuth 2 bearer tokens.\n\n✑ The web app must authenticate by using the identities of individual users.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure AD; A web API",
    "explanation": "La correction du support retient « Azure AD; A web API ». Dans l’énoncé, le point à résoudre est : « What should you include in the solution? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure AD"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "A web API"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q46-p147-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q46-p147-2-s.jpeg",
      "assets/az305/AZ305-T4-Q46-p148-1-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/auth-oauth2"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/lb-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD; A web API",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 147,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: Azure AD - The Azure AD server issues tokens (access & refresh token). See step 5 below in graphic. OAuth 2.0 authentication with Azure Active Directory. The OAuth 2.0 is the industry protocol for authorization. It allows a user to grant limited access to its protected resources. Designed to work specifically with Hypertext Transfer Protocol (HTTP), OAuth separates the role of the client from the resource owner. The client requests access to the resources controlled by the resource owner and hosted by the resource server (here the Azure AD server). The resource server issues access tokens with the approval of the resource owner. The client uses the access tokens to access the protected resources hosted by the resource server. Box 2: A web API - Delegated access is used. The bearer token sent to the web API contains the user identity. The web API makes authorization decisions based on the user identity.",
    "pedagogicalContext": "La correction du support retient « Azure AD; A web API ». Dans l’énoncé, le point à résoudre est : « What should you include in the solution? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q47",
    "topic": 4,
    "number": 47,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to create an Azure environment that will contain a root management group and 10 child management groups. Each child management\n\ngroup will contain five Azure subscriptions. You plan to have between 10 and 30 resource groups in each subscription.\n\nYou need to design an Azure governance solution. The solution must meet the following requirements:\n\n✑ Use Azure Blueprints to control governance across all the subscriptions and resource groups.\n\n✑ Ensure that Blueprints-based configurations are consistent across all the subscriptions and resource groups.\n\n✑ Minimize the number of blueprint definitions and assignments.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q47-p149-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q47-p149-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 149,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q48",
    "topic": 4,
    "number": 48,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing a virtual machine that will run Microsoft SQL Server and contain two data disks. The first data disk will store log files, and the\n\nsecond data disk will store data. Both disks are P40 managed disks.\n\nYou need to recommend a host caching method for each disk. The method must provide the best overall performance for the virtual machine\n\nwhile preserving the integrity of the SQL data and logs.\n\nWhich host caching method should you recommend for each disk? To answer, drag the appropriate methods to the correct disks. Each method\n\nmay be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "None; ReadOnly",
    "explanation": "La correction du support retient « None; ReadOnly ». Dans l’énoncé, le point à résoudre est : « Which host caching method should you recommend for each disk? To answer, drag the appropriate methods to the correct disks. Each method » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "None"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "ReadOnly"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q48-p150-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q48-p150-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-sql/virtual-machines/windows/performance-guidelines-best-practices-storage"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "None; ReadOnly",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 150,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: None - No data disk caching for the Log files. Box 2: ReadOnly - Guidelines to optimize performance for your SQL Server on Azure Virtual Machines (VMs) include: Set host caching to read-only for data file disks. Set host caching to none for log file disks.",
    "pedagogicalContext": "La correction du support retient « None; ReadOnly ». Dans l’énoncé, le point à résoudre est : « Which host caching method should you recommend for each disk? To answer, drag the appropriate methods to the correct disks. Each method » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q49",
    "topic": 4,
    "number": 49,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing a solution that calculates 3D geometry from height-map data.\n\nYou need to recommend a solution that meets the following requirements:\n\n✑ Performs calculations in Azure.\n\n✑ Ensures that each node can communicate data to every other node.\n\n✑ Maximizes the number of nodes to calculate multiple scenes as fast as possible.\n\nMinimizes the amount of effort to implement the solution.\n\nWhich two actions should you include in the recommendation? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Create a render farm that uses Azure Batch.; Enable parallel task execution on compute nodes.",
    "explanation": "Azure Batch exécute des traitements parallèles ou HPC sur un pool de machines géré. Il est adapté aux travaux massivement parallélisables plutôt qu’à l’hébergement d’une application interactive.",
    "options": [
      "Enable parallel file systems on Azure.",
      "Create a render farm that uses virtual machines.",
      "Create a render farm that uses virtual machine scale sets.",
      "Create a render farm that uses Azure Batch.",
      "Enable parallel task execution on compute nodes."
    ],
    "answerIndices": [
      3,
      4
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Create a render farm that uses Azure Batch.; Enable parallel task execution on compute nodes.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 151,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Batch exécute des traitements parallèles ou HPC sur un pool de machines géré. Il est adapté aux travaux massivement parallélisables plutôt qu’à l’hébergement d’une application interactive."
  },
  {
    "id": "AZ305-T4-Q50",
    "topic": 4,
    "number": 50,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises application that consumes data from multiple databases. The application code references database tables by using a\n\ncombination of the server, database, and table name.\n\nYou need to migrate the application data to Azure.\n\nTo which two services can you migrate the application data to achieve the goal? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "SQL Server on an Azure virtual machine; Azure SQL Managed Instance",
    "explanation": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base.",
    "options": [
      "SQL Server Stretch Database",
      "SQL Server on an Azure virtual machine",
      "Azure SQL Database",
      "Azure SQL Managed Instance"
    ],
    "answerIndices": [
      1,
      3
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "SQL Server on an Azure virtual machine; Azure SQL Managed Instance",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 151,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base."
  },
  {
    "id": "AZ305-T4-Q51",
    "topic": 4,
    "number": 51,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to migrate on-premises Microsoft SQL Server databases to Azure.\n\nYou need to recommend a deployment and resiliency solution that meets the following requirements:\n\n✑ Supports user-initiated backups\n\n✑ Supports multiple automatically replicated instances across Azure regions\n\n✑ Minimizes administrative effort to implement and maintain business continuity\n\nWhat should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q51-p152-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q51-p152-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 152,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q52",
    "topic": 4,
    "number": 52,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n✑ Failover between replicas of the database must occur without any data loss.\n\n✑ The database must remain available in the event of a zone outage.\n\n✑ Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Serverless",
    "explanation": "La correction du support retient « Azure SQL Database Serverless ». Dans l’énoncé, le point à résoudre est : « Which deployment option should you use? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Managed Instance General Purpose",
      "Azure SQL Database Business Critical",
      "Azure SQL Database Serverless"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Serverless",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 153,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure SQL Database Serverless ». Dans l’énoncé, le point à résoudre est : « Which deployment option should you use? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q53",
    "topic": 4,
    "number": 53,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure web app that uses an Azure key vault named KeyVault1 in the West US Azure region.\n\nYou are designing a disaster recovery plan for KeyVault1.\n\nYou plan to back up the keys in KeyVault1.\n\nYou need to identify to where you can restore the backup.\n\nWhat should you identify?",
    "solutionAnswer": "the same geography only",
    "explanation": "Key Vault centralise les secrets, clés et certificats. Les références Key Vault permettent à une application d’utiliser un secret sans le copier dans sa configuration, avec des permissions limitées au strict nécessaire.",
    "options": [
      "any region worldwide",
      "the same region only",
      "KeyVault1 only",
      "the same geography only"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "the same geography only",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 153,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Key Vault centralise les secrets, clés et certificats. Les références Key Vault permettent à une application d’utiliser un secret sans le copier dans sa configuration, avec des permissions limitées au strict nécessaire."
  },
  {
    "id": "AZ305-T4-Q54",
    "topic": 4,
    "number": 54,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises line-of-business (LOB) application that uses a Microsoft SQL Server instance as the backend.\n\nYou plan to migrate the on-premises SQL Server instance to Azure virtual machines.\n\nYou need to recommend a highly available SQL Server deployment that meets the following requirements:\n\n✑ Minimizes costs\n\nMinimizes failover time if a single server fails\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "an Always On availability group that has premium storage disks and a distributed network name (DNN)",
    "explanation": "La correction du support retient « an Always On availability group that has premium storage disks and a distributed network name (DNN) ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "an Always On availability group that has premium storage disks and a virtual network name (VNN)",
      "an Always On Failover Cluster Instance that has a virtual network name (VNN) and a standard file share",
      "an Always On availability group that has premium storage disks and a distributed network name (DNN)",
      "an Always On Failover Cluster Instance that has a virtual network name (VNN) and a premium file share"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Always On availability group that has premium storage disks and a distributed network name (DNN)",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 154,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « an Always On availability group that has premium storage disks and a distributed network name (DNN) ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q55",
    "topic": 4,
    "number": 55,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\n\nat the same time as the Azure SQL databases.\n\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\n\ninstances must reside in the same region.\n\nYou need to recommend a solution to meet the regulatory requirement.\n\nSolution: You recommend creating resource groups based on locations and implementing resource locks on the resource groups.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You recommend creating resource groups based on locations and implementing resource locks on the resource groups. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 154,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You recommend creating resource groups based on locations and implementing resource locks on the resource groups. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q56",
    "topic": 4,
    "number": 56,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\n\nat the same time as the Azure SQL databases.\n\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\n\ninstances must reside in the same region.\n\nYou need to recommend a solution to meet the regulatory requirement.\n\nSolution: You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 155,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You recommend using the Regulatory compliance dashboard in Microsoft Defender for Cloud. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q57",
    "topic": 4,
    "number": 57,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\n\nat the same time as the Azure SQL databases.\n\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\n\ninstances must reside in the same region.\n\nYou need to recommend a solution to meet the regulatory requirement.\n\nSolution: You recommend using an Azure Policy initiative to enforce the location.\n\nDoes this meet the goal?",
    "solutionAnswer": "Yes",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You recommend using an Azure Policy initiative to enforce the location. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Yes",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 155,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You recommend using an Azure Policy initiative to enforce the location. ») couvre réellement toutes les exigences du scénario. La correction attendue est « Yes » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q58",
    "topic": 4,
    "number": 58,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to move a web app named App1 from an on-premises datacenter to Azure.\n\nApp1 depends on a custom COM component that is installed on the host server.\n\nYou need to recommend a solution to host App1 in Azure. The solution must meet the following requirements:\n\n✑ App1 must be available to users if an Azure datacenter becomes unavailable.\n\n✑ Costs must be minimized.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Deploy a load balancer and a virtual machine scale set across two availability zones.",
    "explanation": "La correction du support retient « Deploy a load balancer and a virtual machine scale set across two availability zones. ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "In two Azure regions, deploy a load balancer and a web app.",
      "In two Azure regions, deploy a load balancer and a virtual machine scale set.",
      "Deploy a load balancer and a virtual machine scale set across two availability zones.",
      "In two Azure regions, deploy an Azure Traffic Manager profile and a web app."
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Deploy a load balancer and a virtual machine scale set across two availability zones.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 156,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Deploy a load balancer and a virtual machine scale set across two availability zones. ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q59",
    "topic": 4,
    "number": 59,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to deploy an application named App1 that will run in containers on Azure Kubernetes Service (AKS) clusters. The AKS clusters will be\n\ndistributed across four Azure regions.\n\nYou need to recommend a storage solution to ensure that updated container images are replicated automatically to all the Azure regions hosting\n\nthe AKS clusters.\n\nWhich storage solution should you recommend?",
    "solutionAnswer": "Premium SKU Azure Container Registry",
    "explanation": "Azure Container Registry stocke et distribue des images de conteneurs privées. Les fonctionnalités avancées et la réplication géographique dépendent du niveau de service utilisé.",
    "options": [
      "geo-redundant storage (GRS) accounts",
      "Premium SKU Azure Container Registry",
      "Azure Content Delivery Network (CDN)",
      "Azure Cache for Redis"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Premium SKU Azure Container Registry",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 156,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Container Registry stocke et distribue des images de conteneurs privées. Les fonctionnalités avancées et la réplication géographique dépendent du niveau de service utilisé."
  },
  {
    "id": "AZ305-T4-Q60",
    "topic": 4,
    "number": 60,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure Active Directory (Azure AD) tenant.\n\nYou plan to deploy Azure Cosmos DB databases that will use the SQL API.\n\nYou need to recommend a solution to provide specific Azure AD user accounts with read access to the Cosmos DB databases.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "a resource token and an Access control (IAM) role assignment",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "shared access signatures (SAS) and Conditional Access policies",
      "certificates and Azure Key Vault",
      "master keys and Azure Information Protection policies",
      "a resource token and an Access control (IAM) role assignment"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "a resource token and an Access control (IAM) role assignment",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 157,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T4-Q61",
    "topic": 4,
    "number": 61,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend an Azure Storage solution that meets the following requirements:\n\n✑ The storage must support 1 PB of data.\n\n✑ The data must be stored in blob storage.\n\n✑ The storage must support three levels of subfolders.\n\n✑ The storage must support access control lists (ACLs).\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "a general purpose v2 storage account that has hierarchical namespace enabled",
    "explanation": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès.",
    "options": [
      "a premium storage account that is configured for block blobs",
      "a general purpose v2 storage account that has hierarchical namespace enabled",
      "a premium storage account that is configured for page blobs",
      "a premium storage account that is configured for file shares and supports large file shares"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "a general purpose v2 storage account that has hierarchical namespace enabled",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 157,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Blob Storage est adapté au stockage d’objets non structurés comme documents, sauvegardes, médias et données analytiques. Les tiers d’accès permettent d’arbitrer coût de stockage et fréquence d’accès."
  },
  {
    "id": "AZ305-T4-Q62",
    "topic": 4,
    "number": 62,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You manage a database environment for a Microsoft Volume Licensing customer named Contoso, Ltd. Contoso uses License Mobility through\n\nSoftware\n\nAssurance.\n\nYou need to deploy 50 databases. The solution must meet the following requirements:\n\n✑ Support automatic scaling.\n\n✑ Minimize Microsoft SQL Server licensing costs.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "vCore; An Azure SQL Database elastic pool",
    "explanation": "Un elastic pool mutualise un ensemble de ressources de calcul entre plusieurs bases Azure SQL dont l’activité varie. Il est utile lorsque les pics de charge des bases ne se produisent pas tous au même moment.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "vCore"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "An Azure SQL Database elastic pool"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q62-p158-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q62-p158-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/azure-sql/azure-hybrid-benefit"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/ko-kr/azure/azure-sql/database/elastic-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "vCore; An Azure SQL Database elastic pool",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 158,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: vCore - You can only apply the Azure Hybrid licensing model when you choose a vCore-based purchasing model and the provisioned compute tier for your Azure SQL Database. Azure Hybrid Benefit isn't available for service tiers under the DTU-based purchasing model or for the serverless compute tier. Box 2: An Azure SQL Database elastic pool Azure SQL Database elastic pools are a simple, cost-effective solution for managing and scaling multiple databases that have varying and unpredictable usage demands. The databases in an elastic pool are on a single server and share a set number of resources at a set price. Elastic pools in SQL Database enable software as a service (SaaS) developers to optimize the price performance for a group of databases within a prescribed budget while delivering performance elasticity for each database.",
    "pedagogicalContext": "Un elastic pool mutualise un ensemble de ressources de calcul entre plusieurs bases Azure SQL dont l’activité varie. Il est utile lorsque les pics de charge des bases ne se produisent pas tous au même moment."
  },
  {
    "id": "AZ305-T4-Q63",
    "topic": 4,
    "number": 63,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises application named App1 that uses an Oracle database.\n\nYou plan to use Azure Databricks to transform and load data from App1 to an Azure Synapse Analytics instance.\n\nYou need to ensure that the App1 data is available to Databricks.\n\nWhich two Azure services should you include in the solution? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Azure Data Lake Storage; Azure Data Factory",
    "explanation": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel.",
    "options": [
      "Azure Data Box Gateway",
      "Azure Import/Export service",
      "Azure Data Lake Storage",
      "Azure Data Box Edge",
      "Azure Data Factory"
    ],
    "answerIndices": [
      2,
      4
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Lake Storage; Azure Data Factory",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 159,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Data Factory orchestre les mouvements et transformations de données entre sources et destinations. C’est un service d’intégration de données, pas un moteur transactionnel."
  },
  {
    "id": "AZ305-T4-Q64",
    "topic": 4,
    "number": 64,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing a cost-optimized solution that uses Azure Batch to run two types of jobs on Linux nodes. The first job type will consist of short-\n\nrunning tasks for a development environment. The second job type will consist of long-running Message Passing Interface (MPI) applications for\n\na production environment that requires timely job completion.\n\nYou need to recommend the pool type and node type for each job type. The solution must minimize compute charges and leverage Azure Hybrid\n\nBenefit whenever possible.\n\nWhat should you recommend? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "User subscription and low-priority virtual machines; Batch service and dedicate virtual machines",
    "explanation": "Azure Batch exécute des traitements parallèles ou HPC sur un pool de machines géré. Il est adapté aux travaux massivement parallélisables plutôt qu’à l’hébergement d’une application interactive.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "User subscription and low-priority virtual machines"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Batch service and dedicate virtual machines"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T4-Q64-p160-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q64-p160-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://www.parkmycloud.com/blog/azure-low-priority-vms"
      },
      {
        "title": "Référence du document source",
        "url": "https://azure.microsoft.com/en-us/pricing/details/batch/"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "User subscription and low-priority virtual machines; Batch service and dedicate virtual machines",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 160,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "Box 1: User subscription and low-priority virtual machines The first job type will consist of short-running tasks for a development environment. Among the many ways to purchase and consume Azure resources are Azure low priority VMs and Spot VMs. These virtual machines are compute instances allocated from spare capacity, offered at a highly discounted rate compared to ‫ג‬€on demand‫ג‬€ VMs. This means they can be a great option for cost savings ‫ג‬€\" for the right workloads Box 2: Batch service and dedicate virtual machines The second job type will consist of long-running Message Passing Interface (MPI) applications for a production environment that requires timely job completion. Azure Batch Service is a cloud based job scheduling and compute management platform that enables running large-scale parallel and high performance computing applications efficiently in the cloud. Azure Batch Service provides job scheduling and in automatically scaling and managing virtual machines running those jobs.",
    "pedagogicalContext": "Azure Batch exécute des traitements parallèles ou HPC sur un pool de machines géré. Il est adapté aux travaux massivement parallélisables plutôt qu’à l’hébergement d’une application interactive."
  },
  {
    "id": "AZ305-T4-Q65",
    "topic": 4,
    "number": 65,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Notification Hubs",
      "Azure Service Fabric",
      "Azure Queue Storage",
      "Azure Data Lake"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 161,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q66",
    "topic": 4,
    "number": 66,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Notification Hubs",
      "Azure Service Fabric",
      "Azure Queue Storage",
      "Azure Application Gateway"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 161,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q67",
    "topic": 4,
    "number": 67,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Database Hyperscale",
      "Azure SQL Database Premium",
      "Azure SQL Database Basic",
      "Azure SQL Database Standard"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 162,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q68",
    "topic": 4,
    "number": 68,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Service Bus",
      "Azure Data Lake",
      "Azure Traffic Manager",
      "Azure Blob Storage"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 162,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q69",
    "topic": 4,
    "number": 69,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Database Basic",
      "Azure SQL Managed Instance General Purpose",
      "Azure SQL Database Business Critical",
      "Azure SQL Managed Instance Business Critical"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 163,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T4-Q70",
    "topic": 4,
    "number": 70,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription.\n\nYou need to deploy an Azure Kubernetes Service (AKS) solution that will use Windows Server 2019 nodes. The solution must meet the following\n\nrequirements:\n\n• Minimize the time it takes to provision compute resources during scale-out operations.\n\n• Support autoscaling of Windows Server containers.\n\nWhich scaling option should you recommend?",
    "solutionAnswer": "cluster autoscaler",
    "explanation": "Le cluster autoscaler ajuste le nombre de nœuds d’un cluster en fonction des pods qui ne peuvent pas être planifiés ou de la capacité inutilisée. Il complète l’autoscaling des pods, qui agit sur le nombre de réplicas applicatifs.",
    "options": [
      "horizontal pod autoscaler",
      "Virtual nodes",
      "Kubernetes version 1.20.2 or newer",
      "cluster autoscaler"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "cluster autoscaler",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 163,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le cluster autoscaler ajuste le nombre de nœuds d’un cluster en fonction des pods qui ne peuvent pas être planifiés ou de la capacité inutilisée. Il complète l’autoscaling des pods, qui agit sur le nombre de réplicas applicatifs."
  },
  {
    "id": "AZ305-T4-Q71",
    "topic": 4,
    "number": 71,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Service Fabric",
      "Azure Data Lake",
      "Azure Service Bus",
      "Azure Application Gateway"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 164,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q72",
    "topic": 4,
    "number": 72,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company has offices in North America and Europe.\n\nYou plan to migrate to Azure.\n\nYou need to recommend a networking solution for the new Azure infrastructure. The solution must meet the following requirements:\n\n• The Point-to-Site (P2S) VPN connections of mobile users must connect automatically to the closest Azure region.\n\n• The offices in each region must connect to their local Azure region by using an ExpressRoute circuit.\n\n• Transitive routing between virtual networks and on-premises networks must be supported.\n\n• The network traffic between virtual networks must be filtered by using FQDNs.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Virtual WAN with a secured virtual hub",
    "explanation": "Azure Virtual WAN centralise la connectivité de succursales, VPN, ExpressRoute et hubs Azure. Un hub sécurisé ajoute des fonctions de sécurité et de routage centralisées.",
    "options": [
      "Azure Virtual WAN with a secured virtual hub",
      "virtual network peering and application security groups",
      "virtual network gateways and network security groups (NSGs)",
      "Azure Route Server and Azure Network Function Manager"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Virtual WAN with a secured virtual hub",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 164,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Virtual WAN centralise la connectivité de succursales, VPN, ExpressRoute et hubs Azure. Un hub sécurisé ajoute des fonctions de sécurité et de routage centralisées."
  },
  {
    "id": "AZ305-T4-Q73",
    "topic": 4,
    "number": 73,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Database Business Critical",
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Database Standard",
      "Azure SQL Managed Instance General Purpose"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 165,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T4-Q74",
    "topic": 4,
    "number": 74,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing a point of sale (POS) solution that will be deployed across multiple locations and will use an Azure Databricks workspace in the\n\nStandard tier. The solution will include multiple apps deployed to the on-premises network of each location.\n\nYou need to configure the authentication method that will be used by the app to access the workspace. The solution must minimize the\n\nadministrative effort associated with staff turnover and credential management.\n\nWhat should you configure?",
    "solutionAnswer": "a service principal",
    "explanation": "La correction du support retient « a service principal ». Dans l’énoncé, le point à résoudre est : « What should you configure? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "a managed identity",
      "a service principal",
      "a personal access token"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "a service principal",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 165,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « a service principal ». Dans l’énoncé, le point à résoudre est : « What should you configure? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q75",
    "topic": 4,
    "number": 75,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have two Azure AD tenants named contoso.com and fabrikam.com. Each tenant is linked to 50 Azure subscriptions. Contoso.com contains\n\ntwo users named User1 and User2.\n\nYou need to meet the following requirements:\n\n• Ensure that User1 can change the Azure AD tenant linked to specific Azure subscriptions.\n\n• If an Azure subscription is liked to a new Azure AD tenant, and no available Azure AD accounts have full subscription-level permissions to the\n\nsubscription, elevate the access of User2 to the subscription.\n\nThe solution must use the principle of least privilege.\n\nWhich role should you assign to each user? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q75-p166-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q75-p166-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 166,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q76",
    "topic": 4,
    "number": 76,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your company has the divisions shown in the following table.\n\nSub1 contains an Azure App Service web app named App1. App1 uses Azure AD for single-tenant user authentication. Users from contoso.com\n\ncan authenticate to App1.\n\nYou need to recommend a solution to enable users in the fabrikam.com tenant to authenticate to App1.\n\nWhat should you recommend?",
    "solutionAnswer": "Use Azure AD entitlement management to govern external users.",
    "explanation": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure a Conditional Access policy.",
      "Use Azure AD entitlement management to govern external users.",
      "Configure the Azure AD provisioning service.",
      "Configure Azure AD Identity Protection."
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T4-Q76-p167-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Use Azure AD entitlement management to govern external users.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 167,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Use Azure AD entitlement management to govern external users. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q77",
    "topic": 4,
    "number": 77,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have a multi-tier app named App1 and an Azure SQL database named SQL1. The backend service of App1 writes data to SQL1. Users use the\n\nApp1 client to read the data from SQL1.\n\nDuring periods of high utilization, the users experience delays retrieving the data.\n\nYou need to minimize how long it takes for data requests.\n\nWhat should you include in the solution?",
    "solutionAnswer": "Azure Cache for Redis",
    "explanation": "Azure Cache for Redis fournit un cache en mémoire à faible latence pour réduire les accès répétés aux bases ou services backend et améliorer les performances applicatives.",
    "options": [
      "Azure Cache for Redis",
      "Azure Content Delivery Network (CDN)",
      "Azure Data Factory",
      "Azure Synapse Analytics"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Cache for Redis",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 167,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cache for Redis fournit un cache en mémoire à faible latence pour réduire les accès répétés aux bases ou services backend et améliorer les performances applicatives."
  },
  {
    "id": "AZ305-T4-Q78",
    "topic": 4,
    "number": 78,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription that contains the resources shown in the following table.\n\nYou create peering between VNet1 and VNet2 and between VNet1 and VNet3.\n\nThe virtual machines host an HTTPS-based client/server application and are accessible only via the private IP address of each virtual machine.\n\nYou need to implement a load balancing solution for VM2 and VM3. The solution must ensure that if VM2 fails, requests will be routed\n\nautomatically to VM3, and if VM3 fails, requests will be routed automatically to VM2.\n\nWhat should you include in the solution?",
    "solutionAnswer": "Azure Front Door Premium",
    "explanation": "Azure Front Door fournit une entrée globale HTTP(S), du routage applicatif et des fonctions de résilience/accélération à l’échelle mondiale. Il se distingue d’un load balancer régional ou d’un équipement réseau L4.",
    "options": [
      "Azure Firewall Premium",
      "Azure Application Gateway v2",
      "a cross-region load balancer",
      "Azure Front Door Premium"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T4-Q78-p168-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Front Door Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 168,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Front Door fournit une entrée globale HTTP(S), du routage applicatif et des fonctions de résilience/accélération à l’échelle mondiale. Il se distingue d’un load balancer régional ou d’un équipement réseau L4."
  },
  {
    "id": "AZ305-T4-Q79",
    "topic": 4,
    "number": 79,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are designing an app that will include two components. The components will communicate by sending messages via a queue.\n\nYou need to recommend a solution to process the messages by using a First in, First out (FIFO) pattern.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus queues with sessions enabled",
    "explanation": "Une file Service Bus fournit une messagerie fiable point-à-point avec des fonctions avancées de livraison, verrouillage et reprise. Un message est consommé par un traitement plutôt que diffusé à plusieurs abonnés.",
    "options": [
      "storage queues with a custom metadata setting",
      "Azure Service Bus queues with partitioning enabled",
      "Azure Service Bus queues with sessions enabled",
      "storage queues with a stored access policy"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus queues with sessions enabled",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 168,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Une file Service Bus fournit une messagerie fiable point-à-point avec des fonctions avancées de livraison, verrouillage et reprise. Un message est consommé par un traitement plutôt que diffusé à plusieurs abonnés."
  },
  {
    "id": "AZ305-T4-Q80",
    "topic": 4,
    "number": 80,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to deploy an instance of SQL Server on Azure Virtual Machines. The solution must meet the following requirements:\n\n• Support 15,000 disk IOPS.\n\n• Support SR-IOV.\n\n• Minimize costs.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q80-p169-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q80-p169-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 169,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q81",
    "topic": 4,
    "number": 81,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing an app that will use Azure Functions to process Azure Event Hubs events. Request processing is estimated to take between\n\nfive and 20 minutes.\n\nYou need to recommend a hosting solution that meets the following requirements:\n\n• Supports estimates of request processing runtimes\n\n• Supports event-driven autoscaling for the app\n\nWhich hosting plan should you recommend?",
    "solutionAnswer": "Premium",
    "explanation": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau.",
    "options": [
      "Dedicated",
      "Consumption",
      "App Service",
      "Premium"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 170,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Functions exécute du code piloté par événements avec une gestion d’infrastructure minimale. Le plan choisi détermine notamment le démarrage, la durée d’exécution et les capacités réseau."
  },
  {
    "id": "AZ305-T4-Q82",
    "topic": 4,
    "number": 82,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Notification Hubs",
      "Azure Application Gateway",
      "Azure Service Bus",
      "Azure Traffic Manager"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 170,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q83",
    "topic": 4,
    "number": 83,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Notification Hubs",
      "Azure Application Gateway",
      "Azure Queue Storage",
      "Azure Traffic Manager"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 171,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q84",
    "topic": 4,
    "number": 84,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Database Basic",
      "Azure SQL Database Business Critical",
      "Azure SQL Database Standard",
      "Azure SQL Managed Instance General Purpose"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 171,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T4-Q85",
    "topic": 4,
    "number": 85,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Database Hyperscale",
      "Azure SQL Database Premium",
      "Azure SQL Database Standard",
      "Azure SQL Managed Instance General Purpose"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 172,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q86",
    "topic": 4,
    "number": 86,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You company has offices in New York City, Sydney, Paris, and Johannesburg.\n\nThe company has an Azure subscription.\n\nYou plan to deploy a new Azure networking solution that meets the following requirements:\n\n• Connects to ExpressRoute circuits in the Azure regions of East US, Southeast Asia, North Europe, and South Africa\n\n• Minimizes latency by supporting connection in three regions\n\n• Supports Site-to-site VPN connections\n\n• Minimizes costs\n\nYou need to identify the minimum number of Azure Virtual WAN hubs that you must deploy, and which virtual WAN SKU to use.\n\nWhat should you identify? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q86-p173-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q86-p173-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 173,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q87",
    "topic": 4,
    "number": 87,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure Functions microservice app named App1 that is hosted in the Consumption plan. App1 uses an Azure Queue Storage trigger.\n\nYou plan to migrate App1 to an Azure Kubernetes Service (AKS) cluster.\n\nYou need to prepare the AKS cluster to support App1. The solution must meet the following requirements:\n\n• Use the same scaling mechanism as the current deployment.\n\n• Support kubenet and Azure Container Networking Interface (CNI) networking.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct answer is worth one point.",
    "solutionAnswer": "Configure the horizontal pod autoscaler.; Install Kubernetes-based Event Driven Autoscaling (KEDA).",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Configure the horizontal pod autoscaler.",
      "Install Virtual Kubelet.",
      "Configure the AKS cluster autoscaler.",
      "Configure the virtual node add-on.",
      "Install Kubernetes-based Event Driven Autoscaling (KEDA)."
    ],
    "answerIndices": [
      0,
      4
    ],
    "multi": true,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Configure the horizontal pod autoscaler.; Install Kubernetes-based Event Driven Autoscaling (KEDA).",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 174,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q88",
    "topic": 4,
    "number": 88,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Application Gateway",
      "Azure Queue Storage",
      "Azure Data Lake",
      "Azure Traffic Manager"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 174,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q89",
    "topic": 4,
    "number": 89,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Managed Instance General Purpose",
      "Azure SQL Database Hyperscale",
      "Azure SQL Database Premium",
      "Azure SQL Managed Instance Business Critical"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 175,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q90",
    "topic": 4,
    "number": 90,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Database Hyperscale",
      "Azure SQL Database Premium",
      "Azure SQL Database Basic",
      "Azure SQL Database Serverless"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 175,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q91",
    "topic": 4,
    "number": 91,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Notification Hubs",
      "Azure Service Bus",
      "Azure Blob Storage",
      "Azure Service Fabric"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 176,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q92",
    "topic": 4,
    "number": 92,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Service Fabric",
      "Azure Traffic Manager",
      "Azure Queue Storage",
      "Azure Notification Hubs"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 176,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q93",
    "topic": 4,
    "number": 93,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises Microsoft SQL Server 2008 instance that hosts a 50-GB database.\n\nYou need to migrate the database to an Azure SQL managed instance. The solution must minimize downtime.\n\nWhat should you use?",
    "solutionAnswer": "Azure Data Studio",
    "explanation": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base.",
    "options": [
      "Azure Migrate",
      "Azure Data Studio",
      "WANdisco LiveData Platform for Azure",
      "SQL Server Management Studio (SSMS)"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Data Studio",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 177,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base."
  },
  {
    "id": "AZ305-T4-Q94",
    "topic": 4,
    "number": 94,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Managed Instance General Purpose",
      "Azure SQL Database Standard",
      "Azure SQL Database Premium"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 177,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q95",
    "topic": 4,
    "number": 95,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Database Business Critical",
      "Azure SQL Database Basic",
      "Azure SQL Managed Instance General Purpose",
      "Azure SQL Database Hyperscale"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 178,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T4-Q96",
    "topic": 4,
    "number": 96,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Service Fabric",
      "Azure Queue Storage",
      "Azure Traffic Manager",
      "Azure Application Gateway"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 178,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q97",
    "topic": 4,
    "number": 97,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Application Gateway",
      "Azure Data Lake",
      "Azure Queue Storage",
      "Azure Blob Storage"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 179,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q98",
    "topic": 4,
    "number": 98,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Blob Storage",
      "Azure Data Lake",
      "Azure Queue Storage",
      "Azure Service Fabric"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 179,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q99",
    "topic": 4,
    "number": 99,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Database Serverless",
      "Azure SQL Managed Instance General Purpose",
      "Azure SQL Database Basic",
      "Azure SQL Database Business Critical"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 180,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T4-Q100",
    "topic": 4,
    "number": 100,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Database Standard",
      "Azure SQL Managed Instance General Purpose",
      "Azure SQL Database Serverless",
      "Azure SQL Database Premium"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 180,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q101",
    "topic": 4,
    "number": 101,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Queue Storage",
    "explanation": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus.",
    "options": [
      "Azure Notification Hubs",
      "Azure Queue Storage",
      "Azure Blob Storage",
      "Azure Application Gateway"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Queue Storage",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 181,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Queue Storage est une file simple et économique pour découpler des composants. Elle offre moins de fonctions de messagerie avancées que Service Bus."
  },
  {
    "id": "AZ305-T4-Q102",
    "topic": 4,
    "number": 102,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a multi-tier app named App1 that will be hosted on Azure virtual machines. The peak utilization periods for App1 will be from 8\n\nAM to 9 AM and 4 PM to 5 PM on weekdays.\n\nYou need to deploy the infrastructure for App1. The solution must meet the following requirements:\n\n• Support virtual machines deployed to four availability zones across two Azure regions.\n\n• Minimize costs by accumulating CPU credits during periods of low utilization.\n\nWhat is the minimum number of virtual networks you should deploy, and which virtual machine size should you use? To answer, select the\n\nappropriate options in the answer area.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q102-p181-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q102-p181-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 181,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q103",
    "topic": 4,
    "number": 103,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Service Bus",
      "Azure Blob Storage",
      "Azure Notification Hubs",
      "Azure Application Gateway"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 182,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q104",
    "topic": 4,
    "number": 104,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises Microsoft SQL server named SQL1 that hosts 50 databases.\n\nYou plan to migrate SQL1 to Azure SQL Managed Instance.\n\nYou need to perform an offline migration of SQL1. The solution must minimize administrative effort.\n\nWhat should you include in the solution?",
    "solutionAnswer": "Azure Database Migration Service",
    "explanation": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base.",
    "options": [
      "Azure Migrate",
      "Azure Database Migration Service",
      "SQL Server Migration Assistant (SSMA)",
      "Data Migration Assistant (DMA)"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Database Migration Service",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 182,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure SQL Managed Instance offre une forte compatibilité avec SQL Server tout en restant un service PaaS géré. C’est souvent le compromis lorsque la migration doit limiter les changements applicatifs ou de base."
  },
  {
    "id": "AZ305-T4-Q105",
    "topic": 4,
    "number": 105,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Service Bus",
      "Azure Data Lake",
      "Azure Traffic Manager",
      "Azure Notification Hubs"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 183,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q106",
    "topic": 4,
    "number": 106,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Service Bus",
      "Azure Data Lake",
      "Azure Application Gateway",
      "Azure Notification Hubs"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 183,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q107",
    "topic": 4,
    "number": 107,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Database Business Critical",
      "Azure SQL Database Hyperscale",
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Database Standard"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 184,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T4-Q108",
    "topic": 4,
    "number": 108,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You plan to deploy an infrastructure solution that will contain the following configurations:\n\n• External users will access the infrastructure by using Azure Front Door.\n\n• External user access to the backend APIs hosted in Azure Kubernetes Service (AKS) will be controlled by using Azure API Management.\n\n• External users will be authenticated by an Azure AD B2C tenant that uses OpenID Connect-based federation with a third-party identity provider.\n\nWhich function does each service provide? To answer, drag the appropriate functions to the correct services. Each function may be used once,\n\nmore than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q108-p184-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q108-p184-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 184,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q109",
    "topic": 4,
    "number": 109,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\n\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company plans to deploy various Azure App Service instances that will use Azure SQL databases. The App Service instances will be deployed\n\nat the same time as the Azure SQL databases.\n\nThe company has a regulatory requirement to deploy the App Service instances only to specific Azure regions. The resources for the App Service\n\ninstances must reside in the same region.\n\nYou need to recommend a solution to meet the regulatory requirement.\n\nSolution: You recommend using an Azure Policy initiative to enforce the location of resource groups.\n\nDoes this meet the goal?",
    "solutionAnswer": "No",
    "explanation": "Le point clé est de vérifier si la solution proposée (« You recommend using an Azure Policy initiative to enforce the location of resource groups. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée.",
    "options": [
      "Yes",
      "No"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "No",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 185,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le point clé est de vérifier si la solution proposée (« You recommend using an Azure Policy initiative to enforce the location of resource groups. ») couvre réellement toutes les exigences du scénario. La correction attendue est « No » : comparez chaque contrainte à ce que fait réellement le service ou la configuration proposée."
  },
  {
    "id": "AZ305-T4-Q110",
    "topic": 4,
    "number": 110,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your on-premises datacenter contains a server that runs Linux and hosts a Java app named App1. App1 has the following characteristics:\n\n• App1 is an interactive app that users access by using HTTPS connections.\n\n• The number of connections to App1 changes significantly throughout the day.\n\n• App1 runs multiple concurrent instances.\n\n• App1 requires major changes to run in a container.\n\nYou plan to migrate App1 to Azure.\n\nYou need to recommend a compute solution for App1. The solution must meet the following requirements:\n\n• The solution must run multiple instances of App1.\n\n• The number of instances must be managed automatically depending on the load.\n\n• Administrative effort must be minimized.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure App Service",
    "explanation": "La correction du support retient « Azure App Service ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Batch",
      "Azure App Service",
      "Azure Kubernetes Service (AKS)",
      "Azure Virtual Machine Scale Sets"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure App Service",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 186,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure App Service ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T4-Q111",
    "topic": 4,
    "number": 111,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure App Service web app named Webapp1 that connects to an Azure SQL database named DB1. Webapp1 and DB1 are deployed to\n\nthe East US Azure region.\n\nYou need to ensure that all the traffic between Webapp1 and DB1 is sent via a private connection.\n\nWhat should you do? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q111-p187-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q111-p187-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 187,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q112",
    "topic": 4,
    "number": 112,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your on-premises network contains an Active Directory Domain Services (AD DS) domain. The domain contains a server named Server1. Server1\n\ncontains an app named App1 that uses AD DS authentication. Remote users access App1 by using a VPN connection to the on-premises network.\n\nYou have an Azure AD tenant that syncs with the AD DS domain by using Azure AD Connect.\n\nYou need to ensure that the remote users can access App1 without using a VPN. The solution must meet the following requirements:\n\n• Ensure that the users authenticate by using Azure Multi-Factor Authentication (MFA).\n\n• Minimize administrative effort.\n\nWhat should you include in the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q112-p188-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q112-p188-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 188,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q113",
    "topic": 4,
    "number": 113,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription that contains an Azure Kubernetes Service (AKS) instance named AKS1. AKS1 hosts microservice-based APIs that\n\nare configured to listen on non-default HTTP ports.\n\nYou plan to deploy a Standard tier Azure API Management instance named APIM1 that will make the APIs available to external users.\n\nYou need to ensure that the AKS1 APIs are accessible to APIM1. The solution must meet the following requirements:\n\n• Implement MTLS authentication between APIM1 and AKS1.\n\n• Minimize development effort.\n\n• Minimize costs.\n\nWhat should you do?",
    "solutionAnswer": "Deploy an ingress controller to AKS1.",
    "explanation": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend.",
    "options": [
      "Implement an external load balancer on AKS1.",
      "Redeploy APIM1 to the virtual network that contains AKS1.",
      "Implement an ExternalName service on AKS1.",
      "Deploy an ingress controller to AKS1."
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Deploy an ingress controller to AKS1.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 189,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "API Management sert de façade gouvernée devant des API : authentification, validation de jetons, quotas, transformations et politiques peuvent être appliqués sans modifier chaque API backend."
  },
  {
    "id": "AZ305-T4-Q114",
    "topic": 4,
    "number": 114,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a solution to integrate Azure Cosmos DB and Azure Synapse. The solution must meet the following requirements:\n\n• Traffic from an Azure Synapse workspace to the Azure Cosmos DB account must be sent via the Microsoft backbone network.\n\n• Traffic from the Azure Synapse workspace to the Azure Cosmos DB account must NOT be routed over the internet.\n\n• Implementation effort must be minimized.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q114-p190-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q114-p190-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 190,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q115",
    "topic": 4,
    "number": 115,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription that contains an Azure Cosmos DB for NoSQL account named account1 and an Azure Synapse Analytics\n\nworkspace named Workspace1. The account1 account contains a container named Contained that has the analytical store enabled.\n\nYou need to recommend a solution that will process the data stored in Contained in near-real-time (NRT) and output the results to a data\n\nwarehouse in Workspace1 by using a runtime engine in the workspace. The solution must minimize data movement.\n\nWhich pool in Workspace1 should you use?",
    "solutionAnswer": "Apache Spark",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "Apache Spark",
      "serverless SQL",
      "dedicated SQL",
      "Data Explorer"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Apache Spark",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 190,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T4-Q116",
    "topic": 4,
    "number": 116,
    "category": "DRAG DROP",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an on-premises datacenter named Site1. Site1 contains a VMware vSphere cluster named Cluster1 that hosts 100 virtual machines.\n\nCluster1 is managed by using VMware vCenter.\n\nYou have an Azure subscription named Sub1.\n\nYou plan to migrate the virtual machines from Cluster1 to Sub1.\n\nYou need to identify which resources are required to run the virtual machines in Azure. The solution must minimize administrative effort.\n\nWhat should you configure? To answer, drag the appropriate resources to the correct targets. Each resource may be used once, more than once, or\n\nnot at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q116-p191-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q116-p191-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 191,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q117",
    "topic": 4,
    "number": 117,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "Your on-premises datacenter contains a server named Server1 that runs Microsoft SQL Server 2022. Server1 contains a 30-TB database named\n\nDB1 that stores customer data. Server1 runs a custom application named App1 that verifies the compliance of records in DB1. App1 must run on\n\nthe same server as DB1.\n\nYou have an Azure subscription.\n\nYou need to migrate DB1 to Azure. The solution must minimize administrative effort.\n\nTo which service should you migrate DB1, and what should you use to perform the migration? To answer, select the appropriate options in the\n\nanswer area.\n\nNOTE: Each correct selection is worth one point.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q117-p192-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q117-p192-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 192,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q118",
    "topic": 4,
    "number": 118,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Database Business Critical",
      "Azure SQL Database Basic",
      "Azure SQL Database Standard"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 193,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T4-Q119",
    "topic": 4,
    "number": 119,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Azure Log Analytics",
      "Azure Arc",
      "Azure Monitor metrics",
      "Azure Monitor action groups"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 193,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T4-Q120",
    "topic": 4,
    "number": 120,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Azure Log Analytics",
      "Azure Arc",
      "Azure Analysis Services",
      "Azure Monitor action groups"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 194,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T4-Q121",
    "topic": 4,
    "number": 121,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Azure Log Analytics",
      "Azure Analysis Services",
      "Azure Monitor metrics",
      "Azure Monitor action groups"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 194,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T4-Q122",
    "topic": 4,
    "number": 122,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Database Business Critical",
      "Azure SQL Database Premium",
      "Azure SQL Database Basic",
      "Azure SQL Database Hyperscale"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 195,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q123",
    "topic": 4,
    "number": 123,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to recommend a solution to generate a monthly report of all the new Azure Resource Manager (ARM) resource deployments in your\n\nAzure subscription.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Log Analytics",
    "explanation": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs.",
    "options": [
      "Application Insights",
      "Azure Analysis Services",
      "Azure Advisor",
      "Azure Log Analytics"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Log Analytics",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 195,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Log Analytics centralise les journaux Azure Monitor et permet de les interroger avec KQL. On le choisit lorsque le besoin porte sur la collecte, l’analyse ou la corrélation de logs."
  },
  {
    "id": "AZ305-T4-Q124",
    "topic": 4,
    "number": 124,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have an Azure subscription that contains the resources shown in the following table.\n\nVNet1, VNet2, and VNet3 each has multiple virtual machines connected. The virtual machines use the Azure DNS service for name resolution.\n\nYou need to recommend an Azure Monitor log routing solution that meets the following requirements:\n\n• Ensures that the logs collected from the virtual machines and sent to Workspace1 are routed over the Microsoft backbone network\n\n• Minimizes administrative effort\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q124-p196-1-q.png",
      "assets/az305/AZ305-T4-Q124-p196-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q124-p196-3-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 196,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q125",
    "topic": 4,
    "number": 125,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You need to design a highly available Azure SQL database that meets the following requirements:\n\n• Failover between replicas of the database must occur without any data loss.\n\n• The database must remain available in the event of a zone outage.\n\n• Costs must be minimized.\n\nWhich deployment option should you use?",
    "solutionAnswer": "Azure SQL Database Premium",
    "explanation": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité.",
    "options": [
      "Azure SQL Database Standard",
      "Azure SQL Managed Instance Business Critical",
      "Azure SQL Database Serverless",
      "Azure SQL Database Premium"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure SQL Database Premium",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 197,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Le niveau Premium d’Azure SQL Database vise des charges exigeantes en performances et en latence avec des ressources dédiées. Il faut le distinguer des niveaux optimisés pour le coût ou l’élasticité."
  },
  {
    "id": "AZ305-T4-Q126",
    "topic": 4,
    "number": 126,
    "category": "HOTSPOT",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You have 100 Azure Storage accounts.\n\nAccess to the accounts is restricted by using Azure role-based access control (Azure RBAC) assignments.\n\nYou need to recommend a solution that uses role assignment conditions based on the tags assigned to individual resources within the storage\n\naccounts.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T4-Q126-p198-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T4-Q126-p198-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 198,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T4-Q127",
    "topic": 4,
    "number": 127,
    "category": "Choix multiple",
    "domain": "Concevoir des solutions d’infrastructure",
    "prompt": "You are developing a sales application that will contain several Azure cloud services and handle different components of a transaction. Different\n\ncloud services will process customer orders, billing, payment, inventory, and shipping.\n\nYou need to recommend a solution to enable the cloud services to asynchronously communicate transaction information by using XML messages.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure Service Bus",
    "explanation": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Azure Service Fabric",
      "Azure Notification Hubs",
      "Azure Service Bus",
      "Azure Traffic Manager"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Service Bus",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 199,
    "caseStudyId": null,
    "caseContext": null,
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Service Bus ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T5-Q1",
    "topic": 5,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You need to ensure that users managing the production environment are registered for Azure MFA and must authenticate by using Azure MFA\n\nwhen they sign in to the Azure portal. The solution must meet the authentication and authorization requirements.\n\nWhat should you do? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure AD Identity Protection; Grant control in capolicy1",
    "explanation": "La correction du support retient « Azure AD Identity Protection; Grant control in capolicy1 ». Dans l’énoncé, le point à résoudre est : « What should you do? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure AD Identity Protection"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Grant control in capolicy1"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T5-Q1-p200-1-q.png",
      "assets/az305/AZ305-T5-Q1-p202-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T5-Q1-p202-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-mfa-policy"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-azure-mfa"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Identity Protection; Grant control in capolicy1",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 200,
    "caseStudyId": "AZ305-T5",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "Box 1: Azure AD Identity Protection Only users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and authenticate by using Azure Multi-Factor Authentication (MFA). Note: Policy configuration - 1. Navigate to the Azure portal. 2. Browse to Azure Active Directory > Security > Identity Protection > MFA registration policy. 3. Under Assignments 4. Users - Choose All users or Select individuals and groups if limiting your rollout. 5. Optionally you can choose to exclude users from the policy. 6. Enforce Policy - On 7. Save Box 2: Grant control in capolicy1 The litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for a production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device. Note: We need to configure the policy conditions for capolicy1 that prompt for MFA.",
    "pedagogicalContext": "La correction du support retient « Azure AD Identity Protection; Grant control in capolicy1 ». Dans l’énoncé, le point à résoudre est : « What should you do? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T5-Q2",
    "topic": 5,
    "number": 2,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "After you migrate App1 to Azure, you need to enforce the data modification requirements to meet the security and compliance requirements.\n\nWhat should you do?",
    "solutionAnswer": "Create an access policy for the blob service.",
    "explanation": "La correction du support retient « Create an access policy for the blob service. ». Dans l’énoncé, le point à résoudre est : « What should you do? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Create an access policy for the blob service.",
      "Implement Azure resource locks.",
      "Create Azure RBAC assignments.",
      "Modify the access level of the blob service."
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T5-Q2-p203-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Create an access policy for the blob service.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 203,
    "caseStudyId": "AZ305-T5",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Create an access policy for the blob service. ». Dans l’énoncé, le point à résoudre est : « What should you do? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T6-Q1",
    "topic": 6,
    "number": 1,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to recommend a solution for the App1 maintenance task. The solution must minimize costs.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "an Azure function",
    "explanation": "La correction du support retient « an Azure function ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "an Azure logic app",
      "an Azure function",
      "an Azure virtual machine",
      "an App Service WebJob"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Azure function",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 206,
    "caseStudyId": "AZ305-T6",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment -\n\nTechnical Environment -\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nBusiness Partnerships -\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements -\n\nPlanned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nApp1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nApp2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « an Azure function ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T6-Q2",
    "topic": 6,
    "number": 2,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to recommend a solution that meets the application development requirements.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "deployment slots",
    "explanation": "La correction du support retient « deployment slots ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "the Azure App Configuration service",
      "an Azure Container Registry instance",
      "deployment slots",
      "Continuous Integration/Continuous Deployment (CI/CD) sources"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "deployment slots",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 208,
    "caseStudyId": "AZ305-T6",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment -\n\nTechnical Environment -\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nBusiness Partnerships -\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements -\n\nPlanned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nApp1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nApp2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « deployment slots ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T6-Q3",
    "topic": 6,
    "number": 3,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to recommend an App Service architecture that meets the requirements for App1. The solution must minimize costs.\n\nWhat should you recommend?",
    "solutionAnswer": "one App Service plan per region",
    "explanation": "La correction du support retient « one App Service plan per region ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "one App Service Environment (ASE) per availability zone",
      "one App Service Environment (ASE) per region",
      "one App Service plan per region",
      "one App Service plan per availability zone"
    ],
    "answerIndices": [
      2
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "one App Service plan per region",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 210,
    "caseStudyId": "AZ305-T6",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment -\n\nTechnical Environment -\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nBusiness Partnerships -\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements -\n\nPlanned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nApp1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nApp2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « one App Service plan per region ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T6-Q4",
    "topic": 6,
    "number": 4,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You need to recommend a solution to ensure that App1 can access the third-party credentials and access strings. The solution must meet the\n\nsecurity requirements.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T6-Q4-p213-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T6-Q4-p214-1-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 212,
    "caseStudyId": "AZ305-T6",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment -\n\nTechnical Environment -\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nBusiness Partnerships -\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements -\n\nPlanned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nApp1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nApp2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T7-Q1",
    "topic": 7,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You are evaluating the components of the migration to Azure that require you to provision an Azure Storage account. For each of the following\n\nstatements, select\n\nYes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T7-Q1-p216-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T7-Q1-p216-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 215,
    "caseStudyId": "AZ305-T7",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam,\n\nBerlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes -\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\nWebsite content must be easily updated from a single point.\n\nUser input must be minimized when provisioning new web app instances.\n\nWhenever possible, existing on-premises licenses must be used to reduce cost.\n\nUsers must always authenticate by using their corp.fabrikam.com UPN identity.\n\nAny new deployments to Azure must be redundant in case an Azure region fails.\n\nWhenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\nAn email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\nIn the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\nDirectory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure\n\nand the on- premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\nDatabase metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\nTo avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\nDatabase backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\nCompany information including policies, templates, and data must be inaccessible to anyone outside the company.\n\nUsers on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\nAdministrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\nAll administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\nThe testing of WebApp1 updates must not be visible to anyone outside the company.",
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T7-Q2",
    "topic": 7,
    "number": 2,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "What should you include in the identity management strategy to support the planned changes?",
    "solutionAnswer": "Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure.",
    "explanation": "La correction du support retient « Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure. ». Dans l’énoncé, le point à résoudre est : « What should you include in the identity management strategy to support the planned changes? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure.",
      "Move all the domain controllers from corp.fabrikam.com to virtual networks in Azure.",
      "Deploy a new Azure AD tenant for the authentication of new R&D projects.",
      "Deploy domain controllers for the rd.fabrikam.com forest to virtual networks in Azure."
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 217,
    "caseStudyId": "AZ305-T7",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam,\n\nBerlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes -\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\nWebsite content must be easily updated from a single point.\n\nUser input must be minimized when provisioning new web app instances.\n\nWhenever possible, existing on-premises licenses must be used to reduce cost.\n\nUsers must always authenticate by using their corp.fabrikam.com UPN identity.\n\nAny new deployments to Azure must be redundant in case an Azure region fails.\n\nWhenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\nAn email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\nIn the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\nDirectory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure\n\nand the on- premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\nDatabase metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\nTo avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\nDatabase backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\nCompany information including policies, templates, and data must be inaccessible to anyone outside the company.\n\nUsers on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\nAdministrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\nAll administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\nThe testing of WebApp1 updates must not be visible to anyone outside the company.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Deploy domain controllers for corp.fabrikam.com to virtual networks in Azure. ». Dans l’énoncé, le point à résoudre est : « What should you include in the identity management strategy to support the planned changes? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T8-Q1",
    "topic": 8,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You plan to migrate App1 to Azure.\n\nYou need to recommend a high-availability solution for App1. The solution must meet the resiliency requirements.\n\nWhat should you include in the recommendation? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "3; 3",
    "explanation": "La correction du support retient « 3; 3 ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "3"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "3"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T8-Q1-p219-1-q.png",
      "assets/az305/AZ305-T8-Q1-p221-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T8-Q1-p221-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/virtual-machines/dedicated-hosts"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "3; 3",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 219,
    "caseStudyId": "AZ305-T8",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "Box 1: 3 - Need three host groups to meet the third scenario requirement below. Scenario: App1 must meet the following requirements: Be hosted in an Azure region that supports availability zones. Be hosted on Azure virtual machines that support automatic scaling. Maintain availability if two availability zones in the local Azure region fail. Box 2: 3 - The availability setting of your host group should match your scale set. * The host group and the scale set must be using the same availability zone. * The fault domain count for the host group level should match the fault domain count for your scale set.",
    "pedagogicalContext": "La correction du support retient « 3; 3 ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? To answer, select the appropriate options in the answer area. » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T8-Q2",
    "topic": 8,
    "number": 2,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You plan to migrate App1 to Azure.\n\nYou need to recommend a storage solution for App1 that meets the security and compliance requirements.\n\nWhich type of storage should you recommend, and how should you recommend configuring the storage? To answer, select the appropriate options\n\nin the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Standard general-purpose v2; Hierarchical namespace",
    "explanation": "La correction du support retient « Standard general-purpose v2; Hierarchical namespace ». Dans l’énoncé, le point à résoudre est : « Which type of storage should you recommend, and how should you recommend configuring the storage? To answer, select the appropriate options » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Standard general-purpose v2"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Hierarchical namespace"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T8-Q2-p222-1-q.png",
      "assets/az305/AZ305-T8-Q2-p224-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T8-Q2-p224-2-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/storage/blobs/data-protection-overview"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Standard general-purpose v2; Hierarchical namespace",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 222,
    "caseStudyId": "AZ305-T8",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "Box 1: Standard general-purpose v2 Standard general-purpose v2 supports Blob Storage. Azure Storage provides data protection for Blob Storage and Azure Data Lake Storage Gen2. Scenario: Litware identifies the following security and compliance requirements: ✑ Once App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is prevented for a period of three years. ✑ On-premises users and services must be able to access the Azure Storage account that will host the data in App1. ✑ Access to the public endpoint of the Azure Storage account that will host the App1 data must be prevented. All Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled. ✑ App1 must NOT share physical hardware with other workloads. Box 2: Hierarchical namespace - Scenario: Plan: Migrate App1 to Azure virtual machines. Azure Data Lake Storage Gen2 implements an access control model that supports both Azure role-based access control (Azure RBAC) and POSIX-like access control lists (ACLs). Data Lake Storage Gen2 and the Network File System (NFS) 3.0 protocol both require a storage account with a hierarchical namespace enabled.",
    "pedagogicalContext": "La correction du support retient « Standard general-purpose v2; Hierarchical namespace ». Dans l’énoncé, le point à résoudre est : « Which type of storage should you recommend, and how should you recommend configuring the storage? To answer, select the appropriate options » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T8-Q3",
    "topic": 8,
    "number": 3,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You plan to migrate App1 to Azure.\n\nYou need to recommend a network connectivity solution for the Azure Storage account that will host the App1 data. The solution must meet the\n\nsecurity and compliance requirements.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "a private endpoint",
    "explanation": "La correction du support retient « a private endpoint ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Microsoft peering for an ExpressRoute circuit",
      "Azure public peering for an ExpressRoute circuit",
      "a service endpoint that has a service endpoint policy",
      "a private endpoint"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T8-Q3-p225-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "a private endpoint",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 225,
    "caseStudyId": "AZ305-T8",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « a private endpoint ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T8-Q4",
    "topic": 8,
    "number": 4,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to implement the Azure RBAC role assignments for the Network Contributor role. The solution must meet the authentication and\n\nauthorization requirements.\n\nWhat is the minimum number of assignments that you must use?",
    "solutionAnswer": "2",
    "explanation": "La correction du support retient « 2 ». Dans l’énoncé, le point à résoudre est : « You need to implement the Azure RBAC role assignments for the Network Contributor role. The solution must meet the authentication and » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "1",
      "2",
      "5",
      "10",
      "15"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [
      "assets/az305/AZ305-T8-Q4-p228-1-q.png"
    ],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "2",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 228,
    "caseStudyId": "AZ305-T8",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « 2 ». Dans l’énoncé, le point à résoudre est : « You need to implement the Azure RBAC role assignments for the Network Contributor role. The solution must meet the authentication and » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T8-Q5",
    "topic": 8,
    "number": 5,
    "category": "DRAG DROP",
    "domain": "Études de cas",
    "prompt": "You need to configure an Azure policy to ensure that the Azure SQL databases have Transparent Data Encryption (TDE) enabled. The solution must\n\nmeet the security and compliance requirements.\n\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and\n\narrange them in the correct order.\n\nSelect and Place:",
    "solutionAnswer": "Create an Azure policy definition that uses the deployIfNotExists; Create an Azure policy assignment; Invoke a remediation task.",
    "explanation": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Étape 1",
          "choices": [],
          "expected": "Create an Azure policy definition that uses the deployIfNotExists"
        },
        {
          "label": "Étape 2",
          "choices": [],
          "expected": "Create an Azure policy assignment"
        },
        {
          "label": "Étape 3",
          "choices": [],
          "expected": "Invoke a remediation task."
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T8-Q5-p231-1-q.png",
      "assets/az305/AZ305-T8-Q5-p233-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T8-Q5-p233-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/governance/policy/how-to/remediate-resources"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Create an Azure policy definition that uses the deployIfNotExists; Create an Azure policy assignment; Invoke a remediation task.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 231,
    "caseStudyId": "AZ305-T8",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "Step 1: Create an Azure policy definition that uses the deployIfNotExists The first step is to define the roles that deployIfNotExists and modify needs in the policy definition to successfully deploy the content of your included template. Step 2: Create an Azure policy assignment When creating an assignment using the portal, Azure Policy both generates the managed identity and grants it the roles defined in roleDefinitionIds. Step 3: Invoke a remediation task. Resources that are non-compliant to a deployIfNotExists or modify policy can be put into a compliant state through Remediation. Remediation is accomplished by instructing Azure Policy to run the deployIfNotExists effect or the modify operations of the assigned policy on your existing resources and subscriptions, whether that assignment is to a management group, a subscription, a resource group, or an individual resource. During evaluation, the policy assignment with deployIfNotExists or modify effects determines if there are non-compliant resources or subscriptions. When non- compliant resources or subscriptions are found, the details are provided on the Remediation page.",
    "pedagogicalContext": "Azure Policy évalue la conformité des ressources et peut imposer, auditer ou corriger une configuration. Les effets comme Modify ou DeployIfNotExists sont à distinguer selon qu’on modifie une propriété ou qu’on déploie une ressource/configuration manquante."
  },
  {
    "id": "AZ305-T9-Q1",
    "topic": 9,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the\n\nanswer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "1; 1; 2",
    "explanation": "La correction du support retient « 1; 1; 2 ». Dans l’énoncé, le point à résoudre est : « To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "1"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "1"
        },
        {
          "label": "Sélection 3",
          "choices": [],
          "expected": "2"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T9-Q1-p235-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T9-Q1-p236-1-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/howto-conditional-access-policy-location"
      },
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/howto-conditional-access-policy-admin-mfa"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "1; 1; 2",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 234,
    "caseStudyId": "AZ305-T9",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam,\n\nBerlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes -\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\nWebsite content must be easily updated from a single point.\n\nUser input must be minimized when provisioning new web app instances.\n\nWhenever possible, existing on-premises licenses must be used to reduce cost.\n\nUsers must always authenticate by using their corp.fabrikam.com UPN identity.\n\nAny new deployments to Azure must be redundant in case an Azure region fails.\n\nWhenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\nAn email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\nIn the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\nDirectory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure\n\nand the on- premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\nDatabase metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\nTo avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\nDatabase backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\nCompany information including policies, templates, and data must be inaccessible to anyone outside the company.\n\nUsers on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\nAdministrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\nAll administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\nThe testing of WebApp1 updates must not be visible to anyone outside the company.",
    "sourceExplanation": "Box 1: 1 - One single Azure AD tenant is needed as only the Corp tenant is migrated. Box 2: 1 - Box 3: 2 - One conditional access policy for Multi-Factor Authentication (MFA) will be used for administative access, and a second conditional access policy in order to prevent external access.",
    "pedagogicalContext": "La correction du support retient « 1; 1; 2 ». Dans l’énoncé, le point à résoudre est : « To meet the authentication requirements of Fabrikam, what should you include in the solution? To answer, select the appropriate options in the » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T9-Q2",
    "topic": 9,
    "number": 2,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to recommend a notification solution for the IT Support distribution group.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "Azure AD Connect Health",
    "explanation": "La correction du support retient « Azure AD Connect Health ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "a SendGrid account with advanced reporting",
      "an action group",
      "Azure Network Watcher",
      "Azure AD Connect Health"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Connect Health",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 237,
    "caseStudyId": "AZ305-T9",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam,\n\nBerlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes -\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\nWebsite content must be easily updated from a single point.\n\nUser input must be minimized when provisioning new web app instances.\n\nWhenever possible, existing on-premises licenses must be used to reduce cost.\n\nUsers must always authenticate by using their corp.fabrikam.com UPN identity.\n\nAny new deployments to Azure must be redundant in case an Azure region fails.\n\nWhenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\nAn email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\nIn the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\nDirectory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure\n\nand the on- premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\nDatabase metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\nTo avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\nDatabase backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\nCompany information including policies, templates, and data must be inaccessible to anyone outside the company.\n\nUsers on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\nAdministrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\nAll administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\nThe testing of WebApp1 updates must not be visible to anyone outside the company.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure AD Connect Health ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T9-Q3",
    "topic": 9,
    "number": 3,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to recommend a solution to meet the database retention requirements.\n\nWhat should you recommend?",
    "solutionAnswer": "Configure a long-term retention policy for the database.",
    "explanation": "La correction du support retient « Configure a long-term retention policy for the database. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "Configure a long-term retention policy for the database.",
      "Configure Azure Site Recovery.",
      "Use automatic Azure SQL Database backups.",
      "Configure geo-replication of the database."
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Configure a long-term retention policy for the database.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 239,
    "caseStudyId": "AZ305-T9",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam,\n\nBerlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes -\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\nWebsite content must be easily updated from a single point.\n\nUser input must be minimized when provisioning new web app instances.\n\nWhenever possible, existing on-premises licenses must be used to reduce cost.\n\nUsers must always authenticate by using their corp.fabrikam.com UPN identity.\n\nAny new deployments to Azure must be redundant in case an Azure region fails.\n\nWhenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\nAn email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\nIn the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\nDirectory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure\n\nand the on- premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\nDatabase metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\nTo avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\nDatabase backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\nCompany information including policies, templates, and data must be inaccessible to anyone outside the company.\n\nUsers on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\nAdministrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\nAll administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\nThe testing of WebApp1 updates must not be visible to anyone outside the company.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Configure a long-term retention policy for the database. ». Dans l’énoncé, le point à résoudre est : « What should you recommend? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T10-Q1",
    "topic": 10,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "What should you implement to meet the identity requirements? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Azure AD Identity Governance; Access reviews",
    "explanation": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure AD Identity Governance"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Access reviews"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T10-Q1-p242-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T10-Q1-p243-1-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/active-directory/governance/access-reviews-overview"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure AD Identity Governance; Access reviews",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 241,
    "caseStudyId": "AZ305-T10",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment: Technical Environment\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nExisting Environment: Business Partnerships\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements: Planned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nRequirements: App1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nRequirements: App2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "Requirements: Identity Requirements Contoso identifies the following requirements for managing Fabrikam access to resources: * Every month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer need permissions must be removed as guests. * The solution must minimize development effort. Box 1: Azure AD Identity Governance Incorrect: Not PIM: Life Cycle Requirements must be met. Box 2: Access reviews - Azure Active Directory (Azure AD) access reviews enable organizations to efficiently manage group memberships, access to enterprise applications, and role assignments. User's access can be reviewed on a regular basis to make sure only the right people have continued access.",
    "pedagogicalContext": "Les Access Reviews servent à réévaluer périodiquement des droits existants et peuvent retirer automatiquement les accès qui ne sont plus justifiés. C’est le mécanisme à reconnaître dès qu’un scénario demande une validation récurrente des autorisations."
  },
  {
    "id": "AZ305-T10-Q2",
    "topic": 10,
    "number": 2,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "What should you recommend to meet the monitoring requirements for App2?",
    "solutionAnswer": "Azure Application Insights",
    "explanation": "La correction du support retient « Azure Application Insights ». Dans l’énoncé, le point à résoudre est : « What should you recommend to meet the monitoring requirements for App2? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "VM insights",
      "Azure Application Insights",
      "Microsoft Sentinel",
      "Container insights"
    ],
    "answerIndices": [
      1
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Application Insights",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 244,
    "caseStudyId": "AZ305-T10",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment: Technical Environment\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nExisting Environment: Business Partnerships\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements: Planned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nRequirements: App1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nRequirements: App2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « Azure Application Insights ». Dans l’énoncé, le point à résoudre est : « What should you recommend to meet the monitoring requirements for App2? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T11-Q1",
    "topic": 11,
    "number": 1,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to recommend a data storage strategy for WebApp1.\n\nWhat should you include in the recommendation?",
    "solutionAnswer": "a vCore-based Azure SQL database",
    "explanation": "La correction du support retient « a vCore-based Azure SQL database ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin.",
    "options": [
      "an Azure virtual machine that runs SQL Server",
      "a fixed-size DTU Azure SQL database",
      "an Azure SQL Database elastic pool",
      "a vCore-based Azure SQL database"
    ],
    "answerIndices": [
      3
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "a vCore-based Azure SQL database",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 246,
    "caseStudyId": "AZ305-T11",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam,\n\nBerlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes -\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\nWebsite content must be easily updated from a single point.\n\nUser input must be minimized when provisioning new web app instances.\n\nWhenever possible, existing on-premises licenses must be used to reduce cost.\n\nUsers must always authenticate by using their corp.fabrikam.com UPN identity.\n\nAny new deployments to Azure must be redundant in case an Azure region fails.\n\nWhenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\nAn email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\nIn the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\nDirectory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure\n\nand the on- premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\nDatabase metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\nTo avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\nDatabase backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\nCompany information including policies, templates, and data must be inaccessible to anyone outside the company.\n\nUsers on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\nAdministrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\nAll administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\nThe testing of WebApp1 updates must not be visible to anyone outside the company.",
    "sourceExplanation": "",
    "pedagogicalContext": "La correction du support retient « a vCore-based Azure SQL database ». Dans l’énoncé, le point à résoudre est : « What should you include in the recommendation? » Pour mémoriser la réponse, rattachez d’abord la contrainte principale du scénario au service ou au niveau de service qui y répond, puis éliminez les options qui ne couvrent qu’une partie du besoin."
  },
  {
    "id": "AZ305-T12-Q1",
    "topic": 12,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You plan to migrate DB1 and DB2 to Azure.\n\nYou need to ensure that the Azure database and the service tier meet the resiliency and business requirements.\n\nWhat should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "An Azure SQL Database elastic pool; Business Critical",
    "explanation": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "An Azure SQL Database elastic pool"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Business Critical"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T12-Q1-p248-1-q.png",
      "assets/az305/AZ305-T12-Q1-p250-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T12-Q1-p250-2-s.jpeg"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "An Azure SQL Database elastic pool; Business Critical",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 248,
    "caseStudyId": "AZ305-T12",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "Box 1: An Azure SQL Database elastic pool Scenario: * Resiliency Requirements. Once migrated to Azure, DB1 and DB2 must meet the following requirements: Maintain availability if two availability zones in the local Azure region fail. Fail over automatically. Minimize I/O latency. * Litware identifies the following business requirements: Minimize administrative effort. Minimize costs. Box 2: Business Critical",
    "pedagogicalContext": "Le niveau Business Critical d’Azure SQL Database privilégie les performances, la faible latence et la haute disponibilité grâce à plusieurs réplicas et un stockage local rapide."
  },
  {
    "id": "AZ305-T13-Q1",
    "topic": 13,
    "number": 1,
    "category": "DRAG DROP",
    "domain": "Études de cas",
    "prompt": "You need to recommend a solution that meets the file storage requirements for App2.\n\nWhat should you deploy to the Azure subscription and the on-premises network? To answer, drag the appropriate services to the correct locations.\n\nEach service may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\nSelect and Place:",
    "solutionAnswer": "Azure Files; Azure File Sync",
    "explanation": "Azure File Sync met en cache un partage Azure Files sur des serveurs Windows et synchronise les fichiers avec le cloud. Il permet de conserver une expérience de serveur de fichiers local tout en centralisant les données.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "Azure Files"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "Azure File Sync"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T13-Q1-p252-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T13-Q1-p253-1-s.png"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/storage/file-sync/file-sync-deployment-guide"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Azure Files; Azure File Sync",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 251,
    "caseStudyId": "AZ305-T13",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment: Technical Environment\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nExisting Environment: Business Partnerships\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements: Planned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nRequirements: App1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nRequirements: App2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "Box 1: Azure Files - Scenario: App2 has the following file storage requirements: ✑ Save files to an Azure Storage account. ✑ Replicate files to an on-premises location. ✑ Ensure that on-premises clients can read the files over the LAN by using the SMB protocol. Box 2: Azure File Sync - Use Azure File Sync to centralize your organization's file shares in Azure Files, while keeping the flexibility, performance, and compatibility of an on-premises file server. Azure File Sync transforms Windows Server into a quick cache of your Azure file share. You can use any protocol that's available on Windows Server to access your data locally, including SMB, NFS, and FTPS. You can have as many caches as you need across the world.",
    "pedagogicalContext": "Azure File Sync met en cache un partage Azure Files sur des serveurs Windows et synchronise les fichiers avec le cloud. Il permet de conserver une expérience de serveur de fichiers local tout en centralisant les données."
  },
  {
    "id": "AZ305-T13-Q2",
    "topic": 13,
    "number": 2,
    "category": "Étude de cas",
    "domain": "Études de cas",
    "prompt": "You need to recommend a solution that meets the data requirements for App1.\n\nWhat should you recommend deploying to each availability zone that contains an instance of App1?",
    "solutionAnswer": "an Azure Cosmos DB that uses multi-region writes",
    "explanation": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité.",
    "options": [
      "an Azure Cosmos DB that uses multi-region writes",
      "an Azure Data Lake store that uses geo-zone-redundant storage (GZRS)",
      "an Azure Storage account that uses geo-zone-redundant storage (GZRS)"
    ],
    "answerIndices": [
      0
    ],
    "multi": false,
    "visualSpec": null,
    "assets": [],
    "solutionAssets": [],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "an Azure Cosmos DB that uses multi-region writes",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 254,
    "caseStudyId": "AZ305-T13",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment: Technical Environment\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nExisting Environment: Business Partnerships\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements: Planned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nRequirements: App1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nRequirements: App2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "",
    "pedagogicalContext": "Azure Cosmos DB est une base distribuée conçue pour une faible latence, une réplication globale et plusieurs modèles d’accès. Le choix de l’API et du mode de réplication doit suivre le modèle de données et les besoins de disponibilité."
  },
  {
    "id": "AZ305-T14-Q1",
    "topic": 14,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You are evaluating whether to use Azure Traffic Manager and Azure Application Gateway to meet the connection requirements for App1.\n\nWhat is the minimum numbers of instances required for each service? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "1; 2",
    "explanation": "Application Gateway est un équilibreur de charge applicatif régional de couche 7. Avec WAF, il peut aussi protéger les applications HTTP(S) contre des attaques web courantes.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "rows",
      "rows": [
        {
          "label": "Sélection 1",
          "choices": [],
          "expected": "1"
        },
        {
          "label": "Sélection 2",
          "choices": [],
          "expected": "2"
        }
      ]
    },
    "assets": [
      "assets/az305/AZ305-T14-Q1-p257-1-q.jpeg"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T14-Q1-p257-2-s.jpeg"
    ],
    "sources": [
      {
        "title": "Référence du document source",
        "url": "https://docs.microsoft.com/en-us/azure/architecture/high-availability/reference-architecture-traffic-manager-application-gateway"
      }
    ],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "1; 2",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": true,
    "sourcePage": 256,
    "caseStudyId": "AZ305-T14",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nContoso, Ltd. is a research company that has a main office in Montreal.\n\nExisting Environment: Technical Environment\n\nThe on-premises network contains a single Active Directory domain named contoso.com.\n\nContoso has a single Azure subscription.\n\nExisting Environment: Business Partnerships\n\nContoso has a business partnership with Fabrikam, Inc. Fabrikam users access some Contoso applications over the internet by using Azure Active\n\nDirectory\n\n(Azure AD) guest accounts.\n\nRequirements: Planned Changes -\n\nContoso plans to deploy two applications named App1 and App2 to Azure.\n\nRequirements: App1 -\n\nApp1 will be a Python web app hosted in Azure App Service that requires a Linux runtime. Users from Contoso and Fabrikam will access App1.\n\nApp1 will access several services that require third-party credentials and access strings. The credentials and access strings are stored in Azure\n\nKey Vault.\n\nApp1 will have six instances: three in the East US Azure region and three in the West Europe Azure region.\n\nApp1 has the following data requirements:\n\nEach instance will write data to a data store in the same availability zone as the instance.\n\nData written by any App1 instance must be visible to all App1 instances.\n\nApp1 will only be accessible from the internet. App1 has the following connection requirements:\n\nConnections to App1 must pass through a web application firewall (WAF).\n\nConnections to App1 must be active-active load balanced between instances.\n\nAll connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe\n\nregion.\n\nEvery hour, you will run a maintenance task by invoking a PowerShell script that copies files from all the App1 instances. The PowerShell script\n\nwill run from a central location.\n\nRequirements: App2 -\n\nApp2 will be a .NET app hosted in App Service that requires a Windows runtime. App2 has the following file storage requirements:\n\nSave files to an Azure Storage account.\n\nReplicate files to an on-premises location.\n\nEnsure that on-premises clients can read the files over the LAN by using the SMB protocol.\n\nYou need to monitor App2 to analyze how long it takes to perform different transactions within the application. The solution must not require\n\nchanges to the application code.\n\nApplication Development Requirements\n\nApplication developers will constantly develop new versions of App1 and App2. The development process must meet the following requirements:\n\nA staging instance of a new application version must be deployed to the application host before the new version is used in production.\n\nAfter testing the new version, the staging version of the application will replace the production version.\n\nThe switch to the new application version from staging to production must occur without any downtime of the application.\n\nIdentity Requirements -\n\nContoso identifies the following requirements for managing Fabrikam access to resources:\n\nEvery month, an account manager at Fabrikam must review which Fabrikam users have access permissions to App1. Accounts that no longer\n\nneed permissions must be removed as guests.\n\nThe solution must minimize development effort.\n\nSecurity Requirement -\n\nAll secrets used by Azure services must be stored in Azure Key Vault.\n\nServices that require credentials must have the credentials tied to the service instance. The credentials must NOT be shared between services.",
    "sourceExplanation": "Box 1: 1 - App1 will only be accessible from the internet. App1 has the following connection requirements: ‫ג‬€¢ Connections to App1 must be active-active load balanced between instances. ‫ג‬€¢ All connections to App1 from North America must be directed to the East US region. All other connections must be directed to the West Europe region. App1 will have six instances: three in the East US Azure region and three in the West Europe Azure region. Note: Azure Traffic Manager is a DNS-based traffic load balancer. This service allows you to distribute traffic to your public facing applications across the global Azure regions. Box 2: 2 - For production workloads, run at least two gateway instances. A single Application Gateway deployment can run multiple instances of the gateway. Use one Application Gateway in East US Region, and one in the West Europe region.",
    "pedagogicalContext": "Application Gateway est un équilibreur de charge applicatif régional de couche 7. Avec WAF, il peut aussi protéger les applications HTTP(S) contre des attaques web courantes."
  },
  {
    "id": "AZ305-T15-Q1",
    "topic": 15,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "How should the migrated databases DB1 and DB2 be implemented in Azure?\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T15-Q1-p259-1-q.png",
      "assets/az305/AZ305-T15-Q1-p261-1-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T15-Q1-p261-2-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 259,
    "caseStudyId": "AZ305-T15",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nLitware, Inc. is a medium-sized finance company that has a main office in Boston.\n\nExisting Environment -\n\nIdentity Environment -\n\nThe network contains an Active Directory forest named litware.com that is linked to an Azure Active Directory (Azure AD) tenant named\n\nlitware.com. All users have Azure Active Directory Premium P2 licenses.\n\nLitware has a second Azure AD tenant named dev.litware.com that is used as a development environment.\n\nThe litware.com tenant has a Conditional Access policy named Capolicy1. Capolicy1 requires that when users manage the Azure subscription for\n\na production environment by using the Azure portal, they must connect from a hybrid Azure AD-joined device.\n\nAzure Environment -\n\nLitware has 10 Azure subscriptions that are linked to the Litware.com tenant and five Azure subscriptions that are linked to the dev.litware.com\n\ntenant. All the subscriptions are in an Enterprise Agreement (EA).\n\nThe litware.com tenant contains a custom Azure role-based access control (Azure RBAC) role named Role1 that grants the DataActions read\n\npermission to the blobs and files in Azure Storage.\n\nOn-Premises Environment -\n\nThe on-premises network of Litware contains the resources shown in the following table.\n\nNetwork Environment -\n\nLitware has ExpressRoute connectivity to Azure.\n\nPlanned Changes and Requirements\n\nPlanned Changes -\n\nLitware plans to implement the following changes:\n\nMigrate DB1 and DB2 to Azure.\n\nMigrate App1 to Azure virtual machines.\n\nMigrate the external storage used by App1 to Azure Storage.\n\nDeploy the Azure virtual machines that will host App1 to Azure dedicated hosts.\n\nAuthentication and Authorization Requirements\n\nLitware identifies the following authentication and authorization requirements:\n\nOnly users that manage the production environment by using the Azure portal must connect from a hybrid Azure AD-joined device and\n\nauthenticate by using\n\nAzure Multi-Factor Authentication (MFA).\n\nThe Network Contributor built-in RBAC role must be used to grant permissions to the network administrators for all the virtual networks in all the\n\nAzure subscriptions.\n\nTo access the resources in Azure, App1 must use the managed identity of the virtual machines that will host the app.\n\nRBAC roles must be applied to management groups.\n\nResiliency Requirements -\n\nLitware identifies the following resiliency requirements:\n\nOnce migrated to Azure, DB1 and DB2 must meet the following requirements:\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\n- Fail over automatically.\n\n- Minimize I/O latency.\n\nApp1 must meet the following requirements:\n\n- Be hosted in an Azure region that supports availability zones.\n\n- Be hosted on Azure virtual machines that support automatic scaling.\n\n- Maintain availability if two availability zones in the local Azure region fail.\n\nSecurity and Compliance Requirements\n\nLitware identifies the following security and compliance requirements:\n\nOnce App1 is migrated to Azure, you must ensure that new data can be written to the app, and the modification of new and existing data is\n\nprevented for a period of three years.\n\nOn-premises users and services must be able to access the Azure Storage account that will host the data in App1.\n\nAccess to the public endpoint of the Azure Storage account that will host the App1 data must be prevented.\n\nAll Azure SQL databases in the production environment must have Transparent Data Encryption (TDE) enabled.\n\nApp1 must NOT share physical hardware with other workloads.\n\nBusiness Requirements -\n\nLitware identifies the following business requirements:\n\nMinimize administrative effort.\n\nMinimize costs.",
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  },
  {
    "id": "AZ305-T16-Q1",
    "topic": 16,
    "number": 1,
    "category": "HOTSPOT",
    "domain": "Études de cas",
    "prompt": "You design a solution for the web tier of WebApp1 as shown in the exhibit.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.\n\nHot Area:",
    "solutionAnswer": "Voir l’illustration de correction du document source.",
    "explanation": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation.",
    "options": [],
    "answerIndices": [],
    "multi": false,
    "visualSpec": {
      "kind": "self",
      "label": "Votre réponse"
    },
    "assets": [
      "assets/az305/AZ305-T16-Q1-p263-1-q.jpeg",
      "assets/az305/AZ305-T16-Q1-p263-2-q.png"
    ],
    "solutionAssets": [
      "assets/az305/AZ305-T16-Q1-p264-1-s.png"
    ],
    "sources": [],
    "sourceScope": "source",
    "format": "exercise",
    "originalAnswer": "Voir l’illustration de correction du document source.",
    "answerRevision": false,
    "sourceConflict": false,
    "reviewedAt": null,
    "autoScorable": false,
    "sourcePage": 262,
    "caseStudyId": "AZ305-T16",
    "caseContext": "Introductory Info\n\nCase Study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\n\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\n\nincluded on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\n\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\n\nindependent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\n\nthe next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\n\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\n\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\n\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\n\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nOverview -\n\nFabrikam, Inc. is an engineering company that has offices throughout Europe. The company has a main office in London and three branch offices\n\nin Amsterdam,\n\nBerlin, and Rome.\n\nExisting Environment: Active Directory Environment\n\nThe network contains two Active Directory forests named corp.fabrikam.com and rd.fabrikam.com. There are no trust relationships between the\n\nforests.\n\nCorp.fabrikam.com is a production forest that contains identities used for internal user and computer authentication.\n\nRd.fabrikam.com is used by the research and development (R&D) department only. The R&D department is restricted to using on-premises\n\nresources only.\n\nExisting Environment: Network Infrastructure\n\nEach office contains at least one domain controller from the corp.fabrikam.com domain. The main office contains all the domain controllers for\n\nthe rd.fabrikam.com forest.\n\nAll the offices have a high-speed connection to the internet.\n\nAn existing application named WebApp1 is hosted in the data center of the London office. WebApp1 is used by customers to place and track\n\norders. WebApp1 has a web tier that uses Microsoft Internet Information Services (IIS) and a database tier that runs Microsoft SQL Server 2016.\n\nThe web tier and the database tier are deployed to virtual machines that run on Hyper-V.\n\nThe IT department currently uses a separate Hyper-V environment to test updates to WebApp1.\n\nFabrikam purchases all Microsoft licenses through a Microsoft Enterprise Agreement that includes Software Assurance.\n\nExisting Environment: Problem Statements\n\nThe use of WebApp1 is unpredictable. At peak times, users often report delays. At other times, many resources for WebApp1 are underutilized.\n\nRequirements: Planned Changes -\n\nFabrikam plans to move most of its production workloads to Azure during the next few years, including virtual machines that rely on Active\n\nDirectory for authentication.\n\nAs one of its first projects, the company plans to establish a hybrid identity model, facilitating an upcoming Microsoft 365 deployment.\n\nAll R&D operations will remain on-premises.\n\nFabrikam plans to migrate the production and test instances of WebApp1 to Azure.\n\nRequirements: Technical Requirements\n\nFabrikam identifies the following technical requirements:\n\nWebsite content must be easily updated from a single point.\n\nUser input must be minimized when provisioning new web app instances.\n\nWhenever possible, existing on-premises licenses must be used to reduce cost.\n\nUsers must always authenticate by using their corp.fabrikam.com UPN identity.\n\nAny new deployments to Azure must be redundant in case an Azure region fails.\n\nWhenever possible, solutions must be deployed to Azure by using the Standard pricing tier of Azure App Service.\n\nAn email distribution group named IT Support must be notified of any issues relating to the directory synchronization services.\n\nIn the event that a link fails between Azure and the on-premises network, ensure that the virtual machines hosted in Azure can authenticate to\n\nActive Directory.\n\nDirectory synchronization between Azure Active Directory (Azure AD) and corp.fabrikam.com must not be affected by a link failure between Azure\n\nand the on- premises network.\n\nRequirements: Database Requirements\n\nFabrikam identifies the following database requirements:\n\nDatabase metrics for the production instance of WebApp1 must be available for analysis so that database administrators can optimize the\n\nperformance settings.\n\nTo avoid disrupting customer access, database downtime must be minimized when databases are migrated.\n\nDatabase backups must be retained for a minimum of seven years to meet compliance requirements.\n\nRequirements: Security Requirements\n\nFabrikam identifies the following security requirements:\n\nCompany information including policies, templates, and data must be inaccessible to anyone outside the company.\n\nUsers on the on-premises network must be able to authenticate to corp.fabrikam.com if an internet link fails.\n\nAdministrators must be able authenticate to the Azure portal by using their corp.fabrikam.com credentials.\n\nAll administrative access to the Azure portal must be secured by using multi-factor authentication (MFA).\n\nThe testing of WebApp1 updates must not be visible to anyone outside the company.",
    "sourceExplanation": "",
    "pedagogicalContext": "Cette question dépend d’un schéma, d’un tableau ou d’une zone interactive. Utilisez d’abord les contraintes visibles dans l’illustration, puis comparez vos choix avec la correction graphique révélée après validation."
  }
];
