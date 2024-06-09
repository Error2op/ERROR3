import { IntentWhereInput } from "./IntentWhereInput";
import { IntentOrderByInput } from "./IntentOrderByInput";

export type IntentFindManyArgs = {
  where?: IntentWhereInput;
  orderBy?: Array<IntentOrderByInput>;
  skip?: number;
  take?: number;
};
