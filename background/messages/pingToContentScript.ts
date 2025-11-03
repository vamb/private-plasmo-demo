import type { PlasmoMessaging } from "@plasmohq/messaging";
import { sendToContentScript } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log('bg pingToContentScript 接收消息并返回消息 req', req)
  const message = {
    reqData: req.body.info,
    respData: `this is response data`
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  console.log('tab', tab)
  if (tab?.id) {
    const response = await sendToContentScript({
      tabId: tab.id,
      name: "message-handler",
      body: {
        action: "ping",
        timestamp: Date.now()
      }
    })
    console.log('tab response', response)
  }

  res.send({ message })
}

export default handler