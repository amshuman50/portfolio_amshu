import { Redis } from "@upstash/redis";

const redisUrl = process.env.UPSTASH_REDIS_URL;
const redisToken = process.env.UPSTASH_REDIS_TOKEN;

let redisInstance = null;

if (redisUrl && redisToken) {
  redisInstance = new Redis({
    url: redisUrl,
    token: redisToken,
  });
}

export function getRedis() {
  if (!redisInstance) {
    throw new Error(
      'Missing required Redis configuration: set UPSTASH_REDIS_URL and UPSTASH_REDIS_TOKEN'
    );
  }
  return redisInstance;
}

export const redis = redisInstance;