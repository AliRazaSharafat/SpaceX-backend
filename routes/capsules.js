import express from 'express'
import { getCapsules } from '../controllers/capsules.js'

const router = express.Router()

router.get('/', getCapsules)


export default router