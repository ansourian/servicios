import { STATUS } from "@/lib/constants"

export default function Estado({ status }) {
  const isOffline = status?.includes("OFFLINE");

  return (
    <div className="div-online row justify-content align-items">
      <div
        className={`circle 
          ${status === STATUS.NO_ENV ? "no-env" : " "}
          ${status === STATUS.NO_EP ? "no-ep" : " "}
          ${status === STATUS.SEARCHING ? "searching animated flash" : " "}
          ${status === STATUS.CHECKING ? "loading animated flash" : " "}
          ${status === STATUS.ONLINE ? "online" : " "}
          ${isOffline ? "offline animated flash" : ""}`
        }
          
      ></div>
      <h4 className="h4-online">{status}</h4>
    </div>
  )
}
