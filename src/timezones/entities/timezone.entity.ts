import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('timezones')
export class Timezone {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;
}
