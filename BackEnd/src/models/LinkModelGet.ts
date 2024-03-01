import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class LinkModelGet {
  async getLink(): Promise<any> {
    try {
      const links = await prisma.linkUrl.findMany();
      return links;
    } catch (error) {
      console.error("Error getting links:", error);
      throw new Error("Failed to get links");
    }
  }
}

export default new LinkModelGet();
