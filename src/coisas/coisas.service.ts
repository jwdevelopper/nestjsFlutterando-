import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma_service/prisma.service';

@Injectable()
export class CoisasService {

  constructor(private readonly prisma: PrismaService) {}

  create(createCoisaDto: Prisma.CoisaCreateInput) {
    return this.prisma.coisa.create({
      data: createCoisaDto
    });
  }

  findAll() {
    return this.prisma.coisa.findMany({
      include: {
        categoria: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.coisa.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateCoisaDto: Prisma.CoisaUpdateInput) {
    return this.prisma.coisa.update({
      data: updateCoisaDto,
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.coisa.delete({
      where: {
        id: id
      }
    });
  }
}
