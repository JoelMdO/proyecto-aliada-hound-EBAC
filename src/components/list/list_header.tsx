import "../../styles/_section-list.scss";
import { list as listText } from "../../constants/list_text";
const ListHeader = () => {
  return (
    <>
      <h2
        id="lista-de-guias-title"
        className="section-list__form-container-title"
      >
        {listText.title}
      </h2>
    </>
  );
};

export default ListHeader;
