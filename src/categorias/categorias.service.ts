import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma_service/prisma.service';

@Injectable()
export class CategoriasService {

  constructor(private readonly prisma: PrismaService) {}

  create(createCategoriaDto: Prisma.CategoriaCreateInput) {
    return this.prisma.categoria.create({
      data: createCategoriaDto
    });
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number) {
    return this.prisma.categoria.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateCategoriaDto: Prisma.CategoriaUpdateInput) {
    return this.prisma.categoria.update({
      data: updateCategoriaDto,
      where: {
        id: id
      }
    });
  }

  remove(id: number) {
    return this.prisma.categoria.delete({
      where: {
        id: id
      }
    });
  }
}
