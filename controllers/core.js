import { Core } from '../schema/cores.js'

const getCores = async (req, res, next) => {
    try {
        const response = await Core.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getCores }