import { Country } from "src/countries/entities/country.entity";
import { GlobalEntity } from "src/globals/global.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends GlobalEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    country_id:number;

    @ManyToOne(()=>Country,(country)=>country.users)
    @JoinColumn({name:'country_id'})
    country:Country

}
