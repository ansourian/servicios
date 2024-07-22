export const SERVICIOS = [
    {
      name: "MEEP",
      ms: [
        {
          id: "meep-ms-seguridad",
          name: "MS - Seguridad",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "http://ms-seguridad-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "meep-ms-usuarios",
          name: "MS - Usuarios",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "http://ms-usuarios-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "meep-ms-clavevereda",
          name: "MS - ClaveVereda",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "http://ms-claveveredeador-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "meep-ms-sap",
          name: "MS - Sap",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "http://ms-sap-manejo-eficiente-espacio-publico-dev.apps.ocp4-dev.gcba.gob.ar",
          },
          healthCheckEP: "/health-check",
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
      ms: [
        {
          id: "ms-firma",
          name: "MS - Firma",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "https://firma-digital-mephu-back-dev.gcba.gob.ar",
          },
          healthCheckEP: "/check_ok",
        },
      ],
    },
    {
      name: "GRA",
      ms: [{ id: "ms-gra", name: "MS - GRA", healthCheckURL: "" }],
    },
    {
      name: "SIGEP",
      ms: [
        {
          id: "sigep-ms-baep",
          name: "MS - BAEP",
          enviroments: {
            PROD: "https://sigep-baep.buenosaires.gob.ar/baep",
            HML: "https://sigep-baep-hml.gcba.gob.ar/baep",
            QA: "https://sigep-baep-qa.gcba.gob.ar/baep",
            DEV: "https://sigep-baep-dev.gcba.gob.ar/baep",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-aws",
          name: "MS - AWS",
          enviroments: {
            PROD: "https://sigep-aws.buenosaires.gob.ar/",
            HML: "https://sigep-aws-hml.gcba.gob.ar/",
            QA: "https://sigep-aws-qa.gcba.gob.ar/",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-oficios",
          name: "MS - OFICIOS",
          enviroments: {
            PROD: "https://sigep-oficios.buenosaires.gob.ar/incidences",
            HML: "https://sigep-oficios-hml.gcba.gob.ar/incidences",
            QA: "https://sigep-oficios-qa.gcba.gob.ar/incidences",
            DEV: "http://10.9.10.221:8081/incidences",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-emplazamientos",
          name: "MS - EMPLAZAMIENTOS",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-seguridad",
          name: "MS - SEGURIDAD",
          enviroments: {
            PROD: "https://sigep-seguridad.buenosaires.gob.ar/",
            HML: "https://sigep-seguridad-hml.gcba.gob.ar/",
            QA: "https://sigep-seguridad-qa.gcba.gob.ar/",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-sap",
          name: "MS - SAP",
          enviroments: {
            PROD: "https://sigep-sap.buenosaires.gob.ar/Sap",
            HML: "https://sigep-sap-hml.gcba.gob.ar/Sap",
            QA: "https://sigep-sap-qa.gcba.gob.ar/Sap",
            DEV: "https://sigep-sap-dev.gcba.gob.ar/Sap",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-tareas-especificas-bpm",
          name: "MS - TAREAS ESPECÍFICAS BPM",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-recorridos",
          name: "MS - RECORRIDOS",
          enviroments: {
            PROD: "https://sigep-recorridos.buenosaires.gob.ar/recorridos",
            HML: "https://sigep-recorridos-hml.gcba.gob.ar/recorridos",
            QA: "https://sigep-recorridos-qa.gcba.gob.ar/recorridos",
            DEV: "https://sigep-recorridos-dev.gcba.gob.ar/recorridos",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-relevamientos",
          name: "MS - RELEVAMIENTOS",
          enviroments: {
            PROD: "https://sigep-relevamientos.buenosaires.gob.ar/relevamientos",
            HML: "https://sigep-relevamientos-hml.gcba.gob.ar/relevamientos",
            QA: "https://sigep-relevamientos-qa.gcba.gob.ar/relevamientos",
            DEV: "https://sigep-relevamientos-dev.gcba.gob.ar/relevamientos",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-common",
          name: "MS - COMMON",
          enviroments: {
            PROD: "https://sigep-common.buenosaires.gob.ar/",
            HML: "https://sigep-common-hml.gcba.gob.ar/",
            QA: "https://sigep-common-qa.gcba.gob.ar/",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-proxy-web",
          name: "MS - PROXY WEB",
          enviroments: {
            PROD: "https://sigep-proxy-web.buenosaires.gob.ar/",
            HML: "https://sigep-proxy-web-hml.buenosaires.gob.ar",
            QA: "https://sigep-proxy-web-qa.buenosaires.gob.ar",
            DEV: "https://sigep-dev.gcba.gob.ar",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-proxy-mobile",
          name: "MS - PROXY MOBILE",
          enviroments: {
            PROD: "https://sigep-proxy-mobile.buenosaires.gob.ar/SigepMobile",
            HML: "https://sigep-proxy-mobile-hml.buenosaires.gob.ar",
            QA: "https://sigep-proxy-mobile-qa.buenosaires.gob.ar",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-reclamos",
          name: "MS - RECLAMOS",
          enviroments: {
            PROD: "https://sigep-reclamos.buenosaires.gob.ar/reclamos",
            HML: "https://sigep-reclamos-hml.gcba.gob.ar/reclamos",
            QA: "https://sigep-reclamos-qa.gcba.gob.ar/reclamos",
            DEV: "https://sigep-reclamos-dev.gcba.gob.ar/reclamos",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-reclamos-gc",
          name: "MS - RECLAMOS GC",
          enviroments: {
            PROD: "https://sigep-reclamos-gc.buenosaires.gob.ar/amq",
            HML: "https://sigep-reclamos-gc-hml.gcba.gob.ar",
            QA: "https://sigep-reclamos-gc-qa.gcba.gob.ar",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-opt-ordenador",
          name: "MS - OPT ORDENADOR",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "",
          },
          healthCheckEP: "/health",
        },
        {
          id: "sigep-ms-opt-recorridos",
          name: "MS - OPT RECORRIDOS",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-opt-ruteador",
          name: "MS - OPT RUTEADOR",
          enviroments: {
            PROD: "",
            HML: "",
            QA: "",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
        {
          id: "sigep-ms-transacciones",
          name: "MS - TRANSACCIONES",
          enviroments: {
            PROD: "https://sigep-transacciones.buenosaires.gob.ar",
            HML: "https://sigep-transacciones-hml.gcba.gob.ar",
            QA: "https://sigep-transacciones-qa.gcba.gob.ar",
            DEV: "",
          },
          healthCheckEP: "/health-check",
        },
      ],
    },
  ]