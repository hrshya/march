import * as React from "react"

import Sidebar from "@/src/components/Sidebar"

interface Props {
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex h-screen gap-1 bg-white p-1 dark:bg-black">
      <Sidebar />
      <section className="flex-1">{children}</section>
    </main>
  )
}

export default AppLayout