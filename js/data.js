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
 Cursor:'<path d="M9 5l15 11-7 1.5 4 8-3 1.5-4-8-5 5z" fill="#1D2747"/>',
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
const LAYERS=`<svg viewBox="0 0 400 320" role="img" aria-label="Merchant readiness model: three layers">
 <rect width="400" height="320" fill="#FFDCEB"/>
 <rect x="40" y="34" width="320" height="64" rx="14" fill="#fff" fill-opacity=".55" stroke="#F2609A" stroke-dasharray="5 6" stroke-width="1.5"/>
 <text x="60" y="60" font-size="15" font-weight="600">Conversation</text><text x="60" y="82" font-size="12" fill-opacity=".7">optional · the LLM “sales rep”, switched on last</text>
 <rect x="40" y="114" width="320" height="64" rx="14" fill="#fff"/>
 <text x="60" y="140" font-size="15" font-weight="600">Policy</text><text x="60" y="162" font-size="12" fill-opacity=".7">must have · written rules that code enforces</text>
 <rect x="40" y="194" width="320" height="88" rx="14" fill="#2F55D4"/>
 <text x="60" y="222" font-size="15" font-weight="600" style="fill:#fff">Acceptance</text><text x="60" y="244" font-size="12" style="fill:#fff;fill-opacity:.85">must have · deterministic, no LLM</text>
 <g font-size="11" font-weight="600"><rect x="60" y="254" width="62" height="18" rx="9" fill="#C4F1D6"/><text x="73" y="267">verify</text><rect x="128" y="254" width="56" height="18" rx="9" fill="#C4F1D6"/><text x="142" y="267">offer</text><rect x="190" y="254" width="62" height="18" rx="9" fill="#C4F1D6"/><text x="202" y="267">accept</text><rect x="258" y="254" width="46" height="18" rx="9" fill="#C4F1D6"/><text x="270" y="267">log</text></g>
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
function heatmap(){
  const rows=["Pre-flight prep","Customer experience","Aircraft mgmt","Disruption recovery","Loyalty","Data & analytics","IT & cyber"];
  const v=[[3,3,3,3,3],[3,2,3,1,2],[3,1,2,3,1],[3,3,2,1,1],[1,3,1,1,2],[2,2,2,2,3],[2,1,2,1,3]];
  const col=["#EEF4FF","#B9CEFF","#6F92F0","#2F55D4"];
  let g='';
  rows.forEach((r,i)=>{const y=44+i*36;
    g+=`<text x="24" y="${y+21}" font-size="12">${r}</text>`;
    v[i].forEach((n,j)=>{g+=`<rect x="${168+j*42}" y="${y}" width="36" height="30" rx="7" fill="${col[n]}"/>`});
  });
  ["G1","G2","G3","G4","G5"].forEach((t,j)=>g+=`<text x="${178+j*42}" y="32" font-size="11" font-weight="600">${t}</text>`);
  return `<svg viewBox="0 0 400 320" role="img" aria-label="Capability by strategic goal heatmap"><rect width="400" height="320" fill="#D9EAFF"/>${g}<text x="24" y="306" font-size="11" fill-opacity=".65">Capabilities × strategic goals (illustrative extract)</text></svg>`;
}
const P=[
 {id:"agentic",c:"#FFDCEB",r:"-2.5deg",kind:"Agentic commerce · Industry project · 2026",name:"Is the merchant ready for a shopper agent?",
  short:"AI agents can now shop and pay for people. I built a working pilot in n8n to find out what a merchant needs to serve them safely.",
  lede:"AI agents can now search, choose and pay on someone’s behalf. Payment networks have built the consumer and payment side. Nobody had defined what “ready” means for the merchant receiving the order.",
  meta:[["Role","Business analyst & builder"],["Partner","A global payment network"],["Method","Design Science Research"],["Built in","n8n"]],
  beats:[
   ["The question","Merchants were built to sell to people and block bots. With an agent and no human watching, they have seconds to decide: trust it? What to offer? What if the price moves? How to prove what happened?"],
   ["My bet","AI isn’t what makes a merchant safe. Verifying the agent, quoting an offer, accepting payment and logging evidence should work with no language model at all. I wrote four hypotheses, with pass rules set before any test ran."],
   ["What I built","A pilot in n8n: a shopper agent, a merchant with no AI in its decision path, and a mock network issuing single-use tokens. Then I tried to break it: a $285 fare that became $298, hostile requests at volume, and a wrong hotel booked while the human was away."],
   ["What I found","44 of 44 runs behaved as expected, with no data leaked. It also exposed real gaps, like agents verified too late. I turned it all into a readiness model (3 layers, 13 components, 36 criteria) and a draft self-assessment for merchants."]
  ],
  visual:LAYERS,
  stats:[["44/44","scored runs as expected"],["0","internal data leaks"],["36","readiness criteria"]],
  quote:"The chatbot is the visible part. Readiness is decided by the boring layers underneath.",
  caveatTitle:"Honest limits:",caveat:"a small pilot on a mock network, so it’s a starting point, not proof. The next test is a merchant that does put a model in its decision path.",
  art:'<rect width="120" height="96" fill="#FFC2DC"/><rect x="18" y="16" width="84" height="18" rx="6" fill="#fff" fill-opacity=".6" stroke="#F2609A" stroke-dasharray="3 3"/><rect x="18" y="39" width="84" height="18" rx="6" fill="#fff"/><rect x="18" y="62" width="84" height="20" rx="6" fill="#2F55D4"/><circle cx="30" cy="72" r="3" fill="#C4F1D6"/><circle cx="40" cy="72" r="3" fill="#C4F1D6"/><circle cx="50" cy="72" r="3" fill="#C4F1D6"/>'},
 {id:"research",c:"#C4F1D6",r:"1deg",kind:"AI transformation · Financial services · Previous role",name:"Building an AI agent hub for an investment firm",
  short:"From “we want AI” to a hub that supports AI agents across the firm’s workflows, starting with research reports that went from weeks to hours.",
  lede:"A mid-size investment firm in APAC asked us to implement AI. The real goals were to save time and take tiring manual work off their people.",
  meta:[["Role","AI product specialist"],["Client","Mid-size investment firm, APAC"],["Scope","Discovery to production"],["Worked with","Department leads, CTO, engineers"]],
  beats:[
   ["Listening first","We asked department leads where their people spent the most time and what wore them out. I’d worked in equity research myself, so I knew these workflows from the inside."],
   ["Choosing what to build","We mapped current and future states and scored every AI opportunity on effort, impact and fit with the firm’s goals. Equity research reports came out on top: weeks of research, quant analysis and source-checking each."],
   ["Designing and proving it","I wrote the user stories and requirements, mapped how the AI-supported system would work, and compared models and data connections, including API versus daily batch feeds from the exchange’s data vendor. Then I built a full prototype and demoed it."],
   ["Shipping it","I worked with engineers to make the demo production-ready. It grew into a hub built to support AI agents across the firm’s workflows. A report that took weeks now takes 3 to 4 hours."],
   ["Built to empower, not replace","Analysts still ask the questions and steer the analysis. AI does the collating, field-filling and projections, so their time goes to the judgment calls."]
  ],
  visual:FUNNEL,
  stats:[["Weeks → 3–4h","per research report"],["Demo → prod","shipped with engineering"],["Analyst-led","AI drafts, people decide"]],
  quote:"It feels like you really understand our business and what we do.",quoteBy:"the client’s CTO",
  caveatTitle:"Confidentiality:",caveat:"client and product details stay private. Happy to walk through the approach in more depth in person.",
  art:'<rect width="120" height="96" fill="#9FE6BC"/><rect x="16" y="26" width="88" height="14" rx="7" fill="#fff"/><rect x="16" y="52" width="16" height="14" rx="7" fill="#2F55D4"/><circle cx="96" cy="72" r="0" /><path d="M40 59h20" stroke="#1D2747" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 4"/><text x="64" y="63" font-size="10" font-family="sans-serif" fill="#1D2747">3–4h</text>'},
 {id:"qantas",c:"#D9EAFF",r:"2.5deg",kind:"Enterprise architecture · University case study · 2026",name:"Getting an airline AI-ready",
  short:"Six of us mapped how Qantas could prepare for agentic AI. I owned the business architecture the rest was built on.",
  lede:"Fragmented data, legacy finance systems and thin AI governance were slowing disruption recovery and customer experience. Playing a consultancy called AiQ, our team designed a target architecture across business, information, application and data.",
  meta:[["Role","Business architect"],["Team","6, as “AiQ Consultancy”"],["Context","UTS group project"],["Built in","Excel architecture workbook"]],
  beats:[
   ["The question","Where should an airline start if it wants AI agents to help with disruption recovery? Not with the agent. With its goals, and what keeps getting in the way."],
   ["My part","I built the business layer: a capability map (4 core, 7 enabling) and a catalogue scoring 26 capabilities against 5 strategic goals and 21 pain points."],
   ["From map to plan","With our principal architect, I prioritised 13 projects and built a three-year roadmap: trusted data and governance first, customer and operations next, legacy retirement last."],
   ["Making it readable","When feedback said it was hard to follow, I merged capabilities, goals and pain points into one matrix stakeholders could read at a glance."]
  ],
  visual:heatmap(),
  stats:[["26","capabilities mapped"],["21","pain points traced"],["13","projects on a 3-year roadmap"]],
  quote:"Agents depend on integrated systems and governed data. Fix the foundations first.",
  caveatTitle:"Context:",caveat:"a university case study built from public information, not work commissioned by Qantas.",
  art:'<rect width="120" height="96" fill="#B9CEFF"/><g fill="#fff"><rect x="20" y="18" width="16" height="14" rx="3"/><rect x="40" y="18" width="16" height="14" rx="3" fill="#2F55D4"/><rect x="60" y="18" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="80" y="18" width="16" height="14" rx="3"/><rect x="20" y="36" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="40" y="36" width="16" height="14" rx="3"/><rect x="60" y="36" width="16" height="14" rx="3" fill="#2F55D4"/><rect x="80" y="36" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="20" y="54" width="16" height="14" rx="3" fill="#2F55D4"/><rect x="40" y="54" width="16" height="14" rx="3" fill="#6F92F0"/><rect x="60" y="54" width="16" height="14" rx="3"/><rect x="80" y="54" width="16" height="14" rx="3" fill="#2F55D4"/></g><path d="M22 80h74" stroke="#F2609A" stroke-width="3" stroke-linecap="round"/>'}
];
