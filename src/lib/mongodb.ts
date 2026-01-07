import mongoose from 'mongoose'

let isConnected: boolean = false

const dbConnect = async () => {
    mongoose.set('strictQuery',true)
    if(!process.env.MONGODB_URI){
        return console.log('MONGODB_URL not found')}

    if(isConnected){
       return ;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'drbrass',
        })
        isConnected = true 
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}
export default dbConnect