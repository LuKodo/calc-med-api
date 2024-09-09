import { Injectable } from '@nestjs/common';
import { Med } from './med.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedService {
  constructor(
    @InjectRepository(Med) private readonly medRepository: Repository<Med>,
  ) {}
  create(createMedDto: Med) {
    const med = this.medRepository.create(createMedDto);
    return this.medRepository.save(med);
  }

  findAll() {
    return this.medRepository.find();
  }

  findOne(id: number) {
    return this.medRepository.findOne({ where: { id } });
  }

  update(id: number, updateMedDto: Med) {
    return this.medRepository.update(id, updateMedDto);
  }

  remove(id: number) {
    return this.medRepository.delete(id);
  }
}
