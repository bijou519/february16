import { Component, OnInit } from '@angular/core';
import { mapJSON } from '../../../assets/locations';
import { mapStyles } from '../../../assets/map.styles';

declare var google : any;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  title = 'Maps';
  constructor() { }
  
    locations = mapJSON;
    
    ngOnInit() {
        var mapProp = {
            center: new google.maps.LatLng(44.9396861,-93.1760935),
            zoom: 11,
            styles: mapStyles,
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
                {position: this.locations[i].coords, 
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
