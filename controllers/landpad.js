import { Landpad } from '../schema/landpads.js'

const getLandpads = async (req, res, next) => {
    try {
        const response = await Landpad.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getLandpads }