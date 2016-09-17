# Auto-generated blog

Takes a random word every day and  (hopefully) finds a painting about it using custom google search

## Start webserver

    export NODE_ENV=dev
    node server

## Start scraper

create [custom google search](https://developers.google.com/custom-search/)
 and put  api_keys.json into project root

    {
      "facebook": {
        "token": "EnjFhPzu4iuDZBD86ZAYErYuZCfCuE3ME4nfhhL9f5klSvIqrPNWoSMRt6UzX2IVf7xPRErxGYZD"
      },
      "microsoft": {
        "subscription-key": "d1dccaeaf7cd3e5fd"
      },
      "ibm": {
        "api_key": "07e9d1e661b8c22f"
      },
      "google": {
        "key": "AIzaZnDuQNidEbLcAw",
        "cx": "0005584axtw-yhqs"}
    }
 
        
then

    export NODE_ENV=dev
    node server scraper
    
    
## Generate a post
 
    export NODE_ENV=dev
    node server insert
    
    
## Some useful links
    
    https://developers.google.com/apis-explorer/?hl=en_US#p/customsearch/v1/search.cse.list
    
    https://www.googleapis.com/customsearch/v1?q=cat&searchType=image&imgSize=medium&key=AIzaSyDfAKj68bdcfcEdBMR7tHQrwxWQDb3SieI&cx=000558238072111463742:e-eakfbdozy&num=1
    
    https://developers.google.com/custom-search/json-api/v1/reference/cse/list
    
    
    
    http://crontab.guru/every-1-hour

    https://cloud.google.com/natural-language/

    https://cloud.google.com/vision/    

## Some sites to search for art photos:


- www.moma.org	
- www.mfa.org
- www.tate.org.uk	
- art.famsf.org	
- www.nga.gov	
- metmuseum.org	
- wikiart.org
    
 
    
