import { CompanyInfo } from '../schema/companyinfo.js'

const getCompanyInfo = async (req, res, next) => {
    try {
        console.log('req came')
        const response = await CompanyInfo.find()
        res.json(response)

    } catch (error) {
        console.log('error', error)
        next()
    }
}


export { getCompanyInfo }