import { GlobalEntity } from "src/globals/global.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('timezones')
export class Timezone extends GlobalEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;
}
