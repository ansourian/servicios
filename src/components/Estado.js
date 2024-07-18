import { STATUS } from "@/lib/constants"

export default function Estado({ status }) {
  return (
    <div className="div-online row justify-content align-items">
      <div
        className={`circle 
          ${status === STATUS.NO_URL ? "no-url" : " "}
          ${status === STATUS.SEARCHING ? "searching animated flash" : " "}
          ${status === STATUS.CHECKING ? "loading animated flash" : " "}
          ${status === STATUS.ONLINE ? "online" : " "}
          ${status === STATUS.OFFLINE ? "offline notanimated blink" : " "}`}
      ></div>
      <h4 className="h4-online">{status}</h4>
    </div>
  )
}
