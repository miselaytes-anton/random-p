# Resource planning tool

## Dependencies

    - MongoDB server should be running
    
Installing and running mongoDB differs per OS,
    for mac:
    
- install [homebrew](http://brew.sh/)
- Install mongoDB
    
        brew update
        brew install mongodb
        
        
- Then you need to start a mongoDB server. Can use ```brew info mongodb``` to see how. with the latest version of brew it's ```brew services restart mongodb```
   
- Optionally you can also install [robomongo](https://robomongo.org/), a mongo GUI. Then you can directly view/edit mongo docs in the db
    
    
    
## Start up
    
    npm install
    node server
    
* for local development runs on port 3030


## Insert some dummy data

    node server init


## API

### 1. Authorization

#### Login

POST /api/auth

    {"token": "google token"}

response {"token": "our token"}

Then provide the received token in the headers like:

Authorization           Bearer [token]


### 2. User API

#### Get user data

GET /api/me

response:

    {
      "id": "333046255517425640667",
      "email": "testuser@gmail.com",
      "family_name": "Test",
      "given_name": "User"
    }
    
    
### 3. Basic CRUD API
    
    
    GET /api/items/?bar[$gte]=5,foo[$lt]=6,user_id=1
 
 
    
- all query params are optional
- $gte - greater than or equal , $gt - greater than,  $lte - less than or equal, $lt - less than
- returns an array of objects


    POST /api/items/:itemId
    
- creates the item 
- return created item


    PUT /api/items/:itemId
    
- replaces the item with supplied JSON object
- returns updated item


    DELETE /api/items/:itemId

- removes the item


    GET /api/items/:itemId

- returns a single object
    
#### Projects CRUD

- no validation is done
- project JSON object:

        {
            "id": "574d9f4e005370504107c9db",
            "title": "Moonshot"
        }
    
#### Assignments CRUD

- no validation is done
- assignment JSON object:
    
        {
        "id": "574da01c182d326c41e08807",
        "user_id": "574da01c182d326c41e08806",
        "project_id": "574d9f4e005370504107c9db",
        "hours_planned": 4,
        "date": "2016-07-26",
        "hours_spent": 5
        }    
    

Example: Get a list of assignments for a user for a specific date range:

GET /api/assignments?date[$gte]=2016-07-26&date[$lte]=2016-07-28&user_id=574da01c182d326c41e08806




response:

    [
      {
        "user_id": "574da01c182d326c41e08806",
        "project_id": "574d9f4e005370504107c9dg",
        "date": "2016-07-27",
        "hours_planned": 4,
        "hours_spent": 7,
        "id": "574da01c182d326c41e08805"
      },
      {
        "user_id": "574da01c182d326c41e08806",
        "project_id": "574d9f4e005370504107c9dg",
        "hours_planned": 4,
        "date": "2016-07-27",
        "hours_spent": 4,
        "id": "574da01c182d326c41e08806"
      }
    ]


## Models


- user

id  (from google)
email
family_name
given_name
avatar_url

- project

id
title
description

- assignment

id
user_id
project_id
hours_planned
hours_actual
date