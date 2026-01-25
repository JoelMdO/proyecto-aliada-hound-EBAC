import FormHeader from "./form_header";
import Form from "./form";

const FormSection = ({
  setListSectionToUpdate,
}: {
  setListSectionToUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <section
        className="section-form"
        id="registro-de-guias"
        aria-labelledby="registro-de-guias-title"
      >
        <FormHeader />
        <Form setListSectionToUpdate={setListSectionToUpdate} />
      </section>
    </>
  );
};

export default FormSection;
