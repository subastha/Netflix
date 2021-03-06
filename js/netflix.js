(function(){
    "use strict";

    var categories = [
        { name : "Action & Adventure" , code : 1365 },
        {name : "Action Comedies", code : 43040},
        {name : "Action Sci-Fi & Fantasy", code : 1568},
        {name : "Action Thrillers", code : 43048},
        {name : "Adult Animation", code : 11881},
        {name : "African Movies", code : 3761},
        {name : "Alien Sci-Fi", code : 3327},
        {name : "Animal Tales", code : 5507},
        {name : "Anime", code : 7424},
        {name : "Anime Action", code : 2653},
        {name : "Anime Comedies", code : 9302},
        {name : "Anime Dramas", code : 452},
        {name : "Anime Fantasy", code : 11146},
        {name : "Anime Features", code : 3063},
        {name : "Anime Horror", code : 10695},
        {name : "Anime Sci-Fi", code : 2729},
        {name : "Anime Series", code : 6721},
        {name : "Art House Movies", code : 29764},
        {name : "Asian Action Movies", code : 77232},
        {name : "Australian Movies", code : 5230},
        {name : "B-Horror Movies", code : 8195},
        {name : "Baseball Movies", code : 12339 },
        {name : "Basketball Movies", code : 12762},
        {name : "Belgian Movies", code : 262},
        {name : "Biographical Documentaries", code : 3652},
        {name : "Biographical Dramas", code : 3179},
        {name : "Boxing Movies", code : 12443},
        {name : "British Movies", code : 10757},
        {name : "British TV Shows", code : 52117},
        {name : "Campy Movies", code : 1252},
        {name : "Children & Family Movies", code : 783},
        {name : "Chinese Movies", code : 3960},
        {name : "Classic Action & Adventure", code : 46576},
        {name : "Classic Comedies", code : 31694},
        {name : "Classic Dramas", code : 29809},
        {name : "Classic Foreign Movies", code : 32473},
        {name : "Classic Movies", code : 31574},
        {name : "Classic Musicals", code : 32392},
        {name : "Classic Romantic Movies", code : 31273},
        {name : "Classic Sci-Fi & Fantasy", code : 47147},
        {name : "Classic Thrillers", code : 46588},
        {name : "Classic TV Shows", code : 46553},
        {name : "Classic War Movies", code : 48744},
        {name : "Classic Westerns", code : 47465},
        {name : "Comedies", code : 6548},
        {name : "Comic Book and Superhero Movies", code : 10118},
        {name : "Country & Western/Folk", code : 1105},
        {name : "Courtroom Dramas", code : 2748},
        {name : "Creature Features", code : 6895},
        {name : "Crime Action & Adventure", code : 9584},
        {name : "Crime Documentaries", code : 9875},
        {name : "Crime Dramas", code : 6889},
        {name : "Crime Thrillers", code : 10499},
        {name : "Crime TV Shows", code : 26146},
        {name : "Cult Comedies", code : 9434 },
        {name : "Cult Horror Movies", code :10944},
        {name : "Cult Movies:Cult TV Shows", code : 74652},
        {name : "Dark Comedies", code : 869},
        {name : "Deep Sea Horror Movies", code : 45028},
        {name : "Disney", code : 67673},
        {name : "Disney Musicals", code : 59433},
        {name : "Documentaries", code : 6839},
        {name : "Dramas", code : 5763},
        {name : "Dramas based on Books", code : 4961},
        {name : "Dramas based on real life", code : 3653},
        {name : "Dutch Movies", code : 10606},
        {name : "Eastern European Movies", code : 5254},
        {name : "Education for Kids", code : 10659},
        {name : "Epics", code : 52858},
        {name : "Experimental Movies", code : 11079},
        {name : "Faith & Spirituality", code : 26835},
        {name : "Faith & Spirituality Movies", code : 52804},
        {name : "Family Features", code : 51056},
        {name : "Fantasy Movies", code : 9744},
        {name : "Film Noir", code : 7687},
        {name : "Food & Travel TV", code : 72436},
        {name : "Football Movies", code : 12803},
        {name : "Foreign Action & Adventure", code : 11828},
        {name : "Foreign Comedies", code : 4426},
        {name : "Foreign Documentaries", code : 5161},
        {name : "Foreign Dramas", code : 2150},
        {name : "Foreign Gay & Lesbian Movies", code : 8243},
        {name : "Foreign Horror Movies", code : 8654},
        {name : "Foreign Movies", code : 7462},
        {name : "Foreign Sci-Fi & Fantasy", code : 6485},
        {name : "Foreign Thrillers", code : 10306},
        {name : "French Movies", code : 58807},
        {name : "Gangster Movies", code : 31851},
        {name : "Gay & Lesbian Dramas", code : 500},
        {name : "German Movies", code : 58886},
        {name : "Greek Movies", code : 61115},
        {name : "Historical Documentaries", code : 5349},
        {name : "Horror Comedy", code : 89585},
        {name : "Horror Movies", code : 8711},
        {name : "Independent Action & Adventure", code : 11804},
        {name : "Independent Comedies", code : 4195},
        {name : "Independent Dramas", code :384 },
        {name : "Independent Movies", code : 7077},
        {name : "Independent Thrillers", code : 3269},
        {name : "Indian Movies", code : 10463},
        {name : "Irish Movies", code : 58750},
        {name : "Italian Movies", code : 8221},
        {name : "Japanese Movies", code : 10398},
        {name : "Jazz & Easy Listening", code : 10271},
        {name : "Kids Faith & Spirituality", code : 751423},
        {name : "Kids Music", code : 52843},
        {name : "Kids’ TV", code : 27346},
        {name : "Korean Movies", code : 5685},
        {name : "Korean TV Shows", code : 67879},
        {name : "Late Night Comedies", code : 1402},
        {name : "Latin American Movies", code : 1613},
        {name : "Latin Music", code : 10741},
        {name : "Martial Arts Movies", code : 8985},
        {name : "Martial Arts, Boxing & Wrestling", code :6695},
        {name : "Middle Eastern Movies", code : 5875},
        {name : "Military Action & Adventure", code : 2125},
        {name : "Military Documentaries", code : 4006},
        {name : "Military Dramas", code :11 },
        {name : "Military TV Shows", code : 25804},
        {name : "Miniseries", code : 4814},
        {name : "Mockumentaries", code :26 },
        {name : "Monster Movies", code : 947},
        {name : "Movies based on children’s books", code : 10056},
        {name : "Movies for ages 0 to 2", code : 6796},
        {name : "Movies for ages 2 to 4", code : 6218},
        {name : "Movies for ages 5 to 7", code : 5455},
        {name : "Movies for ages 8 to 10", code : 561},
        {name : "Movies for ages 11 to 12", code : 6962},
        {name : "Music & Concert Documentaries", code :90361},
        {name : "Music", code : 1701},
        {name : "Musicals", code : 13335},
        {name : "Mysteries", code : 9994},
        {name : "New Zealand Movies", code : 63782},
        {name : "Period Pieces", code : 12123},        
        {name : "Political Comedies", code : 2700},
        {name : "Political Documentaries", code : 7018},
        {name : "Political Dramas", code : 6616},
        {name : "Political Thrillers", code : 10504},
        {name : "Psychological Thrillers", code : 5505},
        {name : "Quirky Romance", code : 36103},
        {name : "Reality TV", code : 9833},
        {name : "Religious Documentaries", code : 10005},
        {name : "Rock & Pop Concerts", code : 3278},
        {name : "Romantic Comedies", code : 5475},
        {name : "Romantic Dramas", code : 1255},
        {name : "Romantic Favorites", code : 502675},
        {name : "Romantic Foreign Movies", code : 7153},
        {name : "Romantic Independent Movies", code : 9916},
        {name : "Romantic Movies", code : 8883},
        {name : "Russian", code : 11567},
        {name : "Satanic Stories", code : 6998},
        {name : "Satires", code : 4922},
        {name : "Scandinavian Movies", code : 9292},
        {name : "Sci-Fi & Fantasy", code : 1492},
        {name : "Sci-Fi Adventure", code : 6926},
        {name : "Sci-Fi Dramas", code : 3916},
        {name : "Sci-Fi Horror Movies", code : 1694},
        {name : "Sci-Fi Thrillers", code : 11014},
        {name : "Science & Nature Documentaries", code : 2595},
        {name : "Science & Nature TV", code : 52780},
        {name : "Screwball Comedies", code : 9702},
        {name : "Showbiz Dramas", code : 5012},
        {name : "Showbiz Musicals", code :13573 },
        {name : "Silent Movies", code : 53310},
        {name : "Slapstick Comedies", code : 10256},
        {name : "Slasher and Serial Killer Movies", code : 8646},
        {name : "Soccer Movies", code : 12549},
        {name : "Social & Cultural Documentaries", code : 3675},
        {name : "Social Issue Dramas", code : 3947},
        {name : "Southeast Asian Movies", code : 9196},
        {name : "Spanish Movies", code : 58741},
        {name : "Spiritual Documentaries", code : 2760},
        {name : "Sports & Fitness", code : 9327},
        {name : "Sports Comedies", code : 5286},
        {name : "Sports Documentaries", code : 180},
        {name : "Sports Dramas", code : 7243},
        {name : "Sports Movies", code : 4370},
        {name : "Spy Action & Adventure", code : 10702},
        {name : "Spy Thrillers", code : 9147},
        {name : "Stage Musicals", code : 55774},
        {name : "Stand-up Comedy", code : 11559},
        {name : "Steamy Romantic Movies", code : 35800},
        {name : "Steamy Thrillers", code : 972},
        {name : "Supernatural Horror Movies", code : 42023},
        {name : "Supernatural Thrillers", code : 11140},
        {name : "Tearjerkers", code : 6384},
        {name : "Teen Comedies", code : 3519},
        {name : "Teen Dramas", code : 9299},
        {name : "Teen Screams", code :52147 },
        {name : "Teen TV Shows", code : 60951},
        {name : "Thrillers", code : 8933},
        {name : "Travel & Adventure Documentaries", code : 1159},
        {name : "TV Action & Adventure", code : 10673},
        {name : "TV Cartoons", code : 11177},
        {name : "TV Comedies", code : 10375},
        {name : "TV Documentaries", code : 10105},
        {name : "TV Dramas", code :11714 },
        {name : "TV Horror", code :83059 },
        {name : "TV Mysteries", code : 4366},
        {name : "TV Sci-Fi & Fantasy", code : 1372},
        {name : "TV Shows", code : 83},
        {name : "Urban & Dance Concerts", code :9472},
        {name : "Vampire Horror Movies", code : 75804},
        {name : "Werewolf Horror Movies", code :75930 },
        {name : "Westerns", code : 7700},
        {name : "World Music Concerts", code : 2856},
        {name : "Zombie Horror Movies", code : 75405}
    ];

    var domCategoriesList = document.getElementById('categoriesList');
    var link = document.createElement('a');
    link.setAttribute('class', 'list-group-item');
    link.setAttribute('href', 'www.netflix.com');
    link.innerText = 'Go to Netflix';
    domCategoriesList.appendChild(link);

    categories.forEach(function(category, index, categories){
        var link = document.createElement('a');
        link.setAttribute('class', 'list-group-item');
        link.setAttribute('href', 'https://www.netflix.com/browse/genre/' + category.code);
        link.setAttribute('target', '_blank');

        var span = document.createElement('span');
        span.innerText = category.name;
        link.appendChild(span);
        domCategoriesList.appendChild(link);

    }, domCategoriesList);
    
        $('#categoriesList').btsListFilter('#searchinput', {itemChild: 'span'});

})();