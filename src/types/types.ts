export interface Guia {
  numeroDeGuia: string;
  origen: string;
  destino: string;
  destinatario: string;
  fechaCreacion: Date;
  estadoInicial: string;
}

export type JestReducer = { type: string };

export interface JestGuiaState {
  guides: Guia[];
}
