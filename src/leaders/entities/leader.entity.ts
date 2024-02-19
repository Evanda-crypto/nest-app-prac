import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('leaders')
export class Leader {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column()
    country_id: number;

}
