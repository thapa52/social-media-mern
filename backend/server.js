const app = require('./app');
const { connectDatabase } = require('./config/database');


connectDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`server connected at port ${process.env.PORT}`);
})