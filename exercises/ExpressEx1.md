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

Change to the ``samples`` folder using the Command Prompt.  Then run these sample programs.

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


## Part 3 – 6nations Web Application

1.	Change to the ``6nations`` folder and install the modules ``express``, ``underscore`` and ``cors``:

	```
	$ cd /<DRIVE>/xampp/htdocs/Express/6nations  

	$ npm install express --save
	$ npm install underscore --save
	$ npm install cors --save

	```

1.	Run the ``6nations`` web application:

	```
	$ node index.js

	```

1.	Using your web browser open [http://localhost:3000/teams](http://localhost:3000/teams).  Examine and understand the source code in ``index.js`` that implements this route.

1.	Using your web browser open [http://localhost:3000/results](http://localhost:3000/results).  Examine and understand the source code in ``index.js`` that implements this route.

1.	Using your web browser open [http://localhost:3000/results/2017](http://localhost:3000/results/2017).  Examine and understand the source code in ``index.js`` that implements this route.

1.	Using your web browser open the page [http://localhost/Express/6nations/teams.html](http://localhost/Express/6nations/teams.html).  Examine and understand the source code in ``teams.html`` and ``teams.js``.

1.	Modify the the code in ``teams.html`` and ``teams.php`` to add the team names to a dropdown box.  The dropdown box ``value`` attributes should correspond the the team id.  i.e.

	```html
	<select>
		<option value="1">England</option>
		<option value="2">France</option>
		<option value="3">Ireland</option>
		<option value="4">Italy</option>
		<option value="5">Scotland</option>
		<option value="6">Wales</option>
	</select>

1.	Examine the ``index.js`` program that has an incomplete route to get specific team results.  Modify this route so it returns results for any given team id.  For example, get the results for England with - [http://localhost:3000/results/team/1](http://localhost:3000/results/team/1)


1.	Modify the the code in ``teams.html`` and ``teams.php`` again to display the results for the team chosen from the dropdown box.  Use a ``<table>`` to show the results.
