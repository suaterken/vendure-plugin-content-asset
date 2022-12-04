import { Column, Entity } from 'typeorm';
import { DeepPartial, VendureEntity } from '@vendure/core';

/**
 * Here we define a new database entity. Passing this in to the plugin's `entities` array
 * will instruct TypeORM to create the new database table and make the entity available
 * to query in your plugin code.
 */
@Entity()
export class ContentAssetConfigEntity extends VendureEntity {
  constructor(input?: DeepPartial<ContentAssetConfigEntity>) {
    super(input);
  }

  @Column({ primary:true, unique: true , generated: "uuid"})
  ID!: string;

  @Column({ default: false })
  enabled!: boolean;

  @Column({ unique: true, nullable: false, length: 100 })
  name!: string;

  @Column({ nullable: true, length: "MAX" })
  body?: string;
}