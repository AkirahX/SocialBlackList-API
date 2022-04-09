require('dotenv').config()
const customExpress = require('./config/customExpress')

const port = process.env.PORT

const app = customExpress()

app.listen(port, () => console.log('Server started on port ' + port))