import "../../styles/_section-list.scss";
import ListHeader from "./list_header";
import ListTable from "./list_table";
const ListSection = ({ updateListSection }: { updateListSection: boolean }) => {
  //
  return (
    <>
      <section
        className="section-list"
        id="lista-de-guias"
        aria-labelledby="lista-de-guias-title"
      >
        <div className="section-list__container">
          <ListHeader />
          <ListTable updateListSection={updateListSection} />
        </div>
      </section>
    </>
  );
};
export default ListSection;
