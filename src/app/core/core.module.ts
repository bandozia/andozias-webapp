import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material.module';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { GroupManagerComponent } from './group-manager/group-manager.component';
import { CreateGroupComponent } from './group-manager/create-group/create-group.component';
import { InviteMemberComponent } from './group-manager/invite-member/invite-member.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  declarations: [
    HeaderComponent, 
    UserMenuComponent, 
    GroupManagerComponent, 
    CreateGroupComponent, 
    InviteMemberComponent
  ],
  imports: [
    CommonModule,      
    ReactiveFormsModule, 
    FlexLayoutModule,
    AppMaterialModule,
    SharedComponentsModule
  ],
  exports: [
    HeaderComponent
  ]  
})
export class CoreModule { }
