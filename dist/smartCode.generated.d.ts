export interface SmartCodeParams {
    accountId: string;
    settingsTimeout: number;
    hideElement: string;
    hideElementStyle: string;
}
export declare function buildSmartCode(p: SmartCodeParams): string;
