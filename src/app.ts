import app from './config/config'
import routes from './routes/index'
import './config/database'

app.use(routes)

app.listen(app.get('port'), () => {
    console.log("Listening port: ", app.get('port'));
})