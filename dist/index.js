"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function searchMovie(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const api_key = '22336e436133639a755aa57cabbbabe4';
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`;
        const response = yield fetch(url);
        const data = yield response.json();
        return data.results;
    });
}
let search = true;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (search) {
            let userSearch = prompt('What movie do you want to review? ');
            if (userSearch !== null) {
                let notNull = userSearch;
                let movies = yield searchMovie(notNull);
                console.log(movies);
            }
            let keepSearching = prompt('Would you like to search again? Y/N ');
            if (keepSearching == 'n')
                search = false;
            else if (keepSearching == 'y')
                search = true;
        }
    });
}
main();
