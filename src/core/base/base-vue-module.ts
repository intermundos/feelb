interface State {
    [ key: string ]: any;
}

export class BaseVueModule<TState extends State> {
    public state: TState
    public id: string

    constructor( id: string, state?: TState ) {
        this.id = id
        this.state = reactive( state as TState )
    }
}
