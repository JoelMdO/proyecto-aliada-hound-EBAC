import FormHeader from "./form_header";
import Form from "./form";

const FormSection = () => {
  return (
    <>
      <section
        className="section-form"
        id="registro-de-guias"
        aria-labelledby="registro-de-guias-title"
      >
        <FormHeader />
        <Form />
      </section>
    </>
  );
};

export default FormSection;
