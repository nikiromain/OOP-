#OOP (JS)


1. Write a program that prompts the user for all the pertinent data required to calculate the area and circumference of a circle.  Lastly, your program must display the said information to the user.

2. Write a program that prompts the user for all the pertinent data required to calculate the area and perimeter of a rectangle.  Lastly, your program must display the said information to the user. -

3. Modify the above program so that your program can prompt the user the “dimensions” of multiple rectangles. Your program should display the area and perimeter of all rectangles entered. -class

4. Design a program that will receive the weight of a parcel from a store clerk . Please note, a store clerk has a store clerk id, first name and last name 
Your job is to produce a program that will determine the delivery charge for  a parcel.  Charges are calculated as follows: 
Parcel Weight (kg)   Cost per kg ($) 
<2.5 kg 		$3.50 per kg 
2.5–5 kg 		$2.85 per kg 
>5-7 kg 		$2.45 per kg 
>7 			$3.25 per kg 


5. A home mortgage authority requires a deposit on a home loan according to the following schedule: 
Loan $ 		Deposit 
less than $25 000  	5% of the loan value 
$25 000–$49 999 	$1250 + 10% of loan over $25 000 
$50 000–$100 000 	$5000 + 25% of loan over $50 000 


The college library wants a program to keep track of the books it loans to people.  When a person borrows one book, the library needs to know who borrowed the book, their email address, and what date they borrowed it. Also, the library needs to know the name and author of the book that was borrowed.
Design and implement the classes needed to model this system. 
Beginner Version:
Test your classes by creating a library with only 1 book and 1 person.  
The library must be able to keep track of whether a book is checked in or checked out
The library needs to track whether the person has borrowed a book.
	Intermediate Version
Modify the beginner version so that the library has 4 books and 1 person.  The person can borrow more than 1 book.
	Advanced Version
Modify the beginner version so that the library has many books and many people.  If a book is checked out, it cannot be borrowed anymore.


List all the books that exists in the library  (both that are currently in the library and out on loan)
List all the books that CURRENTLY IN THE LIBRARY BUILDING
List all the books that are out on loan
How many members do we have

   		Person
WHich books each customer currently have from the library 


6. You are required to develop a simple point of sales system for a supermarket. Cashiers would be the only actors (users) of this system. They will be using it to print out a customer’s bill. 
At start up, the program should prompt the cashier to enter the following for  a given customer:
Prompt the user to enter a customer name (First name and Last name).
Prompt the user to enter the number of products they wish to enter.
For each Product do the following :
Prompt the user to enter  the item the customer wants to purchase by entering an item code, description, price..  
Enter the quantity of the item they want to purchase. 
When the cashier has completed entering items, the program should calculate the extended price of each item. The extended price of the item is the price X quantity
Then the program should calculate the total balance the customer must pay. The total balance is the sum of the extended price per item.
Lastly the program should print out the customer’s bill:
Customer Name
All the Items (Item NO, Description, Unit Price, quantity, Extended Price) the customer wants to purchase(For each item)
Grand total the customer must pay.

Your program must have the following classes : 

Customer (This class should contain attributes and methods that pertain to a customer)
Item (This class should contain attributes and methods that pertain to an item)
Bill (This class should contain a customer, an array of items, and any other pertinent attributes and methods that pertain to the bill)

8..Always neat, always clean and always well attended, Smith’s Laundromat is the cleanest and nicest laundromat in the Diego Martin area, offering self-service and drop-off laundry services to both residential and commercial customers.
All their branches offer only state-of-the-art, environmentally conscious commercial grade washers and dryers. Their stores have Dexter front-loading washers with fast extraction spin in five sizes from 18 to 80 lbs., and high efficiency dryers, 30 to 80 lbs., so a customer never has to wait to finish their laundry.
As stated in the aforementioned, Smith’s Laundry Mart is known for providing impeccable service to their customers and as a result have a strong loyal customer base.  However, the company currently uses a manual system to issue bills and invoices to all their customers. Over time, the said manual system has proven to be very problematic and has become an accounting nightmare as customers tend to get incorrect balances on their invoices and bills.
With the recent massive expansion in the business, both the President and the Financial Controller of the company noted that the aforementioned problems will rapidly deteriorate and thus, the need for a Program or Application to address and generate customer bills and invoices is highly critical. 
The proposed Program must incorporate the below requirements and business rules:
Every customer is charged per pound (lb) based on the type of fabric clothing washed. 
See below for details:-
All Cotton Clothing that was washed incur a charge of $1.00 per lb
All Denim clothing that was washed incur a charge of $2.75 per lb.
Any other type of clothing  that was washed incur a charge of $0.65 per lb
Once washed, ALL customers MUST dry their clothes at the company and as a result incur a Dryer charge. The Dryer charge varies based on the number of lbs of clothes washed. 
See below of details 
 $2.50 per lb on ALL clothing if the number of lbs of clothes washed is between 1lb-7lb.
$1.50 per lb on ALL clothing if the number of lbs of clothes washed is more than 7lb to 12lb.
$0.55 per lb on ALL clothing if the number of lbs of clothes washed is more than 12lb.
 
A customer balance is then calculated by adding the Cotton Fabric Clothing Charge to the Denim Clothing charge to the Other Type Clothing Charge to the Dryer Charge.(Cotton Charge + Denim Clothing charge + Other Type Clothing Charge + Dryer Charge)
Because Smith’s Laundry Mart is a V.A.T registered company, VAT must be applied to all bills and invoices issued to any customer, which is 15% of the Customer balance. 
Lastly, the customer Extended balance must be generated which is done by adding the Customer Balance to the V.A.T amount.
You have been contracted as a programmer by Smith’s Laundry Mart to develop a SWIFT program that will resolve the aforementioned issues.


Your program MUST prompt the cashier to enter the following data for all customers: 

Customer’s first name
Customer’s  last name
The Number of lbs of Cotton fabric clothing that was washed.
The number of lbs of Denim fabric clothing that was washed.
The number of lbs of any other type of fabric clothing that was washed.

The program must then calculate the customer balance, VAT and their extended balance (balance after VAT). 

Lastly, the program must output the customer bill which MUST list the following 
information: 
Customer Name
The number of lbs and the charge of the Cotton fabric clothing that was washed.
The No of lbs and the charge of  the Denim fabric clothing that was washed
The number of lbs and the charge of the other types of fabric clothing that was washed.
Dryer Charge
Customer’s Balance
VAT Amount
Customer’s Extended Balance (Balance after VAT)


YOUR PROGRAM MUST BE CODED IN THE CONTEXT OF OBJECT ORIENTED 
PROGRAMMING THUS, PLEASE NOTE THE FOLLOWING:
.
Your program MUST have at least these classes: Customer, Bill and Classes to model the various fabric types). 
The Bill  Class must contain  all the classes that you model for the various fabric types as data fields/attributes.
