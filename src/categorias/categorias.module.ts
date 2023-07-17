import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [CommonModule,AuthModule],
  controllers: [CategoriasController],
  providers: [CategoriasService]
})
export class CategoriasModule {}
