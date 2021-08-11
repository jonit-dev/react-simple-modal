export interface IQuestionOption {
  imageUrl: string;
  label: string;
  isSelected: boolean;
}

export interface IQuestion {
  title: string;
  options: IQuestionOption[];
}
