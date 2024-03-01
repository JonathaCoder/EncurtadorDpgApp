import { Response, Request } from "express";
import LinkModelGet from "../models/LinkModelGet";

class LinkControllerGet {
  async ShorturlGet(req: Request, res: Response): Promise<void> {
    try {
      const links = await LinkModelGet.getLink();
      res.status(200).json({ links });
    } catch (error) {
      console.error("Erro ao obter URLs:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export default new LinkControllerGet();
