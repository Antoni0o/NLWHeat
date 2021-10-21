import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { FindUserController } from './controllers/FindUserController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ensureAuthentication } from './middlewares/ensureAuthentication';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthentication, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthentication, new FindUserController().handle);


export { router }