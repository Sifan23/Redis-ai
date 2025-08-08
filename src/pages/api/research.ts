import { config } from "dotenv";
config();
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });
  try {
    await redis.set("test", "working");
    const value = await redis.get("test");
    res.status(200).json({ result: value });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
