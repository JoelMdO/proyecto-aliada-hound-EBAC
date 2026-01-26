import "../../styles/_section-list.scss";
import ListHeader from "./list_header";
import ListTable from "./list_table";
const ListSection = () => {
  //
  return (
    <>
      <section
        className="section-list"
        id="lista-de-guias"
        aria-labelledby="lista-de-guias-title"
      >
        <ListHeader />
        <ListTable />
      </section>
    </>
  );
};
export default ListSection;
