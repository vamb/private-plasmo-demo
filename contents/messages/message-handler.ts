import type { PlasmoMessaging } from "@plasmohq/messaging";

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log('message-handler 接收消息并返回消息 req', req)
  const message = {
    reqData: req.body,
    respData: `this is response data`
  }

  res.send({ message })
}

export default handler