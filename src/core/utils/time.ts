function createTimeStamp( date?: number ) {
    return date ? new Date( date ) : new Date()
}

export function getHourAndMinutes( date?: number ) {

    const timestamp = createTimeStamp( date )

    return {
        hour: timestamp.getHours(),
        minutes: timestamp.getMinutes(),
        timestamp: timestamp.getTime(),
    }
}

export function getDate( date?: number ) {
    const timestamp = createTimeStamp( date )
    return timestamp.getDate()
}
