import { Controller, Get, Query, Redirect, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';
import { SettingService } from './service/setting.service'
import { AppService } from './app.service';
import { SettingEntity } from './entity/setting.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
    ) {}

  @Get('index')
  getHello() : string {
    return "hello world" 
  }
}


