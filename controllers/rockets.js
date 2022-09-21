import { Rocket } from '../schema/rockets.js'

const getRockets = async (req, res, next) => {
    try {
        const response = await Rocket.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getRockets }