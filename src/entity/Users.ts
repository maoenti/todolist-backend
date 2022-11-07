import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  firstName: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  lastName: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  email: string;

  @Column()
  username: string;
}
