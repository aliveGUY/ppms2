import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1735690901067 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      SET GLOBAL log_bin_trust_function_creators = 1;
    `);

    await queryRunner.query(`
      CREATE TABLE playground (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        location VARCHAR(255)
      );
    `);

    await queryRunner.query(`
      CREATE TABLE booking (
        uniqueid INT,
        start_date DATETIME,
        end_date DATETIME,
        description TEXT,
        FOREIGN KEY (uniqueid) REFERENCES playground(id) ON DELETE CASCADE,
        CONSTRAINT check_booking_dates
          CHECK (start_date < end_date)
      );
    `);

    await queryRunner.query(`
      CREATE TRIGGER prevent_overlapping_bookings
      BEFORE INSERT ON booking
      FOR EACH ROW
      BEGIN
        DECLARE overlapping_count INT;
        SELECT COUNT(*) INTO overlapping_count
        FROM booking
        WHERE uniqueid = NEW.uniqueid
        AND (
          (NEW.start_date BETWEEN start_date AND end_date)
          OR (NEW.end_date BETWEEN start_date AND end_date)
          OR (start_date BETWEEN NEW.start_date AND NEW.end_date)
          OR (end_date BETWEEN NEW.start_date AND NEW.end_date)
        );
        IF overlapping_count > 0 THEN
          SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Booking dates overlap for this playground';
        END IF;
      END;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TRIGGER IF EXISTS prevent_overlapping_bookings;`);
    await queryRunner.query(`DROP TABLE IF EXISTS booking;`);
    await queryRunner.query(`DROP TABLE IF EXISTS playground;`);
  }
}
