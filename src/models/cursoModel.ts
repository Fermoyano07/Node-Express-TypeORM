import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, BaseEntity } from "typeorm";
import { Profesor } from "./profesorModel";
import { Estudiante } from "./estudianteModel";

@Entity('cursos')
export class Curso extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @CreateDateColumn()
  cratedAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne( () => Profesor, (profesor) => profesor.cursos)
  @JoinColumn({ name: 'profesor_id'})
  profesor: Profesor;

  @ManyToMany(() => Estudiante)
  @JoinTable({
    name: 'cursos_estudiantes',
    joinColumn: { name: 'curso_id' },
    inverseJoinColumn: { name: 'estudiante_id' }
  })
  estudiantes: Estudiante[];
}
