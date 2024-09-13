import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";

export class ParamIdNumberDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  id: number;
}

export class ParamIdDto {
  @ApiProperty({ example: "0e6e8b04-8e20-44cc-8416-48951b3b4969" })
  @IsDefined()
  id: string;
}

export class ImageDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: "https://aws.com" })
  path: string;
}

export class ParamUUIDDto {
  @ApiProperty({ example: "0e6e8b04-8e20-44cc-8416-48951b3b4969" })
  @IsDefined()
  uuid: string;
}

export class DescriptionDto {
  @ApiProperty({ example: "example ru" })
  @IsDefined()
  ru: string;
  @ApiProperty({ example: "example en" })
  @IsDefined()
  en: string;
  @IsDefined()
  @ApiProperty({ example: "example uz" })
  uz: string;
}

export class NameDto {
  @ApiProperty({ example: "example ru" })
  @IsDefined()
  ru: string;
  @ApiProperty({ example: "example en" })
  @IsDefined()
  en: string;
  @ApiProperty({ example: "example uz" })
  @IsDefined()
  uz: string;
}

export class EmptyDto {}
