import { BadRequestException, Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {

    constructor(
        private jwtService: JwtService,
        private readonly usersService:UsersService
    ){}
    @Post('login')
    @UsePipes(ValidationPipe)
    async login(@Body() authDto:AuthDto){

        const user = await this.usersService.signIn(authDto.email);

        if(!user){
            throw new BadRequestException('Invalid Credentials');
        }


        if(!await bcrypt.compare(authDto.password,user.password)){
            throw new BadRequestException('Invalid Credentials');
        }

        const jwt = await this.jwtService.signAsync({id:user.id},{secret:'ddgsfd'});

        return {
            access_token: jwt,
          };
    }
}
