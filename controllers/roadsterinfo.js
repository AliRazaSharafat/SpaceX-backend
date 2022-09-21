import { RoadsterInfo } from '../schema/roadsterinfo.js'

const getRoadsterInfo = async (req, res, next) => {
    try {
        const response = await RoadsterInfo.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getRoadsterInfo }