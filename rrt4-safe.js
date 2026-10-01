(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('rr-safe-flow');

  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  const roots = [];

  function finalColor(el){
    const c=getComputedStyle(el).color;
    return c && c!=='rgba(0, 0, 0, 0)' ? c : '#080808';
  }

  function wrapTextNode(node){
    const raw=node.nodeValue;
    if(!raw) return;
    const frag=document.createDocumentFragment();
    const tokens=raw.match(/\S+|\s+/g)||[];

    for(const token of tokens){
      if(/^\s+$/.test(token)){
        const sp=document.createElement('span');
        sp.className='rr-space';
        sp.textContent=token;
        frag.appendChild(sp);
        continue;
      }
      const word=document.createElement('span');
      word.className='rr-word';
      for(const ch of [...token]){
        const c=document.createElement('span');
        c.className='rr-char';
        c.textContent=ch;
        word.appendChild(c);
      }
      frag.appendChild(word);
    }
    node.replaceWith(frag);
  }

  function buildText(el,preferredGap=14){
    if(!el || el.dataset.rrBuilt==='1') return el;

    el.style.setProperty('--rr-final',finalColor(el));
    el.style.setProperty('--rr-hot','#fff3be');
    el.style.setProperty('--rr-flash','#31d8ec');

    const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,{
      acceptNode(node){
        if(!node.nodeValue) return NodeFilter.FILTER_REJECT;
        if(node.parentElement?.closest('svg')) return NodeFilter.FILTER_REJECT;
        if(node.parentElement?.classList.contains('rr-char')) return NodeFilter.FILTER_REJECT;
        if(!node.nodeValue.trim()){
          return node.nodeValue.includes('\n') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes=[];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(wrapTextNode);

    const chars=[...el.querySelectorAll('.rr-char')];
    let gap=preferredGap;
    if(chars.length>180) gap=Math.min(gap,10);
    else if(chars.length>120) gap=Math.min(gap,11);
    else if(chars.length>80) gap=Math.min(gap,12);

    chars.forEach((c,i)=>c.style.animationDelay=`${i*gap}ms`);
    el.dataset.rrGap=String(gap);
    el.dataset.rrBuilt='1';
    el.classList.add('rr-text');
    return el;
  }

  function armText(el){
    if(!el || el.dataset.rrPlayed==='1') return;
    el.classList.add('rr-armed');
  }

  function armBlock(el){
    if(!el || el.dataset.rrPlayed==='1') return;
    el.classList.add('rr-first-block','rr-armed');
  }

  function armTitle(el){
    if(!el || el.dataset.rrPlayed==='1') return;
    el.classList.add('rr-title-target','rr-armed');
  }

  function playText(el){
    if(!el || el.dataset.rrPlayed==='1') return 0;
    el.classList.add('rr-play');
    const count=el.querySelectorAll('.rr-char').length;
    const gap=Number(el.dataset.rrGap||14);
    const duration=Math.min(300+count*gap,2200);

    window.setTimeout(()=>{
      el.classList.remove('rr-play','rr-armed');
      el.classList.add('rr-done');
      el.dataset.rrPlayed='1';
    },duration+50);

    return duration;
  }

  function playBlock(el,cls='rr-block-play',duration=480){
    if(!el || el.dataset.rrPlayed==='1') return 0;
    el.classList.add(cls);
    window.setTimeout(()=>{
      el.classList.remove(cls,'rr-armed');
      el.classList.add('rr-done');
      el.dataset.rrPlayed='1';
    },duration+40);
    return duration;
  }

  function playTitle(el){
    if(!el || el.dataset.rrPlayed==='1') return 0;
    el.classList.add('rr-title-play');
    window.setTimeout(()=>{
      el.classList.remove('rr-title-play','rr-armed');
      el.classList.add('rr-done');
      el.dataset.rrPlayed='1';
    },520);
    return 500;
  }


  async function playProtocolBlock(block){
    if(!block || block.dataset.rrPlayed==='1') return;

    // Reveal the container quickly, then each log row becomes its own beat.
    playBlock(block);
    await wait(260);

    const rows=[...block.querySelectorAll('.log-item,.log-entry')];

    // Fallback for any older markup that does not use row wrappers.
    if(!rows.length){
      const inner=[...block.querySelectorAll('.rr-text')];
      for(const t of inner){
        const n=playText(t);
        await wait(Math.min(n+80,520));
      }
      block.dataset.rrPlayed='1';
      return;
    }

    for(const row of rows){
      // Row itself gets a small UI charge.
      row.classList.remove('rr-protocol-row-play');
      void row.offsetWidth;
      row.classList.add('rr-protocol-row-play');

      const texts=[...row.querySelectorAll('.rr-text')];

      // ID and heading can start together.
      const id=row.querySelector('.log-id.rr-text');
      const strong=row.querySelector('strong.rr-text');
      const para=row.querySelector('p.rr-text');

      // Row identity is one beat: LOG number + title almost together.
      if(id) playText(id);
      if(strong) window.setTimeout(()=>playText(strong),25);

      // Short but readable pause before the explanatory sentence.
      await wait(190);

      if(para){
        const n=playText(para);
        await wait(Math.min(n+130,820));
      }else{
        // Any remaining text in this row
        const remaining=texts.filter(t=>t!==id && t!==strong);
        for(const t of remaining){
          const n=playText(t);
          await wait(Math.min(n+80,520));
        }
      }

      row.classList.remove('rr-protocol-row-play');
      await wait(70);
    }

    block.dataset.rrPlayed='1';
  }

  function oneShotSignal(el){
    if(!el || el.dataset.rrPlayed==='1') return;
    el.classList.add('rr-signal-play');
    window.setTimeout(()=>{
      el.classList.remove('rr-signal-play');
      el.dataset.rrPlayed='1';
    },520);
  }

  // ---------------------------------------------------------
  // HEADER: compact once, not part of scroll choreography.
  // ---------------------------------------------------------
  const header=document.querySelector('.header');
  if(header){
    [
      header.querySelector('.brandmark'),
      header.querySelector('.brand > span:not(.brandmark)'),
      header.querySelector('.brand small'),
      ...header.querySelectorAll('.nav a')
    ].filter(Boolean).forEach(el=>buildText(el,10));

    (async()=>{
      for(const el of header.querySelectorAll('.rr-text')){
        armText(el);
        await wait(40);
        const d=playText(el);
        await wait(Math.min(d+80,700));
      }
    })();
  }

  // ---------------------------------------------------------
  // HERO
  // ---------------------------------------------------------
  const hero=document.querySelector('.hero,.project-head');
  let heroData=null;
  if(hero){
    const main=hero.querySelector('.hero-main,.project-head-main');
    const kicker=main?.querySelector('.hero-kicker,.crumb');
    const status=main?.querySelector('.status');
    const title=main?.querySelector('h1');
    const titleParts=title ? [...title.querySelectorAll(':scope > span')] : [];
    const field=main?.querySelector('.hero-lede > b');
    const lede=main?.querySelector('.hero-lede > div,.lede');
    const ribbon=main?.querySelector('.lang-ribbon');
    const side=hero.querySelector('.hero-side,.project-head-side');

    [kicker,status,field].filter(Boolean).forEach(el=>buildText(el,15));
    if(lede) buildText(lede,12);
    ribbon?.querySelectorAll('.en,.jp,.fr').forEach(el=>{
      buildText(el,13);
      armText(el);
    });
    side?.querySelectorAll('strong,small').forEach(el=>{
      buildText(el,13);
      armText(el);
    });

    // Project-head facts are part of the same visual identity group.
    side?.querySelectorAll('.fact').forEach(fact=>{
      fact.classList.add('rr-project-fact');
    });

    [kicker,status,field,lede].filter(Boolean).forEach(armText);
    titleParts.forEach(armTitle);
    if(!titleParts.length && title) armTitle(title);
    armBlock(ribbon);
    armBlock(side);

    heroData={root:hero,kicker,status,title,titleParts,field,lede,ribbon,side};
    roots.push(hero);
  }

  async function playHero(){
    const d=heroData;
    if(!d || d.root.dataset.rrRootPlayed==='1') return;

    d.root.classList.add('rr-hero-sync');

    // PRE-BEAT: small context establishes the screen.
    if(d.kicker){
      const n=playText(d.kicker);
      await wait(Math.min(n+110,650));
    }
    if(d.status){
      playText(d.status);
      await wait(90);
    }

    // BEAT 1: display title + black side panel enter together.
    if(d.side){
      playBlock(d.side,'rr-side-play',460);
    }

    if(d.titleParts.length){
      playTitle(d.titleParts[0]);
      // Second line follows quickly while the side panel is still settling.
      if(d.titleParts[1]){
        await wait(180);
        playTitle(d.titleParts[1]);
      }
      // Any additional title lines, if ever present.
      for(const part of d.titleParts.slice(2)){
        await wait(170);
        playTitle(part);
      }
    }else if(d.title){
      playTitle(d.title);
    }

    // Side-panel contents begin during the title beat, not after it.
    if(d.side){
      const sideTexts=[...d.side.querySelectorAll('.rr-text')];
      await wait(120);
      if(sideTexts[0]) playText(sideTexts[0]);

      d.side.querySelectorAll('.jp-big').forEach(oneShotSignal);

      if(sideTexts[1]){
        await wait(180);
        playText(sideTexts[1]);
      }
    }

    // Let the paired hero group settle as one visual statement.
    await wait(360);

    // BEAT 2: field note + explanatory sentence.
    if(d.field){
      playText(d.field);
      await wait(70);
    }
    if(d.lede){
      const n=playText(d.lede);
      await wait(Math.min(n+150,1500));
    }

    // BEAT 3: utility / language ribbon.
    if(d.ribbon){
      playBlock(d.ribbon);
      await wait(240);

      const ribbonTexts=[...d.ribbon.querySelectorAll('.rr-text')];
      ribbonTexts.forEach((t,i)=>{
        window.setTimeout(()=>playText(t),i*55);
      });
      d.ribbon.querySelectorAll('.jp').forEach(oneShotSignal);

      const longest=ribbonTexts.length
        ? Math.max(...ribbonTexts.map(t=>{
            const count=t.querySelectorAll('.rr-char').length;
            const gap=Number(t.dataset.rrGap||13);
            return 300+count*gap;
          }))
        : 0;

      await wait(Math.min(longest+120,700));
    }

    d.root.classList.remove('rr-hero-sync');
    d.root.dataset.rrRootPlayed='1';
  }

  // ---------------------------------------------------------
  // PROJECT ROWS
  // Important: DO NOT charify row text.
  // ---------------------------------------------------------
  const rows=[...document.querySelectorAll('.project-row')];
  rows.forEach(row=>{
    row.classList.add('rr-first-block','rr-armed');
    roots.push(row);
  });

  function playRow(row){
    if(row.dataset.rrRootPlayed==='1') return;
    row.classList.add('rr-row-play');
    window.setTimeout(()=>{
      row.classList.remove('rr-row-play','rr-armed');
      row.classList.add('rr-done');
      row.dataset.rrRootPlayed='1';
    },480);
  }

  // ---------------------------------------------------------
  // HOME COMPONENTS
  // ---------------------------------------------------------
  const components=[];

  function prepComponent(root,selector,gap=13){
    if(!root) return;
    const texts=[...root.querySelectorAll(selector)].filter(el=>!el.closest('svg'));
    texts.forEach(el=>{
      buildText(el,gap);
      armText(el);
    });
    root.dataset.rrKind='component';
    components.push({root,texts});
    roots.push(root);
  }

  document.querySelectorAll('.motion-strip').forEach(x=>prepComponent(x,':scope > div',13));
  document.querySelectorAll('.utility-band').forEach(x=>prepComponent(
    x,'.gray,.black,.tri-label .en,.tri-label .jp,.tri-label .fr,.mascot-chip > span,.key',13
  ));
  // Homepage chapter headings need a dedicated synchronized beat:
  // left rail + badge/icon + title together, explanatory paragraph second.
  const chapterData=new WeakMap();
  document.querySelectorAll('.section-title').forEach(root=>{
    const left=root.querySelector('.left');
    const leftTexts=[...root.querySelectorAll('.left .tri-stack .en,.left .tri-stack .jp,.left .tri-stack .fr')];
    const badge=root.querySelector('.side-note,.mascot-chip');
    const badgeText=badge?.querySelector('span');
    const title=root.querySelector('h2');
    const paragraph=root.querySelector('p');

    leftTexts.forEach(t=>{
      buildText(t,13);
      armText(t);
    });
    if(badgeText){
      buildText(badgeText,12);
      armText(badgeText);
    }else if(badge && badge.matches('.side-note')){
      buildText(badge,12);
      armText(badge);
    }
    if(title){
      buildText(title,13);
      armText(title);
    }
    if(paragraph){
      buildText(paragraph,11);
      armText(paragraph);
    }

    chapterData.set(root,{left,leftTexts,badge,badgeText,title,paragraph});
    root.dataset.rrKind='chapter';
    roots.push(root);
  });
  document.querySelectorAll('.principle').forEach(x=>prepComponent(x,'.n,h3,p',12));

  async function playComponent(item){
    if(item.root.dataset.rrRootPlayed==='1') return;
    for(const t of item.texts){
      const d=playText(t);
      await wait(d + 140);
    }
    item.root.querySelectorAll('.theme-mark,.mascot-chip svg').forEach(oneShotSignal);
    item.root.dataset.rrRootPlayed='1';
  }


  async function playChapter(root){
    if(root.dataset.rrRootPlayed==='1') return;
    const d=chapterData.get(root);
    if(!d) return;

    root.classList.add('rr-chapter-playing');

    // BEAT 1: the complete chapter identity lands together.
    // Rail text receives only a tiny internal stagger.
    d.leftTexts.forEach((t,i)=>{
      window.setTimeout(()=>playText(t),i*45);
    });

    if(d.badge){
      d.badge.classList.remove('rr-chapter-badge-play');
      void d.badge.offsetWidth;
      d.badge.classList.add('rr-chapter-badge-play');

      if(d.badgeText){
        window.setTimeout(()=>playText(d.badgeText),55);
      }else if(d.badge.matches('.side-note')){
        window.setTimeout(()=>playText(d.badge),55);
      }
    }

    if(d.title){
      // Main title starts essentially at the same instant.
      window.setTimeout(()=>playText(d.title),35);
    }

    const leftLongest=Math.max(0,...d.leftTexts.map(t=>{
      const count=t.querySelectorAll('.rr-char').length;
      const gap=Number(t.dataset.rrGap||13);
      return 300+count*gap;
    }));
    const titleTime=d.title
      ? 300+d.title.querySelectorAll('.rr-char').length*Number(d.title.dataset.rrGap||13)
      : 0;
    const badgeTime=d.badgeText
      ? 300+d.badgeText.querySelectorAll('.rr-char').length*Number(d.badgeText.dataset.rrGap||12)
      : 360;

    // One single settling pause for all three elements.
    await wait(Math.min(Math.max(leftLongest,titleTime,badgeTime)+130,1200));

    // BEAT 2: explanatory paragraph receives the attention alone.
    if(d.paragraph){
      const n=playText(d.paragraph);
      await wait(Math.min(n+130,1500));
    }

    if(d.badge){
      window.setTimeout(()=>d.badge.classList.remove('rr-chapter-badge-play'),80);
    }
    root.classList.remove('rr-chapter-playing');
    root.dataset.rrRootPlayed='1';
  }

  // ---------------------------------------------------------
  // PROJECT SECTIONS
  // ---------------------------------------------------------
  const sectionData=new WeakMap();
  const sections=[...document.querySelectorAll('.project-section')];

  sections.forEach(sec=>{
    const rail=[...sec.querySelectorAll('.rail .num,.rail .en,.rail .jp,.rail .fr,.rail .meta')];
    rail.forEach(el=>{
      buildText(el,14);
      armText(el);
    });

    const body=sec.querySelector('.body');
    const title=body?.querySelector('h2');
    if(title){
      buildText(title,14);
      armText(title);
    }

    const structuredSelector='.lesson-list,.log,.evidence-grid,.case-grid,.outcome,.current-state';

    // Only free explanatory copy belongs to BEAT 2.
    // Text inside structured blocks must be played exclusively by that block's
    // own choreography, otherwise protocol descriptions appear before LOG labels.
    const paragraphs=[...body?.querySelectorAll('p,.side-note,.project-head-note,.evidence-caption')||[]]
      .filter(el=>el!==title && !el.closest(structuredSelector));
    paragraphs.forEach(el=>{
      buildText(el,11);
      armText(el);
    });

    const blocks=[...body?.querySelectorAll(structuredSelector)||[]];
    blocks.forEach(armBlock);

    // Text inside structured blocks is prepared but plays only after block reveal.
    blocks.forEach(block=>{
      [...block.querySelectorAll('h3,small,strong,p,.log-id')].forEach(el=>{
        buildText(el,10);
        armText(el);
      });
    });

    sectionData.set(sec,{rail,title,paragraphs,blocks});
    roots.push(sec);
  });

  async function playSection(sec){
    if(sec.dataset.rrRootPlayed==='1') return;
    const d=sectionData.get(sec);
    if(!d) return;

    sec.classList.add('rr-section-playing');

    const rail=sec.querySelector('.rail');

    // BEAT 1: left rail + main section title at the same time.
    if(rail){
      rail.classList.remove('rr-rail-play');
      void rail.offsetWidth;
      rail.classList.add('rr-rail-play');
    }

    d.rail.forEach((t,i)=>{
      // very shallow cascade inside the rail, effectively one visual beat
      window.setTimeout(()=>playText(t),i*55);
    });

    if(d.title){
      // Main title begins immediately with the rail.
      playText(d.title);
    }

    const railMax=Math.max(0,...d.rail.map(t=>{
      const count=t.querySelectorAll('.rr-char').length;
      const gap=Number(t.dataset.rrGap||14);
      return 300+count*gap;
    }));
    const titleTime=d.title
      ? 300+d.title.querySelectorAll('.rr-char').length*Number(d.title.dataset.rrGap||14)
      : 0;

    // One pause for the whole heading group, not one pause per micro-label.
    await wait(Math.min(Math.max(railMax,titleTime)+130,1050));

    // BEAT 2: explanatory copy, one paragraph at a time.
    for(const p of d.paragraphs){
      const n=playText(p);
      await wait(Math.min(n+140,1450));
    }

    // BEAT 3: structured data.
    // Protocol / FIELD LOG is special: rows are revealed sequentially.
    for(const block of d.blocks){
      if(block.classList.contains('log')){
        await playProtocolBlock(block);
        await wait(80);
        continue;
      }

      playBlock(block);
      await wait(300);

      const inner=[...block.querySelectorAll('.rr-text')];
      if(inner.length){
        inner.forEach((t,i)=>{
          window.setTimeout(()=>playText(t),i*70);
        });

        const longest=Math.max(...inner.map(t=>{
          const count=t.querySelectorAll('.rr-char').length;
          const gap=Number(t.dataset.rrGap||10);
          return 300+count*gap;
        }));

        await wait(Math.min(longest+150,1200));
      }

      block.querySelectorAll('.theme-mark,.jp-big,.mascot-chip').forEach(oneShotSignal);
      await wait(100);
    }

    if(rail){
      window.setTimeout(()=>rail.classList.remove('rr-rail-play'),500);
    }

    sec.classList.remove('rr-section-playing');
    sec.dataset.rrRootPlayed='1';
  }

  // ---------------------------------------------------------
  // ONE-SHOT VIEWPORT POLICY
  // Observer unobserves each root after its first launch.
  // No text animation can restart later in the visit.
  // ---------------------------------------------------------
  if(reduce){
    document.querySelectorAll('.rr-armed').forEach(el=>el.classList.remove('rr-armed'));
    return;
  }

  const componentMap=new WeakMap(components.map(x=>[x.root,x]));

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting || entry.intersectionRatio<.22) return;
      const root=entry.target;
      observer.unobserve(root);

      if(heroData && root===heroData.root) playHero();
      else if(root.classList.contains('project-row')) playRow(root);
      else if(chapterData.has(root)) playChapter(root);
      else if(sectionData.has(root)) playSection(root);
      else if(componentMap.has(root)) playComponent(componentMap.get(root));
    });
  },{threshold:[0,.22,.5],rootMargin:'-4% 0px -8% 0px'});

  roots.forEach(root=>observer.observe(root));
})();