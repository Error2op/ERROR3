import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntentServiceBase } from "./base/intent.service.base";

@Injectable()
export class IntentService extends IntentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
