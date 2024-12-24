import './config/dotenv';

import Server from './config/server';

async function bootstrap() {
  try {
    const server = new Server();
    server.listen(Number(process.env.PORT) || 3000);
  } catch (err) {
    console.error(err);
  }
}

bootstrap();
