import { useEffect, useState } from "react"
import getPrefData from "./components/prefAPI"

type Prefecture = {
  prefCode: number
  prefName: string
}

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
    
  useEffect(() => {
    getPrefData.GetPref().then((data) => setPrefectures(data))
  }, [])

  return prefectures
}