import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./AboutMee.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <Container className="about-me-container">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Link to="/">
            <div className="d-flex">
              <i className="bi bi-arrow-return-left greenColor backArrow"></i>
              <h6 className="greenColor ms-1 mt-2">Home</h6>
            </div>
          </Link>
          <i class="bi bi-person greenColor"></i>
          <h2>Manuel Dell'Oste</h2>
          <h2>5/6/90 Roma</h2>

          <Image src="/profilee.jpg" roundedCircle className="profile-picture" />
          <p className="about-me-text">
            Mi presento sono Manuel, un grande appassionato di tecnologia. Sin da piccolino ho
            sempre avuto un'attrazione speciale per tutto quello che riguarda il Tech. Gia alle
            medie assemblavo il mio primo PC mettendo da parte i risparmi dei lavori estivi.
          </p>
          <hr />
          <i class="bi bi-book greenColor"></i>
          <h2>STUDI</h2>

          <p className="about-me-text">
            Finito il liceo decido di intraprendere un corso di Grafica 3D presso AIV della durata
            biennale che prevedeva utilizzo di SW come PS MAYA e Zbrush. Grazie anche queste
            conoscenze riesco a gestire la parte grafica del mio E-Commerce che apro nel 2021. A
            Gennaio 2024 Intraprendo un corso Full/stack developer di DIGICHAMPS tramite IFOA in
            collaborazione con EPICODE che prevede una durata semestrale con più di 1000 ore di
            studio.
          </p>
          <hr />
          <i class="bi bi-bootstrap greenColor"></i>

          <h2>CONOSCENZE APPRESE</h2>
          <p className="about-me-text">
            Il Corso è entrato ora nella seconda parte, ma per quanto riguarda il FrontEnd ho
            acquisito le nozioni dei seguenti Linguaggi:
          </p>
          <hr />
          <p className="about-me-text"></p>
          <i class="bi bi-duffle greenColor"></i>
          <h2>LAVORO</h2>
          <p className="about-me-text">
            La passione è rimasta immutata negli anni, ma per più motivi non sono mai riuscito a
            farne il mio lavoro, sono però riuscito ad affiancare ad esso sempre degli studi. Per
            quanto riguarda Le mie esperienze lavorative invece ho accumulato diverse esperienze
            dalla quale ho appreso molto a livello personale ed anche a livello tecnico. L'aeroporto
            di Fiumicino è stata la mia casa per quasi 9 anni, Ho lavorato in diverse aziende come
            Unieuro e Diesel entrambe situate in moli Internazionali dove ho avuto la fortuna di
            incontrare persone proveniente da ogni parte del mondo, ho avuto l'opportunità di
            lavorare in gruppi di lavoro molto grandi, gestire turni lavorativi di altre persone ed
            organizzare le routine Lavorative.
          </p>
          <hr />
          <i class="bi bi-controller greenColor"></i>
          <h2> HOBBY</h2>
          <p>
            Ho anche degli hobby ! Sono un PC Gamer, adoro i giochi manageriali, ed anche ogni gioco
            prodotto da Hideo Kojima, mi piace molto lo sport e adoro il calcio, che ho praticato a
            livello dilettantistico finchè ho potuto. Questo è solo un pò di quello che è Manuel
            spero che queste poche righe vi abbiano dato una bella idea di Me !
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
