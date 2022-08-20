import { useEffect, useState } from "react"
import { getPrefectures } from "./api/api"

type Prefecture = {
  prefCode: number
  prefName: string
}

export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
    
  useEffect(() => {
    getPrefectures().then((data) => setPrefectures(data))
  }, [])

  return prefectures
}