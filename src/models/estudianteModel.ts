import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('estudiantes')
export class Estudiante {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dni: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  email: string;

  @CreateDateColumn()
  cratedAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
