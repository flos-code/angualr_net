export class Order {
  createdBy: string;
  system: string;
  date: number;
  issue: string;
  description: string;

  constructor(obj?: any) {
    this.createdBy = obj ? obj.createdBy : '';
    this.system = obj ? obj.system : '';
    this.date = obj ? obj.date : 0;
    this.issue = obj ? obj.issue : '';
    this.description = obj ? obj.description : '';
  }

  public toJSON() {
    return {
      createdBy: this.createdBy,
      system: this.system,
      date: this.date,
      issue: this.issue,
      description: this.description,
    };
  }
}
