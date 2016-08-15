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
    
    
## Some useful links
    
    https://www.googleapis.com/customsearch/v1?q=cat&searchType=image&imgSize=medium&key=AIzaSyDfAKj68bdcfcEdBMR7tHQrwxWQDb3SieI&cx=000558238072111463742:e-eakfbdozy&num=1
    
    https://developers.google.com/custom-search/json-api/v1/reference/cse/list
    
    http://crontab.guru/every-1-hour
    
## Some sites to search for art photos:


- www.moma.org	
- www.mfa.org/artemis	
- www.tate.org.uk	
- art.famsf.org	
- sirismm.si.edu	
- www.invaluable.com	
- artbeyondsight.org	
- www.nga.gov	
- metmuseum.org	
- www.artcyclopedia.com	
    
 
    