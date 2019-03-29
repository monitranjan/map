import { Component , ElementRef, NgZone, ViewChild} from '@angular/core';
import {PopoverController,ModalController} from '@ionic/angular';
import { ModalPage } from '../page/modal/modal.page';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { PopoverPage } from '../page/popover/popover.page';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyCAmKtc9BBtDWS2Rv7aHbcv_-9Qfs8LhZs';
  
  value=0;
  constructor( public zone: NgZone, public geolocation: Geolocation,public modalcontroller:ModalController,public popoverController: PopoverController) {
    // const script = document.createElement('script');
    // script.id = 'googleMap';
    // if (this.apiKey) {
    //     script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    // } else {
    //     script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    // }
    // document.head.appendChild(script);
    /*Get Current location*/
    this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });
    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 21,
        mapTypeControl: false
    };
    setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
}
   
  async presentModal() {
    const modal = await this.modalcontroller.create({
      component: ModalPage,
      componentProps: { value: this.value}
    });
    return await modal.present();
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      componentProps: {custom_id : this.value}
    });
    return await popover.present();
  }

}


