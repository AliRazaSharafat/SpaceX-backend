const express = require('express')

const app = express()

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server is running on ${process.env.NODE_ENV} mode on port ${port}`))