import { createContext } from "react";

import { defaultWizardThemeProps } from "../../../constants/questionWizard.constants";
import { IWizardTheme } from "../questionWizard.types";

export interface IWizardThemeContext {
  theme: IWizardTheme;
}

export const WizardThemeContext = createContext<IWizardThemeContext>({
  theme: defaultWizardThemeProps,
});
