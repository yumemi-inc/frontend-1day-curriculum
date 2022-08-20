export interface PopulationResponse {
  message: string | null
  result: {
    boundaryYear: number
    data: Population[]
  }
}

interface Population {
  label: string
  data: {
    year: number
    value: number
    rate?: number
  }[]
}

export interface PrefectureResponse {
  message: string | null
  result: Prefecture[]
}

export interface Prefecture {
  prefCode: number
  prefName: string
}
