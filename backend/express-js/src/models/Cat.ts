import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Cat extends Model {
  @Column
  id!: number;

  @Column
  url!: string;

  @Column
  tags!: string;
}
