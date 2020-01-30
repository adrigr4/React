import { ADD_ARTICLE } from "../actions/action-types";

const censure = store => next => action => {

    const censuredWords = ["banana", "orange", "apple", "mango"];
    const separators = [" ", ",", ";", "'", ", ", " ,", "."];

    if (action.type === ADD_ARTICLE) {
        separators.forEach((item) =>
            action.payload.title = action.payload.title.split(item).map((word) => {
                return censuredWords.includes(word.trim().toLowerCase()) ? "*****" : word
            }).join(item));
    }

    next(action);
};

export default censure;