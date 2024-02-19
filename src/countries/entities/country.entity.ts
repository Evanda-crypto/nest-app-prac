import { City } from "src/cities/entities/city.entity";
import { GlobalEntity } from "src/globals/global.entity";
import { Leader } from "src/leaders/entities/leader.entity";
import { Timezone } from "src/timezones/entities/timezone.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('countries')
export class Country extends GlobalEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToOne(() => Leader, (leader) => leader.country) // specify inverse side as a second parameter
    leader: Leader;

    @OneToMany(()=>City,(city)=>city.country)
    cities:City[];

    @ManyToMany(() => Timezone)
    @JoinTable()
    timezones: Timezone[]
}
