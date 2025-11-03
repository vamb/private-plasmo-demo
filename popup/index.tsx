import { useState } from "react"
import { sendToBackground, sendToContentScript } from "@plasmohq/messaging";

function IndexPopup() {
  const [ data, setData ] = useState("")

  const handleSendMsg = async () => {
    const resp = await sendToBackground({
      name: "ping",
      body: {
        id: data
      }
    })
    console.log('handleSendMsg resp', resp)
  }

  const handleSendMsgToContentScript = async () => {
    const resp = await sendToBackground({
      name: "pingToContentScript",
      body: {
        info: 123123
      }
    })
    console.log(`handleSendMsgToContentScript resp`, resp)
  }

  // const handleContentScript = async () => {
  //   const resp = await sendToContentScript({
  //     name:
  //   })
  // }

  return (
    <div
      style={{
        width: '200px',
        padding: 16, display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-start', gap: '.25rem'
      }}>
      <button style={{cursor: "pointer"}} onClick={handleSendMsg}>bg ping msg</button>
      <input onChange={(e) => setData(e.target.value)} value={data}/>
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
      <button style={{cursor: "pointer"}} onClick={handleSendMsgToContentScript}>content-script ping msg</button>
    </div>
  )
}

export default IndexPopup
