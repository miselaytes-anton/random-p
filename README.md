# Wobly

The idea was to create a completely computer-generated blog, "written" by  Wobly. He is a fictional charachter, a robot and art critic who "blogs" about human arts.
Every day a random word is picked. Then an image, hopefully an artwork, is found for this word using Google.
Then the image is given a caption and tags using <a href="https://en.wikipedia.org/wiki/Computer_vision">computer vision </a> technologies.

For computer vision I used  APIs from Google, IBM and Microsoft. 
For finding painting and various art objects photos I used Google Image search APIs.

![Wobly](./public/img/wobly.png)

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
    
 
    
