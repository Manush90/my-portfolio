import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutMee.css";

const AboutMe = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const triggerBottom = (window.innerHeight / 5) * 4;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount to show already visible sections

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="about-me-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Link to="/">
            <div className="d-flex assoluto">
              <i className="bi bi-arrow-return-left greenColor backArrow"></i>
              <h6 className="greenColor ms-1 mt-2">Home</h6>
            </div>
          </Link>
          <div>
            <i className="bi bi-person greenColor"></i>
            <h2>Manuel Dell'Oste</h2>
            <h2>FrontEnd Developer</h2>
            <h2>5/6/90 Roma</h2>
          </div>
          <Image src="/profilee.jpg" roundedCircle className="profile-picture" />

          <div className="section hidden">
            <p className="about-me-text">
              Ciao a tutti sono Manuel, un grande appassionato di tecnologia. Sin da piccolino ho
              sempre avuto un'attrazione speciale per tutto quello che riguarda il Tech ed il mondo
              lo che circonda. Verso i 14 anni, grazie ai risparmi dei primi lavori estivi, inizio a
              comprare i primi componenti, utili poi,per assemblare il mio primo Personal Computer.
              Capii subito in quale ambiente mi trovavo, e che avrei voluto fare qualcosa del genere
              da grande. Inizio a masterizzare giochi per rivenderli a scuola, in modo da comprare
              componenti sempre migliori. Applico Patch e cracko giochi non posso farne più a meno,
              amo personalizzare contenuti o crearne di nuovi.Finito il Liceo a 19 anni decido di
              intraprendere un percorso biennale di Computer Grafica da AIV (Accademia Italiana
              Videogiochi). Aggiungo skill importanti nel mio bagaglio tecnico, come creazione di
              Texture, Modellazione 3D, Ambient Rendering e gestione delle luci oltre ad una grande
              passione per Photoshop. Nel 2021 decido di aprire un e-commerce gestito interamente da
              me, creando un Brand e vendendo in tutta italia con discreti risultati. Questo aumenta
              la mia consapevolezza di quello che è il mondo del Marketing digitale. Il 3 gennaio
              2024 comincio a studiare da FullStack Developer presso il corso semestrale di Epicode,
              che prevede oltre 1000 ore di formazione, ovviamente dato il mio background grafico
              capisco subito che il FrontEnd è quello che più si avvicina al mio essere. Il mio
              obiettivo ora è quello di entrare nel mondo lavorativo come FrontEnd developer, in
              modo da acquisire esperienza su progetti reali.
              <br></br>
              Spero vi siate fatti un opinione generale (positiva!) su di me, continua a scorrere
              per scoprire altro !
            </p>
            <i className="bi bi-arrow-down greenColor scroll-arrow"></i>
          </div>

          <hr />
          <i className="bi bi-book greenColor"></i>
          <h2>STUDI</h2>
          <div className="section hidden">
            <p className="about-me-text">
              Nel 2008 ricevo il diploma in Economia Aziendale presso il Paolo Baffi ITC di
              Fiumicino. Finito il liceo decido di intraprendere un corso di Grafica 3D presso AIV
              della durata biennale che prevedeva utilizzo di Software come PhotoShop, MAYA e
              Zbrush. Grazie anche queste conoscenze riesco a gestire la parte grafica del mio
              E-commerce. A Gennaio 2024 Intraprendo un corso Full/stack developer di DIGICHAMPS
              tramite IFOA in collaborazione con EPICODE, che prevede una durata semestrale con più
              di 1000 ore di studio.
            </p>
            <Image className="rotating mb-2" height={80} src="/maya.png" rounded />
            <Image className="mx-4 rotating mb-2" height={80} src="/ps.png" rounded />
            <Image className="rotating mb-2" height={80} src="/zbrush.png" rounded />
          </div>
          <i className="bi bi-arrow-down greenColor scroll-arrow"></i>
          <hr />
          <i className="bi bi-bookmark-star greenColor"></i>
          <h2>CONOSCENZE APPRESE</h2>
          <div className="section hidden">
            <p className="about-me-text">
              Terminare il corso da FullStack presso Ifoa/Epicode mi ha permesso di apprendere
              davvero tanto, essendo gestito in maniera intensiva sono riuscito a non staccare gli
              occhi dal pc per 6 mesi, questa continuità mi ha permesso di apprendere molto più
              velocemente i fabbisogni di un Developer. Mi sento a mio agio quando devo
              inizializzare un ambiente di sviluppo in React ad esempio con tutte le dipendenze
              necessarie per poter avere un ambiente di comfort sulla quale sviluppare. React ed il
              suo sistema di Routing mi hanno subito attratto particolarmente, il CSS poi per un
              grafico come me è il ponte perfetto che mi fa amare questo Lavoro. Javascript invece
              mi ha insegnato a pensare in modo logico e a risolvere problemi in maniera efficiente.
              La necessità di scrivere funzioni, gestire eventi e manipolare il DOM mi ha permesso
              di sviluppare una mentalità orientata al Problem Solving. Inoltre Ho anche avuto la
              possibilitò di testare Wordpress, non esattamente quello che preferisce un grafico ma
              un AllinOne niente male per gestire direttamente da interfaccia FrontEnd e BackEnd.
              Per il Backend invece abbiamo usato PHP in combinazione con MySQL, ho sviluppato
              competenze solide nella gestione dei database. Ho imparato a scrivere query SQL, a
              effettuare operazioni CRUD e a ottimizzare le performance delle interazioni con il
              database. Per mia curiosità personale per il Capstone finale ho voluto sbirciare
              Firebase Auth per gestire i login e Firestore per Il DB e devo dire che è uno
              strumento di una facilità di apprindimento incredibile, grazie alla creazione di
              Raccolte e documenti direttamente da interfaccia.
            </p>
            <Image className="rotating mb-3" height={80} src="/html5.png" rounded />
            <Image className="mx-4 rotating mb-3" height={80} src="/css.png" rounded />
            <Image className="rotating mb-3" height={80} src="/js.png" rounded />
            <Image className="mx-4 rotating mb-2" height={80} src="/php.png" rounded />
            <Image className="rotating mb-2" height={80} src="/wp.png" rounded />
            <i className="bi bi-arrow-down greenColor scroll-arrow"></i>
          </div>

          <hr />
          <i className="bi bi-duffle greenColor"></i>
          <h2>LAVORO</h2>
          <div className="section hidden">
            <p className="about-me-text">
              La passione è rimasta immutata negli anni, ma per più motivi non sono mai riuscito a
              farne il mio lavoro, sono però riuscito ad affiancare ad esso sempre degli studi. Per
              quanto riguarda Le mie esperienze lavorative invece ho accumulato diverse esperienze
              dalla quale ho appreso molto a livello personale ed anche a livello tecnico.
              L'aeroporto di Fiumicino è stata la mia casa per quasi 9 anni, Ho lavorato in diverse
              aziende come Unieuro e Diesel entrambe situate in moli Internazionali dove ho avuto la
              fortuna di incontrare persone proveniente da ogni parte del mondo, ho avuto
              l'opportunità di lavorare in gruppi di lavoro molto grandi, gestire turni lavorativi
              di altre persone ed organizzare le routine Lavorative.
            </p>
            <i className="bi bi-arrow-down greenColor scroll-arrow"></i>
          </div>

          <hr />

          <i className="bi bi-controller greenColor"></i>
          <h2>HOBBY</h2>
          <div className="section hidden">
            <p className="about-me-text">
              Ho anche degli hobby! Sono un PC Gamer, adoro i giochi manageriali, ed anche ogni
              gioco prodotto da Hideo Kojima, mi piace molto lo sport e adoro il calcio, che ho
              praticato a livello dilettantistico finchè ho potuto. Questo è solo un pò di quello
              che è Manuel spero che queste poche righe vi abbiano dato una bella idea di Me!
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
