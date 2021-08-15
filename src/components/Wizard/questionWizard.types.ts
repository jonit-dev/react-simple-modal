export interface IQuestionOption {
  imageUrl: string;
  label: string;
  isSelected: boolean;
}

export interface IQuestion {
  title: string;
  options: IQuestionOption[];
}

export interface IQuestionButton {
  onClick: () => void;
  isDisabled?: boolean;
  type: "next" | "previous" | "finish";
  children?: React.ReactNode;
}
