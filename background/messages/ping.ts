import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log('bg ping接收消息并返回消息')
  const message = {
    reqData: req.body.id,
    respData: `this is response data`
  }

  res.send({
    message
  })
}

export default handler