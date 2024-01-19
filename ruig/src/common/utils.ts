export const snakeCase = (camelCase: string): string => {
    return camelCase.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`).substring(1);
}