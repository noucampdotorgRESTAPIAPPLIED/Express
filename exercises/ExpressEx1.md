# Express Exercise 1


## Clone the Remote Repository


1.	Accept the GitHub Classroom invitation to this repository by following the link on the module moodle page.

1.	Copy the clone URL from your new repository called ``Express-<YOURACCOUNT>``

1.	Type these commands into your *Git Bash* client:

	```
	$ cd /<DRIVE>/xampp/htdocs   
	$ git clone <URL> Express
	$ cd Express
	$ ls
	$ git status

	```

Check your ``htdocs`` folder.  You should have a new folder called ``Express`` with some files in it.


## Part 1 — Node Setup

1.	Download and Install **Node.js** from [https://nodejs.org/en/](https://nodejs.org/en/)

1.	Run the ``node`` command from the *Command Prompt* to check it is installed correctly.

1.	Let's install the ``express`` module.  Change to the ``samples`` folder using the *Command Prompt*:

	```
	$ cd /<DRIVE>/xampp/htdocs/Express/samples  

	```

	Install the ``express`` module:

	```
	$ npm install express --save

	```



## Part 2 – Sample Applications

1.	Run the first sample program – ``app.js``:

	```
	$ node app.js

	```

	and using your web browser open [http://localhost:3000/](http://localhost:3000/).


1.	Run ``app2.js``:

	```
	$ node app2.js

	```

	and using your web browser open [http://localhost:3000/noucamp/](http://localhost:3000/noucamp/).


1.	Run ``app3.js``:

	```
	$ node app3.js

	```

	and using your web browser open [http://localhost:3000/who/Bob](http://localhost:3000/who/Bob) and [http://localhost:3000/who/Bob/bob.smith@lyit.ie](http://localhost:3000/who/Bob/bob.smith@lyit.ie)


1.	Run ``app4.js``:

	```
	$ node app4.js

	```

	and using your web browser open [http://localhost:3000/blah](http://localhost:3000/blah).



