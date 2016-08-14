# Auto-generated blog

Takes a random word every day and  (hopefully) finds a painting about it using custom google search

## Start webserver

    export NODE_ENV=dev
    node server

## Start scraper

create [custom google search](https://developers.google.com/custom-search/)
 and put  api_key.json into ```backend/lib/image/``` which looks like:

    {
        "key": "AIzaSyGHUY789bdcfcEdBMR7tHQrwxWQDb3SieI",
        "cx": "00011111111111111:e-aaaaaaaaa"
    }
    
then

    export NODE_ENV=dev
    node server scraper
    
    
## Generate a post
 
    export NODE_ENV=dev
    node server insert
 
    