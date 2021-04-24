import { IsInt, IsString, Max, Min } from 'class-validator'
export class UserDTO {
  @IsString()
  name: string;
  @IsString()
  surname: string;
  @IsInt()
  @Min(1)
  @Max(120)
  age: number;
}
