const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Migration1710861720227 {
    name = 'Migration1710861720227'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "anime" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fav_character" character varying NOT NULL, "fav_series" character varying NOT NULL, CONSTRAINT "PK_6e567f73ed63fd388a7734cbdd3" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "anime"`);
    }
}
