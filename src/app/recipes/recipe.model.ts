export class Recipe {
  // public allows this property to be accessible anywhere this class is imported
  // name: string designates the type, as required by TS
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}