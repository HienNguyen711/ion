import { Component } from '@angular/core';

import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {UsersListPage} from '../userslist/userslist';
import {ProfilePage} from '../profile/profile';
import {OrganisationsListPage} from '../organisationlist/organisationlist';
import {AboutPage} from '../about/about';
import {UserProfilePage} from '../userprofile/userprofile';
import {TutorialPage} from '../tutorial/tutorial';

@Component({
  selector:'Tabspage',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  menu_is_open = false;
  tab1Root: any = MyEvents;
  tab2Root: any = OrganisationsListPage;
  tab3Root: any = ProfilePage;
 tab4Root:any = TutorialPage;
  constructor() {

  }

    togglePopupMenu() {
    return this.menu_is_open = !this.menu_is_open;
  };

  goToAccount() {
    alert('Account clicked.');
    this.togglePopupMenu();
  }

  goToHome() {
    alert('Home clicked.');
    this.togglePopupMenu();
  }

  goToCups() {
    alert('Cups clicked.');
    this.togglePopupMenu();
  }

  goToLeaderboard() {
    alert('Leaderboard clicked.');
    this.togglePopupMenu();
  }

  goToHelp() {
    alert('Help clicked.');
    this.togglePopupMenu();
  }

  goToShop() {
    alert('Shop clicked.');
    this.togglePopupMenu();
  }
}
