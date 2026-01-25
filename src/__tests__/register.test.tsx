import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormSection from "../components/form/form_header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import ListSection from "../components/list/list_table";
import { useState } from "react";

describe("FormSection register", () => {
  test("adds a guide with numeroDeGuia 4567 and correct fields", async () => {
    // Ensure localStorage starts empty array so updateGuiasTable can push
    localStorage.setItem("guiasLocalStorage", JSON.stringify([]));

    const setListSectionToUpdate = jest.fn();

    render(
      <Provider store={store}>
        <FormSection setListSectionToUpdate={setListSectionToUpdate} />
      </Provider>,
    );

    // Fill the form
    fireEvent.change(screen.getByPlaceholderText("Numero de Guía"), {
      target: { value: "4567" },
    });
    fireEvent.change(screen.getByPlaceholderText("Origen"), {
      target: { value: "Mexico" },
    });
    fireEvent.change(screen.getByPlaceholderText("Destino"), {
      target: { value: "Hawaii" },
    });
    fireEvent.change(screen.getByPlaceholderText("Destinatario"), {
      target: { value: "Jose Lopez" },
    });
    fireEvent.change(screen.getByPlaceholderText("Fecha de Creacion"), {
      target: { value: "7-Jan-2026" },
    });
    fireEvent.change(screen.getByTitle("Estado Inicial"), {
      target: { value: "Pendiente" },
    });

    // Submit the form
    fireEvent.click(screen.getByText("Enviar"));

    // Wait for the store to be updated by the thunk
    await waitFor(() => {
      const guides = store.getState().guides.guides;
      expect(guides).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            numeroDeGuia: "4567",
            origen: "Mexico",
            destino: "Hawaii",
            destinatario: "Jose Lopez",
            fechaCreacion: "7-Jan-2026",
          }),
        ]),
      );
    });
  });

  test("ListSection displays the new guide after register", async () => {
    // Start with empty localStorage
    localStorage.setItem("guiasLocalStorage", JSON.stringify([]));

    const TestApp = () => {
      const [updateListSection, setListSectionToUpdate] =
        useState<boolean>(false);
      return (
        <>
          <FormSection setListSectionToUpdate={setListSectionToUpdate} />
          <ListSection updateListSection={updateListSection} />
        </>
      );
    };

    render(
      <Provider store={store}>
        <TestApp />
      </Provider>,
    );

    // Fill and submit the form
    fireEvent.change(screen.getByPlaceholderText("Numero de Guía"), {
      target: { value: "4567" },
    });
    fireEvent.change(screen.getByPlaceholderText("Origen"), {
      target: { value: "Mexico" },
    });
    fireEvent.change(screen.getByPlaceholderText("Destino"), {
      target: { value: "Hawaii" },
    });
    fireEvent.change(screen.getByPlaceholderText("Destinatario"), {
      target: { value: "Jose Lopez" },
    });
    fireEvent.change(screen.getByPlaceholderText("Fecha de Creacion"), {
      target: { value: "7-Jan-2026" },
    });
    fireEvent.change(screen.getByTitle("Estado Inicial"), {
      target: { value: "Pendiente" },
    });

    fireEvent.click(screen.getByText("Enviar"));

    // Expect the ListSection table to show the new guide (by destinatario or numero)
    const destinatarioCell = await screen.findByText("Jose Lopez");
    expect(destinatarioCell).toBeInTheDocument();

    const numeroCell = screen.getByText("4567");
    expect(numeroCell).toBeInTheDocument();
  });
});
