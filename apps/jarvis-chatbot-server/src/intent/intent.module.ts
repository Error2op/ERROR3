import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IntentModuleBase } from "./base/intent.module.base";
import { IntentService } from "./intent.service";
import { IntentController } from "./intent.controller";
import { IntentResolver } from "./intent.resolver";

@Module({
  imports: [IntentModuleBase, forwardRef(() => AuthModule)],
  controllers: [IntentController],
  providers: [IntentService, IntentResolver],
  exports: [IntentService],
})
export class IntentModule {}
