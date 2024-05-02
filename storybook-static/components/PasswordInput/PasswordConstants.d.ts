export type TScore = 0 | 1 | 2 | 3 | 4 | 5;
export type passwordKeys = "common" | "commonNames" | "dates" | "extendedRepeat" | "keyPattern" | "namesByThemselves" | "pwned" | "recentYears" | "sequences" | "similarToCommon" | "simpleRepeat" | "straightRow" | "topHundred" | "topTen" | "userInputs" | "wordByItself";
export declare const passwordRegex: {
    hasLowerCase: RegExp;
    hasNumber: RegExp;
    hasSymbol: RegExp;
    hasUpperCase: RegExp;
    isLengthValid: RegExp;
    isPasswordValid: RegExp;
};
export declare const passwordValues: {
    longPassword: number;
    maxLength: number;
    minLength: number;
};
export declare const passwordErrorMessage: {
    invalidLength: string;
    missingCharacter: string;
    PasswordError: string;
};
export declare const warningMessages: Record<passwordKeys, string>;
