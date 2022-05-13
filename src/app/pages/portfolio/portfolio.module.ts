import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioPageRoutingModule } from './portfolio-routing.module';

import { PortfolioPage } from './portfolio.page';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { BackgroundPictureComponent } from 'src/app/components/background-picture/background-picture.component';
import { ContentComponent } from 'src/app/components/content/content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfolioPageRoutingModule

  ],
  declarations: [PortfolioPage,
    NavbarComponent,
    BackgroundPictureComponent,
    ContentComponent
  ]
})
export class PortfolioPageModule {}
