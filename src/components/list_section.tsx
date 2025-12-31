import { useEffect, useState } from "react";
import "../styles/_section-list.scss";
import type { Guia } from "../types/types";
import { retrieveGuias, saveGuias } from "../utils/script";
const ListSection = ({ updateListSection }: { updateListSection: boolean }) => {
  //
  const [guias, setGuias] = useState<Guia[]>([]);
  useEffect(() => {
    const fetchGuias = async () => {
      let initialGuias = retrieveGuias();
      if (!initialGuias || initialGuias.length === 0) {
        saveGuias();
        initialGuias = retrieveGuias();
      }
      setGuias(initialGuias);
    };
    fetchGuias();
  }, [updateListSection]);
  //
  return (
    <>
      <section className="section-list" id="lista-de-guias">
        <div className="section-list__container">
          <div className="section-list__form-container">
            <h2 className="section-list__form-container-title">
              Lista de Guías
            </h2>
          </div>
          <table className="section-list__table">
            <thead>
              <tr className="section-list__table-header">
                <th>Numero de Guía</th>
                <th>Origen</th>
                <th>Destino</th>
                <th>Destinatario</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {guias.map((guia: Guia) => (
                <tr key={guia.numeroDeGuia}>
                  <td>{guia.numeroDeGuia}</td>
                  <td>{guia.origen}</td>
                  <td>{guia.destino}</td>
                  <td>{guia.destinatario}</td>
                  <td>{guia.estadoInicial}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default ListSection;
