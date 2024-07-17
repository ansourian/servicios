import Estado from "./Estado"
export default function Microservicio({ name, status }) {
  return (
    <>
      <div className="div-microservicio column align-items">
        <h4>{name}</h4>
        <Estado status={status} />
      </div>
    </>
  )
}
