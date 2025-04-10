import { get } from 'http'
import { resolve } from 'path'

export const getRequestData = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}
