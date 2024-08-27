import Hapi from '@hapi/hapi';
import connectDB from './config/database';
import { createUser, getAllUsers } from './controllers/userController';

const init = async () => {
    connectDB();

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: getAllUsers
    });
    server.route({
        method: 'POST',
        path: '/users',
        handler: createUser
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
