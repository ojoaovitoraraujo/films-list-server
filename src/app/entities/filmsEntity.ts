import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('films')
export class  Films{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', {length: 100, nullable: true})
    name: string;

    @Column('varchar', {length: 1000, nullable: true})
    image?: string;
    
    @Column('varchar', {length: 1000, nullable: true})
    description?: string;

    @Column('int', {nullable: true})
    duration?: number;

    @Column('varchar', {length: 100, nullable: true})
    genre?: string;

    @Column('varchar', {length: 100, nullable: true})
    director?: string;

    @Column('float', {nullable: true})
    avaliation?: number;

    @Column('bool', {default: false})
    favorite: boolean;

}
