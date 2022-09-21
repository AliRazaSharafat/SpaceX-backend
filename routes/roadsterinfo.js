import express from 'express'
import { getRoadsterInfo } from '../controllers/roadsterinfo.js'

const router = express.Router()

router.get('/', getRoadsterInfo)


export default router