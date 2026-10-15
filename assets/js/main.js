(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
  // Anatomy explorer
  var P={flap:['The flap','The curved front flap gives the saddle bag its half-moon outline. It is usually a single piece of leather, so look for clean, even edges and no creasing at the fold.'],
    closure:['Closure','A buckle, press stud or hidden magnet keeps the flap shut. Metal hardware should feel solid and open smoothly without catching the leather.'],
    strap:['Adjustable strap','Most saddle bags are worn crossbody. A strap with several holes or a sliding buckle lets you raise or lower the bag for different outfits.'],
    dring:['D-rings','Metal rings that connect the strap to the body. They take the most strain, so they should be securely stitched or riveted.'],
    gusset:['Gusset','The side panel that gives the bag its depth. A wider gusset holds more but makes the bag sit further from the body.'],
    edge:['Edges &amp; stitching','Painted or burnished edges seal the cut leather. Small, even stitches, ideally tight to the edge, are a sign of careful construction.']};
  function part(k){var p=P[k],t=document.getElementById('a-n');if(!t||!p)return;t.innerHTML=p[0];document.getElementById('a-d').innerHTML=p[1];
    document.querySelectorAll('.hot').forEach(function(h){h.classList.toggle('on',h.dataset.p===k);});
    document.querySelectorAll('[data-pt]').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.pt===k?'true':'false');});}
  document.querySelectorAll('.hot').forEach(function(h){h.addEventListener('click',function(){part(h.dataset.p);});h.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();part(h.dataset.p);}});});
  document.querySelectorAll('[data-pt]').forEach(function(x){x.addEventListener('click',function(){part(x.dataset.pt);});});
  part('flap');
  // Strap length calculator
  var ht=document.getElementById('sh'),pos=document.getElementById('spos'),sty=document.getElementById('ssty');
  function strap(){if(!ht)return;var H=Math.min(200,Math.max(140,parseFloat(ht.value)||165)),sh=H*0.82,tgt={waist:0.6,hip:0.5,thigh:0.42}[pos.value],v=sh-H*tgt,tot,drop;
    if(sty.value==='cross'){tot=2.2*v+8;drop=null;}else{v=sh-H*0.6;tot=2*v*0.85+10;drop=v*0.75;}
    document.getElementById('r-t').textContent=Math.round(tot)+' cm';document.getElementById('r-i').textContent=(tot/2.54).toFixed(0)+' in';
    document.getElementById('r-d').textContent=drop?'Strap drop of about '+Math.round(drop)+' cm ('+(drop/2.54).toFixed(0)+' in), so the bag sits close under your arm.':'Choose a strap that adjusts at least 10 cm either side of this length, so you can wear it over a coat too.';
    if(sty.value!=='cross'){pos.disabled=true;}else{pos.disabled=false;}}
  if(ht){[ht,pos,sty].forEach(function(x){x.addEventListener('input',strap);x.addEventListener('change',strap);});strap();}
  // Leather care selector
  var C={smooth:['Smooth calf leather',['Dust weekly with a soft, dry cloth.','Condition two to four times a year with a cream made for smooth leather.','Buff gently to restore the sheen.'],'Water spots, oily hand cream and direct heat.'],
    pebbled:['Pebbled leather',['Brush lightly to lift dust from the grain.','Wipe with a barely damp cloth if needed and let it air-dry.','Condition once or twice a year.'],'Over-conditioning, which can flatten the grain.'],
    veg:['Vegetable-tanned leather',['Expect it to darken and develop a patina with wear.','Condition lightly every few months.','Keep it out of strong sun until it has settled in colour.'],'Water marks while new; blot rain immediately.'],
    suede:['Suede',['Use a suede brush to lift the nap.','Treat with a suitable protector spray before first use.','Use a suede eraser on small marks.'],'Rain, creams and oils of any kind.'],
    patent:['Patent leather',['Wipe with a soft, damp cloth.','Store away from other bags to avoid colour transfer.','Polish with a soft cloth for shine.'],'Heat, which can make the coating sticky, and pressing against printed fabric.']};
  function care(k){var c=C[k],o=document.getElementById('c-n');if(!o)return;o.textContent=c[0];
    document.getElementById('c-s').innerHTML=c[1].map(function(s){return '<li>'+s+'</li>';}).join('');document.getElementById('c-a').textContent='Avoid: '+c[2];
    document.querySelectorAll('[data-lt]').forEach(function(x){x.setAttribute('aria-pressed',x.dataset.lt===k?'true':'false');});}
  document.querySelectorAll('[data-lt]').forEach(function(x){x.addEventListener('click',function(){care(x.dataset.lt);});});
  care('smooth');
  var cf=document.getElementById('cform');
  if(cf)cf.addEventListener('submit',function(ev){ev.preventDefault();if(cf.website.value)return;
    var body='Name: '+cf.name.value+'\nEmail: '+cf.email.value+'\nTopic: '+cf.topic.value+'\n\n'+cf.message.value;
    window.location.href='mailto:'+cf.dataset.to+'?subject='+encodeURIComponent('Website enquiry: '+cf.topic.value)+'&body='+encodeURIComponent(body);
    var s=document.getElementById('fm');s.hidden=false;s.textContent='Your email app should now open with your message ready to send. If it doesn’t, please email us directly at '+cf.dataset.to+'.';});
  var c=document.getElementById('cookie'),v=null;try{v=localStorage.getItem('so_cookie');}catch(e){}
  if(c&&!v)c.classList.add('show');
  document.querySelectorAll('[data-cookie]').forEach(function(x){x.addEventListener('click',function(){try{localStorage.setItem('so_cookie',x.dataset.cookie);}catch(e){}c.classList.remove('show');});});
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();
