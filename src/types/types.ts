export interface Guia {
  trackingNumber: string;
  origin: string;
  destination: string;
  recipient: string;
  creationDate: Date;
  initialStatus: string;
  status?: string;
}

export type JestReducer = { type: string };

export interface JestGuiaState {
  guides: Guia[];
}
