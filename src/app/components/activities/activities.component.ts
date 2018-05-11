import { Component, OnInit } from '@angular/core';
declare var google : any;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  title = 'Maps';
  constructor() { }
    locations = [
        {
            name: "Norton Shores, MI",
            coord: {
                lng: -86.276114,
                lat: 43.165996
            }
        }, {
            name: "Detroit, MI",
            coord: {
                lng: -83.045754,
                lat: 42.331427
            }
        }, {
            name: "Traverse City, MI",
            coord: {
                lng: -85.620632,
                lat: 44.763057
            }
        }, {
            name: "Milford, MI",
            coord: {
                lng: -83.599386,
                lat: 42.593643
            }
        }, {
            name: "Petoskey, MI",
            coord: {
                lng: -84.95533,
                lat: 45.373343
            }
        }, {
            name: "Marquette, MI",
            coord: {
                lng: -87.395417,
                lat: 46.543544
            }
        }, {
            name: "Grand Marais, MI",
            coord: {
                lng: -85.987303,
                lat: 46.669496
            }
        }, {
            name: "Grand Rapids, MI",
            coord: {
                lng: -85.668086,
                lat: 42.96336
            }
        }, {
            name: "Milwaukee, WI",
            coord: {
                lng: -87.907104,
                lat: 43.028745
            }
        }, {
            name: "Paris, France",
            coord: {
                lng: 2.351074,
                lat: 48.864715
            }
        }, {
            name: "Toledo, OH",
            coord: {
                lng: -83.555212,
                lat: 41.663938
            }
        }, {
            name: "Ann Arbor, MI",
            coord: {
                lng: -83.7323,
                lat: 42.265114
            }
        }, {
            name: "Lansing, MI",
            coord: {
                lng: -84.627686,
                lat: 42.730874
            }
        }, {
            name: "Chicago, IL",
            coord: {
                lng: -87.632446,
                lat: 41.877741
            }
        }, {
            name: "Holland, MI",
            coord: {
                lng: -86.138306,
                lat: 42.789354
            }
        }, {
            name: "Grand Haven, MI",
            coord: {
                lng: -86.248169,
                lat: 43.080925
            }
        }, {
            name: "Allendale, MI",
            coord: {
                lng: -85.954285,
                lat: 42.986567
            }
        }, {
            name: "Mackinac Island, MI",
            coord: {
                lng: -84.622192,
                lat: 45.861325
            }
        }, {
            name: "Mackinaw City, MI",
            coord: {
                lng: -84.732056,
                lat: 45.800084
            }
        }, {
            name: "Niagra Falls, ON, Canada",
            coord: {
                lng: -79.0765,
                lat: 43.078763
            }
        }, {
            name: "San Diego, CA",
            coord: {
                lng: -117.147217,
                lat: 32.713355
            }
        }, {
            name: "Seattle, WA",
            coord: {
                lng: -122.330017,
                lat: 47.598755
            }
        }, {
            name: "Los Angeles, CA",
            coord: {
                lng: -118.344727,
                lat: 34.052659
            }
        }, {
            name: "Cancun, Mexico",
            coord: {
                lng: -86.835937,
                lat: 21.125498
            }
        }, {
            name: "Orlando, FL",
            coord: {
                lng: -81.342773,
                lat: 28.574874
            }
        }, {
            name: "The Bahamas",
            coord: {
                lng: -78.00293,
                lat: 24.567108
            }
        }, {
            name: "Fort Lauderdale, FL",
            coord: {
                lng: -80.222168,
                lat: 26.135714
            }
        }, {
            name: "Annapolis, MD",
            coord: {
                lng: -76.574707,
                lat: 38.959409
            }
        }, {
            name: "Washington D.C., USA",
            coord: {
                lng: -77.038879,
                lat: 38.914544
            }
        }, {
            name: "Plainfield, NJ",
            coord: {
                lng: -74.399414,
                lat: 40.622292
            }
        }, {
            name: "Providence, RI",
            coord: {
                lng: -71.411133,
                lat: 41.824549
            }
        }, {
            name: "Naperville, IL",
            coord: {
                lng: -88.324585,
                lat: 41.783601
            }
        }, {
            name: "Wisconsin Dells, WI",
            coord: {
                lng: -89.752808,
                lat: 43.671845
            }
        }, {
            name: "Clevelend, OH",
            coord: {
                lng: -81.68335,
                lat: 41.47566
            }
        }, {
            name: "Sandusky, OH",
            coord: {
                lng: -82.738037,
                lat: 41.479776
            }
        }, {
            name: "Boston, MA",
            coord: {
                lng: -71.059773,
                lat: 42.358431
            }
        }, {
            name: "Canton, OH",
            coord: {
                lng: -81.370239,
                lat: 40.78886
            }
        }, {
            name: "Castaway Cay, Bahamas",
            coord: {
                lng: -77.53328,
                lat: 26.093682
            }
        }, {
            name: "London, England, UK",
            coord: {
                lng: -0.131836,
                lat: 51.522416
            }
        }, {
            name: "Rome, Italy",
            coord: {
                lng: 12.436523,
                lat: 41.902277
            }
        }, {
            name: "Mystic River, CT",
            coord: {
                lng: -71.952456,
                lat: 41.3987
            }
        }, {
            name: "Cape Canaveral, FL",
            coord: {
                lng: -80.603611,
                lat: 28.388333
            }
        }, {
            name: "Friday Harbor, WA",
            coord: {
                lng: -123.017124,
                lat: 48.534266
            }
        }, {
            name: "Cape Cod, MA",
            coord: {
                lng: -70.368342,
                lat: 41.795275
            }
        }, {
            name: "Elizabeth, NJ",
            coord: {
                lng: -74.210701,
                lat: 40.663992
            }
        }, {
            name: "Mt Pleasant, MI",
            coord: {
                lng: -84.767514,
                lat: 43.597807
            }
        }, {
            name: "Burton, OH",
            coord: {
                lng: -81.1451,
                lat: 41.470609
            }
        }, {
            name: "Tulum, Quintana Roo, Mexico",
            coord: {
                lng: -87.466,
                lat: 20.212
            }
        }, {
            name: "Chichen-itza, YucatÃ¡n, Mexico",
            coord: {
                lng: -88.571568,
                lat: 20.678392
            }
        }, {
            name: "St Ignace, MI",
            coord: {
                lng: -84.727828,
                lat: 45.868624
            }
        }, {
            name: "Tahquamenon Falls, MI",
            coord: {
                lng: -85.255365,
                lat: 46.57435
            }
        }, {
            name: "San Francisco, CA",
            coord: {
                lng: -122.419416,
                lat: 37.77493
            }
        }, {
            name: "New York, NY",
            coord: {
                lng: -74.005973,
                lat: 40.714353
            }
        }, {
            name: "Portland, OR",
            coord: {
                lng: -122.676207,
                lat: 45.523452
            }
        }, {
            name: "Seaside, OR",
            coord: {
                lng: -123.922638,
                lat: 45.993164
            }
        }, {
            name: "Tillamook, OR",
            coord: {
                lng: -123.844014,
                lat: 45.456216
            }
        }, {
            name: "Aberdeen, WA",
            coord: {
                lng: -123.815722,
                lat: 46.975371
            }
        }, {
            name: "Eureka, CA",
            coord: {
                lng: -124.163673,
                lat: 40.802071
            }
        }, {
            name: "Reedsport, OR",
            coord: {
                lng: -124.096778,
                lat: 43.702339
            }
        }, {
            name: "Cloverdale, CA",
            coord: {
                lng: -123.017223,
                lat: 38.805462
            }
        }, {
            name: "Michigan City, IN",
            coord: {
                lng: -86.89503,
                lat: 41.707539
            }
        }, {
            name: "Kalamazoo, MI",
            coord: {
                lng: -85.587229,
                lat: 42.291707
            }
        }, {
            name: "New Buffalo, MI",
            coord: {
                lng: -86.743915,
                lat: 41.79393
            }
        }, {
            name: "Lyon, France",
            coord: {
                lng: 4.835659,
                lat: 45.764043
            }
        }, {
            name: "Villeurbanne, France",
            coord: {
                lng: 4.890171,
                lat: 45.771944
            }
        }, {
            name: "Munich, Germany",
            coord: {
                lng: 11.581981,
                lat: 48.135125
            }
        }, {
            name: "Dachau, Germany",
            coord: {
                lng: 11.433902,
                lat: 48.262998
            }
        }, {
            name: "Bregenz, Austria",
            coord: {
                lng: 9.74231,
                lat: 47.50075
            }
        }, {
            name: "E.Leclerc Ferneydis",
            coord: {
                lng: 6.096134,
                lat: 46.244084
            }
        }, {
            name: "Point Pleasant Beach, NJ",
            coord: {
                lng: -74.047915,
                lat: 40.091227
            }
        }, {
            name: "Marseille, France",
            coord: {
                lng: 5.36978,
                lat: 43.296482
            }
        }, {
            name: "ChÃ¢teau d'If, France",
            coord: {
                lng: 5.325086,
                lat: 43.279781
            }
        }, {
            name: "Longchamp Palace, France",
            coord: {
                lng: 5.387862,
                lat: 43.30109
            }
        }, {
            name: "Grenoble, France",
            coord: {
                lng: 5.724524,
                lat: 45.188529
            }
        }, {
            name: "Geneva, Switzerland",
            coord: {
                lng: 6.142296,
                lat: 46.198392
            }
        }, {
            name: "Dijon, France",
            coord: {
                lng: 5.04148,
                lat: 47.322047
            }
        }, {
            name: "Venice, Italy",
            coord: {
                lng: 12.315515,
                lat: 45.440847
            }
        }, {
            name: "Edinburgh, Scotland, UK",
            coord: {
                lng: -3.188267,
                lat: 55.953252
            }
        }, {
            name: "Amsterdam, Netherlands",
            coord: {
                lng: 4.895168,
                lat: 52.370216
            }
        }, {
            name: "Barcelona, Spain",
            coord: {
                lng: 2.173403,
                lat: 41.385064
            }
        }, {
            name: "Linköping, Sweden",
            coord: {
                lng: 15.621373,
                lat: 58.410807
            }
        }, {
            name: "Västervik, Sweden",
            coord: {
                lng: 16.636976,
                lat: 57.757716
            }
        }, {
            name: "Norrköping, Sweden",
            coord: {
                lng: 16.192421,
                lat: 58.587745
            }
        }, {
            name: "Vadstena, Sweden",
            coord: {
                lng: 14.890234,
                lat: 58.447602
            }
        }, {
            name: "Ã–deshÃ¶g",
            coord: {
                lng: 14.653021,
                lat: 58.229105
            }
        }, {
            name: "Las Vegas, NV",
            coord: {
                lng: -115.13983,
                lat: 36.169941
            }
        }, {
            name: "Madison, WI",
            coord: {
                lng: -89.40123,
                lat: 43.073052
            }
        }, {
            name: "Copenhagen, Denmark",
            coord: {
                lng: 12.568337,
                lat: 55.676097
            }
        }, {
            name: "Dublin, Ireland",
            coord: {
                lng: -6.26031,
                lat: 53.349805
            }
        }, {
            name: "Cliffs of Moher, Ireland",
            coord: {
                lng: -9.42651,
                lat: 52.97188
            }
        }, {
            name: "Kinvarra, Ireland",
            coord: {
                lng: -8.937914,
                lat: 53.138845
            }
        }, {
            name: "Doolin, Ireland",
            coord: {
                lng: -9.373048,
                lat: 53.017444
            }
        }, {
            name: "Amsterdam Schiphol Airport, Netherlands",
            coord: {
                lng: 4.768274,
                lat: 52.310539
            }
        }, {
            name: "Stockholm Arlanda Airport, Sweden",
            coord: {
                lng: 17.923781,
                lat: 59.649762
            }
        }, {
            name: "Stockholm, Sweden",
            coord: {
                lng: 18.068581,
                lat: 59.329324
            }
        }, {
            name: "Shoreview, MN",
            coord: {
                lng: -93.147167,
                lat: 45.079133
            }
        }, {
            name: "University of Minnesota, MN",
            coord: {
                lng: -93.227728,
                lat: 44.97399
            }
        }, {
            name: "Mall of America, MN",
            coord: {
                lng: -93.241675,
                lat: 44.856253
            }
        }, {
            name: "Atlanta, GA",
            coord: {
                lng: -84.387982,
                lat: 33.748995
            }
        }, {
            name: "Stone Mountain Park, GA",
            coord: {
                lng: -84.145446,
                lat: 33.803792
            }
        }, {
            name: "Wilmington, DE",
            coord: {
                lng: -75.539788,
                lat: 39.739072
            }
        }, {
            name: "Wharton State Forest, NJ",
            coord: {
                lng: -74.726279,
                lat: 39.741412
            }
        }, {
            name: "Jersey City, NJ",
            coord: {
                lng: -74.077642,
                lat: 40.728158
            }
        }, {
            name: "Carlisle, PA",
            coord: {
                lng: -77.200274,
                lat: 40.201024
            }
        }, {
            name: "Malvern, PA",
            coord: {
                lng: -75.513812,
                lat: 40.036218
            }
        }, {
            name: "Clarion, PA",
            coord: {
                lng: -79.385322,
                lat: 41.214785
            }
        }, {
            name: "Clearfield, PA",
            coord: {
                lng: -78.439188,
                lat: 41.02728
            }
        }, {
            name: "Rehoboth Beach, DE",
            coord: {
                lng: -75.076014,
                lat: 38.720945
            }
        }, {
            name: "West Chester, PA",
            coord: {
                lng: -75.605488,
                lat: 39.960664
            }
        }, {
            name: "Haeundae Beach, Busan, South Korea",
            coord: {
                lng: 129.158547,
                lat: 35.159311
            }
        }, {
            name: "Gangnam-gu, Seoul, South Korea",
            coord: {
                lng: 127.047325,
                lat: 37.517236
            }
        }, {
            name: "Gamcheon Culture Village, Busan, South Korea",
            coord: {
                lng: 129.010595,
                lat: 35.097453
            }
        }
    ];
    ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(31.5862806,-49.6342774),
            zoom: 3,
            styles: [
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#000000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": -100
                        }, {
                            "visibility": "off"
                        }
                    ]
                }, {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#000000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": -100
                        }, {
                            "visibility": "off"
                        }
                    ]
                }, {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#000000"
                        }, {
                            "saturation": 0
                        }, {
                            "lightness": -100
                        }, {
                            "visibility": "off"
                        }
                    ]
                }, {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#ffffff"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 100
                        }, {
                            "visibility": "off"
                        }
                    ]
                }, {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#000000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": -100
                        }, {
                            "visibility": "off"
                        }
                    ]
                }, {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#ffffff"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 100
                        }, {
                            "visibility": "on"
                        }
                    ]
                }, {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#ffffff"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 100
                        }, {
                            "visibility": "on"
                        }
                    ]
                }, {
                    "featureType": "transit",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#000000"
                        }, {
                            "saturation": 0
                        }, {
                            "lightness": -100
                        }, {
                            "visibility": "off"
                        }
                    ]
                }, {
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#000000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": -100
                        }, {
                            "visibility": "off"
                        }
                    ]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#bbbbbb"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 26
                        }, {
                            "visibility": "on"
                        }
                    ]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "hue": "#dddddd"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": -3
                        }, {
                            "visibility": "on"
                        }
                    ]
                }
            ],
            mapTypeControl: false,
            zoomControl: true,
            streetViewControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        };
        var map = new google.maps.Map(document.getElementById("gmap"), mapProp);
        var mapMarkerIcon = "https://i.imgur.com/Atld4gB.png";
        var mapMarkerIconMouseover = "https://i.imgur.com/0qxTzFK.png";
        var image = {
            url: mapMarkerIcon,
            scaledSize: new google.maps.Size(25, 22)
        };
        var image2 = {
            url: mapMarkerIconMouseover,
            scaledSize: new google.maps.Size(25, 22)
        };
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < this.locations.length; i++) {
            marker = new google.maps.Marker(
                {position: this.locations[i].coord, 
                    title: this.locations[i].name, 
                    icon: image, 
                    map: map
                });

            google.maps.event.addListener(marker, 'mouseover', function() {
                this.setIcon(image2);
            });
            google.maps.event.addListener(marker, 'mouseout', function() {
                this.setIcon(image);
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                            infowindow.setContent(
                                 "<div class='infoWindowContent'>" + marker.title + "</div>"
                        );
                        infowindow.open(map, marker);
                    }
            })(marker, i));
            google.maps.event.addListener(map, 'click', function() {
                infowindow.close();
            });
        }
    }
}
