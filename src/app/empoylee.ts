export class Empoylee {
  constructor(
    public id: number,
    public name: string,
    public dateOfBirth: Date,
    public alias?: string, // optional (ten bi' danh): ? la cho phep null.
    public jobCategory?: string // Optional,, ex: tectnology, sciend...
  ) {

  }
}
