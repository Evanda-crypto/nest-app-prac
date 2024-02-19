import { GlobalEntity } from "src/globals/global.entity";
import { Leader } from "src/leaders/entities/leader.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('countries')
export class Country extends GlobalEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @OneToOne(() => Leader, (laeder) => laeder.country) // specify inverse side as a second parameter
    leader: Leader
}
