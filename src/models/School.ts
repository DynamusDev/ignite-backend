import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, JoinTable } from 'typeorm';
import Student from './Student'

@Entity('schools')
export default class School {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'varchar' })
  name: string;

  @Column({type: 'varchar', nullable: true })
  phone: string;

  @Column({type: 'varchar' })
  email: string;

  @Column({type: 'varchar' })
  password: string;

  @Column({type: 'varchar', nullable: true })
  cnpj: string;

  @Column({type: 'varchar', nullable: true })
  address: string;

  @Column({type: 'text', nullable: true })
  logo: string;

  @Column({type: 'varchar', nullable: true })
  specialties: string;

  @ManyToOne(type => Student, school_id => School, { onDelete: 'SET NULL', onUpdate: 'CASCADE'})
  student: Student[];

  @Column({type: 'date' })
  createdAt: Date;

  @Column({ nullable: true, type: 'date' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'date' })
  deletedAt: Date;
}