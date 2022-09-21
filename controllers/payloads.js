import { Payload } from '../schema/payloads.js'

const getPayloads = async (req, res, next) => {
    try {
        const response = await Payload.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getPayloads }