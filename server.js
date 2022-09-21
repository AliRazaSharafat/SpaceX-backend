import express from 'express'
import { connectDB } from './db/db.js'
import cors from 'cors'
import CompanyRouter from './routes/companyinfo.js'
import CapsuleRouter from './routes/capsules.js'
import CoreRouter from './routes/core.js'
import CrewRouter from './routes/crew.js'
import LandpadRouter from './routes/landpads.js'
import LaunchRouter from './routes/launches.js'
import LaunchpadsRouter from './routes/launchpads.js'
import PayloadRouter from './routes/payloads.js'
import RoadsterRouter from './routes/roadsterinfo.js'
import RocketRouter from './routes/rockets.js'
import ShipRouter from './routes/ship.js'
import StarlinkRouter from './routes/starlink.js'
import { HttpError } from './utils/httpError.js'

connectDB()
cors()


const app = express()

app.use('/api/companyinfo', CompanyRouter)
app.use('/api/capsules', CapsuleRouter)
app.use('/api/cores', CoreRouter)
app.use('/api/crews', CrewRouter)
app.use('/api/landpads', LandpadRouter)
app.use('/api/launches', LaunchRouter)
app.use('/api/launchpads', LaunchpadsRouter)
app.use('/api/payloads', PayloadRouter)
app.use('/api/roadsterinfo', RoadsterRouter)
app.use('/api/rockets', RocketRouter)
app.use('/api/ships', ShipRouter)
app.use('/api/starlinks', StarlinkRouter)

// 404 route
app.use(() => {
    const error = new HttpError('could not find this route', 404)
    throw error
})

// error catch
app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500).json({ message: error.message || 'an unknown error occurred' })
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server is running on ${process.env.NODE_ENV} mode on port ${port}`))