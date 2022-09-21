import express from 'express'
import { getCompanyInfo } from '../controllers/companyinfo.js'

const router = express.Router()

router.get('/', getCompanyInfo)


export default router