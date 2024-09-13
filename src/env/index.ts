import * as dotenv from 'dotenv';
import * as process from 'node:process';

dotenv.config();

const RATE_TTL = +process.env.RATE_TTL || 60;
const RATE_LIMIT = +process.env.RATE_LIMIT || 100;
const MOVIES_URL = process.env.MOVIES_URL || '';
const APP_PORT = process.env.APP_PORT || '';
const MOVIES_JWT_SECRET = process.env.JWT_SECRET || '';
const MOVIES_UPLOAD_URL = process.env.MOVIES_UPLOAD_URL || '';

export {
  RATE_TTL,
  RATE_LIMIT,
  MOVIES_URL,
  MOVIES_UPLOAD_URL,
  MOVIES_JWT_SECRET,
  APP_PORT,
};
