
class Rectangle 
{
    length;
    width;


    constructor (l, w)
    {
        this.length = l;
        this.width = w;
    }

    calArea ()
    {
        return this.width * this.length 
    }

    calPerimeter ()
    {
        return 2 * (this.length + this.width)
    }

}

module.exports = Rectangle;