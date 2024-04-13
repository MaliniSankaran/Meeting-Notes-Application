export interface ActionItem {
  text: string;
  completed: boolean;
}

export interface Note {
  _id: string;
  title: string;
  content: string;
  created: Date;
  updated?: Date;
  actionItems: ActionItem[];
}
