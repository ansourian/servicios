"use client";
import Servicio from "@/components/Servicio";
import { STATUS } from "@/lib/constants";
import { useState } from "react";

const SERVICIOS = [
  {
    name: "MEEP",
    ms: [
      {
        id: "meep-ms-seguridad",
        name: "MS - Seguridad",
        healthCheckURL:
          "http://ms-seguridad-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar/health-check",
      },
      {
        id: "meep-ms-usuarios",
        name: "MS - Usuarios",
        healthCheckURL:
          "http://ms-usuarios-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar/health-check",
      },
      {
        id: "meep-ms-clavevereda",
        name: "MS - ClaveVereda",
        healthCheckURL:
          "http://ms-claveveredeador-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar/health-check",
      },
      {
        id: "meep-ms-sap",
        name: "MS - Sap",
        healthCheckURL:
          "http://ms-sap-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar/health-check",
      },
    ],
  },
  {
    name: "SAP",
    ms: [
      { id: "sap-ms-consulta", name: "MS - Consulta", healthCheckURL: "" },
      {
        id: "sap-ms-actualizacion",
        name: "MS - Actualizacion",
        healthCheckURL: "",
      },
    ],
  },
  {
    name: "Firma",
    ms: [{ id: "ms-firma", name: "MS - Firma", healthCheckURL: "" }],
  },
  {
    name: "GRA",
    ms: [{ id: "ms-firma", name: "MS - GRA", healthCheckURL: "" }],
  },
  {
    name: "SIGEP",
    ms: [
      { id: "sigep-ms-seguridad", name: "MS - Seguridad", healthCheckURL: "" },
      { id: "sigep-ms-usuarios", name: "MS - Usuarios", healthCheckURL: "" },
      {
        id: "sigep-ms-integracionsap",
        name: "MS - IntegracionSap",
        healthCheckURL: "",
      },
      { id: "sigep-ms-permisos", name: "MS - Permisos", healthCheckURL: "" },
      { id: "sigep-ms-obras", name: "MS - Obras", healthCheckURL: "" },
      { id: "sigep-ms-aperturas", name: "MS - Aperturas", healthCheckURL: "" },
      {
        id: "sigep-ms-relevamientos",
        name: "MS - Relevamientos",
        healthCheckURL: "",
      },
      { id: "sigep-ms-oficios", name: "MS - Oficios", healthCheckURL: "" },
      {
        id: "sigep-ms-planificacion",
        name: "MS - Planificacion",
        healthCheckURL: "",
      },
      {
        id: "sigep-ms-fiscalizacion",
        name: "MS - Fiscalizacion",
        healthCheckURL: "",
      },
      { id: "sigep-ms-arbolado", name: "MS - Arbolado", healthCheckURL: "" },
      { id: "sigep-ms-pluviales", name: "MS - Pluviales", healthCheckURL: "" },
      { id: "sigep-ms-aceras", name: "MS - Aceras", healthCheckURL: "" },
      {
        id: "sigep-ms-quecomemos",
        name: "MS - QueComemos",
        healthCheckURL: "",
      },
    ],
  },
];

export default function Home() {
  const [servicesStatus, setServicesStatus] = useState(() =>
    Object.assign(
      {},
      ...SERVICIOS.map((service) =>
        Object.assign(
          {},
          ...service.ms.map((ms) => ({
            [ms.id]: ms.healthCheckURL ? STATUS.SEARCHING : STATUS.NO_URL,
          }))
        )
      )
    )
  );

  function getHealthCheckURL(msId) {
    for (const service of SERVICIOS) {
      const ms = service.ms.find((ms) => ms.id === msId);
      if (ms) {
        return ms.healthCheckURL;
      }
    }
    return null; // Return null if no matching id is found
  }

  function updateState(update) {
    setServicesStatus((prev) => ({ ...prev, ...update }));
  }

  const updateStatus = async (msId) => {
    updateState({ [msId]: STATUS.CHECKING });
    const url = getHealthCheckURL(msId);
    if (url) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          updateState({ [msId]: STATUS.ONLINE });
        } else {
          updateState({ [msId]: STATUS.OFFLINE });
        }
      } catch (e) {
        console.error(e);
        updateState({ [msId]: STATUS.OFFLINE });
      }
    } else {
      updateState({ [msId]: STATUS.NO_URL });
    }
  };

  return (
    <main>
      <header>
        <h1>SIM</h1>
        <h2>Sistema Interno de Monitoreo</h2>
      </header>
      <section>
        {SERVICIOS.map((servicio) => (
          <Servicio
            servicio={servicio}
            actualStatus={servicesStatus}
            updateStatus={updateStatus}
          />
        ))}
      </section>
    </main>
  );
}
