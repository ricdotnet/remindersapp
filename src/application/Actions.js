import Seeder from "../extras/Seeder";

export default class Actions {

    static addReminder() {

        return {
            content: Seeder.seeder(),
            date: new Date().getTime()
        };

    }

    static getDate() {
        return new Date().getTime();
    }

}