const countGuidesStatus = (guias: Array<{ initialStatus: string }>) => {
  return guias.reduce(
    (acc, guia) => {
      if (guia.initialStatus === "Entregado") {
        acc.completed += 1;
      } else if (guia.initialStatus === "En tránsito") {
        acc.inProgress += 1;
      } else if (guia.initialStatus === "Pendiente") {
        acc.pending += 1;
      }
      return acc;
    },
    { completed: 0, inProgress: 0, pending: 0 },
  );
};

export default countGuidesStatus;
