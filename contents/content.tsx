import React, { useEffect } from "react";
import type { PlasmoCSConfig } from "plasmo";
import { sendToBackground } from "@plasmohq/messaging";

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],  // 匹配的网址模式
  // run_at: "document_end"                 // 执行时机
}

function contentPage() {

  useEffect(() => {
    init()
  }, []);

  const init = async () => {
    const resp = await sendToBackground({
      name: "ping",
      body: {
        id: 123
      },
      // extensionId: 'lgkgijeelnnhfgkejmpkgapgdacelmfg' // 在 Chrome 的扩展管理器中找到此 ID
    })
    console.log('init resp', resp)
  }


  return (
    <div>contentPage contentPage contentPage contentPage contentPage contentPage</div>
  )
}

export default contentPage