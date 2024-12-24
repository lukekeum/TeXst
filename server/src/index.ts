import './config/dotenv';

import Server from './config/server';

async function bootstrap() {
  try {
    const server = new Server();
    server.listen();
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
