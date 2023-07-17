import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoisasModule } from './coisas/coisas.module';
import { CategoriasModule } from './categorias/categorias.module';
import { CommonModule } from './common/common.module';
import { FirebaseService } from './auth/firebase/firebase.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoisasModule, CategoriasModule, CommonModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, FirebaseService],
})
export class AppModule {}
