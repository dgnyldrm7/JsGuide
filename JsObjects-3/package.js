export default class Person
{
    #name = "private";

    constructor(name)
    {
        this.name = name;
    }

    sayHello()
    {
        return this.name + ' says hello';
    }

    get Name()
    {
        return this.#name;
    }
}

