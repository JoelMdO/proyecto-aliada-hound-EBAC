import { retrieveGuias, updateGuiasTable } from "../utils/script";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { Guia } from "../types/types";
import { useState } from "react";

const FormSection = ({
  setListSectionToUpdate,
}: {
  setListSectionToUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //
  const { register, handleSubmit, reset } = useForm<Guia>();
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const onSubmit: SubmitHandler<Guia> = (data) => {
    console.log("doing on submit", data);
    updateGuiasTable(data);
    retrieveGuias();
    setListSectionToUpdate(true);
    setTimeout(() => {
      reset();
      setButtonClicked(false);
    }, 1000);
  };
  //
  //
  return (
    <>
      <section className="section-form" id="registro-de-guias">
        <div className="section-form-container">
          <h2 className="section-form__container-title">Registro de Guías</h2>
        </div>
        <form
          className="section-form__form"
          action="/"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            id="numero-de-guia"
            type="text"
            placeholder="Numero de Guía"
            {...register("numeroDeGuia", { required: true })}
          />
          <input
            id="origen"
            type="text"
            placeholder="Origen"
            {...register("origen", { required: true })}
          />
          <input
            id="destino"
            type="text"
            placeholder="Destino"
            {...register("destino", { required: true })}
          />
          <input
            id="destinatario"
            type="text"
            placeholder="Destinatario"
            {...register("destinatario", { required: true })}
          />
          <input
            id="fechaCreacion"
            type="text"
            placeholder="Fecha de Creacion"
            onFocus={(e) => (e.target.type = "date")}
            {...register("fechaCreacion", { required: true })}
          />
          <select
            className="section-form__select-form"
            id="estado"
            title="Estado Inicial"
            {...register("estadoInicial", { required: true })}
          >
            <option value="">Estado</option>
            <option value="En tránsito">En tránsito</option>
            <option value="Entregado">Entregado</option>
            <option value="Pendiente">Pendiente</option>
          </select>
          <button
            className={`${
              buttonClicked
                ? `section-form__select-button--clicked`
                : `section-form__select-button`
            }`}
            type="submit"
            onClick={() => setButtonClicked(true)}
          >
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default FormSection;
