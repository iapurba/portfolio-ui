export const formatToEllipsisText = (
    text: string, charCount: number): string => {
    if (text.length <= charCount) {
        return text;
    }
    const subString = text.substring(0, charCount);
    return `${subString} ...`;
};