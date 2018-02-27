export class DigitConvertor {
    private static readonly arr: string[] = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    /**
     * this method is used for parsing english digits 
     *  inside of an string to persian digits.
     * @author Seyed Ali Roshan
     * @param str the string you want to parse its digits
     * @returns the input string with parsed digits or the
     *  same string if it doesn't conttain any digits.
     */
    static toPersian(str: string): string {
        let i: number;
        let result: string = '';
        for (let char of str) {
            i = parseInt(char);
            if(!isNaN(i)) {
                result += DigitConvertor.arr[i];
            } else {
                result += char;
            }
        }

        return result;
    }
    /**
     * this method is used for parsing persian digits
     *  inside of an string to english digits.
     * @author Seyed Ali Roshan
     * @param str the string you want to parse its digits
     * @return the input string with parsed digits or the
     *  same string if it doesn't conttain any digits.
     */
    static toEnglish(str: string): string {
        let i: number;
        let result: string = '';
        for (let char of str) {
            i = DigitConvertor.arr.indexOf(char);
            if (i !== -1) {
                result += i.toString();
            } else {
                result += char;
            }
        }

        return result;
    }
}