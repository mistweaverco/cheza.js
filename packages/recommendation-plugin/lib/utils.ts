import type { ChezaRecommendationDataItem } from '../types'

export const fetchData = async (url: string): Promise<ChezaRecommendationDataItem[]> => {
  return await new Promise((resolve, reject) => {
    fetch(url, { mode: 'cors' }).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        reject(new Error('Could not fetch data'))
        return null
      }
    }).then((data) => {
      resolve(data)
    }).catch((err) => {
      reject(err)
    })
  })
}
