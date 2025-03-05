export class User {
  private id!: number;
  private name: string;
  private email: string;
  private address: string;
  private age: number;

  constructor({ name, email, address, age }: User) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.age = age;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getAddress(): string {
    return this.address;
  }

  public getAge(): number {
    return this.age;
  }
}
