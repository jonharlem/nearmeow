2016-02-09 API research

#[Google Knowledge Graph Search API](https://developers.google.com/knowledge-graph/)
- allows developers to search the [Google Knowledge Graph](https://en.wikipedia.org/wiki/Knowledge_Graph) for entities
- new ( and incomplete ) API, [released 2015-12](https://plus.google.com/109936836907132434202/posts/iY8NZGFF6DN)
- returns [JSON-LD](https://developers.google.com/schemas/formats/json-ld?hl=en)
- data is organized by [schema.org type](http://schema.org/docs/gs.html#schemaorg_types)
- [reference](https://developers.google.com/knowledge-graph/reference/rest/v1/)

###example GET request:
`https://kgsearch.googleapis.com/v1/entities:search?query=dolores park&key=SERVERKEYGOESHERE&limit=1&indent=True`

###response body:

```json
{
  "@context": {
    "@vocab": "http://schema.org/",
    "goog": "http://schema.googleapis.com/",
    "EntitySearchResult": "goog:EntitySearchResult",
    "detailedDescription": "goog:detailedDescription",
    "resultScore": "goog:resultScore",
    "kg": "http://g.co/kg"
  },
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "EntitySearchResult",
      "result": {
        "@id": "kg:/m/03zyss",
        "name": "Dolores Park",
        "@type": [
          "Place",
          "TouristAttraction",
          "Thing"
        ],
        "description": "City park in San Francisco, California",
        "image": {
          "contentUrl": "http://t2.gstatic.com/images?q=tbn:ANd9GcTn8I4Hv9tQdAxsfnnvL8s4W8qom47iWhhNDpldvvXg4JVUXqUx",
          "url": "https://en.wikipedia.org/wiki/Dolores_Park",
          "license": "http://creativecommons.org/licenses/by-sa/3.0"
        },
        "detailedDescription": {
          "articleBody": "Dolores Park is a city park in San Francisco, California. It is located two blocks south of Mission Dolores at the western edge of the Mission District. ",
          "url": "http://en.wikipedia.org/wiki/Dolores_Park",
          "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
        }
      },
      "resultScore": 439.044769
    }
  ]
}
```

###response notes:
- @type is the schema.org type
- a working URL can be built from the `kg` context + the `@id`: http://g.co/kg/m/03zyss
	- this link opens a google search with a knowledge graph-based side bar
	- bottom of the side bar sometimes has a "People also search for" section

###other links:
- [JSON-LD Processor and API implementation in JavaScript](https://github.com/digitalbazaar/jsonld.js)
- [helpful blog post](http://www.seoskeptic.com/google-releases-knowledge-graph-api/)




#[Google Places API](https://developers.google.com/places/)
- uses unique [Place IDs](https://developers.google.com/places/place-id)

##[Google Places API Javascript Library](https://developers.google.com/places/javascript/)

- Add places to your map, from within the Google Maps JavaScript API.
- The functions in the Google Places JavaScript library enable your application to search for places (defined in this API as establishments, geographic locations, or prominent points of interest) contained within a defined area, such as the bounds of a map, or around a fixed point.
- The Google Places API offers an autocomplete feature which you can use to give your applications the type-ahead-search behavior of the Google Maps search field. When a user starts typing an address, autocomplete will fill in the rest. For more information, see the autocomplete documentation.
- to use, add `libraries=places` to the Google Maps API script URL
- With the Places service you can perform four kinds of searches:
	- Nearby Search returns a list of nearby places based on a user's location.
	- Text Search returns a list of nearby places based on a search string, eg. "Pizza".
	- Radar Search returns a large list of places within a specified search radius, but with less detail than either Nearby Search or Text Search.
	- Place Details requests return more detailed information about a specific place, including user reviews.
- The information returned can include establishments — such as restaurants, stores, and offices as well as 'geocode' results, which indicate addresses, political areas such as towns and cities, and other points of interest.




##[Google Places API Web Service](https://developers.google.com/places/web-service/)
- Find detailed information about places across a wide range of categories. Backed by the same database used by Google Maps and Google+, the Google Places API Web Service features about 100 million businesses and points of interest that are updated frequently through owner-verified listings and user-moderated contributions. Key features include autocomplete, search, place picker, photos and add place.
- The following place requests are available:
	- Place Searches return a list of places based on a user's location or search string.
	- Place Details requests return more detailed information about a specific Place, including user reviews.
	- Place Add allow you to supplement the data in Google's Places database with data from your application.
	- Place Photos gives you access to the millions of Place related photos stored in Google's Place database.
	- Place Autocomplete can be used to automatically fill in the name and/or address of a place as you type.
	- Query Autocomplete can be used to provide a query prediction service for text-based geographic searches, by returning suggested queries as you type.
- Each of the services is accessed as an HTTP request, and returns either an JSON or XML response. All requests to a Places service must use the https:// protocol, and include an API key.

###example Place search GET request:
`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.783, -122.416&radius=500&types=place&name=park&key=SERVERKEYHERE`

###response body:

```json
{
  "html_attributions": [],
  "results": [
    {
      "geometry": {
        "location": {
          "lat": 37.7853715,
          "lng": -122.4181453
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
      "id": "28f2fb5f0f2b7913a185a191ea387a125b8ea6b2",
      "name": "Sergeant John Macaulay Park",
      "photos": [
        {
          "height": 2448,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/116925116332960548099/photos\">Elliot Schwartz</a>"
          ],
          "photo_reference": "CmRdAAAAajR2h5CdKMIxclv69SBNi74QejiAgjlJwvYyKnUuWY-nMT4roPvD735NnprTebwfgwohWgidfjHBVk7juW3jU6eudNx4Xbg2vKSV5p62axRiT7p2GPAxy0B6kHV7YT4-EhBH91EyLko6fNmGjJLDcjs2GhRpQIZKb5gI8FotAV4DkZXas5mIuw",
          "width": 3264
        }
      ],
      "place_id": "ChIJ42c_NJGAhYARM2H6TLpooJs",
      "reference": "CnRvAAAAj4JkftxNIxIu7yoQ8xgQgmL7w1grzJYt0A8ozfHD8gIEAmIbS5RoY0dPnWbUS3jWvr3nM5KFqcjIl0ycyk5_bX6JyduY0i2OfW1XUuue5rW6Y9rLn9Ja43X5tKkqEqEZtVMYX5lfEy4TL-Q9xd3mcBIQXuMMmmYrx176xiC7yqG8EhoUWVNtbE6TghHtTLoXxdmXt4CWtXI",
      "scope": "GOOGLE",
      "types": [
        "park",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "San Francisco"
    },
    {
      "geometry": {
        "location": {
          "lat": 37.78429139999999,
          "lng": -122.4122163
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
      "id": "ed00b81ea5552a8240c9c62de16e87f64bf91b93",
      "name": "Father Alfred E. Boeddeker Park",
      "photos": [
        {
          "height": 2448,
          "html_attributions": [
            "<a href=\"https://maps.google.com/maps/contrib/108673059277097287288/photos\">Mo Devlin</a>"
          ],
          "photo_reference": "CmRdAAAAEluWemMVYo-ZA46IUvYGXQBzRYZ_Hij2lcZyaM8ATCiWP12V0_nYG6bbJajfwT5rGBh97ilUMgzBLCxtd6T_lyQOJH193dn1uIf9mNs8LZVX6aEUx0PHpjKNz-KeuMbDEhDZbaXcvnVjf9SIomhTnZgXGhQntX5NVP_T-rdiGNbBlR1XkmOpVQ",
          "width": 3264
        }
      ],
      "place_id": "ChIJI3Iy5Y-AhYARThxWGoZAMgI",
      "rating": 4,
      "reference": "CoQBcgAAAPDBWNSMTbJ66M7bA_kccaJfR_h5FiebGUfD5ltYLk8bYJEQjuPwoXVkogNqy0q5efLFPgXFLSZWzKPMZIkM7hJ22hgZHdzyaSm_UgnN_JyIpwWBjBZzuU7WzLFEOOcMgIbZk0ztreV06SRcR3Vu3HnG3Ea8Dbls0C7sKLWLEO1VEhAusbFMBCjtZZDOUo5ImwASGhSvxXsNXXh9cUmK3xSp0jS6vrYzuw",
      "scope": "GOOGLE",
      "types": [
        "park",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "295 Eddy Street, San Francisco"
    },
    {
      "geometry": {
        "location": {
          "lat": 37.7812334,
          "lng": -122.4098282
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
      "id": "b5f790ff9bf3d392257e643f7ffdd8494edf7f21",
      "name": "Mini-Park",
      "place_id": "ChIJVwtAX4SAhYARIA3dvWc_bj4",
      "reference": "CmRcAAAAh1mf5NAbeah3nQHsOrdO-zRDM_zY1_ZH2O2EFuCnp_dZUZ4dN6WbtBKEcszgspglzDz4OMwM8bFQG4P9efmriEVVRWYCYa8C_G9OwIzrhkDMTfPEKmYwjs9H3jcLpsGyEhBSH48XMR71-sQiKEYkTaEGGhSbi9HPjpjzG_6RRX2vna5kTC4CCw",
      "scope": "GOOGLE",
      "types": [
        "park",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "520 Jessie Street, San Francisco"
    },
    {
      "geometry": {
        "location": {
          "lat": 37.7773071,
          "lng": -122.4098711
        }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
      "id": "cf620ea3e007640397f4b9878c512ace276ad8ee",
      "name": "Howard & Langton Mini Park",
      "place_id": "ChIJActzVYKAhYARBZC1Fr87eIE",
      "reference": "CnRuAAAAyw8VVITnoaqADwfEaO82UM1Y3ub9w-MCG4QC1VQ3WyBraprSgwEhVEZ3SHmpEVsEesKg0O67c74PUB01zf_a8kxa9ifM3soQZraTwvBdMJhq5hLsKPof1ri64rwJQFuHIdkV9LX-5ZiIRH3wkyfeKBIQFcVUs3ih49LKT80_2NM5vhoUTcmAao5OW2QgiySKpMJdkio2LWY",
      "scope": "GOOGLE",
      "types": [
        "park",
        "point_of_interest",
        "establishment"
      ],
      "vicinity": "San Francisco"
    }
  ],
  "status": "OK"
}
```