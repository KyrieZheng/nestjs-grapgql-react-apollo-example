import { Controller, Get, Req } from "@nestjs/common";
import { request, Request } from "express";
import { inputSetting } from "../input/settings.input";
import { SettingEntity } from "../entity/setting.entity";
import { SettingService } from "../service/setting.service";

@Controller('setting')
export class SettingController {
    constructor (private readonly settingService: SettingService) {}
}