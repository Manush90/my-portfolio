import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";

const projects = [
  {
    title: "App Sportiva per Squadre di Club",
    description:
      "Questa App permette di consultare le ultime notizie, classifiche, partite di campionato e coppa. L'admin, inoltre, può inserire i risultati e i marcatori degli incontri delle partite disputate tramite un'interfaccia dedicata, cosi facendo andrà a popolare la classifica e il calendario.Inoltre gli admin hanno anche altri privilegi entra  nel progetto e scoprili!",
    link: "/progetto1",
    image: "/cardproject.jpg",
  },
];

const ProjectCards = () => {
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
                    href="https://aesseromanisti.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="centericon"
                  >
                    <i className="bi bi-eye m-0 instagramColor"></i>

                    <h2>Guarda il sito</h2>
                  </a>
                  <hr className="instagramColor" />
                  <p className="card-text">{project.description}</p>
                  <a
                    href="/progetto1"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dettagli Progetto
                  </a>
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
