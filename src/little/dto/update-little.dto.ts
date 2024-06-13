import { PartialType } from '@nestjs/swagger';
import { CreateLittleDto } from './create-little.dto';

export class UpdateLittleDto extends PartialType(CreateLittleDto) {}
