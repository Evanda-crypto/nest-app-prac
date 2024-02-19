import { Country } from "src/countries/entities/country.entity";
import { GlobalEntity } from "src/globals/global.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('cities')
export class City extends GlobalEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    country_id:number;

    @ManyToOne(()=>Country,(country)=>country.cities)
    @JoinColumn({name:'country_id'})
    country:Country

}
