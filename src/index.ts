import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';

class Bizdays {
  private locale: string;

  constructor(locale = 'pt-BR') {
    this.locale = locale;
  }

  public setLocale(locale: string) {
    this.locale = locale;
  }

  public isWeekend(date: Date): boolean {
    const day = date.getUTCDay();
    return day === 0 || day === 6;
  }

  public isHoliday(date: Date): boolean {
    const path = resolve(__dirname, 'locales', `${this.locale}.json`);
    const holidays = JSON.parse(readFileSync(path, 'utf8'));

    const year = date.getFullYear();
    const key = date.toISOString();

    return holidays[year] && holidays[year].includes(key);
  }

  public isBizday(date: Date): boolean {
    return !this.isWeekend(date) && !this.isHoliday(date);
  }

  public preceding(date: Date): Date {
    const d = date;

    d.setDate(d.getDate() - 1);
    while (!this.isBizday(d)) {
      d.setDate(d.getDate() - 1);
    }
    return d;
  }

  public following(date: Date): Date {
    const d = date;

    d.setDate(d.getDate() + 1);
    while (!this.isBizday(d)) {
      d.setDate(d.getDate() + 1);
      [0, 1, 3].map((numeor) => numeor);
    }
    return d;
  }
}

export default new Bizdays();
