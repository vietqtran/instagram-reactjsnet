export const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV")
    tmp.innerHTML = html
    return tmp.textContent ?? tmp.innerText ?? ""
}

export const calcTimeToNow = (time: string) => {
    const newTime = time.endsWith("Z") ? time : time + "Z"
    const utcDate = new Date(newTime);
    const now = new Date();
    const nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
    const seconds = Math.ceil((nowUtc.getTime() - utcDate.getTime()) / 1000);
    if (seconds < 10) {
        return "now"
    }
    if (seconds < 60) {
        return seconds + "s"
    }
    const minus = seconds / 60;
    if (minus < 60) {
        return Math.floor(minus) + "m"
    }
    const hours = minus / 60;
    if (hours < 24) {
        return Math.floor(hours) + "h"
    }
    const days = hours / 24
    if (days < 7) {
        return Math.floor(days) + "d"
    }
    const weeks = days / 7
    return Math.floor(weeks) + "w"
}

export const calcTimeToNowDetail = (time: string) => {
    const newTime = time.endsWith("Z") ? time : time + "Z"
    const utcDate = new Date(newTime);
    const now = new Date();
    const nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds()));
    const seconds = Math.ceil((nowUtc.getTime() - utcDate.getTime()) / 1000);
    if (seconds < 10) {
        return "now"
    }
    if (seconds < 60) {
        return Math.floor(seconds) + (Math.floor(seconds) === 1 ? " second" : " seconds" + " ago")
    }
    const minus = seconds / 60;
    if (minus < 60) {
        return Math.floor(minus) + (Math.floor(minus) === 1 ? " minute" : " minutes" + " ago")
    }
    const hours = minus / 60;
    if (hours < 24) {
        return Math.floor(hours) + (Math.floor(hours) === 1 ? " hour" : " hours" + " ago")
    }
    const days = hours / 24
    if (days < 7) {
        return Math.floor(days) + (Math.floor(days) === 1 ? " day" : "days" + " ago")
    }
    const weeks = days / 7
    return Math.floor(weeks) + (Math.floor(weeks) === 1 ? " week" : "weeks" + " ago")
}

export const trimExtraParagraphTags = (htmlString: string) => {
    const regex = /^(<p>&nbsp;<\/p>)+|(<p>&nbsp;<\/p>)+$/g;
    return htmlString.replace(regex, '');
}