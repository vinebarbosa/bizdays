declare class Bizdays {
    private locale;
    constructor(locale?: string);
    setLocale(locale: string): void;
    isWeekend(date: Date): boolean;
    isHoliday(date: Date): boolean;
    isBizday(date: Date): boolean;
    preceding(date: Date): Date;
    following(date: Date): Date;
}
declare const _default: Bizdays;
export default _default;
