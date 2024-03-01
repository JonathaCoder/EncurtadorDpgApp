
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LinkModel {
  async createLink(originalUrl: string, link: string): Promise<void> {
    try {
      await prisma.linkUrl.create({
        data: {
          originalUrl,
          link,
        },
      });
    } catch (error) {
      console.error("Erro ao criar o link", error);
      throw new Error("Failed to create link");
    }
  }
}

export default new LinkModel();
