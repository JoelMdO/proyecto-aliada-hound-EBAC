import "../../styles/_section-list.scss";
import ListHeader from "./list_header";
import ListTable from "./list_table";
// const ListSection = ({ updateListSection }: { updateListSection: boolean }) => {
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
        {/* <ListTable updateListSection={updateListSection} /> */}
        <ListTable />
      </section>
    </>
  );
};
export default ListSection;
