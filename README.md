# Backend

A project that will help me exercise and better understand backend concepts and technologies

# Endpoints

### Get user profile

To get the profile of a user

```
GET $HOST/users/{userID}
header 'Content-Type: application/json'
```

### Update user profile

To update the profile of a user

```
UPDATE $HOST/users/{userID}
header 'Content-Type: application/json'
data-raw: {
    "gender": "male",
    "birthday": "1990-01-01"
}
```

### Create a user profile

To create a user profile

```
POST $HOST/users
header 'Content-Type: application/json'
data-raw: {
    "userID": "user3",
    "gender": "male",
    "birthday": "1993-03-03"
}
```
