import { ApiProperty } from '@nestjs/swagger';

export class ImagesDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'https://aws.com' })
  path: string;
  @ApiProperty({ example: 'image_2023-02-26_10-11-29.png' })
  name: string;
  @ApiProperty({ example: '60396' })
  size: string;
  @ApiProperty({ example: 'png' })
  extension: string;
}

export class ImageCreateDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  position: number;
}
