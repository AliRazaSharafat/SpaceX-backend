import { Capsule } from '../schema/capsules.js'

const getCapsules = async (req, res, next) => {
    try {
        const response = await Capsule.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getCapsules }