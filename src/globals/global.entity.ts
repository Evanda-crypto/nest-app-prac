import { CreateDateColumn, Timestamp, UpdateDateColumn } from "typeorm";

export class GlobalEntity {
    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at: Timestamp
}