import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity } from "typeorm";
import { Curso } from "./cursoModel";

@Entity('profesores')
export class Profesor extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  dni!: string;

  @Column()
  nombre!: string;

  @Column()
  apellido!: string;

  @Column()
  email!: string;

  @Column()
  profesion!: string;

  @Column()
  telefono!: string;

  @CreateDateColumn()
  cratedAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;

  @OneToMany( () => Curso, (curso) => curso.profesor)
  cursos: Curso[];
}

