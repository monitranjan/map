import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-recenter',
  templateUrl: './recenter.page.html',
  styleUrls: ['./recenter.page.scss'],
})
export class RecenterPage  {
  autocompleteItems: any[];
  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  zone: any;
  geocoder: any;
  map: any;
  markers: any;
  constructor(){
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.geocoder = new google.maps.Geocoder;
      this.markers = [];
      this.autocomplete = { input: '' };
     this.autocompleteItems = [];
  }
  updateSearchResults(){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  selectSearchResult(item){
    this.clearMarkers();
    this.autocompleteItems = [];
  
    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        let position = {
            lat: results[0].geometry.location.lat,
            lng: results[0].geometry.location.lng
        };
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }
  clearMarkers(): any {
    throw new Error("Method not implemented.");
  }
 
}
