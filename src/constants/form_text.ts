const form = {
  sectionTitle: "Registro de Guías",
  placeholders: {
    numeroDeGuia: "Numero de Guía",
    origen: "Origen",
    destino: "Destino",
    destinatario: "Destinatario",
    fechaCreacion: "Fecha de Creacion",
  },
  select: {
    default: "Estado",
    options: ["En tránsito", "Entregado", "Pendiente"],
    ariaLabel: "Estado Inicial",
    title: "Estado Inicial",
  },
  submit: {
    send: "Enviar",
    sentEmoji: "✅",
    ariaLabel: "Enviar registro de guía",
  },
  formAriaLabel: "Registro de Guías form",
};

export { form };
