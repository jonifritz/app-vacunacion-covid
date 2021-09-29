import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { AboutComponent } from './about/about.component';
import { NzTagModule } from 'ng-zorro-antd/tag';


@NgModule({
  imports:
    [
      CommonModule,
      WelcomeRoutingModule,
      IconsProviderModule,
      NzLayoutModule,
      NzMenuModule,
      NzFormModule,
      NzInputModule,
      NzButtonModule,
      NzSelectModule,
      NzFormModule,
      NzMessageModule, 
      FormsModule, 
      ReactiveFormsModule, 
      NzTableModule, 
      NzPageHeaderModule,
      NzDescriptionsModule,
      NzTagModule,

    ],

  declarations: [WelcomeComponent, RegisterComponent, IndexComponent, EditComponent, AboutComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
