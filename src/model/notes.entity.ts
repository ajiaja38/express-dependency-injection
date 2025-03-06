export class Notes {
  private id!: number;
  private title: string;
  private content: string;

  constructor({ title, content }: Notes) {
    this.title = title;
    this.content = content;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): string {
    return this.content;
  }
}
