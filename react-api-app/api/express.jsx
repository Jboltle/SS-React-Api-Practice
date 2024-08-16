const express = require('express')
import { apiData, apiID, apiImageURL, apiTitle } from './api'



const app = express()
const port = 3000



app.get('/', (request,response)=> {


    response.send(apiData())
})



app.listen(3000, () => {

    console.log("App listening on port" + port)

})




