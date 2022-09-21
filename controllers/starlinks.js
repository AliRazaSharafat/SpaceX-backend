import { Starlink } from '../schema/starlinks.js'

const getStarlinks = async (req, res, next) => {
    try {
        const response = await Starlink.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getStarlinks }