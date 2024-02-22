export interface Params {
  params: { id: string };
}

export class Issue {
  id?: number;
  title: string = "";
  description: string = "";
}
