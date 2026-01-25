import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store/store";
//import { retrieveGuias } from "../utils/script";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { Guia } from "../types/types";
import { useState } from "react";
import { registerGuideAndSave } from "../redux/thunks/guideThunk";
import { form } from "../constants/form_text";

const FormSection = ({
  setListSectionToUpdate,
}: {
  setListSectionToUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit, reset } = useForm<Guia>();
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  ///--------------------------------------------------------
  // Submit the form, will call Redux and update the localstorage
  ///--------------------------------------------------------
  const onSubmit: SubmitHandler<Guia> = (data) => {
    //console.log("doing on submit", data);

    // Dispatch the action to register the guide
    dispatch(
      registerGuideAndSave(
        {
          numeroDeGuia: data.numeroDeGuia,
          destinatario: data.destinatario,
          origen: data.origen,
          destino: data.destino,
          fechaCreacion: data.fechaCreacion,
          estadoInicial: data.estadoInicial,
        },
        "register",
      ),
    );

    // retrieveGuias();
    setListSectionToUpdate(true);
    setTimeout(() => {
      reset();
      setButtonClicked(false);
    }, 1000);
  };

  return (
    <>
      <section
        className="section-form"
        id="registro-de-guias"
        aria-labelledby="registro-de-guias-title"
      >
        <div className="section-form-container">
          <h2
            id="registro-de-guias-title"
            className="section-form__container-title"
          >
            {form.sectionTitle}
          </h2>
        </div>
        <form
          className="section-form__form"
          action="/"
          onSubmit={handleSubmit(onSubmit)}
          aria-label="Registro de Guías form"
        >
          <input
            id="numero-de-guia"
            type="text"
            placeholder={form.placeholders.numeroDeGuia}
            aria-label={form.placeholders.numeroDeGuia}
            {...register("numeroDeGuia", { required: true })}
          />
          <input
            id="origen"
            type="text"
            placeholder={form.placeholders.origen}
            aria-label={form.placeholders.origen}
            {...register("origen", { required: true })}
          />
          <input
            id="destino"
            type="text"
            placeholder={form.placeholders.destino}
            aria-label={form.placeholders.destino}
            {...register("destino", { required: true })}
          />
          <input
            id="destinatario"
            type="text"
            placeholder={form.placeholders.destinatario}
            aria-label={form.placeholders.destinatario}
            {...register("destinatario", { required: true })}
          />
          <input
            id="fechaCreacion"
            type="text"
            placeholder={form.placeholders.fechaCreacion}
            aria-label={form.placeholders.fechaCreacion}
            onFocus={(e) => (e.target.type = "date")}
            {...register("fechaCreacion", { required: true })}
          />
          <select
            className="section-form__select-form"
            id="estado"
            title={form.select.title}
            aria-label={form.select.ariaLabel}
            {...register("estadoInicial", { required: true })}
          >
            <option value="">{form.select.default}</option>
            {form.select.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button
            className={`${
              buttonClicked
                ? `section-form__select-button--clicked`
                : `section-form__select-button`
            }`}
            type="submit"
            onClick={() => setButtonClicked(true)}
            aria-label={form.submit.ariaLabel}
          >
            {`${buttonClicked ? form.submit.sentEmoji : form.submit.send}`}
          </button>
        </form>
      </section>
    </>
  );
};

export default FormSection;
