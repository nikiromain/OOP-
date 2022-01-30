class Clerk 
{
    firstName; 
    lastName; 
    iD;


    constructor (id, fn, ln)
    {
        this.firstName = fn;
        this.lastName = ln; 
        this.iD = id
    }

    getFullName ()
    {
        return `${this.firstName} ${this.lastName}`
    }
}

module.exports = Clerk; 