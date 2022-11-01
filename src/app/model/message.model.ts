export class MessageModel {
    name: string;
    message: string;
    date?: number;
    uid?: string;

    constructor() {
        this.name = '';
        this.message = '';
        this.date = 0;
        this.uid = '';
    }
}