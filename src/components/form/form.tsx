import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store/store";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import type { Guia } from "../../types/types";
import { useState } from "react";
import { registerGuide } from "../../redux/thunks/register_guideThunk";
import { form } from "../../constants/form_text";

const Form = () => {
  const { register, handleSubmit, reset } = useForm<Guia>();
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  ///--------------------------------------------------------
  // Submit the form, will call Redux and update the localstorage
  ///--------------------------------------------------------
  const onSubmit: SubmitHandler<Guia> = (data) => {
    // Dispatch the action to register the guide
    dispatch(
      registerGuide({
        trackingNumber: data.trackingNumber,
        origin: data.origin,
        destination: data.destination,
        recipient: data.recipient,
        creationDate: data.creationDate,
        initialStatus: data.initialStatus,
      }),
    );

    setTimeout(() => {
      reset();
      setButtonClicked(false);
    }, 1000);
  };

  return (
    <>
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
          {...register("trackingNumber", { required: true })}
        />
        <input
          id="origen"
          type="text"
          placeholder={form.placeholders.origen}
          aria-label={form.placeholders.origen}
          {...register("origin", { required: true })}
        />
        <input
          id="destino"
          type="text"
          placeholder={form.placeholders.destino}
          aria-label={form.placeholders.destino}
          {...register("destination", { required: true })}
        />
        <input
          id="destinatario"
          type="text"
          placeholder={form.placeholders.destinatario}
          aria-label={form.placeholders.destinatario}
          {...register("recipient", { required: true })}
        />
        <input
          id="fechaCreacion"
          type="text"
          placeholder={form.placeholders.fechaCreacion}
          aria-label={form.placeholders.fechaCreacion}
          onFocus={(e) => (e.target.type = "date")}
          {...register("creationDate", { required: true })}
        />
        <select
          className="section-form__select-form"
          id="estado"
          title={form.select.title}
          aria-label={form.select.ariaLabel}
          {...register("initialStatus", { required: true })}
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
    </>
  );
};

export default Form;
