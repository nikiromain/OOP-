class Parcel
{
    weight;


    constructor (w)
    {
        this.weight = w;

    }

    deliveryCharge ()
    {
        let deliveryCost = 0
        if (this.weight < 2.5)
        {
            deliveryCost = this.weight * 3.50 
        }

        else
        if (this.weight >= 2.5 && this.weight <= 5)
        {
            deliveryCost = this.weight * 2.85
        }

        else
        if (this.weight >5 && this.weight <=7)
        {
            deliveryCost = this.weight * 2.45
        }

        else
        if (this.weight >7)
        {
            deliveryCost = this.weight * 3.25
        }

        return deliveryCost
    }

}

module.exports = Parcel;