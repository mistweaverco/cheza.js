import type { google } from './../types'

export const loadIMAScript = async (debug?: boolean): Promise<typeof google> => {
  let url = 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
  if (debug === true) {
    url = 'https://imasdk.googleapis.com/js/sdkloader/ima3_debug.js'
  }
  return await new Promise<typeof google>((resolve, reject) => {
    if (document.getElementById('ima3-sdk') !== null) {
      resolve((window as any).google as typeof google)
      return
    }
    const script = document.createElement('script')
    script.id = 'ima3-sdk'
    script.async = true
    script.addEventListener('load', function (): void {
      resolve((window as any).google as typeof google)
    })
    script.addEventListener('error', function (): void {
      this.remove()
      reject(new Error(`${url} could not be loaded`))
    })
    script.src = url
    document.head.appendChild(script)
  })
}
