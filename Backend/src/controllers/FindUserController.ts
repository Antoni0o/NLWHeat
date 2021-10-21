import { Request, Response } from "express";
import { FindUserService } from "../services/FindUserService";

class FindUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const service = new FindUserService();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { FindUserController }