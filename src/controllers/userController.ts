import { Request, ResponseToolkit } from '@hapi/hapi';
import User from '../models/User';

export const getAllUsers = async (request: Request, h: ResponseToolkit) => {
    try {
        const users = await User.find();
        return users;
    } catch (err: any) {
        return h.response(err).code(500);
    }
};

export const createUser = async (request: Request, h: ResponseToolkit) => {
    const { name, email } = request.payload as any;
    try {
        const newUser = new User({ name, email });
        await newUser.save();
        return h.response(newUser).code(201);
    } catch (err: any) {
        return h.response(err).code(500);
    }
};
