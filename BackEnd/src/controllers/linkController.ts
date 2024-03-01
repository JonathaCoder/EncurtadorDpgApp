
import { Request, Response } from "express";
import linkModel from "../models/linkModel";

class LinkController {
  constructor() {
    this.Shorturl = this.Shorturl.bind(this);
    this.gerarSetId = this.gerarSetId.bind(this);
  }

  private gerarSetId(): string {
    const possivelChar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";
    let setId = "";
    for (let i = 0; i < 5; i++) {
      setId += possivelChar.charAt(
        Math.floor(Math.random() * possivelChar.length)
      );
    }
    return setId;
  }

  async Shorturl(req: Request, res: Response): Promise<void> {
    try {
      const { link, originalUrl } = req.body;

      const setId = this.gerarSetId();

      const formatLink = link.replace(/^(https?:\/\/)?([^\/]+).*$/, "$2/") + setId;

      await linkModel.createLink(originalUrl, formatLink);

      res.status(200).json({ message: "URL encurtada criada com sucesso" });
    } catch (error) {
      console.error("Erro ao criar URL encurtada:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }
}

export default new LinkController();
