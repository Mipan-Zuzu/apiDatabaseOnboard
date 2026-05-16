API DOCUMENTATION

BASE URL

```
https://ssri-api.mipandev.my.id
```

REQUIRED HEADERS

```
Content-Type: application/json
```

ENDPOINTS

1. GET /onboarding
   Description: Get all location
   Method: GET
   URL:

```
GET https://ssri-api.mipandev.my.id/api/onboarding
```

Response:

```
{
  "data": []
}
```

2. POST /onboarding
   Description: Menambahkan data lokasi 
   Method: POST
   URL:

```
POST https://ssri-api.mipandev.my.id/api/onboarding
```

Request Body:

```
{
  "name: : "Test",
  "description" : "for testing",
   "flor" : "3",
  "img" : "https://mipan.png",
   "location" : ["344333", "23123"] //titik cordinat dari lokasi nya
}
```

Response Success:

```
{
  "message": "login success",
}
```

3. GET /secret
   Description: get data secret
   Method: GET
   URL:

```
POST https://ssri-api.mipandev.my.id/api/secret/api
```

Response:

```
{
  "message": "data user"
}
```

4. POST /secret
   Description: add secret location
   Method: POST
   URL:

```
POST https://ssri-api.mipandev.my.id/api/secret/api
```

Request Body:

```
{
  
}
```

2. POST /login
   Description: User login
   Method: POST
   URL:

```
POST https://ssri-api.mipandev.my.id/api/secret/api
```

Request Body:

```
{
  "name" : "test",
  "description" : "for testing",
  "flor" : "2",
  "img" : "https://mipan.png",
  "location" : ["231232", "312312"] // kordinat lokasi map
  "isSecret" : true/false,
  "isUnlocked" : true/false,
  "clue" : "go right behind canteen" 
}
```

Response Success:

```
{
  "message": "succses added",
}
```

3. DEL /secret
   Description: Delete wrong Secret
   Method: DEL
   URL:

```
DEL https://ssri-api.mipandev.my.id/api/secret/api
```

Request Body:

```
{
  "name": "test",
}
```

Response:

```
{
  "message": "succses delete"
}
```

MADE WITH LOVE ❤️ AND CHILL 🍃
