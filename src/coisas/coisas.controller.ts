import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoisasService } from './coisas.service';
import { Prisma } from '@prisma/client';

@Controller('coisas')
export class CoisasController {
  constructor(private readonly coisasService: CoisasService) {}

  @Post()
  create(@Body() createCoisaDto: Prisma.CoisaCreateInput) {
    return this.coisasService.create(createCoisaDto);
  }

  @Get()
  findAll() {
    return this.coisasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coisasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoisaDto: Prisma.CoisaUpdateInput) {
    return this.coisasService.update(+id, updateCoisaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coisasService.remove(+id);
  }
}
