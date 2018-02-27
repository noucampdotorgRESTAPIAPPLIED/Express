# Express Exercise 3

## Fetch latest Repository Branch

```
$ cd /DRIVE/xampp/htdocs/jQuery
$ git pull --no-edit https://github.com/noucampdotorgRESTAPIAPPLIED/Express.git latest
$ git status

```

# Part 1 – POST Request with PostMan

1.	Examine the code in [http://localhost/Express/6nations/indexV2.js](http://localhost/Express/6nations/indexV2.js).  Specifically, look at the ``.post()`` function route.

1.	Run ``indexV2.js`` using nodemon:

	```
	nodemon indexV2.js

	```

1.	Use *PostMan* to send a ``POST`` request to the route ``/teams/add``  with this JSON data:

	```
	{
		"id":"7",
		"name":"Georgia",
		"shortname":"GEO",
		"lat":"55.000",
		"lng":"5.200"
	}

	```

1.	Then use *PostMan* to send a ``GET`` request to the route ``/teams``.  You should see the new JSON object in the teams dataset for Georgia.

1.	Push your code to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

	```
	$ git status
	$ git add .
	$ git commit -m "Exercise 3 - Part 1 DONE|PARTIAL|HELP"
	$ git push origin master
	$ git status

	```

# Part 2 – POST Request with HTML Form


1.	Examine the code in [http://localhost/Express/6nations/addTeam.html](http://localhost/Express/6nations/addTeam.html) and [http://localhost/Express/6nations/addTeam.js](http://localhost/Express/6nations/addTeam.js).  

1.	Use [http://localhost/Express/6nations/addTeam.html](http://localhost/Express/6nations/addTeam.html) to add another team to the teams dataset.

1.	Use [http://localhost/Express/6nations/teams.html](http://localhost/Express/6nations/teams.html) to see it was added correctly.

1.	Push your code to **your private** repository on GitHub.  Type these commands into your *Git Bash* client:

	```
	$ git status
	$ git add .
	$ git commit -m "Exercise 3 - Part 2 DONE|PARTIAL|HELP"
	$ git push origin master
	$ git status

	```


