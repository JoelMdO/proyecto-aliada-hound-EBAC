import { useEffect } from "react";
import "../../styles/_section-list.scss";
//import type { Guia } from "../../types/types";
//import { fetchGuias } from "../../utils/script";
import { useDispatch, useSelector } from "react-redux";
//import type { AppDispatch } from "../../redux/store/store";
import type { AppDispatch, RootState } from "../../redux/store/store";
//import { markGuideAsReceivedAndSave } from "../../redux/thunks/register_guideThunk";
import { list as listText } from "../../constants/list_text";
import { fetchGuides } from "../../redux/thunks/fetch_guideThunk";
import type { Guia } from "../../types/types";
// const ListTable = ({ updateListSection }: { updateListSection: boolean }) => {
const ListTable = () => {
  ///const [guias, setGuias] = useState<Guia[]>([]);
  const guias = useSelector((state: RootState) => state.guides.guides);
  console.log("guias", guias);

  // const [deliveredStatus, setDeliveredStatus] = useState<
  //   Record<string, boolean>
  // >({});
  const dispatch = useDispatch<AppDispatch>();
  //console.log("guidesfromstore", guidesFromStore);

  useEffect(() => {
    // Fetch guides from DB
    dispatch(fetchGuides());
  }, [dispatch]);

  //const handleDeliveryClick = (numeroDeGuia: string) => {
  //console.log("handlerClicked", numeroDeGuia);

  //console.log("state before dispatch at handleDelivery", guidesFromStore);

  //dispatch(markGuideAsReceivedAndSave(numeroDeGuia));
  //console.log("store after dispatch", guidesFromStore);

  // Update the local `guias` state to trigger a re-render
  // setGuias((prevGuias) =>
  //   prevGuias.map((guia) =>
  //     guia.numeroDeGuia === numeroDeGuia
  //       ? { ...guia, estadoInicial: "Entregado" }
  //       : guia,
  //   ),
  //);

  // setDeliveredStatus((prevStatus) => ({
  //   ...prevStatus,
  //   [numeroDeGuia]: true,
  // }));
  //};

  return (
    <>
      <table
        className="section-list__table"
        role="table"
        aria-label={listText.tableAria}
      >
        <caption className="visually-hidden">{listText.title}</caption>
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
          {guias.length === 0 && (
            <tr>
              <td colSpan={5} className="section-list__table-td--no-data">
                {listText.noData}
              </td>
            </tr>
          )}
          {guias.map((guia: Guia) => (
            <tr key={guia.trackingNumber}>
              <td>{guia.trackingNumber}</td>
              <td>{guia.origin}</td>
              <td>{guia.destination}</td>
              <td>{guia.recipient}</td>
              <td>
                <button
                  className={`${
                    // deliveredStatus[guia.trackingNumber]
                    //   ? "section-list__table-td-button__delivered"
                    //:
                    "section-list__table-td-button"
                  }`}
                  type="button"
                  // onClick={() => handleDeliveryClick(guia.trackingNumber)}
                  aria-label={`Mark guide ${guia.trackingNumber} as delivered`}
                >
                  {guia.initialStatus}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ListTable;
