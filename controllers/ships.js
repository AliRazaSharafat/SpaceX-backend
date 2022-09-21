import { Ship } from '../schema/ships.js'

const getShips = async (req, res, next) => {
    try {
        const response = await Ship.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getShips }