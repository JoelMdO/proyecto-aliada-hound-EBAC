import {
  guideSlice,
  registerGuide,
  updateGuideStatus,
} from "../slices/guide_slice";
import type { JestGuiaState, JestReducer } from "../types/types";

const reducer = guideSlice.reducer;

describe("guideSlice reducers", () => {
  test("should return the initial state", () => {
    const initial = reducer(undefined, { type: "unknown" } as JestReducer);
    expect(initial).toEqual({ guides: [] });
  });

  test("registerGuide adds a guide to the state", () => {
    const payload = {
      numeroDeGuia: "1000",
      destinatario: "Ana",
      origen: "Spain",
      destino: "Portugal",
      fechaCreacion: new Date("2026-01-07"),
      estadoInicial: "Pendiente",
    };

    const next = reducer(undefined, registerGuide(payload));
    expect(next.guides).toHaveLength(1);
    expect(next.guides[0]).toMatchObject(payload);
  });

  test("updateGuideStatus updates estadoInicial when guide exists", () => {
    const startState = {
      guides: [
        {
          numeroDeGuia: "2000",
          destinatario: "Luis",
          origen: "Mexico",
          destino: "United States",
          fechaCreacion: new Date("2026-01-07"),
          estadoInicial: "Pendiente",
        },
      ],
    } as JestGuiaState;

    const action = updateGuideStatus({
      numeroDeGuia: "2000",
      estadoInicial: "Entregado",
    });
    const next = reducer(startState, action);

    expect(next.guides).toHaveLength(1);
    expect(next.guides[0].estadoInicial).toBe("Entregado");
  });

  test("updateGuideStatus does nothing when guide not found", () => {
    const startState = { guides: [] } as JestGuiaState;
    const action = updateGuideStatus({
      numeroDeGuia: "nope",
      estadoInicial: "Entregado",
    });
    const next = reducer(startState, action);
    expect(next).toEqual(startState);
  });
});
