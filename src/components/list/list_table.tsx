import { useEffect } from "react";
import "../../styles/_section-list.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store/store";
import { list as listText } from "../../constants/list_text";
import { fetchGuides } from "../../redux/thunks/fetch_guideThunk";
import type { Guia } from "../../types/types";
import { updateGuide } from "../../redux/thunks/update_guideThunk";
const ListTable = () => {
  const guias = useSelector((state: RootState) => state.guides.guides);
  console.log("guias", guias);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Fetch guides from DB
    dispatch(fetchGuides());
  }, [dispatch]);

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
                    guia.initialStatus === "Entregado"
                      ? "section-list__table-td-button__delivered"
                      : "section-list__table-td-button"
                  }`}
                  type="button"
                  onClick={() => {
                    dispatch(updateGuide(guia.trackingNumber));
                  }}
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
