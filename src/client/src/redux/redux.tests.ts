import { createStore, AnyAction, Reducer, ReducersMapObject, Store, combineReducers } from "redux";
import { assert } from "chai";

class ReduxWrapper {

    reduxStore: Store<ApplicationState>;

    constructor() {

        let combinedReducer = combineReducers<ApplicationState>({
            user: this.userReducer,
            projects: this.projectsReducer
        });

        this.reduxStore = createStore(combinedReducer, {
            user: {
                name: "John Doe",
                loginCount: 0
            },
            projects: new Array<Project>()
        } as ApplicationState);

        this.reduxStore.subscribe(() => {
            
        });

    };

    userReducer(state: User, action: AnyAction): User {
        
        if (state == null) {
            return {
                name: "John Doe",
                loginCount: 0
            };
        }

        

        switch (action.type) {
            case "CHANGE_NAME":
                let changeNameState = {...state};
                changeNameState.name = action.payload;
                return changeNameState;
            case "LOGIN":
                let loginState = {...state};
                loginState.loginCount = loginState.loginCount + 1;
                return loginState;
            default: 
                return state;
        }
    }

    projectsReducer(state: Project[], action: AnyAction): Project[] {

        if (state == undefined) {
            return new Array<Project>();
        }

        switch (action.type) {
            case "ADD_PROJECT":
                let newState = state.concat({
                    name: action.payload,
                    completed: false
                } as Project);
                return newState;
            default:
                return state;
        }
    };

    dispatch(action: AnyAction) {
        let dispatchResult = this.reduxStore.dispatch(action);
    }

    getState(): ApplicationState {
        return this.reduxStore.getState();
    }

}

class ApplicationState {
    user: User;
    projects: Project[];
}

class User {
    name: string;
    loginCount: number;
}

class Project {
    name: string;
    completed: boolean;
}

describe("Redux", () => {

    it("Should handle dispatching a simple action to change user's name", () => {
        let subject = new ReduxWrapper();
        subject.dispatch({
            type: "CHANGE_NAME",
            payload: "Lasse"
        });

        let state = subject.getState();
        assert.equal(state.user.name, "Lasse");

    });

    it("Should handle complex action to add a project", () => {
        let subject = new ReduxWrapper();
        subject.dispatch({
            type: "ADD_PROJECT",
            payload: "My Project"
        });

        let state = subject.getState();
        assert.isNotEmpty(state.projects);
        assert.equal(state.projects.length, 1, "Only a single value in the array");
        assert.equal(state.projects[0].name, "My Project");
    });

    it("Should increment login count for each dispatch of login action", () => {
        let subject = new ReduxWrapper();
        
        let dispatch = function() {
            subject.dispatch({
                type: "LOGIN"            
            });
        };

        dispatch();

        let state = subject.getState();
        assert.equal(state.user.loginCount, 1);

        dispatch();
        state = subject.getState();
        assert.equal(state.user.loginCount, 2);
    });

});