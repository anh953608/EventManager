class DataUtils {
    /**
     * Format Datetime
     * @param param 
     */
    public static formatDateTime(param: string) {
        const date = new Date(param);
        return [date.getFullYear(), date.getMonth() + 1 < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1, date.getDate() < 9 ? '0' + date.getDate() : date.getDate()].
            join('/').concat(' ' + [date.getHours() < 9 ? '0' + date.getHours() : date.getHours(), date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()].join(':'));
    }

    /**
     * Check number
     * @param value 
     */
    public static formatNumber(value: any){
        return typeof value == 'number' ? value : 0;
    }

    /**
     * Convert Number to String
     * @param value 
     */
    public static cvNumberToString(value: any){
        return this.formatNumber(value).toString();
    }

    /**
     * Convert String to number
     * @param value 
     */
    public static cvStringToNumber(value: any){
        return Number(typeof value == 'string' ? value : '0') || 0;
    }
}
export default DataUtils;