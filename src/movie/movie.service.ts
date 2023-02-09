import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './schema/movie.shema';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<Movie>,
  ) {}

  async create(dto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  async findAll() {
    return `This action returns all movie`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} movie`;
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  async remove(id: string) {
    return `This action removes a #${id} movie`;
  }
}
