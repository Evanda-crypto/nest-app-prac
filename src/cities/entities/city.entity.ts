import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class City {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    country_id:number;

}
