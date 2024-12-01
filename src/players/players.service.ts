import { Injectable, Res } from '@nestjs/common';
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

  async remove(id: number, @Res() res) {
    try {
      const player = await this.prismaService.player.findUnique({
        where: { id: id },
      });
  
      if (!player) {
        return res.status(404).json({ error: 'Player not found' });
      }
  
      // return await this.prismaService.player.delete({
      //   where: { id: id },
      
      // });

      await this.prismaService.player.delete({
        where: { id: id },
      });
      return res.status(200).json({ message: 'Player deleted' });

    } catch (error) {
      throw new Error(`Failed to delete player: ${error.message}`);
    }
  }
}
