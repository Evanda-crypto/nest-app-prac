import { GlobalEntity } from "src/globals/global.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class City extends GlobalEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    country_id:number;

}
