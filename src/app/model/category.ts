export class category {
    id: number = 0;
    name: string ='';
    description: string = '';

    constructor(properties?: Category) {
        if (properties) {
            this.id = properties.id || '';
            this.description = properties.description || '';
        }
    }
}