/* ==========================================================================
   Content & data: edit text, tools and case studies here.
   Loaded before main.js; everything here is plain data.
   ========================================================================== */

/* ---------- Tools arc ---------- */
const LINKEDIN="https://www.linkedin.com/in/aliciawze/";
const G={
 Figma:'<circle cx="16" cy="16" r="5" fill="#2F55D4"/><rect x="6" y="3" width="10" height="9" rx="4.5" fill="#F2609A"/><rect x="16" y="3" width="10" height="9" rx="4.5" fill="#FFB36B"/><rect x="6" y="12" width="10" height="9" rx="4.5" fill="#9B7BFF"/><rect x="6" y="21" width="10" height="9" rx="4.5" fill="#3FAE5E"/>',
 Notion:'<rect x="6" y="5" width="20" height="22" rx="3" fill="none" stroke="#1D2747" stroke-width="2"/><path d="M11 22V10l10 12V10" fill="none" stroke="#1D2747" stroke-width="2"/>',
 Claude:'<g stroke="#E8835A" stroke-width="2.6" stroke-linecap="round"><path d="M16 5v22M5 16h22M8.5 8.5l15 15M23.5 8.5l-15 15"/></g>',
 ChatGPT:'<path d="M6 7h20v14H14l-6 5v-5H6z" fill="#10A37F"/><path d="M16 10v8M12 14h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
 Linear:'<circle cx="16" cy="16" r="11" fill="#9B7BFF"/><path d="M8 18l6 6M8 13l11 11M10 9l13 13" stroke="#fff" stroke-width="1.8"/>',
 Miro:'<rect x="5" y="5" width="22" height="22" rx="5" fill="#FFC53D"/><path d="M11 23l3-14M15 23l3-14M19 23l3-14" stroke="#1D2747" stroke-width="2" stroke-linecap="round"/>',
 n8n:'<path d="M8 16h8M16 16l9-7M16 16l9 7" stroke="#EA4B71" stroke-width="2"/><circle cx="6" cy="16" r="3" fill="#EA4B71"/><circle cx="16" cy="16" r="3.5" fill="#EA4B71"/><circle cx="26" cy="8.5" r="3" fill="#EA4B71"/><circle cx="26" cy="23.5" r="3" fill="#EA4B71"/>',
 GitHub:'<g stroke="#1D2747" stroke-width="2.2" fill="none" stroke-linecap="round"><circle cx="10" cy="7" r="3"/><circle cx="10" cy="25" r="3"/><circle cx="22" cy="11" r="3"/><path d="M10 10v12M22 14c0 5-12 4-12 8"/></g>',
 "VS Code":'<path d="M12 9l-7 7 7 7M20 9l7 7-7 7" stroke="#2F7FD6" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
 Jira:'<rect x="5" y="8" width="22" height="16" rx="3" fill="#2F6FE4"/><path d="M10 14h12M10 18h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>',
 Confluence:'<rect x="10" y="4" width="16" height="20" rx="2" fill="#BFD4FF"/><rect x="6" y="8" width="16" height="20" rx="2" fill="#2F6FE4"/><path d="M10 14h8M10 18h8M10 22h5" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>',
 SQL:'<path d="M7 8v16c0 2 4 3.5 9 3.5s9-1.5 9-3.5V8" fill="#C9B4FF"/><ellipse cx="16" cy="8" rx="9" ry="3.5" fill="#9B7BFF"/><path d="M7 14c0 2 4 3.5 9 3.5s9-1.5 9-3.5M7 20c0 2 4 3.5 9 3.5s9-1.5 9-3.5" stroke="#9B7BFF" stroke-width="1.6" fill="none"/>',
 "Power BI":'<rect x="6" y="16" width="5" height="10" rx="1.5" fill="#FFD25E"/><rect x="13.5" y="10" width="5" height="16" rx="1.5" fill="#F2B21B"/><rect x="21" y="5" width="5" height="21" rx="1.5" fill="#E09A00"/>',
 Tableau:'<g stroke-linecap="round"><path d="M16 5v22M5 16h22" stroke="#2F55D4" stroke-width="2.6"/><path d="M8 7v6M5 10h6M24 19v6M21 22h6M24 7v6M21 10h6M8 19v6M5 22h6" stroke="#F2609A" stroke-width="1.8"/></g>',
 Excel:'<rect x="5" y="6" width="22" height="20" rx="3" fill="#1F9D55"/><path d="M5 13h22M5 19.5h22M13 6v20" stroke="#fff" stroke-width="1.6"/>',
 "Google Sheets":'<path d="M8 4h11l6 6v18H8z" fill="#34A853"/><rect x="11" y="14" width="11" height="10" fill="#fff"/><path d="M11 19h11M16.5 14v10" stroke="#34A853" stroke-width="1.4"/>',
 Lucidchart:'<rect x="5" y="5" width="9" height="7" rx="2" fill="#FF8A3D"/><rect x="18" y="20" width="9" height="7" rx="2" fill="#2F55D4"/><path d="M9.5 12v4.5h13V20" stroke="#1D2747" stroke-width="1.8" fill="none"/>',
 Loom:'<circle cx="16" cy="16" r="10" fill="#7C5CFF"/><circle cx="16" cy="16" r="4" fill="#fff"/>',
 Slack:'<g stroke-width="3.2" stroke-linecap="round"><path d="M12 6v20" stroke="#36C5F0"/><path d="M20 6v20" stroke="#2EB67D"/><path d="M6 12h20" stroke="#ECB22E"/><path d="M6 20h20" stroke="#E01E5A"/></g>',
 CapCut:'<rect x="5" y="11" width="22" height="15" rx="2.5" fill="#1D2747"/><path d="M5 11l20-5 1.2 4.5" fill="#1D2747"/><path d="M14 15.5v6l5-3z" fill="#fff"/>',
 Docker:'<g fill="#2496ED"><rect x="6" y="12" width="5" height="4" rx=".8"/><rect x="12" y="12" width="5" height="4" rx=".8"/><rect x="18" y="12" width="5" height="4" rx=".8"/><rect x="12" y="7" width="5" height="4" rx=".8"/></g><path d="M4 18h23c-1 5-6 8-13 8-5 0-9-3-10-8z" fill="#2496ED"/>',
 Cursor:'<circle cx="16" cy="16" r="14" fill="#14120D"/><path d="M16 6.6L24.2 11.3V20.7L16 25.4L7.8 20.7V11.3Z" fill="#EDEDED" stroke="#EDEDED" stroke-width=".8" stroke-linejoin="round"/><path d="M8.5 11.6H23.35L16.14 24.5L16 16.2Z" fill="#14120D"/>',
 LinkedIn:'<rect x="3" y="3" width="26" height="26" rx="5" fill="#0A66C2"/><rect x="8" y="13" width="3.6" height="11" fill="#fff"/><circle cx="9.8" cy="9.2" r="2.1" fill="#fff"/><path d="M15 13h3.4v1.6c.6-1.1 2-1.9 3.7-1.9 3 0 3.9 1.9 3.9 4.8V24h-3.6v-5.8c0-1.5-.4-2.6-1.8-2.6-1.5 0-2 1.1-2 2.6V24H15z" fill="#fff"/>'
};

const TOOLS=["Figma","Notion","Miro","Jira","Confluence","Linear","Claude","Cursor","n8n","GitHub","VS Code","Docker","Excel","SQL","Tableau","Slack","Loom","CapCut","LinkedIn"];

/* ---------- "Ask me about" answers ---------- */
const ANSWERS={
  how:"<p>I start with the goal. More revenue? More reach? Then I find the workflows that affect it most, map the current state, and dig into the pain points. The fix might be AI, a process change, or both. From there I design the future state with clear success measures, then write the process designs, PRDs and prototypes that get it built.</p><p>I'm the translator in the middle: acceptance criteria and requirements that engineers want to build from, and a deck that shows execs where we are, where we're going and how we'll measure it. Each side gets only what it needs.</p>",
  think:"<p>Most AI projects fail because nobody understood the current state well enough.</p><p>While building merchant agents for agentic commerce, I learned that what keeps an agent alive isn't the AI. It's the deterministic layer around it: guardrails, compliance and security rules, and the formulas systems use to talk to each other. When I weigh an AI idea, I look at how complex the architecture is, what the model and compute will cost, and whether there's a single source of truth for the data. Then I check it against the success measure we set on day one, so scope doesn't creep.</p>",
  now:"<p>I just finished my master's at UTS, where my biggest project explored agentic commerce with a global payments network. I've also worked as an AI product specialist with WPH, helping clients turn “we want AI” into products people actually use.</p><p>Right now I'm building AI automations in n8n and working through Anthropic Academy.</p>",
  off:"<p>Usually somewhere with music. I sing with a band now and then and go to dance class every week.</p><p>Lately I've been baking too. I make really good banana chocolate chip muffins.</p>"
};

/* ---------- Case studies ---------- */
const LAYERS=`<svg viewBox="0 0 400 320" role="img" aria-label="What a shop needs to sell to AI agents, in three layers">
 <rect width="400" height="320" fill="#FFDCEB"/>
 <text x="24" y="30" font-size="11.5" font-weight="600" fill-opacity=".7">WHAT A SHOP NEEDS, FROM THE TOP DOWN</text>
 <rect x="24" y="42" width="352" height="62" rx="14" fill="#fff" fill-opacity=".55" stroke="#F2609A" stroke-dasharray="5 6" stroke-width="1.5"/>
 <text x="42" y="67" font-size="14.5" font-weight="600">Chat · optional</text><text x="42" y="88" font-size="12" fill-opacity=".75">An AI that answers shoppers’ questions</text>
 <rect x="24" y="114" width="352" height="62" rx="14" fill="#fff"/>
 <text x="42" y="139" font-size="14.5" font-weight="600">Rules · must have</text><text x="42" y="160" font-size="12" fill-opacity=".75">Written policies the system enforces</text>
 <rect x="24" y="186" width="352" height="96" rx="14" fill="#2F55D4"/>
 <text x="42" y="212" font-size="14.5" font-weight="600" style="fill:#fff">Safe checkout · must have</text><text x="42" y="233" font-size="12" style="fill:#fff;fill-opacity:.85">Runs with no AI involved</text>
 <g font-size="10.5" font-weight="600"><rect x="42" y="248" width="80" height="20" rx="10" fill="#C4F1D6"/><text x="53" y="262">check agent</text><rect x="128" y="248" width="80" height="20" rx="10" fill="#C4F1D6"/><text x="140" y="262">quote price</text><rect x="214" y="248" width="88" height="20" rx="10" fill="#C4F1D6"/><text x="225" y="262">take payment</text><rect x="308" y="248" width="52" height="20" rx="10" fill="#C4F1D6"/><text x="320" y="262">log it</text></g>
 <text x="24" y="304" font-size="11" fill-opacity=".65">Most of “ready” sits in the bottom two layers.</text>
</svg>`;
const FUNNEL=`<svg viewBox="0 0 400 320" role="img" aria-label="Research report time: weeks before, 3 to 4 hours after">
 <rect width="400" height="320" fill="#C4F1D6"/>
 <text x="30" y="44" font-size="12" font-weight="600" fill-opacity=".7">TIME TO PRODUCE ONE RESEARCH REPORT</text>
 <text x="30" y="80" font-size="13">Before</text><rect x="92" y="66" width="278" height="20" rx="10" fill="#fff"/><text x="300" y="81" font-size="12" font-weight="600">weeks</text>
 <text x="30" y="118" font-size="13">After</text><rect x="92" y="104" width="34" height="20" rx="10" fill="#2F55D4"/><text x="134" y="119" font-size="12" font-weight="600">3–4 hours</text>
 <path d="M48 214 H352" stroke="#3FAE5E" stroke-width="2" stroke-dasharray="3 5"/>
 <g font-size="11.5" text-anchor="middle">
  <circle cx="48" cy="214" r="13" fill="#fff"/><text x="48" y="218" font-weight="600">1</text><text x="48" y="248">Listen</text>
  <circle cx="124" cy="214" r="13" fill="#fff"/><text x="124" y="218" font-weight="600">2</text><text x="124" y="248">Map</text>
  <circle cx="200" cy="214" r="13" fill="#fff"/><text x="200" y="218" font-weight="600">3</text><text x="200" y="248">Prioritise</text>
  <circle cx="276" cy="214" r="13" fill="#fff"/><text x="276" y="218" font-weight="600">4</text><text x="276" y="248">Prototype</text>
  <circle cx="352" cy="214" r="13" fill="#2F55D4"/><text x="352" y="218" font-weight="600" style="fill:#fff">5</text><text x="352" y="248">Ship</text>
 </g>
 <text x="30" y="296" font-size="11" fill-opacity=".65">From discovery to a production-ready product</text>
</svg>`;
/* Capability-to-goal matrix, drawn from the team's core capability matrix.
   Filled cell = the capability supports that goal; darker = more pain points on that capability. */
function heatmap(){
  const rows=[
    ["Service offering planning",[1,1,1,1,1],0],
    ["Booking management",[1,1,1,0,1],5],
    ["Pre-flight preparation",[1,1,1,1,1],6],
    ["Passenger flight ops",[1,1,0,0,1],8],
    ["Aircraft management",[0,1,1,1,1],6],
    ["Marketing planning",[1,0,1,1,0],2],
    ["Corporate relations",[0,1,1,1,1],1],
    ["Loyalty flight credits",[1,0,0,0,1],2],
    ["Customer experience",[1,1,1,0,1],8],
    ["Freight customer success",[1,1,1,0,0],0]
  ];
  const shade=n=>n>=6?"#2F55D4":n>=2?"#6F92F0":"#B9CEFF";
  let g='';
  ["G1","G2","G3","G4","G5"].forEach((t,j)=>g+=`<text x="${207+j*34}" y="34" font-size="10.5" font-weight="600" text-anchor="middle">${t}</text>`);
  rows.forEach(([name,links,pains],i)=>{const y=42+i*24;
    g+=`<text x="18" y="${y+14}" font-size="11">${name}</text>`;
    links.forEach((on,j)=>{g+=`<rect x="${192+j*34}" y="${y}" width="30" height="20" rx="5" fill="${on?shade(pains):"#EEF4FF"}"/>`});
  });
  return `<svg viewBox="0 0 400 320" role="img" aria-label="Which business capabilities support each of Qantas's five strategic goals"><rect width="400" height="320" fill="#D9EAFF"/>${g}
  <text x="18" y="292" font-size="10" fill-opacity=".75">G1 Customer · G2 Reliability · G3 Fleet &amp; network</text>
  <text x="18" y="307" font-size="10" fill-opacity=".75">G4 Sustainability · G5 Tech &amp; AI</text></svg>`;
}
const P=[
 {id:"agentic",c:"#FFDCEB",r:"-2.5deg",kind:"Agentic commerce · Industry project · 2026",name:"What does a shop need before AI agents can buy from it?",
  short:"AI assistants can now shop and pay on people’s behalf. I researched what online shops need to sell to them safely, and built and tested a readiness check.",
  lede:"AI assistants, or “shopper agents”, can now search, choose and pay for things on someone’s behalf. Payment networks have prepared their side. Nobody had spelled out what the merchant, the shop selling the item, needs in place to take these orders safely.",
  meta:[["Role","Business analyst & builder"],["Partner","A global payment network"],["Approach","Design Science Research"],["Built in","n8n (workflow automation)"]],
  beats:[
   ["The problem","Online shops were built for human customers, and most try to block bots. Now an AI agent might arrive with a payment token and no human watching. In seconds, the shop has to decide: can I trust this agent? What price do I offer? What if the price changes before payment? If something goes wrong, can I prove what happened?"],
   ["Discovery","I mapped everyone involved in an agent purchase (shopper, agent, shop, the issuing and acquiring banks, and the payment network) and what each already had in place. The shop’s side was the least defined. Everyone was talking about the AI. Hardly anyone was talking about the harness around it: checking the agent, quoting a firm price, taking payment and keeping a record. None of that needs AI."],
   ["Scoping it down","We narrowed it to three real situations: a price that changes after the shopper approved it ($285 becomes $298), strange or malicious requests from agents, and an agent booking the wrong hotel while its human is away. For each, I wrote a hypothesis and a pass rule up front, so results couldn’t be fitted after the fact."],
   ["Building the readiness assessment","The main output is a readiness model a shop can rate itself against: 3 layers, 13 components and 36 criteria. To test it, I built a working setup in n8n: a pretend shopper agent, a shop whose decisions are fully deterministic (no AI), and a mock payment network issuing single-use tokens. Every step writes to a tamper-evident, hash-chained evidence log."],
   ["What testing showed","All 44 scored runs behaved as expected, which supported our hypotheses. That included 24 probing and prompt-injection attempts with no private data leaked, and a tampered record caught by the evidence log. Testing also exposed real gaps, like agents being checked too late in the process. Those gaps became criteria in the assessment."]
  ],
  tags:["Design Science Research","Deterministic decision path","Prompt-injection testing","Hash-chained evidence log","Single-use payment tokens","Know Your Agent (KYA)"],
  visual:LAYERS,
  gallery:[
   {svg:LAYERS,caption:"Readiness model: what a shop needs, in three layers"},
   {src:"assets/work/agentic-n8n-workflows.png",alt:"n8n canvas showing the merchant workflow and the shopper agent workflow",caption:"What I built in n8n: an AI shopper agent calling a rule-based merchant (no AI), alongside a mock network, re-consent rule and test control"},
   {src:"assets/work/agentic-hypotheses.png",alt:"Slide listing four hypotheses, each with a pass rule",caption:"The four hypotheses, each with a pass rule set before testing"},
   {src:"assets/work/agentic-data-model.png",alt:"Entity relationship diagram of six data tables",caption:"Data model behind the pilot: offers, single-use tokens and traceability logs, linked by session"}
  ],
  stats:[["44/44","test runs passed"],["0","private data leaks"],["36","readiness criteria"]],
  quote:"The chatbot is the part people see. Whether a shop is ready depends on the plain, reliable layers underneath.",
  caveatTitle:"Honest limits:",caveat:"a small test on a mock network, so it’s a starting point, not proof. The next step is testing a shop that does use AI to make decisions.",
  art:'<rect width="120" height="96" fill="#FFC2DC"/><rect x="18" y="16" width="84" height="18" rx="6" fill="#fff" fill-opacity=".6" stroke="#F2609A" stroke-dasharray="3 3"/><rect x="18" y="39" width="84" height="18" rx="6" fill="#fff"/><rect x="18" y="62" width="84" height="20" rx="6" fill="#2F55D4"/><circle cx="30" cy="72" r="3" fill="#C4F1D6"/><circle cx="40" cy="72" r="3" fill="#C4F1D6"/><circle cx="50" cy="72" r="3" fill="#C4F1D6"/>'},
 {id:"research",c:"#C4F1D6",r:"1deg",kind:"AI transformation · Financial services · Previous role",name:"Building an AI agent hub for an investment firm",
  short:"From “we want AI” to a hub that supports AI agents across the firm’s workflows, starting with research reports that went from weeks to hours.",
  lede:"A mid-size investment firm in APAC asked us to implement AI. The real goals were to save time and take tiring manual work off their people.",
  meta:[["Role","AI product specialist"],["Client","Mid-size investment firm, APAC"],["Scope","First conversations to a live product"],["Worked with","Department leads, CTO, engineers"]],
  beats:[
   ["Listening first","We asked department leads where their people spent the most time and what wore them out. I’d worked in equity research myself, so I knew these workflows from the inside."],
   ["Choosing what to build","We mapped current and future states and scored every AI opportunity on an effort–impact matrix against the firm’s goals. Equity research reports came out on top. Each one took weeks of research, number crunching and checking sources."],
   ["Designing and proving it","I wrote the PRD and user stories, designed how the AI-supported workflow would run (a retrieval-augmented, or RAG, pipeline over trusted research sources), and evaluated models on accuracy, cost and fit. I also worked out how to get reliable market data: a live API or an end-of-day batch file from the stock exchange’s data provider, comparing rate limits, pricing and data structure. Then I built a full prototype and demoed it."],
   ["Shipping it","I worked with engineers to make the demo production-ready. It grew into a central hub where AI agents can support different workflows across the firm. A report that took weeks now takes 3 to 4 hours."],
   ["Built to empower, not replace","Analysts still ask the questions and steer the analysis. AI gathers the information, fills in the report and runs the projections, so analysts spend their time on judgment calls."]
  ],
  tags:["Current & future-state process maps","Effort–impact prioritisation","PRD & user stories","RAG pipeline design","Model evaluation","API vs batch data integration"],
  visual:FUNNEL,
  stats:[["Weeks → 3–4h","per research report"],["Prototype → live","shipped with engineers"],["Analyst-led","AI drafts, people decide"]],
  quote:"It feels like you really understand our business and what we do.",quoteBy:"the client’s CTO",
  caveatTitle:"Confidentiality:",caveat:"client and product details stay private. Happy to walk through the approach in more depth in person.",
  art:'<rect width="120" height="96" fill="#9FE6BC"/><rect x="16" y="26" width="88" height="14" rx="7" fill="#fff"/><rect x="16" y="52" width="16" height="14" rx="7" fill="#2F55D4"/><circle cx="96" cy="72" r="0" /><path d="M40 59h20" stroke="#1D2747" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 4"/><text x="64" y="63" font-size="10" font-family="sans-serif" fill="#1D2747">3–4h</text>'},
 {id:"qantas",c:"#D9EAFF",r:"2.5deg",kind:"Enterprise architecture · University case study · 2026",name:"Getting an airline AI-ready",
  short:"Six of us planned how Qantas could get ready for AI agents. I mapped the business side that the rest of the plan was built on.",
  lede:"Qantas wants AI agents to help with things like rebooking passengers when flights are disrupted. But its data is scattered, some core systems are old, and there are few rules for how AI should be used. Playing a consultancy called AiQ, our team designed the systems and data plan Qantas would need.",
  meta:[["Role","Business architect"],["Team","6, as “AiQ Consultancy”"],["Context","UTS group project"],["Built in","Excel"]],
  beats:[
   ["The question","Where should an airline start if it wants AI agents to help, for example when flights are disrupted? Not with the agent. With what the business is trying to achieve, and what keeps getting in the way."],
   ["My part","I mapped what Qantas does as a business, its “capabilities” like pre-flight preparation or customer service, broken down across three levels (L0 to L2), and scored 26 of them against 5 strategic goals and 21 pain points. That showed where AI would help most and what needed fixing first. The rest of the team built their data and systems plans on top of it."],
   ["From map to plan","With our lead architect, I ranked 13 proposed projects and laid them out on a three-year roadmap: fix data and AI rules first, then improve customer and operations work, then retire old systems."],
   ["Making it readable","When feedback said the work was hard to follow, I combined capabilities, goals and pain points into one traceability chart anyone could read at a glance."]
  ],
  tags:["Business capability mapping (L0–L2)","Goal & pain-point traceability","Strategic importance scoring","Project prioritisation","3-year transformation roadmap","Business · information · application · data"],
  gallery:[
   {svg:heatmap(),caption:"Which business areas support each strategic goal. Darker squares carry more pain points."},
   {src:"assets/work/qantas-capability-matrix.png",alt:"Core capability matrix mapping business areas to goals and pain points",caption:"Core capability matrix: each business area mapped to the 5 goals and 21 pain points"},
   {src:"assets/work/qantas-goals-pain-points.png",alt:"Slide of five business goals and grouped pain points",caption:"The 5 strategic goals and 21 pain points the architecture traces back to"},
   {src:"assets/work/qantas-prioritisation.png",alt:"Project prioritisation slide with criteria, phases and top seven projects",caption:"Project prioritisation: six criteria, three phases, and the top 7 projects with their dependencies"}
  ],
  stats:[["26","business areas mapped"],["21","pain points traced"],["13","projects on a 3-year roadmap"]],
  quote:"AI agents are only as good as the data and systems behind them. Fix the foundations first.",
  caveatTitle:"Context:",caveat:"a university case study built from public information, not work commissioned by Qantas.",
  art:'<rect width="120" height="96" fill="#B9CEFF"/><g fill="#fff"><rect x="20" y="18" width="16" height="14" rx="3"/><rect x="40" y="18" width="16" height="14" rx="3" fill="#2F55D4"/><rect x="60" y="18" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="80" y="18" width="16" height="14" rx="3"/><rect x="20" y="36" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="40" y="36" width="16" height="14" rx="3"/><rect x="60" y="36" width="16" height="14" rx="3" fill="#2F55D4"/><rect x="80" y="36" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="20" y="54" width="16" height="14" rx="3" fill="#2F55D4"/><rect x="40" y="54" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="60" y="54" width="16" height="14" rx="3"/><rect x="80" y="54" width="16" height="14" rx="3" fill="#2F55D4"/></g><path d="M22 80h74" stroke="#F2609A" stroke-width="3" stroke-linecap="round"/>'}
];
