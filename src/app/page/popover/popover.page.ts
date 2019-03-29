import { Component, OnInit } from '@angular/core';
import {PopoverController,NavController, NavParams} from '@ionic/angular';
import { RecenterPage } from '../recenter/recenter.page';
import { MarkerPage } from '../marker/marker.page';
import { WaypointPage } from '../waypoint/waypoint.page';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
   passId=null;
  constructor(public navParam: NavParams,public popoverController: PopoverController,public popoverController1: PopoverController,public popoverController2: PopoverController,public popoverController3: PopoverController) { }

  ngOnInit() {
    this.passId=this.navParam.get("custom_id");
  }

  closePopover(){
    this.popoverController.dismiss();
  }
async presentPopover(ev: any) {
  const popover = await this.popoverController.create({
    component: RecenterPage,
    event: ev,
  });
  return await popover.present();
}
async presentPopover1(ev: any) {
  const popover = await this.popoverController1.create({
    component:MarkerPage ,
    event: ev,
  });
  return await popover.present();
}
async presentPopover2(ev: any) {
  const popover = await this.popoverController2.create({
    component: ModalPage,
    event: ev,
  });
  return await popover.present();
}
async presentPopover3(ev: any) {
  const popover = await this.popoverController3.create({
    component: WaypointPage,
    event: ev,
  });
  return await popover.present();
}
}