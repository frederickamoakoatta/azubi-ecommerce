export const transformImgPath = (path: string | undefined) => {
    return path === undefined ? 'shared/fallback.jpg' : path?.split('./assets/', 9)[1];
}