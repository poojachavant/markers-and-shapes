import { Component, OnInit,ViewChild } from '@angular/core';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
declare const google: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild("map") mapElement: any;
  map: any;
  location: any;

  constructor() { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(24.886, -70.268),
      zoom: 5,
      mapTypeId: "satellite",
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );
    // Define the LatLng coordinates for the polygon's path.
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    // add editable polygon
    // const bermudaTriangle = new google.maps.Polygon({
    //   paths: triangleCoords,
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    //   editable: true,
    //   draggable: true
    // });
    // bermudaTriangle.setMap(this.map);

    // add marker with title
    // var marker = new google.maps.Marker({
    //   position: new google.maps.LatLng(33.755489, -84.401993),
    //   map: this.map,
    //   title: "Atlanta"
    // });
    // marker.setMap(this.map);


    this.location = [
      { lat: -31.56391, lng: 147.154312 },
      { lat: -33.718234, lng: 150.363181 },
      { lat: -33.727111, lng: 150.371124 },
      { lat: -33.848588, lng: 151.209834 },
      { lat: -33.851702, lng: 151.216968 },
      { lat: -34.671264, lng: 150.863657 },
      { lat: -35.304724, lng: 148.662905 },
      { lat: -36.817685, lng: 175.699196 },
      { lat: -36.828611, lng: 175.790222 },
      { lat: -37.75, lng: 145.116667 },
      { lat: -37.759859, lng: 145.128708 },
      { lat: -37.765015, lng: 145.133858 },
      { lat: -37.770104, lng: 145.143299 },
      { lat: -37.7737, lng: 145.145187 },
      { lat: -37.774785, lng: 145.137978 },
      { lat: -37.819616, lng: 144.968119 },
      { lat: -38.330766, lng: 144.695692 },
      { lat: -39.927193, lng: 175.053218 },
      { lat: -41.330162, lng: 174.865694 },
      { lat: -42.734358, lng: 147.439506 },
      { lat: -42.734358, lng: 147.501315 },
      { lat: -42.735258, lng: 147.438 },
      { lat: -43.999792, lng: 170.463352 },
    ];

    // Add some markers to the map.
    var markers = this.location.map((position, i) => {
      
      const marker = new google.maps.Marker({
        position,
      
      });
      return marker;
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer({ markers, map: this.map });
    
  }
}

