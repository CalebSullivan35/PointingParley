import { nanoid } from "nanoid";

const ANONYMOUS_ID_KEY = "blocktrail_anonymous_id";

export function getAnonymousId() {
 const existingId = localStorage.getItem(ANONYMOUS_ID_KEY);

 if (existingId) {
  return existingId;
 }

 const anonymousId = generateAnonymousId();
 localStorage.setItem(ANONYMOUS_ID_KEY, anonymousId);
 return anonymousId;
}

function generateAnonymousId() {
 return `anonymous_${nanoid()}`;
}
