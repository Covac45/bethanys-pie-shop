import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PieSubscriptionComponent } from './pieSubscription/pieSubscription.component';
import { ContactComponent } from './contact/contact.component';

import { FruitpiesComponent } from './pies/fruitpies/fruitpies.component';
import { AllpiesComponent } from './pies/allpies/allpies.component';
import { SeasonalpiesComponent } from './pies/seasonalpies/seasonalpies.component';
import { CheesecakesComponent } from './pies/cheesecakes/cheesecakes.component';

import { ApplePieComponent } from './products/apple-pie/apple-pie.component';
import { BlueberryCheesecakeComponent } from './products/blueberry-cheesecake/blueberry-cheesecake.component';
import { CheesecakeComponent } from './products/cheesecake/cheesecake.component';
import { CherryPieComponent } from './products/cherry-pie/cherry-pie.component';
import { ChristmasApplePieComponent } from './products/christmas-apple-pie/christmas-apple-pie.component';
import { CranberryPieComponent } from './products/cranberry-pie/cranberry-pie.component';
import { PeachPieComponent } from './products/peach-pie/peach-pie.component';
import { PumpkinPieComponent } from './products/pumpkin-pie/pumpkin-pie.component';
import { RhurbarbPieComponent } from './products/rhurbarb-pie/rhurbarb-pie.component';
import { StrawberryCheesecakeComponent } from './products/strawberry-cheesecake/strawberry-cheesecake.component';
import { StrawberryPieComponent } from './products/strawberry-pie/strawberry-pie.component';
import { ProductDetailsComponent } from './product-page/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, title: "Home - Bethany's Pie Shop"},
    {path: 'order', component: OrderComponent, title: "Order - Bethany's Pie Shop"},
    {path: 'pieSubscription', component: PieSubscriptionComponent, title: "Pie Subscription - Bethany's Pie Shop"},
    {path: 'contact', component: ContactComponent, title: "Contact - Bethany's Pie Shop"},
    {path: 'cart', component: CartComponent, title: "Basket - Bethany's Pie Shop"},

    //pie pages
    {path: 'cheesecakes', component: CheesecakesComponent, title: "Cheesecakes - Bethany's Pie Shop"},
    {path: 'fruitpies', component: FruitpiesComponent, title: "Fruit Pies - Bethany's Pie Shop"},
    {path: 'seasonalpies', component: SeasonalpiesComponent, title: "Seasonal Pies - Bethany's Pie Shop"},
    {path: 'allpies', component: AllpiesComponent, title: "All Pies - Bethany's Pie Shop"},

    //products
    {path: 'apple-pie', component: ApplePieComponent, title: "Apple pie - Bethany's Pie Shop"},
    {path: 'blueberry-cheesecake', component: BlueberryCheesecakeComponent, title: "Blueberry Cheesecake - Bethany's Pie Shop"},
    {path: 'cheesecake', component: CheesecakeComponent, title: "Cheesecake - Bethany's Pie Shop"},
    {path: 'cherry-pie', component: CherryPieComponent, title: "Cherry pie - Bethany's Pie Shop"},
    {path: 'christmas-apple-pie', component: ChristmasApplePieComponent, title: "Christmas Apple pie - Bethany's Pie Shop"},
    {path: 'cranberry-pie', component: CranberryPieComponent, title: "Cranberry pie - Bethany's Pie Shop"},
    {path: 'peach-pie', component: PeachPieComponent, title: "Peach pie - Bethany's Pie Shop"},
    {path: 'pumpkin-pie', component: PumpkinPieComponent, title: "Pumpkin pie - Bethany's Pie Shop"},
    {path: 'rhubarb-pie', component: RhurbarbPieComponent, title: "Pumpkin pie - Bethany's Pie Shop"},
    {path: 'strawberry-cheesecake', component: StrawberryCheesecakeComponent, title: "Strawberry Cheesecake - Bethany's Pie Shop"},
    {path: 'strawberry-pie', component: StrawberryPieComponent, title: "Strawberry pie - Bethany's Pie Shop"},

    //product-detail page
    {path: 'product/:id', component: ProductDetailsComponent, title: "Bethany's Pie Shop"},

    //pathing
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
