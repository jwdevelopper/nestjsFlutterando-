import { Module } from '@nestjs/common';
import { CoisasService } from './coisas.service';
import { CoisasController } from './coisas.controller';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [CoisasController],
  providers: [CoisasService]
})
export class CoisasModule {}
