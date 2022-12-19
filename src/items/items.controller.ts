import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from "@nestjs/common";
import { CreateItemDto } from "./dto/create-item.dto";
import { ItemsService } from "./items.service";
import { Item } from "./interfaces/item.interface";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemService.findAll();
  }
  @Get(":id")
  async findOne(@Param("id") id): Promise<Item> {
    return await this.itemService.findOne(id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}`;
  }

  @Delete(":id")
  delete(@Param("id") id): string {
    return `Delete Id ${id}`;
  }
  @Put(":id")
  update(@Body() updateItemDto: CreateItemDto, @Param("id") id): string {
    return `Update Id ${updateItemDto.name} ID: ${id}`;
  }
}
