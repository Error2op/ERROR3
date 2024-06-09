import { Intent as TIntent } from "../api/intent/Intent";

export const INTENT_TITLE_FIELD = "id";

export const IntentTitle = (record: TIntent): string => {
  return record.id?.toString() || String(record.id);
};
