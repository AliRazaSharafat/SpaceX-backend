import express from 'express'
import { getLaunchpads } from '../controllers/launchpads.js'

const router = express.Router()

router.get('/', getLaunchpads)


export default router