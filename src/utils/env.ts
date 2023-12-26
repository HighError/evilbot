import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  DISCORD_TOKEN: str(),
});

export default env;
