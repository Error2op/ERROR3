/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntentWhereInput } from "./IntentWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class IntentCountArgs {
  @ApiProperty({
    required: false,
    type: () => IntentWhereInput,
  })
  @Field(() => IntentWhereInput, { nullable: true })
  @Type(() => IntentWhereInput)
  where?: IntentWhereInput;
}

export { IntentCountArgs as IntentCountArgs };
