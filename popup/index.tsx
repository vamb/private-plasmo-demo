import { useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"


function IndexPopup() {
  const [ data, setData ] = useState("")

  const handleSendMsg = async () => {
    const resp = await sendToBackground({
      name: "ping",
      body: {
        id: 123
      }
    })
    console.log('resp', resp)
  }

  return (
    <div
      style={{
        padding: 16
      }}>
      <div style={{cursor: "pointer"}} onClick={handleSendMsg}>send Msg Btn</div>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
