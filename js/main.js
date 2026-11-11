/* ==========================================================================
   Page behaviour: layout, interactions and animations.
   Depends on globals defined in data.js.
   ========================================================================== */

/* ---------- tools arc ---------- */
const toolsEl=document.getElementById('tools');
function layoutTools(){
  const w=toolsEl.clientWidth, h=toolsEl.clientHeight, n=TOOLS.length, narrow=w<560;
  const a0=narrow?1.03:1.1, span=narrow?.94:.8;
  toolsEl.innerHTML='';
  // place tiles at equal distances along the arc (not equal angles) so the ends don't bunch up
  const rx=w*(narrow?.47:.49), ry=h*(narrow?.95:1.05), cy=h*(narrow?1.08:1.15), pts=[], N=400; let L=0;
  for(let j=0;j<=N;j++){const a=Math.PI*(a0+span*j/N), p=[w/2+Math.cos(a)*rx, cy+Math.sin(a)*ry];
    if(j) L+=Math.hypot(p[0]-pts[j-1][0],p[1]-pts[j-1][1]); p.push(L); pts.push(p)}
  const track=document.createElementNS('http://www.w3.org/2000/svg','svg');
  track.setAttribute('class','track');track.setAttribute('aria-hidden','true');
  track.innerHTML=`<path d="M${pts.map(p=>p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' L')}"/>`;
  toolsEl.appendChild(track);
  TOOLS.forEach((name,i)=>{
    const t=i/(n-1), target=t*L, q=pts.find(p=>p[2]>=target)||pts[N], x=q[0], y=q[1];
    const li=name==="LinkedIn";
    const d=document.createElement(li?'a':'div');
    d.className='tool'+(li?' li':'');
    if(li){d.href=LINKEDIN;d.target='_blank';d.rel='noopener';d.setAttribute('aria-label','Alicia on LinkedIn (opens in a new tab)')}
    else{d.tabIndex=0;d.setAttribute('aria-label',name)}
    d.style.left=x+'px';d.style.top=y+'px';
    d.style.setProperty('--r',((t-.5)*16).toFixed(1)+'deg');
    d.style.animationDelay=(-i*.55)+'s';
    d.innerHTML=`<svg viewBox="0 0 32 32">${G[name]}</svg><span>${li?'LinkedIn ↗':name}</span>`+(li?'<em>say hi!</em>':'');
    toolsEl.appendChild(d);
  });
}
layoutTools();addEventListener('resize',layoutTools);

/* ---------- in-page nav ---------- */
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const t=document.querySelector(a.getAttribute('href')); if(!t) return;
  e.preventDefault();
  const y=a.getAttribute('href')==='#top'?0:t.getBoundingClientRect().top+scrollY-24;
  scrollTo({top:y,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}));

/* ---------- interactive blurb ---------- */
const ans=document.getElementById('answer');
ans.innerHTML=ANSWERS.how;
document.querySelectorAll('.blurb .chip').forEach(c=>c.addEventListener('click',()=>{
  document.querySelectorAll('.blurb .chip').forEach(x=>x.setAttribute('aria-pressed',x===c));
  ans.classList.add('fade');
  setTimeout(()=>{ans.innerHTML=ANSWERS[c.dataset.k];ans.classList.remove('fade')},220);
}));

/* ---------- projects ---------- */
const cardsEl=document.getElementById('cards');
function cardHTML(p){
  return `<div><div class="k">${p.kind}</div><h3>${p.name}</h3><p>${p.short}</p></div>
  <div class="bot"><span class="open"><i>→</i> Open case study</span><div class="art"><svg viewBox="0 0 120 96">${p.art}</svg></div></div>`;
}
P.forEach((p,i)=>{
  const b=document.createElement('button');
  b.className='card';b.id='card-'+p.id;b.dataset.i=i;
  b.style.setProperty('--c',p.c);b.style.setProperty('--r',p.r);
  b.innerHTML=cardHTML(p);
  b.addEventListener('click',()=>openProject(i));
  cardsEl.appendChild(b);
});


/* ---------- case study gallery ---------- */
function mediaHTML(item){
  return item.svg?item.svg:`<img src="${item.src}" alt="${item.alt||''}" loading="lazy">`;
}
function galleryHTML(items){
  return `<div class="gallery">
    <button class="g-main" type="button" aria-label="Enlarge image">${mediaHTML(items[0])}<span class="g-zoom" aria-hidden="true">⤢</span></button>
    <p class="g-cap">${items[0].caption}</p>
    ${items.length>1?`<div class="g-thumbs">${items.map((it,i)=>`<button class="g-thumb${i?'':' on'}" type="button" data-i="${i}" aria-label="Show image ${i+1}: ${it.caption}">${mediaHTML(it)}</button>`).join('')}</div>`:''}
  </div>`;
}
let gIndex=0;
function showGallery(i){
  const g=slide.querySelector('.gallery'), items=P[cur].gallery; if(!g||!items) return;
  gIndex=(i+items.length)%items.length;
  g.querySelector('.g-main').innerHTML=mediaHTML(items[gIndex])+'<span class="g-zoom" aria-hidden="true">⤢</span>';
  g.querySelector('.g-cap').textContent=items[gIndex].caption;
  g.querySelectorAll('.g-thumb').forEach((t,k)=>t.classList.toggle('on',k===gIndex));
}

/* ---------- lightbox ---------- */
const lb=document.getElementById('lightbox'), lbMedia=lb.querySelector('.lb-media'), lbCap=lb.querySelector('figcaption');
let lbOpen=false;
function renderLightbox(){const it=P[cur].gallery[gIndex];lbMedia.innerHTML=mediaHTML(it);lbCap.textContent=`${it.caption} · ${gIndex+1} of ${P[cur].gallery.length}`}
function openLightbox(){if(!P[cur]||!P[cur].gallery) return;lbOpen=true;renderLightbox();lb.hidden=false;requestAnimationFrame(()=>lb.classList.add('on'));lb.querySelector('.lb-close').focus()}
function closeLightbox(){lbOpen=false;lb.classList.remove('on');setTimeout(()=>{lb.hidden=true;const m=slide.querySelector('.g-main');if(m)m.focus()},250)}
function stepLightbox(d){showGallery(gIndex+d);renderLightbox()}
lb.querySelector('.lb-close').onclick=closeLightbox;
lb.querySelector('.lb-prev').onclick=()=>stepLightbox(-1);
lb.querySelector('.lb-next').onclick=()=>stepLightbox(1);
lb.addEventListener('click',e=>{if(e.target===lb)closeLightbox()});

function slideHTML(p){
  return `<div class="slide-in">
    <div>
      <h2>${p.name}</h2>
      <p class="lede">${p.lede}</p>
      <dl class="meta">${p.meta.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      ${p.tags?`<div class="tags"><span class="tags-k">Under the hood</span><ul>${p.tags.map(t=>`<li>${t}</li>`).join('')}</ul></div>`:''}
      <div class="beats">${p.beats.map(([t,d])=>`<section class="beat"><h4>${t}</h4><p>${d}</p></section>`).join('')}</div>
    </div>
    <div class="side">
      ${p.gallery?galleryHTML(p.gallery):`<div class="visual">${p.visual}</div>`}
      <div class="stats">${p.stats.map(([n,l])=>`<div class="stat"><b>${n}</b><span>${l}</span></div>`).join('')}</div>
      <p class="quote">“${p.quote}”${p.quoteBy?`<span class="by">— ${p.quoteBy}</span>`:''}</p>
      <p class="caveat"><b>${p.caveatTitle}</b> ${p.caveat}</p>
    </div>
  </div>`;
}

const flip=document.getElementById('flip'), scrim=document.getElementById('scrim'),
      front=document.getElementById('front'), slide=document.getElementById('slide'), slideK=document.getElementById('slide-k');
let cur=-1, busy=false;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function rectOf(el){const r=el.getBoundingClientRect();return {top:r.top,left:r.left,width:r.width,height:r.height}}
function place(r){Object.assign(flip.style,{top:r.top+'px',left:r.left+'px',width:r.width+'px',height:r.height+'px'})}
function target(){
  const g=Math.max(12,Math.min(28,innerWidth*.03));
  const w=Math.min(innerWidth-g*2,1240), h=innerHeight-g*2;
  return {top:g,left:(innerWidth-w)/2,width:w,height:h};
}
function fill(i){
  const p=P[i];
  flip.style.setProperty('--c',p.c);
  front.innerHTML=`<div class="card" style="--c:${p.c}">${cardHTML(p)}</div>`;
  slide.innerHTML=slideHTML(p);slide.scrollTop=0;gIndex=0;
  slideK.textContent=`${p.kind} · ${i+1} of ${P.length}`;
}
function openProject(i){
  if(busy) return; busy=true; cur=i;
  const card=document.getElementById('card-'+P[i].id);
  fill(i); place(rectOf(card));
  flip.hidden=false; scrim.hidden=false; card.style.visibility='hidden';
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    scrim.classList.add('on'); flip.classList.add('open'); place(target());
    setTimeout(()=>{busy=false;document.getElementById('close').focus()}, reduce?20:780);
  }));
}
function closeProject(){
  if(busy||cur<0) return; busy=true;
  const card=document.getElementById('card-'+P[cur].id);
  // make sure the front face matches the card we land on
  fill(cur);
  place(rectOf(card)); flip.classList.remove('open'); scrim.classList.remove('on');
  setTimeout(()=>{
    flip.hidden=true; scrim.hidden=true; card.style.visibility='';
    document.body.style.overflow=''; card.focus({preventScroll:true}); cur=-1; busy=false;
  }, reduce?20:780);
}
function step(d){
  if(busy) return;
  const prevCard=document.getElementById('card-'+P[cur].id);
  prevCard.style.visibility='';
  cur=(cur+d+P.length)%P.length;
  document.getElementById('card-'+P[cur].id).style.visibility='hidden';
  slide.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-d*24}px)`}],{duration:reduce?1:160}).onfinish=()=>{
    fill(cur);
    slide.animate([{opacity:0,transform:`translateX(${d*24}px)`},{opacity:1,transform:'translateX(0)'}],{duration:reduce?1:220});
  };
}
document.getElementById('close').onclick=closeProject;
scrim.onclick=closeProject;
document.getElementById('next').onclick=()=>step(1);
document.getElementById('prev').onclick=()=>step(-1);
const career=document.getElementById('career'), careerBtn=document.getElementById('open-career');
careerBtn.onclick=()=>{
  const open=!career.classList.contains('on');
  career.classList.toggle('on',open);
  careerBtn.setAttribute('aria-expanded',open);
  careerBtn.firstChild.textContent=open?'Hide career history ':'View my career history ';
  if(open) setTimeout(()=>{const y=career.getBoundingClientRect().top+scrollY+10;scrollTo({top:y,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})},350);
};
slide.addEventListener('click',e=>{
  const t=e.target.closest('.g-thumb'); if(t){showGallery(+t.dataset.i);return}
  if(e.target.closest('.g-main')) openLightbox();
});
addEventListener('keydown',e=>{
  if(lbOpen){
    if(e.key==='Escape') closeLightbox();
    if(e.key==='ArrowRight') stepLightbox(1);
    if(e.key==='ArrowLeft') stepLightbox(-1);
    return;
  }
  if(cur<0) return;
  if(e.key==='Escape') closeProject();
  if(e.key==='ArrowRight') step(1);
  if(e.key==='ArrowLeft') step(-1);
});
addEventListener('resize',()=>{if(cur>=0&&!busy) place(target())});

/* ---------- contact ---------- */
const toast=document.getElementById('toast');
function say(t){toast.textContent=t;clearTimeout(say.t);say.t=setTimeout(()=>toast.textContent='',2600)}
async function copyText(t,msg){
  try{await navigator.clipboard.writeText(t);say(msg)}
  catch(e){const r=document.createRange();r.selectNodeContents(document.getElementById('email'));const s=getSelection();s.removeAllRanges();s.addRange(r);say('Selected. Press Ctrl/⌘ + C to copy.')}
}
document.getElementById('copy').onclick=()=>copyText(document.getElementById('email').textContent,'Email copied');
document.querySelectorAll('.door').forEach(c=>c.onclick=()=>copyText(c.dataset.p,'Opening line copied. Paste it into an email to alicia.w.zien@gmail.com.'));
