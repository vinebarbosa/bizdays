"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const node_fs_1 = require("node:fs");
class Bizdays {
    constructor(locale = 'pt-BR') {
        this.locale = locale;
    }
    setLocale(locale) {
        this.locale = locale;
    }
    isWeekend(date) {
        const day = date.getUTCDay();
        return day === 0 || day === 6;
    }
    isHoliday(date) {
        const path = (0, node_path_1.resolve)(__dirname, 'locales', `${this.locale}.json`);
        const holidays = JSON.parse((0, node_fs_1.readFileSync)(path, 'utf8'));
        const year = date.getFullYear();
        const key = date.toISOString();
        return holidays[year] && holidays[year].includes(key);
    }
    isBizday(date) {
        return !this.isWeekend(date) && !this.isHoliday(date);
    }
    preceding(date) {
        const d = date;
        d.setDate(d.getDate() - 1);
        while (!this.isBizday(d)) {
            d.setDate(d.getDate() - 1);
        }
        return d;
    }
    following(date) {
        const d = date;
        d.setDate(d.getDate() + 1);
        while (!this.isBizday(d)) {
            d.setDate(d.getDate() + 1);
            [0, 1, 3].map((numeor) => numeor);
        }
        return d;
    }
}
exports.default = new Bizdays();
