import FormHeader from "./form_header";
import Form from "./form";

// const FormSection = ({
//   setListSectionToUpdate,
// }: {
//   setListSectionToUpdate: React.Dispatch<React.SetStateAction<boolean>>;
// }) => {
const FormSection = () => {
  return (
    <>
      <section
        className="section-form"
        id="registro-de-guias"
        aria-labelledby="registro-de-guias-title"
      >
        <FormHeader />
        {/* <Form setListSectionToUpdate={setListSectionToUpdate} /> */}
        <Form />
      </section>
    </>
  );
};

export default FormSection;
