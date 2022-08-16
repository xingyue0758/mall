export function formatdate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(Regexp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
}