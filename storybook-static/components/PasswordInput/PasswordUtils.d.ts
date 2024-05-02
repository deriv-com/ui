export declare const validPassword: (value: string) => boolean;
export declare const isPasswordValid: (password: string) => boolean;
export declare const isPasswordModerate: (password: string) => false | RegExp;
export declare const isPasswordStrong: (password: string) => false | RegExp;
export declare const calculateScore: (password: string, customErrorMessage?: string) => 0 | 3 | 2 | 1 | 4 | 5 | undefined;
