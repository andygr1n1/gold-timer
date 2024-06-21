import { cloneDeep, isArray, isObject } from 'lodash-es'

export function proxyConvert<Type>(arg: Type): Type {
    let data = arg

    if (!!data && isArray(data)) {
        data = new Proxy(cloneDeep(data), {}).map((item) => {
            const newProxyItem = new Proxy(item, {})

            return proxyConvert(newProxyItem)
        }) as Type
    }

    if (!!data && !isArray(data) && isObject(data)) {
        data = new Proxy(cloneDeep(data), {})
        for (const key in data) {
            const value = cloneDeep(data[key])

            if (!!value && isObject(value) && isArray(value)) {
                data[key] = new Proxy(value, {}).map((item) => {
                    return proxyConvert(item)
                }) as Type[Extract<keyof Type, string>]
            }

            if (!!value && isObject(value) && !isArray(value)) {
                data[key] = proxyConvert(cloneDeep(data[key]))
            }
        }
    }
    return data
}
