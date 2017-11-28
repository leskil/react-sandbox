import { createStore, Reducer, Action, AnyAction, Store, combineReducers } from "redux";

export interface IRedux {
    dispatch(action: ReduxAction<any>): void;
}

export class Redux implements IRedux {
    
    reduxStore: Store<ApplicationState>;

    constructor(reducer: Reducer<ApplicationState>) {
        this.reduxStore = createStore(reducer);
        let applicationReducer = combineReducers<ApplicationState>({
            User: UserReducer.Reduce
        })
    }

    dispatch(action: ReduxAction<any>): void {
        throw new Error("Method not implemented.");
        
    }

}

class ApplicationState {
    User: User;
}

class User {
    firstName: string;
    lastName: string;

    GetFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

export class UserReducer {

    static Reduce(state: ApplicationState, action: any): ApplicationState {
        return {
            User: {
                firstName: "hej",
                lastName: "hej2"
            }
        } as ApplicationState;
    }
}

export class ReduxAction<TPayload> {
    type: string;
    payload: TPayload;
}