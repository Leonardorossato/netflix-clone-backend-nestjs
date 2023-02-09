import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    try {
      const movie = await this.movieModel.create(dto);
      await movie.save();
      return movie;
    } catch (error) {
      throw new HttpException('Error creating a movie', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll() {
    try {
      const movie = await this.movieModel.find();
      return movie;
    } catch (error) {
      throw new HttpException(
        'Error finding all movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const movie = await this.movieModel.findOne({ where: { id: id } });
      if (!movie)
        throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
      return movie;
    } catch (error) {
      throw new HttpException(
        `Error to find a movie with ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    try {
      const movie = await this.movieModel.findById({ id: id });
      if (!movie)
        throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
      await this.movieModel.findByIdAndUpdate(id, updateMovieDto);
      return { message: 'Movie updated successfully.' };
    } catch (error) {
      throw new HttpException(
        `Error to update a movie with ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: string) {
    try {
      const movie = await this.movieModel.findById({ id: id });
      if (!movie)
        throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
      await this.movieModel.findByIdAndUpdate(id);
      return { message: 'Movie removed successfully.' };
    } catch (error) {
      throw new HttpException(
        `Error to remove a movie with ${id}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
