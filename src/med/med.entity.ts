import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Med {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  insulina: string;

  @Column()
  concentracion: string;

  @Column()
  presentacion: string;

  @Column()
  cantidad: number;

  @Column()
  multiplo: number;

  @Column({ default: true })
  visible: boolean;
}
