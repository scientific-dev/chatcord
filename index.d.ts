export const version: string;

interface optionType{
  sqlite: boolean
}

export class Client{
  public options: optionType;

  public chat(stimulus: string): string;
}
