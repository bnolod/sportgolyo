import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayersService {
  constructor(private readonly prismaService: PrismaService) {}
  

  create(createPlayerDto: CreatePlayerDto) {
    return this.prismaService.player.create({
      data: createPlayerDto,
    });
  }

  findAll() {
    return this.prismaService.player.findMany();
  }

  findOne(id: number) {
    return this.prismaService.player.findUnique({
      where: { id },
    });
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.prismaService.player.update({
      where: { id },
      data: updatePlayerDto,
    });
  }

  remove(id: number) {
    return this.prismaService.player.delete({
      where: { id },
    });
  }
}
