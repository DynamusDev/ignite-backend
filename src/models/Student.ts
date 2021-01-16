import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne, JoinTable } from 'typeorm';
import Company from './Company'
import School from './School'

@Entity('students')
export default class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: 'varchar' })
  name: string;

  @Column({type: 'varchar' })
  phone: string;

  @Column({type: 'varchar' })
  email: string;

  @Column({type: 'varchar' })
  password: string;

  @Column({ nullable: true, type: 'text' })
  image: string

  @ManyToOne(type => Company,  staff => Student, {eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' } )
  company_id: Company;

  @ManyToOne(type => School,  staff => Student, {eager: true, onDelete: 'SET NULL', onUpdate: 'CASCADE' } )
  school_id: School[];

  @Column({type: 'date' })
  createdAt: Date;

  @Column({ nullable: true, type: 'date' })
  updatedAt: Date;

  @Column({ nullable: true, type: 'date' })
  deletedAt: Date;
}