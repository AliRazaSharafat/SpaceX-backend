import { Launch } from '../schema/launches.js'

const getLaunches = async (req, res, next) => {
    try {
        const response = await Launch.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getLaunches }