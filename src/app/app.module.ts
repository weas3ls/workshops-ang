import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbAutocompleteModule } from 'mdb-angular-ui-kit/autocomplete';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbChartModule } from 'mdb-angular-ui-kit/charts';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDatepickerModule } from 'mdb-angular-ui-kit/datepicker';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbInfiniteScrollModule } from 'mdb-angular-ui-kit/infinite-scroll';
import { MdbLazyLoadingModule } from 'mdb-angular-ui-kit/lazy-loading';
import { MdbLightboxModule } from 'mdb-angular-ui-kit/lightbox';
import { MdbLoadingModule } from 'mdb-angular-ui-kit/loading';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbNotificationModule } from 'mdb-angular-ui-kit/notification';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRatingModule } from 'mdb-angular-ui-kit/rating';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollbarModule } from 'mdb-angular-ui-kit/scrollbar';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbSelectModule } from 'mdb-angular-ui-kit/select';
import { MdbSidenavModule } from 'mdb-angular-ui-kit/sidenav';
import { MdbSmoothScrollModule } from 'mdb-angular-ui-kit/smooth-scroll';
import { MdbStepperModule } from 'mdb-angular-ui-kit/stepper';
import { MdbStickyModule } from 'mdb-angular-ui-kit/sticky';
import { MdbTableModule } from 'mdb-angular-ui-kit/table';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTimepickerModule } from 'mdb-angular-ui-kit/timepicker';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/account/login/login.component';
import { MyAccountComponent } from './components/account/my-account/my-account.component';
import { ChangePasswordComponent } from './components/account/change-password/change-password.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        LoginComponent,
        MyAccountComponent,
        ChangePasswordComponent,
        CreateAccountComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdbAccordionModule,
        MdbAutocompleteModule,
        MdbCarouselModule,
        MdbChartModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDatepickerModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbInfiniteScrollModule,
        MdbLazyLoadingModule,
        MdbLightboxModule,
        MdbLoadingModule,
        MdbModalModule,
        MdbNotificationModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRatingModule,
        MdbRippleModule,
        MdbScrollbarModule,
        MdbScrollspyModule,
        MdbSelectModule,
        MdbSidenavModule,
        MdbSmoothScrollModule,
        MdbStepperModule,
        MdbStickyModule,
        MdbTableModule,
        MdbTabsModule,
        MdbTimepickerModule,
        MdbTooltipModule,
        MdbValidationModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidenavComponent
    ]
})
export class AppModule { }
