import Microservicio from "./Microservicio"
import RefreshIcon from "@mui/icons-material/Refresh"

export default function Servicio({ servicio, actualStatus, updateStatus }) {
  const updateServiceStatus = () => {
    servicio.ms.forEach((ms) => {
      updateStatus(ms.id)
    })
  }
  return (
    <article>
      <div className="div-servicio row">
        <h3>{servicio.name}</h3>
        <RefreshIcon className="refresh-icon" onClick={updateServiceStatus} />
      </div>
      <hr />
      <div className="div-microservicios">
        {servicio.ms.map((microservicio, i) => (
          <div key={i} className="row">
            <Microservicio
              name={microservicio.name}
              status={actualStatus[microservicio.id]}
            />
            {servicio.ms.length !== i + 1 ? (
              <hr className="vertical-hr" />
            ) : null}
          </div>
        ))}
      </div>
    </article>
  )
}
