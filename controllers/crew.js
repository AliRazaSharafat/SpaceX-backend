import { Crew } from '../schema/crew.js'

const getCrew = async (req, res, next) => {
    try {
        const response = await Crew.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getCrew }