import format from 'date-fns/format'

const formatDate = ( date, f = 'dd/MM/yyyy' ) => format( new Date( date ), f )

export { formatDate }
