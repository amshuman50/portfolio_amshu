import { Redis } from "@upstash/redis";

const redisUrl = process.env.UPSTASH_REDIS_URL;
const redisToken = process.env.UPSTASH_REDIS_TOKEN;

if (!redisUrl || !redisToken) {
  throw new Error(
    'Missing required Redis configuration: set UPSTASH_REDIS_URL and UPSTASH_REDIS_TOKEN'
  );
}

export const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});