export interface Population {
  message: string | null
  result: {
    boundaryYear: number
    data: PopulationData[]
  }
}

interface PopulationData {
  label: string
  data: {
    year: number
    value: number
    rate?: number
  }[]
}
