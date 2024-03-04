export enum PLUGIN_TYPE {
    FILE_CONVERTER
}

export enum FILE_SIZE_UNIT {
    BYTE = 'B',
    KILOBYTE = 'KB',
    MEGABYTE = 'MB',
    GIGABYTE = 'GB',
    TERABYTE = 'TB',
    PETABYTE = 'PB',
    EXABYTE = 'EB',
    ZETTABYTE = 'ZB',
    YOTTABYTE = 'YB'
}

export type LoomFileConverter = {
    type: PLUGIN_TYPE.FILE_CONVERTER,
    extensions: string[],
    parse<T = unknown>(content: string): T
    stringify<T = unknown>(content: T): string
}

export type LoomPlugin = LoomFileConverter;

export type MaybePromise<T> = Promise<T> | T;