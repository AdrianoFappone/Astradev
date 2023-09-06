import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import IconInstagram from './svgs/instagram';
import IconSearch from './svgs/src';
import IconRunFast from './iconrun';


export const Navbar=()=>{
    const [src, setsrc]=useState('./svgs/logo.svg')
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [attivazione, setattivazione]=useState()
    const [benvenuto, setbenvenuto]=useState('B')
    const inizio=useRef(null)
    const perche=useRef(null)
    const chi=useRef(null)
    const progetti=useRef(null)
    const contatti=useRef(null)
    const [siperche, setperche]=useState(false)
    const [sichi, setchi]=useState(false)
    const [siprogetti, setprogetti]=useState(false)
    const [sicontatti, setcontatti]=useState(false)
    useEffect(() => {
        const checkMediaQuery = (mediaQuery) => {
          setIsTablet(mediaQuery.matches);
        };
        const mediaQuery = window.matchMedia('(max-width: 1100px)');
        mediaQuery.addListener(checkMediaQuery);
        checkMediaQuery(mediaQuery);
        return () => {
          mediaQuery.removeListener(checkMediaQuery);
        };
    }, []);
    useEffect(() => {
        const checkMediaQuery = (mediaQuery) => {
          setIsMobile(mediaQuery.matches);
        };
        const mediaQuery = window.matchMedia('(max-width: 700px)');
        mediaQuery.addListener(checkMediaQuery);
        checkMediaQuery(mediaQuery);
        return () => {
          mediaQuery.removeListener(checkMediaQuery);
        };
    }, []);
    
    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px', 
          threshold: 0.5,
        };
    
        const handleIntersect = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setperche(false)
              setchi(false)
              setcontatti(false)
              setprogetti(false)
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersect, options);
    
        if (inizio.current) {
          observer.observe(inizio.current);
        }
    
        return () => {
          
          observer.disconnect();
        };
      }, [siperche, sichi, siprogetti, sicontatti]);
    useEffect(() => {
        let costante
        if(isMobile || isTablet){
            costante=0.3
        }
        else{
            costante=0.3
        }
        const options = {
          root: null,
          rootMargin: '0px', 
          threshold: costante,
        };
    
        const handleIntersect = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setperche(true)
              setchi(false)
              setcontatti(false)
              setprogetti(false)
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersect, options);
    
        if (perche.current) {
          observer.observe(perche.current);
        }
    
        return () => {
          
          observer.disconnect();
        };
      }, [siperche, sichi, siprogetti, sicontatti, isMobile]);
    useEffect(() => {
        let costante
        if(isMobile){
            costante=0.3
        }
        else{
            costante=0.5
        }
        const options = {
          root: null,
          rootMargin: '0px', 
          threshold: costante,
        };
    
        const handleIntersect = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setperche(false)
              setchi(true)
              setcontatti(false)
              setprogetti(false)
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersect, options);
    
        if (chi.current) {
          observer.observe(chi.current);
        }
    
        return () => {
          
          observer.disconnect();
        };
      }, [siperche, sichi, siprogetti, sicontatti, isMobile]);
    useEffect(() => {
        let costante
        if(isMobile){
            costante=0.3
        }
        else{
            costante=0.5
        }
        const options = {
          root: null,
          rootMargin: '0px', 
          threshold: costante,
        };
    
        const handleIntersect = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setperche(false)
              setchi(false)
              setcontatti(false)
              setprogetti(true)
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersect, options);
    
        if (progetti.current) {
          observer.observe(progetti.current);
        }
    
        return () => {
          
          observer.disconnect();
        };
      }, [siperche, sichi, siprogetti, sicontatti, isMobile]);
    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px', 
          threshold: 0.5,
        };
    
        const handleIntersect = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setperche(false)
              setchi(false)
              setcontatti(true)
              setprogetti(false)
              observer.unobserve(entry.target);
            }
          });
        };
    
        const observer = new IntersectionObserver(handleIntersect, options);
    
        if (contatti.current) {
          observer.observe(contatti.current);
        }
    
        return () => {
          
          observer.disconnect();
        };
      }, [siperche, sichi, siprogetti, sicontatti]);

    
      const testo = 'envenuto!';
      const tempo = 60;
      
      useEffect(() => {
        if (benvenuto.length-1 < testo.length) {
          const currentIndex = benvenuto.length-1;
          const typingTimer = setInterval(() => {
            if (currentIndex < testo.length) {
              setbenvenuto(prevText => prevText + testo[currentIndex]);
            } else {
              clearInterval(typingTimer);
            }
          }, tempo);
      
          return () => {
            clearInterval(typingTimer);
          };
        }
      }, [benvenuto]);
      if(isMobile){
        return(
            <div>
            <header><nav>
                <div>
                <div className='logo'  onMouseOver={()=>{
                    setsrc('./svgs/logo0.svg')
                    setTimeout(()=>{
                        setsrc('./svgs/logo10.svg')
                    }, 50)
                    setTimeout(()=>{
                        setsrc('./svgs/logo20.svg')
                    }, 100)
                    setTimeout(()=>{
                        setsrc('./svgs/logo40.svg')
                    }, 150)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 200)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 250)
                    setTimeout(()=>{
                        setsrc('./svgs/logo60.svg')
                    }, 300)
                    setTimeout(()=>{
                        setsrc('./svgs/logo75.svg')
                    }, 350)
                    setTimeout(()=>{
                        setsrc('./svgs/logo90.svg')
                    }, 400)
                    setTimeout(()=>{
                        setsrc('./svgs/logo.svg')
                    }, 450)
                }}
                onClick={()=>{
                    setsrc('./svgs/logo0.svg')
                    setTimeout(()=>{
                        setsrc('./svgs/logo10.svg')
                    }, 50)
                    setTimeout(()=>{
                        setsrc('./svgs/logo20.svg')
                    }, 100)
                    setTimeout(()=>{
                        setsrc('./svgs/logo40.svg')
                    }, 150)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 200)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 250)
                    setTimeout(()=>{
                        setsrc('./svgs/logo60.svg')
                    }, 300)
                    setTimeout(()=>{
                        setsrc('./svgs/logo75.svg')
                    }, 350)
                    setTimeout(()=>{
                        setsrc('./svgs/logo90.svg')
                    }, 400)
                    setTimeout(()=>{
                        setsrc('./svgs/logo.svg')
                    }, 450)
                }}
                ><img src={src}/> Astradev</div>
                <div className={`menu ${attivazione? attivazione: ''}`} onClick={()=>{
                    if(attivazione){
                        setattivazione()
                    }
                    else{
                        setattivazione('attivazione')
                    }
                }}>
                    <div className='linee linea1'></div>
                    <div className='linee linea2'></div>
                    <div className='linee linea3'></div>
                </div>
                <div className='lista'><div style={siperche ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}><a href='#perche'>Perchè avere un sito web</a></div><div style={sichi ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}><a href='#chi'>Chi sono</a></div><div style={siprogetti ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}><a href='#progetti'>I miei progetti</a></div><div style={sicontatti ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}><a href='#contatti'>Contatti</a></div><div><a href='https://www.instagram.com/adrianofappone/' title='Instagram'><IconInstagram/></a></div></div>
                </div>
            </nav></header>
            <main>
                <div className='contenitoreben' ref={inizio}>
                <div className='benvenuto'>
                    <h1 style={{display: 'inline'}}>{benvenuto}</h1><span style={{fontSize: '4rem', color: 'gray'}}>{benvenuto.length==10 && '🎉'}</span>
                    <p>
                        Se sei qui probabilmente starai valutando la possibilità per te e la tua attività di avere un sito web. <span>Sei nel posto giusto!</span><br/>
                        Risponderò a tutte le tue domande e fugherò possibili dubbi sperando di essere il più esaustivo possibile.
                    </p>
                    <button className='bottone'><a href='#perche'>Cominciamo!</a></button>
                </div>
                </div>
                <div id='perche' className='chi'></div>
                <div className={siperche? 'perche attivo' : 'perche'} ref={perche}>
                    <div>
                        <h1>Perchè avere un sito web?</h1>
                        <p>Per una qualsiasi attività e professione <span>avere un sito web è FONDAMENTALE</span> per poter raggiungere il maggior numero di clienti e poter stare al passo con la competizione. Viviamo in un mondo digitalizzato e ormai se cerchiamo un ristorante, parrucchiere, avvocato, idraulico ecc... la prima cosa che facciamo è cercarlo su Google, e tra essi quello che dal sito sembra più professionale probabilmente sarà la nostra scelta.<br/>
                            <span>Riassumendo i vantaggi di avere un sito sono:</span>
                        </p>
                        <div className='contenitoreicon'>
                            <div className='icon'>
                                <IconSearch className='srcicon'/>
                                <div className='descrizizioni'>
                                <h3>Farsi trovare</h3>
                                <p>Sarà più facile farsi trovare dai clienti, grazie a una semplice ricerca.</p>
                                </div>
                            </div>
                            <div className='icon'>
                                <img src='./svgs/orologio.svg' className='orologioicon'></img>
                                <div className='descrizizioni'>
                                <h3>Risparmia tempo</h3>
                                <p>
                                    Potrai automatizzare molti processi che prima facevi manualmente, come avere un catalogo direttamente sul sito o avere sul sito le descrizioni dei tuoi servizi con relativi costi ecc..
                                </p>
                                </div>
                            </div>
                            <div className='icon'>
                                <IconRunFast className='srcicon'/>
                                <div className='descrizioni'>
                                    <h3>Supera la concorrenza</h3>
                                    <p>
                                        Mentre molti altri penseranno che hanno già abbastanza clienti e un sito web alla fine non gli serve, tu aumenterai i tuoi clienti a lungo termine a scapito concorrenza.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <button className='bottone' style={{paddingLeft: '2em', paddingRight: '2em', marginTop: '2em'}}><a href='#chi'>Chi sono?</a></button>
                    </div>
                </div>
                <div id='chi' className='chi' ></div>
                <div className='presentazione' ref={chi}>
                    <div className={sichi? 'testo attivo' : 'testo'}>
                        <h1 style={{display: 'inline'}}>Chi sono?</h1><span style={{fontSize: '2rem', color: 'grey'}}>🤔</span>
                        <div><p>Sono un giovane <span>sviluppatore web</span> con competenze sia nel <span>frontend</span> (la parte grafica e interazioni) e <span>backend</span> (gestione dati e comunicazione server). Ma quindi perchè scegliermi?<br/><br/><span className='scrollare'>Scrolla per scoprirlo<span style={{color: 'grey', fontSize: '2rem'}}>👉</span></span><br/><br/></p>
                            
                            <div className='contenitorescelte'>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Competenze👨‍🎓:</h2> Avendo competenze non solo grafiche ma anche di comunicazione server, potrò creare anche applicazioni complesse come chat, negozi online e anche piccoli social media.</div>
                                  <img src='./svgs/code-820275_1280.jpg'></img>
                              </div>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Strumenti🛠:</h2>Utilizzo strumenti di ultima generazione (come il famoso framework React e Node JS o Chat GPT) e tutto il codice che utilizzo è stato scritto e pensato da me, rendendo ogni sito unico, su misura e di alta qualità.</div>
                                  <img src='./svgs/artificial-intelligence-2167835_1280.jpg'></img>
                              </div>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Qualità💯:</h2> Vi sembrerà ovvio che ogni mio sito sia unico e su misura come un prodotto artigianale, ma non lo è. Molti miei colleghi utilizzano software per fare siti in modo molto semplificato (come WordPress), generando prodotti di qualità molto bassa.</div>
                                    <img src='./svgs/entrepreneur-1340649_1280.jpg'></img>                              
                              </div>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Comunicazione H24📲:</h2> La comunicazione col cliente per me è fondamentale, la costruzione del sito sarà fatta passo passo insieme al cliente. Anche una volta concluso il sito rimarrò sempre a disposizione per qualsiasi possibile problema legato a esso.</div>
                                    <img src='./svgs/contact-us-2993000_1280.jpg'></img>
                              </div>
                            </div>
                            <br/>
                            
                         <span>L'attenzione ai dettagli</span>, <span>la qualità</span>, <span>l'utilizzo dei più aggiornati strumenti e tecniche</span>, uniti all'<span>ascolto e comunicazione continua col cliente</span> rendono unico il mio lavoro e spero vi lasceranno <span>estremamente soddisfatti</span>. <br/>
                        </div>
                        <button className='bottone' style={{paddingLeft: '2em', paddingRight: '2em'}}><a href='#progetti'>I miei progetti</a></button>
                    </div>
                </div>
                <div id='progetti' className='chi' ></div>
                <div className={siprogetti? 'progetti attivo':'progetti'} ref={progetti}>
                    <div className='descrizione'>
                        <h1>I miei progetti</h1>
                        <p>Ora starete pensando: "Ok tante belle parole, ma i fatti?". Avete perfettamente ragione, infatti eccovi dei miei progetti creati solo per voi, funzionanti al 100% (tranne per i pagamenti essendo le pagine usate solo come esempio), attraverso cui potrete valutare se le mie capacità vi soddisfano e nel caso come anche possibile spunto, nel caso non abbiate le idee ancora chiarissime.</p>
                    </div>
                    <div className='vetrina'>
                        <div className={siprogetti? 'progetto sx attivo':'progetto sx'}>

                        </div>
                        <div className={siprogetti? 'progetto dx attivo':'progetto dx'}>

                        </div>
                    </div>
                    <button className='bottone' style={{paddingLeft: '2em', paddingRight: '2em'}}><a href='#contatti'>Contatti</a></button>
                </div>
            </main>
            <footer>
                <div id='contatti' className='chi'></div>
                <div className='contatti' ref={contatti}><br/>
                    <p>Se volete iniziare questa esperienza e questo investimento con me ecco tutti i miei contatti di lavoro, non siate timidi mi raccomando😉.</p>
                    <br/>
                    <span>Per appuntamenti dal vivo: <h4>📍 Milano e dintorni</h4></span><br/>
                    <h2>Contatti:</h2>
                    <ul>
                        <li>E-mail: <a href="mailto:lucagarrone271005@gmail.com">lucagarrone271005@gmail.com</a></li><br/>
                        <li>Instagram: <a href='https://www.instagram.com/adrianofappone/'>@adrianofappone</a></li>
                    </ul>
                </div>
            </footer>
            </div>
        )
      }
      else{
        return(
            <div>
            <header><nav>
                <div>
                <div className='logo'  onMouseOver={()=>{
                    setsrc('./svgs/logo0.svg')
                    setTimeout(()=>{
                        setsrc('./svgs/logo10.svg')
                    }, 50)
                    setTimeout(()=>{
                        setsrc('./svgs/logo20.svg')
                    }, 100)
                    setTimeout(()=>{
                        setsrc('./svgs/logo40.svg')
                    }, 150)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 200)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 250)
                    setTimeout(()=>{
                        setsrc('./svgs/logo60.svg')
                    }, 300)
                    setTimeout(()=>{
                        setsrc('./svgs/logo75.svg')
                    }, 350)
                    setTimeout(()=>{
                        setsrc('./svgs/logo90.svg')
                    }, 400)
                    setTimeout(()=>{
                        setsrc('./svgs/logo.svg')
                    }, 450)
                }}
                onClick={()=>{
                    setsrc('./svgs/logo0.svg')
                    setTimeout(()=>{
                        setsrc('./svgs/logo10.svg')
                    }, 50)
                    setTimeout(()=>{
                        setsrc('./svgs/logo20.svg')
                    }, 100)
                    setTimeout(()=>{
                        setsrc('./svgs/logo40.svg')
                    }, 150)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 200)
                    setTimeout(()=>{
                        setsrc('./svgs/logo50.svg')
                    }, 250)
                    setTimeout(()=>{
                        setsrc('./svgs/logo60.svg')
                    }, 300)
                    setTimeout(()=>{
                        setsrc('./svgs/logo75.svg')
                    }, 350)
                    setTimeout(()=>{
                        setsrc('./svgs/logo90.svg')
                    }, 400)
                    setTimeout(()=>{
                        setsrc('./svgs/logo.svg')
                    }, 450)
                }}
                ><img src={src}/> Astradev</div>
                <div className='links'><a href='#perche' style={siperche ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}>Perchè avere un sito web</a><a href='#chi' style={sichi ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}>Chi sono</a><a href='#progetti' style={siprogetti ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}>I miei progetti</a><a href='#contatti' style={sicontatti ? {backgroundColor: 'rgba(87, 86, 86, 0.199)'} : {}}>Contatti</a></div>
                <a href='https://www.instagram.com/adrianofappone/' title='Instagram'><IconInstagram/></a>
                </div>
            </nav></header>
            <main>
                <div className='contenitoreben' ref={inizio}>
                <div className='benvenuto'>
                    <h1 style={{display: 'inline'}}>{benvenuto}</h1><span style={{fontSize: '4rem', color: 'gray'}}>{benvenuto.length==10 && '🎉'}</span>
                    <p>
                        Se sei qui probabilmente starai valutando la possibilità per te e la tua attività di avere un sito web. <span>Sei nel posto giusto!</span><br/>
                        Risponderò a tutte le tue domande e fugherò possibili dubbi sperando di essere il più esaustivo possibile.
                    </p>
                    <button className='bottone'><a href='#perche'>Cominciamo!</a></button>
                </div>
                </div>
                <div id='perche' className='chi'></div>
                <div className={siperche? 'perche attivo' : 'perche'} ref={perche}>
                    <div>
                        <h1>Perchè avere un sito web?</h1>
                        <p>Per una qualsiasi attività e professione <span>avere un sito web è FONDAMENTALE</span> per poter raggiungere il maggior numero di clienti e poter stare al passo con la competizione. Viviamo in un mondo digitalizzato e ormai se cerchiamo un ristorante, parrucchiere, avvocato, idraulico ecc... la prima cosa che facciamo è cercarlo su Google, e tra essi quello che dal sito sembra più professionale probabilmente sarà la nostra scelta.<br/>
                            <span>Riassumendo i vantaggi di avere un sito sono:</span>
                        </p>
                        <div className='contenitoreicon'>
                            <div className='icon'>
                                <IconSearch className='srcicon'/>
                                <div className='descrizizioni'>
                                <h3>Farsi trovare</h3>
                                <p>Sarà più facile farsi trovare dai clienti, grazie a una semplice ricerca.</p>
                                </div>
                            </div>
                            <div className='icon'>
                                <img src='./svgs/orologio.svg' className='orologioicon'></img>
                                <div className='descrizizioni'>
                                <h3>Risparmia tempo</h3>
                                <p>
                                    Potrai automatizzare molti processi che prima facevi manualmente, come avere un catalogo direttamente sul sito o avere sul sito le descrizioni dei tuoi servizi con relativi costi ecc..
                                </p>
                                </div>
                            </div>
                            <div className='icon'>
                                <IconRunFast className='srcicon'/>
                                <div className='descrizioni'>
                                    <h3>Supera la concorrenza</h3>
                                    <p>
                                        Mentre molti altri penseranno che hanno già abbastanza clienti e un sito web alla fine non gli serve, tu aumenterai i tuoi clienti a lungo termine a scapito concorrenza.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                        <button className='bottone' style={{paddingLeft: '2em', paddingRight: '2em', marginTop: '2em'}}><a href='#chi'>Chi sono?</a></button>
                    </div>
                </div>
                <div id='chi' className='chi' ></div>
                <div className='presentazione' ref={chi}>
                    <div className={sichi? 'testo attivo' : 'testo'}>
                        <h1 style={{display: 'inline'}}>Chi sono?</h1><span style={{fontSize: '2rem', color: 'grey'}}>🤔</span>
                        <div><p>Sono un giovane <span>sviluppatore web</span> con competenze sia nel <span>frontend</span> (la parte grafica e interazioni) e <span>backend</span> (gestione dati e comunicazione server). Ma quindi perchè scegliermi?<br/><br/>{isTablet&& <span className='scrollare'>Scrolla per scoprirlo<span style={{color: 'grey', fontSize: '2rem'}}>👉</span><br/><br/></span>}</p>
                            
                            <div className='contenitorescelte'>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Competenze👨‍🎓:</h2> Avendo competenze non solo grafiche ma anche di comunicazione server, potrò creare anche applicazioni complesse come chat, negozi online e anche piccoli social media.</div>
                                  <img src='./svgs/code-820275_1280.jpg'></img>
                              </div>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Strumenti🛠:</h2>Utilizzo strumenti di ultima generazione (come il famoso framework React e Node JS o Chat GPT) e tutto il codice che utilizzo è stato scritto e pensato da me, rendendo ogni sito unico, su misura e di alta qualità.</div>
                                  <img src='./svgs/artificial-intelligence-2167835_1280.jpg'></img>
                              </div>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Qualità💯:</h2> Vi sembrerà ovvio che ogni mio sito sia unico e su misura come un prodotto artigianale, ma non lo è. Molti miei colleghi utilizzano software per fare siti in modo molto semplificato (come WordPress), generando prodotti di qualità molto bassa.</div>
                                    <img src='./svgs/entrepreneur-1340649_1280.jpg'></img>                              
                              </div>
                              <div className='scelta'>
                                  <div className='scritto'><h2>Comunicazione H24📲:</h2> La comunicazione col cliente per me è fondamentale, la costruzione del sito sarà fatta passo passo insieme al cliente. Anche una volta concluso il sito rimarrò sempre a disposizione per qualsiasi possibile problema legato a esso.</div>
                                    <img src='./svgs/contact-us-2993000_1280.jpg'></img>
                              </div>
                            </div>
                            <br/>
                            
                         <span>L'attenzione ai dettagli</span>, <span>la qualità</span>, <span>l'utilizzo dei più aggiornati strumenti e tecniche</span>, uniti all'<span>ascolto e comunicazione continua col cliente</span> rendono unico il mio lavoro e spero vi lasceranno <span>estremamente soddisfatti</span>. <br/>
                        </div>
                        <button className='bottone' style={{paddingLeft: '2em', paddingRight: '2em'}}><a href='#progetti'>I miei progetti</a></button>
                    </div>
                </div>
                <div id='progetti' className='chi' ></div>
                <div className={siprogetti? 'progetti attivo':'progetti'} ref={progetti}>
                    <div className='descrizione'>
                        <h1>I miei progetti</h1>
                        <p>Ora starete pensando: "Ok tante belle parole, ma i fatti?". Avete perfettamente ragione, infatti eccovi dei miei progetti creati solo per voi, funzionanti al 100% (tranne per i pagamenti essendo le pagine usate solo come esempio), attraverso cui potrete valutare se le mie capacità vi soddisfano e nel caso come anche possibile spunto, nel caso non abbiate le idee ancora chiarissime.</p>
                    </div>
                    <div className='vetrina'>
                        <div className={siprogetti? 'progetto sx attivo':'progetto sx'}>

                        </div>
                        <div className={siprogetti? 'progetto dx attivo':'progetto dx'}>

                        </div>
                    </div>
                    <button className='bottone' style={{paddingLeft: '2em', paddingRight: '2em'}}><a href='#contatti'>Contatti</a></button>
                </div>
            </main>
            <footer>
                <div id='contatti' className='chi'></div>
                <div className='contatti' ref={contatti}><br/>
                    <p>Se volete iniziare questa esperienza e questo investimento con me ecco tutti i miei contatti di lavoro, non siate timidi mi raccomando😉.</p>
                    <br/>
                    <span>Per appuntamenti dal vivo: <h4>📍 Milano e dintorni</h4></span><br/>
                    <h2>Contatti:</h2>
                    <ul>
                        <li>E-mail: <a href="mailto:lucagarrone271005@gmail.com">lucagarrone271005@gmail.com</a></li><br/>
                        <li>Instagram: <a href='https://www.instagram.com/adrianofappone/'>@adrianofappone</a></li>
                    </ul>
                </div>
            </footer>
            </div>
        )
      }
}
