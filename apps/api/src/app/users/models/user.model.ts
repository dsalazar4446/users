import { AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  idUser: number;

  @Column
  name: string;

  @Column
  surname: string;

  @Column
  age: number;
}
