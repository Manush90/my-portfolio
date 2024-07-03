import React, { useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Progetto1 = () => {
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Link to="/Cards">
        <div className="d-flex mb-3">
          <i className="bi bi-arrow-return-left greenColor backArrow"></i>
          <h6 className="greenColor ms-1 mt-2">Progetti</h6>
        </div>
      </Link>
      <Container>
        <div className="d-flex justify-content-center">
          <Image className="rotating mb-2" height={120} src="/aesseromanisti.png" rounded />
        </div>
        <h1 className="text-center greenColor">Web & Mobile App per Club Calcistici</h1>
        <h5 className="text-center text-white mb-3">
          L'app è sviluppata tenendo fede ai colori della AS Roma, in quanto dovevo scegliere un
          club come esempio, ovviamente cambiando loghi e colorazione l'app può diventare
          brandizzata per qualsiasi Club, essendo il codice orientato proprio nel senso della
          versatilità, tutto è modificabile dall'admin tramite interfaccia, ma scopriamolo insieme!
        </h5>
        <h3 className="text-center greenColor">Struttura della Web App</h3>
        <h5 className="text-center mb-5 text-white">
          Ho utilizzato React come libreria JS, Bootstrap come framework <br /> e JS come linguaggio
          di programmazione
        </h5>
        <div className="d-flex mb-4  justify-content-center">
          <Image className=" rotating mb-2" height={80} src="/bootstrap.png" rounded />
          <Image className=" mx-3 rotating mb-2" height={80} src="/react.png" rounded />
          <Image className="rotating mb-2" height={80} src="/js.png" rounded />
        </div>
        <div className="d-flex justify-content-center">
          <i className="bi bi-arrow-down greenColor scroll-arrow"></i>
        </div>
      </Container>

      <Container className="mt-4">
        <Row className="align-items-center mb-4 section hidden">
          <Col md={6}>
            <h3 className="greenColor">Menù Login</h3>
            <p>
              Qui possiamo osservare come un utente non loggato abbia a disposizione solo la sezione
              Login, mentre un utente loggato, in questo caso un Admin, abbia a disposizione
              l'intera sezione del menù, in modo da personalizzare a proprio piacimento i vari
              elementi all'interno del sito. Il normale User invece può consultare solo i suoi dati
              di profilo ed eventualmente effettuare un recupero password. Il tutto è gestito con
              Firebase Authentication.
            </p>
          </Col>
          <Col md={6}>
            <Image src="/loginInterface.jpg" rounded fluid />
          </Col>
        </Row>

        <Row className="align-items-center mb-4 section hidden">
          <Col md={6}>
            <Image src="/InterfaceRecap.jpg" rounded fluid />
          </Col>
          <Col md={6}>
            <h3 className="greenColor">Marquee, Navbar, Carosello e News Section</h3>
            <p>
              Qui Possiamo vedere com'è strutturata l'home page. Il Marquee visualizza una recente
              notizia scorrendo verso sinistra in un loop infinito ed è modificabile dall'admin
              nell'apposita sezione. Più in basso troviamo la Navbar con le varie sezioni che è
              possibile esplorare, agli estremi ci sono il Logo Club e User. Una shadow sottostante
              divide la Nav dal Matchbox, riquadro che riepiloga il prossimo evento, scandito da un
              Countdown che calcola il tempo restante all'evento. Subito in basso abbiamo due
              sezioni affiancate, Carosello e Ultime Notizie. Una mostra 3 immagini delle principali
              News, l'altra va a mostrare le ultime 5 notizie inserite in ordine cronologico. Le
              notizie ed il carosello sono anch'esse dinamiche e possono essere inserite entrando
              nell'apposita area Inserisci Notizie. Stesso discorso per il carosello, è possibile
              inserire link di reindirizzamento e immagini dalla sezione Modifica Carosello.
            </p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mb-4 section hidden">
          <h3 className=" text-center greenColor">Team Section</h3>
          <h5 className=" text-center greenColor">
            Le Card dei giocatori sono generate automaticamente da un file JSON locale
          </h5>
          <Col className="d-flex justify-content-center" md={12}>
            <Image src="/teamCard.jpg" rounded fluid />
          </Col>
        </Row>

        <Container>
          <h3 className="text-center greenColor">Struttura della Web App</h3>
          <h5 className="text-center text-white">
            Con Firebase e Firestore, ho integrato un BackEnd potente e scalabile che garantisce
            autenticazione sicura e gestione dei dati in tempo reale, trasformando l'esperienza
            utente in un flusso continuo e reattivo.
          </h5>
          <div className="d-flex justify-content-center">
            <Image className=" me-3 rotating mb-2" height={80} src="/firebase.png" rounded />
            <Image className="rotating mb-2" height={80} src="/firestore.png" rounded />
          </div>
        </Container>

        <Row className="align-items-center mb-4 section hidden">
          <Col md={6}>
            <h3 className="greenColor">Inserimento Risultati e popolamento Classifica</h3>
            <p>
              Dal video possiamo notare quanto sia facile l'inserimento di una partita ( campionato
              o coppa che sia) tramite l'apposita sezione "inserisci Risultati". L'admin ha la
              possibilità anche di cancellare una qualsiasi partita nel caso si fosse sbagliato ad
              inserirla. Nel calendario appariranno automaticamente solo i risultati della Roma,
              mentre nella Tab Incontri le partite verranno aggiunte in base alla giornata
              disupatata. Questo metodo fa si che ogni domenica l'admin potrà aggiungere i 10 match
              disputati nel campionato reale, ed avere automaticamente una classifica, un calendario
              e i risultati, popolati in maniera realistica, soltando inserendo le partite.
            </p>
          </Col>
          <Col md={6}>
            <video className="rounded" controls autoPlay loop muted width="100%">
              <source src="/InsRis.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>

        <Row className="align-items-center mb-4 section hidden">
          <Col md={6}>
            <video className="rounded" controls autoPlay loop muted width="100%">
              <source src="/ticketing.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col md={6}>
            <h3 className="greenColor">Si tutto bello ma vorrei comprare i biglietti !</h3>
            <p>
              Che bello visualizzare le notizie della mia squadra del cuore, ma noi vorremmo andare
              allo stadio ! Beh nessun problema! Questa sezione tiene traccia dei prezzi degli
              ultimi biglietti disponibili riguardanti le ultime partite della tua squadra del
              cuore, a... dimenticavo anche i prezzi dell'abbonamento in tutti i relativi settori !
              basta passare il mouse su un settore per scoprire quanto costa. In più un comodo link
              che reindirizza al sito ufficiale della squadra per completare l'acquisto.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-4 section hidden">
          <Col md={6}>
            <Image src="/sectionMenu.jpg" rounded fluid />
          </Col>
          <Col md={6}>
            <h3 className="greenColor">Cards Section </h3>
            <p>
              In questa section abbiamo la possibilità di navigare nei menù più importanti del sito,
              o perlomeno quelli che da un utente medio sono i più cliccati. Le card riportano ai
              vari menù e hanno delle immagini create con IA. Ancora più in basso troviamo gli
              ultimi video relativi al canale ufficiale YouTube della squadra, in modo da rimanere
              sempre ben saldi sul sito senza andare a cercarli su fonti esterne. Nella Navbar
              invece abbiamo tutti i video riguardanti gli highlights delle ultime partite, mentre
              in questa section solo i 2 più recenti. Inoltre, possiamo notare come la Nav sia ben
              fissata nella parte superiore dello schermo, in modo che se un menu delle card non è
              visibile a schermo, si ha comunque la possibilità di cliccare un Navlink in qualsiasi
              momento!
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-4 section hidden">
          <Col md={6}>
            <h3 className="greenColor">Footer</h3>
            <p>
              Il footer è suddiviso in 3 colonne: Link Utili, Contatti e Sponsor. Nella parte
              superiore invece abbiamo la classica iscrizione alla Newsletter, la mail che scriverà
              l'utente verrà riportata sul DB di Firestore, in una sezione appositamente creata per
              immagazzinare tutte le mail, questo è un buon modo per tenere traccia degli utenti che
              possono riceve la Newsletter anche non essendo registrati.
            </p>
          </Col>
          <Col md={6}>
            <Image src="/Footer.jpg" rounded fluid />
          </Col>
        </Row>

        <Row className="align-items-center mb-4 section hidden">
          <h3 className="greenColor text-center">Ovviamente Responsive!</h3>
          <h4 className="text-white text-center mb-5">
            Il sito è stato completamente ideato mobile-first
          </h4>
          <Col className="d-flex justify-content-center" md={4}>
            <Image className="mb-1 borderGreen" src="/screenshot1.jpg" rounded fluid width="70%" />
          </Col>

          <Col className="d-flex justify-content-center" md={4}>
            <video className="rounded mb-1 borderGreen" controls autoPlay loop muted width="70%">
              <source src="/regresp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>

          <Col className="d-flex justify-content-center" md={4}>
            <Image className="mb-1 borderGreen" src="/screenshot2.jpg" rounded fluid width="70%" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Progetto1;
