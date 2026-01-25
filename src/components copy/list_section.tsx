import { useEffect, useState } from "react";
import "../styles/_section-list.scss";
import type { Guia } from "../types/types";
import { fetchGuias } from "../utils/script";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store/store";
import type { RootState } from "../redux/store/store";
import { markGuideAsReceivedAndSave } from "../redux/thunks/guideThunk";
import { list as listText } from "../constants/list_text";
const ListSection = ({ updateListSection }: { updateListSection: boolean }) => {
  const [guias, setGuias] = useState<Guia[]>([]);
  const guidesFromStore = useSelector(
    (state: RootState) => state.guides.guides,
  );
  const [deliveredStatus, setDeliveredStatus] = useState<
    Record<string, boolean>
  >({});
  const dispatch = useDispatch<AppDispatch>();
  //console.log("guidesfromstore", guidesFromStore);

  useEffect(() => {
    // Fetch guides and update local state when the store changes
    fetchGuias({ guidesFromStore, setGuias, dispatch });
    // Read the guias from store after populating it
    //console.log("guidesfromstore after fetch", guidesFromStore);
  }, [updateListSection, guidesFromStore, dispatch]);

  const handleDeliveryClick = (numeroDeGuia: string) => {
    //console.log("handlerClicked", numeroDeGuia);

    //console.log("state before dispatch at handleDelivery", guidesFromStore);

    dispatch(markGuideAsReceivedAndSave(numeroDeGuia));
    //console.log("store after dispatch", guidesFromStore);

    // Update the local `guias` state to trigger a re-render
    setGuias((prevGuias) =>
      prevGuias.map((guia) =>
        guia.numeroDeGuia === numeroDeGuia
          ? { ...guia, estadoInicial: "Entregado" }
          : guia,
      ),
    );

    setDeliveredStatus((prevStatus) => ({
      ...prevStatus,
      [numeroDeGuia]: true,
    }));
  };

  return (
    <>
      <section
        className="section-list"
        id="lista-de-guias"
        aria-labelledby="lista-de-guias-title"
      >
        <div className="section-list__container">
          <div className="section-list__form-container">
            <h2
              id="lista-de-guias-title"
              className="section-list__form-container-title"
            >
              {listText.title}
            </h2>
          </div>
          <table
            className="section-list__table"
            role="table"
            aria-label={listText.tableAria}
          >
            <caption className="visually-hidden">Lista de Guías</caption>
            <thead>
              <tr className="section-list__table-header">
                {listText.headers.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {guias.map((guia: Guia) => (
                <tr key={guia.numeroDeGuia}>
                  <td>{guia.numeroDeGuia}</td>
                  <td>{guia.origen}</td>
                  <td>{guia.destino}</td>
                  <td>{guia.destinatario}</td>
                  <td>
                    <button
                      className={`${
                        deliveredStatus[guia.numeroDeGuia]
                          ? "section-list__table-td-button__delivered"
                          : "section-list__table-td-button"
                      }`}
                      type="button"
                      onClick={() => handleDeliveryClick(guia.numeroDeGuia)}
                      aria-label={`Mark guide ${guia.numeroDeGuia} as delivered`}
                    >
                      {guia.estadoInicial}
                    </button>
                  </td>
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
