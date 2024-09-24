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
import {
  AdminFindAllResDto,
  AdminFindOneResDto,
  AdminLoginBodyDto,
  AdminLoginResDto,
  AdminRegisterBodyDto,
  AdminRegisterResDto,
} from './dto/admin.dto';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { User } from '../../auth/decorators/user.decorator';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';

@ApiBearerAuth()
@ApiTags('Admin')
@Controller({ path: '/dashboard/admin', version: '2' })
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiResponse({ status: 201, type: AdminRegisterResDto })
  @HttpCode(201)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/register')
  register(@User() user, @Body() payload: AdminRegisterBodyDto) {
    if (user.admin.create === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.adminService.register(payload);
  }

  @ApiResponse({ status: 200, type: AdminLoginResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/login')
  login(@Body() payload: AdminLoginBodyDto) {
    return this.adminService.login(payload);
  }

  @ApiResponse({ status: 200, type: AdminFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findOne')
  findOne(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.admin.getOne === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.adminService.findOne(payload);
  }

  @ApiResponse({ status: 200, type: AdminFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findAll')
  findAll(@User() user, @Body() payload: PaginateParamsDto) {
    if (user.admin.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.adminService.findAll(payload);
  }

  @ApiResponse({ status: 204, description: 'no content response' })
  @HttpCode(204)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/remove')
  delete(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.admin.delete === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.adminService.delete(payload);
  }
}
