const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.get('/', (req, res) => {
    console.log('fuck 1')
    res.status(200).send('Meuu Becjkk')
})

app.listen(3000, () => {
    console.log('Backendsssssss exec.........')
})