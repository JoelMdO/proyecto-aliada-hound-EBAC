import { form } from "../../constants/form_text";

const FormHeader = () => {
  return (
    <>
      <div className="section-form-container">
        <h2
          id="registro-de-guias-title"
          className="section-form__container-title"
        >
          {form.sectionTitle}
        </h2>
      </div>
    </>
  );
};

export default FormHeader;
