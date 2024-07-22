"use client"
import Servicio from "@/components/Servicio"
import { STATUS } from "@/lib/constants"
import { SERVICIOS } from "@/lib/data"
import { useEffect, useState } from "react"
import RefreshIcon from "@mui/icons-material/Refresh"

export default function Home() {
  const [enviroment, setEnviroment] = useState("PROD")
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
  )

  useEffect(() => {
    updateAll()
  }, [enviroment])

  function updateAll() {
    Object.keys(servicesStatus).forEach((msId) => updateStatus(msId))
  }

  function getMS(msId) {
    for (const service of SERVICIOS) {
      const ms = service.ms.find((ms) => ms.id === msId)
      if (ms) return ms
    }
    return null
  }

  function updateState(update) {
    setServicesStatus((prev) => ({ ...prev, ...update }))
  }

  const updateStatus = async (msId) => {
    updateState({ [msId]: STATUS.CHECKING })
    const ms = getMS(msId)
    console.log(msId, ms)
    if (ms) {
      if (!ms.healthCheckEP) {
        updateState({ [msId]: STATUS.NO_EP })
      } else if (!ms.enviroments[enviroment]) {
        updateState({ [msId]: STATUS.NO_ENV })
      } else {
        try {
          const response = await fetch(
            `${ms.enviroments[enviroment]}${ms.healthCheckEP}`
          )
          console.log(`${ms.name} (${enviroment}) =>`, response)
          if (response.ok) {
            updateState({ [msId]: STATUS.ONLINE })
          } else {
            updateState({ [msId]: `${STATUS.OFFLINE} (${response.status})` })
          }
        } catch (e) {
          console.error(e)
          updateState({ [msId]: `${STATUS.OFFLINE} (${e.status})` })
        }
      }
    }
  }

  return (
    <main>
      <header>
        <div className="column">
          <div className="row">
            <h1>SIM</h1>
            <h1 className="h1-branch">({enviroment})</h1>
          </div>
          <h2>Sistema Interno de Monitoreo</h2>
        </div>
        <div className="div-buttons-header row">
          <button className="button-refresh" onClick={() => updateAll()}>
            <p className="p-button-refresh">Actualizar</p>
            <RefreshIcon className="refresh-icon2" />
          </button>
          <div className="dropdown">
            <select
              className="dropdown-button"
              onChange={(e) => setEnviroment(e.target.value)}
            >
              <option className="dropdown-content" value={"PROD"}>
                PROD
              </option>
              <option className="dropdown-content" value={"HML"}>
                HML
              </option>
              <option className="dropdown-content" value={"QA"}>
                QA
              </option>
              <option className="dropdown-content" value={"DEV"}>
                DEV
              </option>
            </select>
          </div>
        </div>
      </header>
      <section>
        {SERVICIOS.map((servicio, i) => (
          <Servicio
            key={i}
            servicio={servicio}
            actualStatus={servicesStatus}
            updateStatus={updateStatus}
          />
        ))}
      </section>
    </main>
  )
}
