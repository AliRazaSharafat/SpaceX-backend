import express from 'express'
import { getLaunches } from '../controllers/launches.js'

const router = express.Router()

router.get('/', getLaunches)


export default router