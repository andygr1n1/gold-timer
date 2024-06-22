export function replaceObjectValues<Type>(origin: Type, replace: Type): Type {
    if (origin && replace) {
        for (const key in origin) {
            origin[key] = replace[key] || origin[key]
        }
    }

    return origin
}
