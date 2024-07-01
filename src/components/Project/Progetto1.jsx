import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Progetto1 = () => {
  return (
    <>
      <Link to="/Cards">
        <div className="d-flex ">
          <i className="bi bi-arrow-return-left greenColor backArrow"></i>
          <h6 className="greenColor ms-1 mt-2">Progetti</h6>
        </div>
      </Link>
      <Container>
        <h1 className="text-center greenColor">Web & Mobile App per club Calcistici</h1>
        <h5 className="text-center text-white">
          L'app è sviluppata tenendo fede ai colori della AS Roma, in quanto dovevo scegliere un
          club come esempio, ovviamente cambiando loghi e colorazione l'app può diventare
          brandizzata per qualsiasi Club, essendo il codice orientato proprio nel senso della
          versatilità, tutto è modificale dall'admin tramite interfaccia, ma scopriamolo insieme!
        </h5>
        <div className="d-flex justify-content-center">
          <i className="bi bi-arrow-down greenColor scroll-arrow"></i>
        </div>
      </Container>

      <Container className="mt-4">
        <Row className="align-items-center mb-4">
          <Col md={6}>
            <Image src="/InterfaceRecap.jpg" rounded fluid />
          </Col>
          <Col md={6}>
            <h3 className="greenColor">Home Page</h3>
            <p>
              Qui Possiamo vedere com'è struttrata l'home page, Il Marquee visualizza una recente
              notizia scorrendo verso sinistra in un loop infinito ed è modificabile dall'admin
              nell'apposita sezione. Più in basso troviamo la Navbar con le varie sezioni che è
              possibile esplorare, agli estremi ci sono il Logo Club e User. Una shadow sottostante
              divide la Nav dal Matchbox, riquadro che riepiloga il prossimo evento, scandito da un
              Countdown che calcola il tempo restate all'evento. Subito in basso Abbiamo due section
              Affiancate, Carosello e Ultime Notizie. Una mostra 3 immagini delle principali News
              l'altra va a mostrare le ultime 5 notizie inserite in ordine cronologico. Le notizie
              ed il carosello sono anch'esse dinamiche, possono infatti essere inserite enrando
              nell'apposita area Inserisci Notizie. Stesso discorso per il carosello, è possibile
              inserire link di reindirazzemento e immagini dalla sezione Modifica Carosello.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center mb-4">
          <Col md={6}>
            <h3 className="greenColor">Menù Login</h3>
            <p>
              Qui possiamo osservare come un utente non loggato abbia a disposizione solo la sezione
              Login. mentre un utente Loggato in questo caso un Admin, abbia a disposizione l'intera
              sezione del menù, in modo da personalizzare a proprio piacimento i vari elementi
              all'interno del sito, il normale User invece può consultare solo il suoi dati di
              profilo ed eventualmente effettuare un recupero Password. Il tutto gestito con
              Firebase Authentication.
            </p>
          </Col>
          <Col md={6}>
            <Image src="/loginInterface.jpg" rounded fluid />
          </Col>
        </Row>

        <Row className="align-items-center mb-4">
          <Col md={6}>
            <Image src="/sectionMenu.jpg" rounded fluid />
          </Col>
          <Col md={6}>
            <h3 className="greenColor">Section Cards</h3>
            <p>
              In questa section abbiamo la possibilità di navigare nei menù più importanti del sito,
              o perlomeno quelli che da un utente medio sono i più cliccati. Le card riportano ai
              vari menù e hanno delle immagini create con IA. Ancora più in basso troviamo gli
              ultimi video relativi al canale ufficiale Yuotube della squadra, in modo da rimenere
              sempre ben saldi sul sito senza andare a cercarli su fonti esterne, Nella Navbar
              invece abbiamo tutti i video riguardanti gli highlighs delle ultime partite, mentre in
              questa section solo i 2 più recenti. Inoltre possiamo notare come la Nav sia ben
              fissata nella parte superiore dello schermo, in modo che se un menu delle card non è
              visibile a schermo, si ha comunque la possibilità di cliccare un Navlink in qualsiasi
              momento!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Progetto1;
