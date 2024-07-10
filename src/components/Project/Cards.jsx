import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";

const projects = [
  {
    title: "App Sportiva per Squadre di Club",
    description:
      "Questa App permette di consultare le ultime notizie, classifiche, partite di campionato e coppa. L'admin, inoltre, può inserire i risultati e i marcatori degli incontri delle partite disputate tramite un'interfaccia dedicata, cosi facendo andrà a popolare la classifica e il calendario.Inoltre gli admin hanno anche altri privilegi entra  nel progetto e scoprili!",
    link: "https://aesseromanisti.netlify.app",
    linkbutton: "/progetto1",
    image: "/cardproject.jpg",
  },
  {
    title: "App Meteo -RightWeather-",
    description:
      "Questa App ti permette di inserire una località e visionare le principali info Metereologiche. Reperisce tutte le informazioni più aggiornate sulle varie città grazie all'API di OpenweatherMap. Una soluzione semplice efficace e leggera che da la possibilità all'utente di controllare una città italiana e non solo scrivendo semplicemente il nome !",
    link: "https://rightweather.netlify.app",
    linkbutton: "/progetto1",
    image: "/meteo.jpg",
  },
];

const ProjectCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Link to="/">
        <div className="d-flex">
          <i className="bi bi-arrow-return-left greenColor backArrow"></i>
          <h6 className="greenColor ms-1 mt-2">Home</h6>
        </div>
      </Link>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title} />

                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="centericon"
                  >
                    <i className="bi bi-eye m-0 instagramColor"></i>

                    <h2>Guarda il sito</h2>
                  </a>
                  <hr className="instagramColor" />
                  <p className="card-text">{project.description}</p>
                  <Link to={project.linkbutton} className="btn btn-primary">
                    Dettagli Progetto
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
