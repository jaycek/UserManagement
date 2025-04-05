const express = require('express')
const cors = require('cors')
const userRouter = require('./routers/userRouter')
const mongoose = require('mongoose')


const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

main()
.then(()=>console.log("DB connected"))
.catch(err => console.log(err));

async function main() {
await mongoose.connect('mongodb+srv://geniusgemsacademy:dvrbvZvrSOOdv423@cluster0.i1hji.mongodb.net/MK-PROJECTDB?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
}
app.use('/users',userRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})