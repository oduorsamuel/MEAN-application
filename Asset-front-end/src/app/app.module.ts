import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import {RouterModule, Routes} from '@angular/router';
import{MatToolbarModule, MatFormFieldModule, MatInputModule,MatDialogModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatTooltipModule, MatMenuModule,MatSidenavModule, MatListModule} from '@angular/material';
import { AssetService } from './asset.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import { MyFormComponent } from './angular-material/my-form/my-form.component';
import { DialogComponent } from './angular-material/dialog/dialog.component';
import { MyDialogComponentComponent } from './angular-material/my-dialog-component/my-dialog-component.component';
import { TooltipComponent } from './angular-material/tooltip/tooltip.component';
import { SnackbarComponent } from './angular-material/snackbar/snackbar.component';
import { GraphComponent } from './chart/graph/graph.component';
import { from } from 'rxjs';
import { MenuComponent } from './angular-material/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';


const routes: Routes=[
  {path:'create', component:CreateComponent},
  {path:'form', component: MyFormComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'list', component: ListComponent},
  {path:'dialog', component:DialogComponent},
  {path:'tooltip', component: TooltipComponent},
  {path:'snackbar',component:SnackbarComponent},
  {path:'graph',component:GraphComponent},
  {path:'menu', component:MenuComponent},
  {path:'', redirectTo:'list', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    MyFormComponent,
    DialogComponent,
    MyDialogComponentComponent,
    TooltipComponent,
    SnackbarComponent,
    GraphComponent,
    MenuComponent
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule
    
    
    
  
    
  ],
  entryComponents:[
    MyDialogComponentComponent
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
