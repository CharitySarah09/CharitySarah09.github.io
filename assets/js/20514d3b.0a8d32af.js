"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[465],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=h(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var h=2;h<o;h++)r[h]=a[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9545:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(7462),i=(a(7294),a(3905));const o={},r="Techniques for Improving Model Reliability",s={unversionedId:"tutorial-extras/increasing-reliability",id:"tutorial-extras/increasing-reliability",title:"Techniques for Improving Model Reliability",description:"The orginal guide, Techniques for Improving Model Reliability, can be viewed on openai's GitHub repository.",source:"@site/docs/tutorial-extras/increasing-reliability.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/increasing-reliability",permalink:"/docs/tutorial-extras/increasing-reliability",draft:!1,editUrl:"https://github.com/CharitySarah09/CharitySarah09.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-extras/increasing-reliability.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Format Inputs to ChatGPT",permalink:"/docs/tutorial-extras/copy"},next:{title:"Video & Graphics",permalink:"/docs/category/video--graphics"}},l={},h=[{value:"Complex Tasks",id:"complex-tasks",level:2},{value:"Example 1: Math Problem",id:"example-1-math-problem",level:3},{value:"Context and Model Capabilities",id:"context-and-model-capabilities",level:2},{value:"Simplify a Task",id:"simplify-a-task",level:2},{value:"Example 2: Splitting the Task",id:"example-2-splitting-the-task",level:3},{value:"Example 3: Splitting the Task",id:"example-3-splitting-the-task",level:3},{value:"Explain before Answering Prompts",id:"explain-before-answering-prompts",level:2},{value:"Zero-shot",id:"zero-shot",level:3},{value:"Research",id:"research",level:4},{value:"Application",id:"application",level:4},{value:"Example 4: Zero-shot Prompt",id:"example-4-zero-shot-prompt",level:5},{value:"Few-shot Example",id:"few-shot-example",level:3},{value:"Research",id:"research-1",level:4},{value:"Application",id:"application-1",level:4},{value:"Fine-tuned",id:"fine-tuned",level:3},{value:"Research",id:"research-2",level:4},{value:"Application",id:"application-2",level:4},{value:"Appendix",id:"appendix",level:2},{value:"Bibliography",id:"bibliography",level:2}],c={toc:h},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"techniques-for-improving-model-reliability"},"Techniques for Improving Model Reliability"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The orginal guide, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md"},"Techniques for Improving Model Reliability"),", can be viewed on openai's GitHub repository.")),(0,i.kt)("h2",{id:"complex-tasks"},"Complex Tasks"),(0,i.kt)("p",null,"If asked to multiply 13 by 17, would the answer immediately pop into your mind? It probably won't for most individuals, but that doesn't mean humans are incapable of two-digit multiplication. Given pen, paper and a few seconds, it's not too difficult to solve 13x17= 130 + 70 + 21 = 221."),(0,i.kt)("p",null,"Similarly, if GPT-3 receives a task that's too complex to compute within the time alloted for the current token, it may produce an incorrect guess. Also like people, this doesn't necessarily mean the model can't handle the task. Given some time and several rounds to reason through the task, the model could provide a more accurate answer."),(0,i.kt)("h3",{id:"example-1-math-problem"},"Example 1: Math Problem"),(0,i.kt)("p",null,"For example, if you ask text-davinci-002 the following math problem, it answers incorrectly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nQ: A juggler has 16 balls. Half of the balls are golf balls and half of the golf balls are blue. How many blue golf balls are there?\nA:\nThere are 8 blue golf balls.\n")),(0,i.kt)("p",null,"Does this mean that GPT-3 can't do simple math problems? No, it only highlights the need for instructive and precise prompts. As seen below, when the model is prompted with \"Let's think step by step\" the correct answer is given."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Q: A juggler has 16 balls. Half of the balls are golf balls and half of the golf balls are blue. How many blue golf balls are there?\nA: Let's think step by step.\nThere are 16 balls in total. \nHalf of the balls are golf balls. \nThat means that there are 8 golf balls. \nHalf of the golf balls are blue. \nThat means that there are 4 blue golf balls.\n\n")),(0,i.kt)("p",null,"One should not assume from a single example that the prompt, \"Let's think step by step\", will produced accurate results for similar math problems or it was an isolated case. Still, further review did prove it's usefullness. It was found that when used with word math problems, the prompt increased GPT-3's accuracy rate from 18% to 79%."),(0,i.kt)("h2",{id:"context-and-model-capabilities"},"Context and Model Capabilities"),(0,i.kt)("p",null,"A common misconception about GPT-3 is that model capabilities are fixed across all contexts (e.g. if GPT-3 gets a simple logic question wrong, then it must be incapable of simple logic). On the contrary, sometimes incorrect answers can be resolved with a prompt that provides more direction for problem solving as illustrated from the math problem in Example 1."),(0,i.kt)("p",null,"The following methods for improving the reliability of large language models working on complex tasks will be reviewed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Give clearer instructions."),(0,i.kt)("li",{parentName:"ul"},"Split complex tasks into simpler subtasks."),(0,i.kt)("li",{parentName:"ul"},"Structure the instructions to keep the model on task."),(0,i.kt)("li",{parentName:"ul"},"Prompt the model to explain before answering."),(0,i.kt)("li",{parentName:"ul"},"Fine-tune custom models to maximize performance.")),(0,i.kt)("p",null,"Some of these techniques are geared towards specific problem types, nonetheless the framework for most are developed upon general model principles that can be applied to a range of tasks."),(0,i.kt)("h2",{id:"simplify-a-task"},"Simplify a Task"),(0,i.kt)("p",null,"One strategy for allowing the model sufficient time to solve a problem is by spliting the task into smaller parts so it requires several steps to reach the answer."),(0,i.kt)("h3",{id:"example-2-splitting-the-task"},"Example 2: Splitting the Task"),(0,i.kt)("p",null,"In this task, the model is asked to answer a multiple-choice question taken from the game, Clue. In the first prompt, text-davinci-002 isn't able to combine clues 3 and 5 to solve the problem. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Use the following clues to answer the following multiple-choice question.\nClues:\n1. Miss Scarlett was the only person in the lounge.\n2. The person with the pipe was in the kitchen.\n3. Colonel Mustard was the only person in the observatory.\n4. Professor Plum was not in the library nor the billiard room.\n5. The person with the candlestick was in the observatory.\n \nQuestion: Was Colonel Mustard in the observatory with the candlestick?\n(a) Yes; Colonel Mustard was in the observatory with the candlestick\n(b) No; Colonel Mustard was not in the observatory with the candlestick\n(c) Unknown; there is not enough information to determine whether Colonel Mustard was in the observatory with the candlestick\n \nSolution:\n(c) Unknown; there is not enough information to determine whether Colonel Mustard was in the observatory with the candlestick\n")),(0,i.kt)("p",null,"By breaking the question down into multiple steps, the model can process the different pieces of information and their relationship better. This time the task consists of three parts: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Use the following clues to answer the following multiple-choice question, applying the following procedure:\n(1) First, go through the clues one by one and consider whether the clue is potentially relevant\n(2) Second, combine the relevant clues to reason out the answer to the question\n(3) Third, map the answer to one of the multiple choice answers: either (a), (b), or (c)\n \nClues:\n1. Miss Scarlett was the only person in the lounge.\n2. The person with the pipe was in the kitchen.\n3. Colonel Mustard was the only person in the observatory.\n4. Professor Plum was not in the library nor the billiard room.\n5. The person with the candlestick was in the observatory.\n \nQuestion: Was Colonel Mustard in the observatory with the candlestick?\n(a) Yes; Colonel Mustard was in the observatory with the candlestick\n(b) No; Colonel Mustard was not in the observatory with the candlestick\n(c) Unknown; there is not enough information to determine whether Colonel Mustard was in the observatory with the candlestick\n \nSolution:\n(1) First, go through the clues one by one and consider whether the clue is potentially relevant:\nClue 1: Miss Scarlett was the only person in the lounge. This clue is not relevant.\nClue 2: The person with the pipe was in the kitchen. This clue is not relevant.\nClue 3: Colonel Mustard was the only person in the observatory. This clue is relevant.\nClue 4: Professor Plum was not in the library nor the billiard room. This clue is not relevant.\nClue 5: The person with the candlestick was in the observatory. This clue is relevant.\n \n(2) Second, combine the relevant clues to reason out the answer to the question:\nClue 3 and Clue 5 both say that the person with the candlestick was in the observatory. Colonel Mustard was the only person in the observatory, so Colonel Mustard was the person with the candlestick.\n \n(3) Third, write the final answer:\n(a) Yes; Colonel Mustard was in the observatory with the candlestick\n\n")),(0,i.kt)("p",null,"Giving a model time and space to solve a problem while guiding its reasoning, improves the accuracy. Another benefit of splitting instuctions into smaller subtasks is that it can help the model stay on track through each step of the process. "),(0,i.kt)("h3",{id:"example-3-splitting-the-task"},"Example 3: Splitting the Task"),(0,i.kt)("p",null,"The text used below explains that statistics is a science that studies the variability, collection, organization, analysis, interpretation, and presentation of data, as well as the random process that generates them following the laws of probability."),(0,i.kt)("p",null,"If text-davinci-001 is asked to summarize this text in its original language, the model can lapse back into English:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Summarize the text using the original language of the text. The summary should be one sentence long.\n\nText:\n\n"La estad\xedstica (la forma femenina del t\xe9rmino alem\xe1n Statistik, derivado a su vez del italiano statista, "hombre de Estado")\u200b es una ciencia que estudia la variabilidad, colecci\xf3n, organizaci\xf3n, an\xe1lisis, interpretaci\xf3n, y presentaci\xf3n de los datos, as\xed como el proceso aleatorio que los genera siguiendo las leyes de la probabilidad.\u200b La estad\xedstica es una ciencia formal deductiva, con un conocimiento propio, din\xe1mico y en continuo desarrollo obtenido a trav\xe9s del m\xe9todo cient\xedfico formal. En ocasiones, las ciencias f\xe1cticas necesitan utilizar t\xe9cnicas estad\xedsticas durante su proceso de investigaci\xf3n factual, con el fin de obtener nuevos conocimientos basados en la experimentaci\xf3n y en la observaci\xf3n. En estos casos, la aplicaci\xf3n de la estad\xedstica permite el an\xe1lisis de datos provenientes de una muestra representativa, que busca explicar las correlaciones y dependencias de un fen\xf3meno f\xedsico o natural, de ocurrencia en forma aleatoria o condicional."\n\nSummary:\nThe text explains that statistics is a science that studies the variability, collection, organization, analysis, interpretation, and presentation of data, as well as the random process that generates them following the laws of probability.\n\n\n')),(0,i.kt)("p",null,"Now, when the model is directed to first identify the language of the text and then summarize, it becomes more reliable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'First, identify the language of the text. Second, summarize the text using the original language of the text. The summary should be one sentence long.\n\nText:\n\n"""La estad\xedstica (la forma femenina del t\xe9rmino alem\xe1n Statistik, derivado a su vez del italiano statista, "hombre de Estado")\u200b es una ciencia que estudia la variabilidad, colecci\xf3n, organizaci\xf3n, an\xe1lisis, interpretaci\xf3n, y presentaci\xf3n de los datos, as\xed como el proceso aleatorio que los genera siguiendo las leyes de la probabilidad.\u200b La estad\xedstica es una ciencia formal deductiva, con un conocimiento propio, din\xe1mico y en continuo desarrollo obtenido a trav\xe9s del m\xe9todo cient\xedfico formal. En ocasiones, las ciencias f\xe1cticas necesitan utilizar t\xe9cnicas estad\xedsticas durante su proceso de investigaci\xf3n factual, con el fin de obtener nuevos conocimientos basados en la experimentaci\xf3n y en la observaci\xf3n. En estos casos, la aplicaci\xf3n de la estad\xedstica permite el an\xe1lisis de datos provenientes de una muestra representativa, que busca explicar las correlaciones y dependencias de un fen\xf3meno f\xedsico o natural, de ocurrencia en forma aleatoria o condicional."""\n\n\nLanguage:\nSpanish\n\nLa estad\xedstica es una ciencia que estudia la variabilidad, colecci\xf3n, organizaci\xf3n, an\xe1lisis, interpretaci\xf3n, y presentaci\xf3n de los datos, as\xed como el proceso aleatorio que los genera siguiendo las leyes de la probabilidad.\n\n')),(0,i.kt)("h2",{id:"explain-before-answering-prompts"},"Explain before Answering Prompts"),(0,i.kt)("p",null,'Another technique for improving the reliability is prompting the model to rationalize before providing a final answer. By requiring the model to reason, in essence "thinking aloud", the probability of a correct answer greatly increases. The methods that are different variation of Explain before answering prompts. The research that follows employ different variations of this method.'),(0,i.kt)("h3",{id:"zero-shot"},"Zero-shot"),(0,i.kt)("h4",{id:"research"},"Research"),(0,i.kt)("p",null,"According to Kojima's et al. findings (2022) on the zero-shot method, prepending answers with \"Let's think stey by step\" was the easiest way to prompt a model to reason out the answer. Figure 1 below illustrates its use in their study:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:a(6805).Z,width:"812",height:"318"})),(0,i.kt)("p",null,"Figure 1: Zero-shot prompting"),(0,i.kt)("p",null,"Source: Large Language Models are Zero-shot Reasoners by Takeshi Kojima et al. (2022)"),(0,i.kt)("p",null,"As noted earlier, including the prompt \"Let's think step by step\" in the task message quadrupled the accuracy from 18% t0 79% for the MultiArith math dataset. Although, it works well on math problems, it's not as effective on all task. Researchers found it most helpful for multi-step artithmetic, symbolic reasoning, strategy and other reasoning problems. It did not fair so well with simple math problems or common sense questions. The prompt probably won't increase accuracy with other types of non-reasoning tasks either. Please see the ",(0,i.kt)("a",{parentName:"p",href:"#appendix"},"appendix")," for additional charts and tables reflecting the findings from Kojima's study or read the full ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2205.11916"},"article"),"."),(0,i.kt)("h4",{id:"application"},"Application"),(0,i.kt)("p",null,"\"Let's think step by step\" is rather generic though. Depending upon the task, consider experimenting with different versions of this instruction. It's possible to get better results with more explicit directions that have been customized. For example, the prompt can be structured to address different parts of content: First, think step by step about why X might be true. Second, think step by step about why Y might be true. Third, think step by step about whether X or Y makes more sense. Additionally, you can provide the model with an example format to so it stays on task. See the example below."),(0,i.kt)("h5",{id:"example-4-zero-shot-prompt"},"Example 4: Zero-shot Prompt"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Using the IRS guidance below, answer the following questions using this format:\n(1) For each criterion, determine whether it is met by the vehicle purchase\n- {Criterion} Let\'s think step by step. {explanation} {yes or no, or if the question does not apply then N/A}.\n(2) After considering each criterion in turn, phrase the final answer as "Because of {reasons}, the answer is likely {yes or no}."\n\nIRS guidance:\n"""\nYou may be eligible for a federal tax credit under Section 30D if you purchased a car or truck that meets the following criteria:\n- Does the vehicle have at least four wheels?\n- Does the vehicle weigh less than 14,000 pounds?\n- Does the vehicle draw energy from a battery with at least 4 kilowatt hours that may be recharged from an external source?\n- Was the vehicle purchased in a year before 2022?\n  - If so, has the manufacturer sold less than 200,000 qualifying vehicles? (Tesla and GM have sold more than 200,000 qualifying vehicles.)\n- Was the vehicle purchased in a year after 2022?\n  - If so, is the vehicle present in the following list of North American-assembled vehicles? (The only electric vehicles assembled in North America are the Audi Q5, BMW 330e, BMW X5, Chevrolet Bolt EUV, Chevrolet Bolt EV, Chrysler Pacifica PHEV, Ford Escape PHEV, Ford F Series, Ford Mustang MACH E, Ford Transit Van, GMC Hummer Pickup, GMC Hummer SUV, Jeep Grand Cherokee PHEV, Jeep Wrangler PHEV, Lincoln Aviator PHEV, Lincoln Corsair Plug-in, Lucid Air, Nissan Leaf, Rivian EDV, Rivian R1S, Rivian R1T, Tesla Model 3, Tesla Model S, Tesla Model X, Tesla Model Y, Volvo S60, BMW 330e, Bolt EV, Cadillac Lyriq, Mercedes EQS SUV, and Nissan Leaf.)\n"""\n\nQuestion: Can I claim a federal tax credit for my Toyota Prius Prime bought in 2021?\n\nSolution:\n\n(1) For each criterion, determine whether it is met by the vehicle purchase\n- Does the vehicle have at least four wheels? Let\'s think step by step.\n The Toyota Prius Prime has four wheels, so the answer is yes.\n- Does the vehicle weigh less than 14,000 pounds? Let\'s think step by step. The Toyota Prius Prime weighs less than 14,000 pounds, so the answer is yes.\n- Does the vehicle draw energy from a battery with at least 4 kilowatt hours that may be recharged from an external source? Let\'s think step by step. The Toyota Prius Prime has a battery with at least 4 kilowatt hours that may be recharged from an external source, so the answer is yes.\n- Was the vehicle purchased in a year before 2022? Let\'s think step by step. The Toyota Prius Prime was purchased in 2021, which is before 2022, so the answer is yes.\n- Was the vehicle purchased in a year after 2022? N/A\n- If so, is the vehicle present in the following list of North American-assembled vehicles? N/A\n\n(2) After considering each criterion in turn, phrase the final answer as "Because of {reasons}, the answer is likely {yes or no}."\n\nBecause the Toyota Prius Prime meets all of the criteria for a federal tax credit, the answer is likely yes.\n')),(0,i.kt)("h3",{id:"few-shot-example"},"Few-shot Example"),(0,i.kt)("h4",{id:"research-1"},"Research"),(0,i.kt)("p",null,"Similar to the zero-shot method, few-shot directs the model to reason out the answers. However, the few-shot method demonstrates the appropriate problem solving steps with several examples. Jason Wei and Denny Zhou  display in their study how the few-show-chain-of thought-prompt works(Language Models Perform Reasoning via Chain of Thought, 2022): "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:a(1286).Z,width:"875",height:"432"})),(0,i.kt)("p",null,"Figure 2:  Example of few-shot prompting"),(0,i.kt)("p",null,"Source: Chain of Thought Prompting Elicits Reasoning in Large Language Models by Jason Wei and Denny Zhou et al."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here are more examples of reasoning chains written by human labelers in the study. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:a(1885).Z,width:"604",height:"485"})),(0,i.kt)("p",null,"Figure 3: Reasoning chains"),(0,i.kt)("p",null,"Source: Chain of Thought Prompting Elicits Reasoning in Large Language Models by Jason Wei and Denny Zhou et al."),(0,i.kt)("p",null,"When using grade school math problems as tasks, researchers found that chain-of-though prompting tripled the accuracy from 18% to 57%. The method was also applied to questions related to sports understanding, coin flip tracking and last letter concatenation. The train-of-thought prompt lifted the accuracy rates for these tasks as well, and the model did not require many examples (around 8 or less) to saturate the performance gains in most cases. Please see the appendix for additional charts and tables reflecting the findings or read the full",(0,i.kt)("a",{parentName:"p",href:"https://ai.googleblog.com/2022/05/language-models-perform-reasoning-via.html"},"article"),"."),(0,i.kt)("h4",{id:"application-1"},"Application"),(0,i.kt)("p",null,"Compared to the \"Let's think step by step\" technique, the few-shot example approach allows for more control as the format, length and style of reasoning can be specified to the model before it makes an attempt to answer the question. In cases where the model's reasoning is incorrect or to simple/shallow, this method can be particularly helpful. "),(0,i.kt)("h3",{id:"fine-tuned"},"Fine-tuned"),(0,i.kt)("h4",{id:"research-2"},"Research"),(0,i.kt)("p",null,"In general, maximum performance on a task involves fine-tuning a custom model. However, the process of training the model may take thousdands of example explanations which are costly to write. "),(0,i.kt)("p",null,"To overcome this, Eric Zelikman and Yuhua et al. (2022) Wu have developed a clever procedure whereby a dataset of explanations are generated from a few-shot prompt. The dataset is used to fine-tune the model.  "),(0,i.kt)("p",null,"Using a few-shot prompt, the model is instructed to generate an answer that includes an explanation for its choice. Only the explanations for correct answers are kept for fine-tuning the model. Next, the prompts for incorrect answers are edited by including the explanations provided in the corrects answers, and then the task is performed once again. If it generates a correct answer with the second attempt, the additional correct explanation is collected as well. The authors call this STaR (Self-taught Reasoner): "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:a(5779).Z,width:"819",height:"351"})),(0,i.kt)("p",null,"Figure 4: How STaR works"),(0,i.kt)("p",null,"Source: STaR Bootstrapping Reasoning with Reasoning by Eric Zelikman & Yujuai Wu et al. "),(0,i.kt)("p",null,"It is like a farmer only taking the seeds from the healthy and strong fruit and then planting these seeds for the next harvest. It's a form of quality control. When the authors applied this technique to a Common Sense Q&A dataset, they found that STaR (78%) outperformed both chain-of-thought prompting (37%) and fine-tuning (37%).  The full article can be read ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2203.14465"},"here"),"."),(0,i.kt)("h4",{id:"application-2"},"Application"),(0,i.kt)("p",null,"The STaR concept can be generalized for other purposes beyond explanation writing. For example, large quantities of unstructured text can be trained by using a prompt to extract a structured dataset from the unstructured text and then fine-tune a custom model with the structured dataset. "),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:a(2983).Z,width:"880",height:"292"})),(0,i.kt)("p",null,"Figure 5: Accuracy rates for different prompts answering MultiArith dataset with Text-davinci-002"),(0,i.kt)("p",null,"Source:  Large Language Models are Zero-shot Reasoners by Takeshi Kojima et al. (2022)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img alt",src:a(8423).Z,width:"769",height:"299"})),(0,i.kt)("p",null,"Figure 6: Improvement from Chain thought prompting"),(0,i.kt)("p",null,"Source: Chain of Thought Prompting Elicits Reasoning in Large Language Models by Jason Wei and Denny Zhou et al. (2002)"),(0,i.kt)("h2",{id:"bibliography"},"Bibliography"),(0,i.kt)("p",null,"Kojima, T., Gu, S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners. ArXiv (Cornell University). ",(0,i.kt)("a",{parentName:"p",href:"https://doi.org/10.48550/arxiv.2205.11916"},"https://doi.org/10.48550/arxiv.2205.11916")),(0,i.kt)("p",null,"Language Models Perform Reasoning via Chain of Thought. (2022, May 11). ",(0,i.kt)("a",{parentName:"p",href:"https://ai.googleblog.com/2022/05/language-models-perform-reasoning-via.html"},"https://ai.googleblog.com/2022/05/language-models-perform-reasoning-via.html")),(0,i.kt)("p",null,"Zelikman, E., Wu, Y., Mu, J., & Goodman, N. D. (2022). STaR: Bootstrapping reasoning with reasoning. In arXiv ","[cs.LG]",". ",(0,i.kt)("a",{parentName:"p",href:"http://arxiv.org/abs/2203.14465"},"http://arxiv.org/abs/2203.14465")))}d.isMDXComponent=!0},2983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidefive-8559d68495ef0af59245adb2903eb319.png"},5779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidefour-6b00d65f36e8f15a914af23c4c06aefa.png"},6805:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guideone-976154a19c0da6aff171f2b41e5aae73.png"},8423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidesix-fe9220a195b28d7a470c6fc2767832dd.png"},1885:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidethree-3255b79267b3de0c7bc059bc079a3ef5.png"},1286:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/guidetwo-43a211aed6e982fcedd7a8a721f478c2.png"}}]);