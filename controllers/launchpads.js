import { Launchpad } from '../schema/launchpads.js'

const getLaunchpads = async (req, res, next) => {
    try {
        const response = await Launchpad.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getLaunchpads }