import { MigrationInterface, QueryRunner } from "typeorm";

export class init1667803960307 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "taskName" VARCHAR(255) NOT NULL, "deadline" DATE NOT NULL, "isDone" BOOLEAN NOT NULL DEFAULT false)`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" VARCHAR(255) NOT NULL, "lastName" VARCHAR(255), "email" VARCHAR(255) NOT NULL, "username" VARCHAR(255) NOT NULL UNIQUE)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "task"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
