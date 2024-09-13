import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { AdminRegisterBodyDto, AdminRegisterResDto } from './dto/admin.dto';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { Auth } from '../../auth/decorators/auth.decorator';
import { User } from '../../auth/decorators/user.decorator';

@ApiBearerAuth()
@ApiTags('Admin')
@Controller({ path: '/admin', version: '2' })
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiResponse({ status: 201, type: AdminRegisterResDto })
  @HttpCode(201)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Auth()
  @Post('/register')
  register(@User() user, @Body() payload: AdminRegisterBodyDto) {
    console.log(user, 'payload');
    if (user.admin.create === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.adminService.register(payload);
  }

  // @ApiResponse({ status: 200, type: LevelWinningsResDto })
  // @HttpCode(200)
  // @ApiBadRequestResponse({
  //   status: 403,
  //   type: ErrorResourceDto,
  // })
  // @Auth()
  // @Post("/winnings")
  // winnings(
  //   @User() user,
  //   @Headers() headers,
  //   @Guest() guest: string,
  //   @Body() payload: PaginateParamsDto
  // ) {
  //   if (guest === "guest") {
  //     throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  //   }
  //   payload["user_id"] = user;
  //   return this.adminService.winnings(payload, headers);
  // }
  //
  // @ApiResponse({ status: 200, type: LevelPrizeListResDto })
  // @HttpCode(200)
  // @ApiBadRequestResponse({
  //   status: 403,
  //   type: ErrorResourceDto,
  // })
  // @Auth()
  // @Post("/prize/findAll")
  // getAllPrize(
  //   @User() user,
  //   @Headers() headers,
  //   @Guest() guest: string,
  //   @Body() payload: LevelPrizeParamsDto
  // ) {
  //   if (guest === "guest") {
  //     throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  //   }
  //
  //   payload["user_id"] = user;
  //   return this.adminService.getAllPrize(payload, headers);
  // }
  //
  // @ApiOkResponse({ status: 200, type: LevelGetPrizeResDto })
  // @ApiBadRequestResponse({ type: ErrorResourceDto })
  // @Post("/get-prize")
  // @ApiHeader({
  //   name: "Mobile-Type",
  //   description: "Language application",
  //   example: "lite",
  // })
  // @Auth()
  // async getPrize(
  //   @Body() payload: LevelGetPrizeParamsDto,
  //   @Headers() headers,
  //   @User() user,
  //   @Guest() guest: string
  // ) {
  //   if (guest === "guest") {
  //     throw new HttpException("Forbidden", HttpStatus.FORBIDDEN);
  //   }
  //
  //   payload["user_id"] = user;
  //   let type =
  //     headers["mobile-type"] === "original" ? "app" : headers["mobile-type"];
  //   return this.adminService.getPrize(type, payload, headers);
  // }
}
