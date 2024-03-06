import { Component, OnInit  } from '@angular/core';
import { ActionSheetController, IonAlert } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private alertController: AlertController,private route: ActivatedRoute,private router: Router) {
  
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      if (params["saved"]==undefined)
        return;
      this.presentAlert().then(value=>{
        this.router.navigate([], {
          queryParams: {
            'saved': null,
          },
          queryParamsHandling: 'merge'
        })
      })
    });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Änderungen wurden Gespeichert!',
      subHeader: '',
      message: '',
      buttons: ['Weiter'],
    });

    await alert.present();
}
}
