import { createHash } from "crypto";

export const DRIVE_TOKEN = createHash("sha256")
  .update("divyansh:Blenderunitycrycrycry129:portfolio-drive-secret")
  .digest("hex");

export const DRIVE_CREDENTIALS = {
  username: "divyansh",
  password: "Blenderunitycrycrycry129",
};
