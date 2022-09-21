import { Dragon } from '../schema/dragons.js'

const getDragon = async (req, res, next) => {
    try {
        const response = await Dragon.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getDragon }