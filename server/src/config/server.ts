import Fastify, {FastifyInstance, FastifyServerOptions} from 'fastify';

export default class Server {
  private server: FastifyInstance;

  public static server?: FastifyInstance;

  constructor() {
    this.server = Fastify({
      logger: this.constructLogger(),
    });

    this.initializeServer();
    Server.server = this.get();
  }

  private constructLogger(): FastifyLogger {
    if (process.env.NODE_ENV === 'development') {
      return {
        transport: {
          target: 'pino-pretty',
          options: {
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname',
          },
        },
      };
    }
    return false; // TODO: Set Custom Logger
  }

  private initializeServer(): void {}

  listen(port: number = 3000, cb = () => {}) {
    return this.server
      .listen({
        port,
      })
      .then(cb);
  }

  get() {
    return this.server;
  }
}

type FastifyLogger = FastifyServerOptions['logger'];
