import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vyapar:UXjmfTPMxsNp9mrM@cluster0.ieflwem.mongodb.net/saliahFoods?retryWrites=true&w=majority');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    }
};

export default connectDB;
