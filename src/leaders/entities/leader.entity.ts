import { Country } from "src/countries/entities/country.entity";
import { GlobalEntity } from "src/globals/global.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('leaders')
export class Leader extends GlobalEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    country_id: number;

    @OneToOne(() => Country, (country) => country.id) // specify inverse side as a second parameter
    @JoinColumn({name:'country_id'})
    country:Country
}
